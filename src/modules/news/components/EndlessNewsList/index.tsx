import React, { Component } from 'react';
import FiltersPanel, { ESortBy, IFilters } from '../../../../components/FiltersPanel';
import NewsCard from '../../../../components/NewsCard';
import { INews } from '../../../../store/types';
import { fetchNews, INewsResponse } from '../../dal';

interface IEndlessNewsListProps {
  pageSize: number;
  news_lang: string;
  sources: string[];
  generateLoadingBlocks: () => React.ReactNode;
}

interface IEndlessNewsListState {
  newsResponse: INewsResponse;
  page: number;
  filters: IFilters;
  loading: boolean;
}

class EndlessNewsList extends Component<IEndlessNewsListProps, IEndlessNewsListState> {
  constructor(props: IEndlessNewsListProps) {
    super(props);
    this.state = {
      loading: false,
      page: 1,
      newsResponse: {
        articles: [],
      },
      filters: {
        q: '',
        from: null,
        to: null,
        sortBy: ESortBy.publishedAt,
      },
    };
  }

  public componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.getNews();
  }

  render() {
    const { generateLoadingBlocks } = this.props;
    const {
      newsResponse: { articles },
      loading,
    } = this.state;
    const newsCards = articles.map((article: INews) => <NewsCard key={article.title} news={article} />);
    return (
      <div>
        <FiltersPanel onChange={this.handleFiltersChange} />
        {newsCards}
        {loading && generateLoadingBlocks()}
      </div>
    );
  }

  private getNews() {
    const { pageSize, news_lang, sources } = this.props;
    const { page, filters } = this.state;
    this.setState({ loading: true });
    fetchNews({ pageSize, news_lang, page, sources, ...filters }).then(({ data: { articles } }) => {
      this.setState((prevState: IEndlessNewsListState) => {
        const newArticles = [...prevState.newsResponse.articles, ...articles];
        return {
          loading: false,
          page: prevState.page + 1,
          newsResponse: {
            articles: newArticles,
          },
        };
      });
    });
  }

  private handleFiltersChange = (filters: IFilters) => {
    this.setState({ filters }, this.getNews);
  };

  private handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
      return;
    }
    if (!this.state.loading) {
      this.getNews();
    }
  };
}

export default EndlessNewsList;
