import Pagination from 'material-ui-flat-pagination';
import React, { Component } from 'react';
import FiltersPanel, { ESortBy, IFilters } from '../../../../components/FiltersPanel';
import NewsCard from '../../../../components/NewsCard';
import { INews } from '../../../../store/types';
import { fetchNews, INewsResponse } from '../../dal';

interface IPaginationNewsListProps {
  pageSize: number;
  news_lang: string;
  sources: string[];
  generateLoadingBlocks: () => React.ReactNode;
}

interface IPaginationNewsListState {
  newsResponse: INewsResponse;
  offset: number;
  page: number;
  filters: IFilters;
  loading: boolean;
}

class PaginationNewsList extends Component<IPaginationNewsListProps, IPaginationNewsListState> {
  constructor(props: IPaginationNewsListProps) {
    super(props);
    this.handlePaginationChange = this.handlePaginationChange.bind(this);
    this.state = {
      loading: false,
      offset: 0,
      page: 1,
      newsResponse: {
        articles: [],
        totalResults: 0,
      },
      filters: {
        q: '',
        from: null,
        to: null,
        sortBy: ESortBy.publishedAt,
      },
    };
  }

  componentDidMount(): void {
    this.getNews();
  }

  render() {
    const { pageSize, generateLoadingBlocks } = this.props;
    const {
      offset,
      loading,
      newsResponse: { totalResults, articles },
    } = this.state;

    const newsCards = articles.map((article: INews) => <NewsCard key={article.title} news={article} />);

    return (
      <div>
        {
          <div>
            <FiltersPanel onChange={this.handleFiltersChange} />
            {loading ? generateLoadingBlocks() : newsCards}
            <Pagination onClick={this.handlePaginationChange} offset={offset} limit={pageSize} total={totalResults!} />
          </div>
        }
      </div>
    );
  }

  private handleFiltersChange = (filters: IFilters) => {
    this.setState({ filters }, this.getNews);
  };

  private handlePaginationChange(_e: any, offset: number, page: number) {
    this.setState(
      {
        offset,
        page,
      },
      this.getNews,
    );
  }

  private getNews() {
    const { pageSize, news_lang, sources } = this.props;
    const { page, filters } = this.state;
    this.setState({ loading: true });
    fetchNews({ pageSize, news_lang, page, sources, ...filters }).then(({ data: { articles, totalResults } }) => {
      this.setState({
        loading: false,
        newsResponse: {
          articles,
          totalResults,
        },
      });
    });
  }
}

export default PaginationNewsList;
