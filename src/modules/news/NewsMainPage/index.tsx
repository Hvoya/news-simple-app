import Pagination from 'material-ui-flat-pagination';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core';
import NewsCard from '../../../components/NewsCard';
import { setHeader } from '../../../store/actions/header';
import { IHeader, INews, IState } from '../../../store/types';
import { fetchNews, INewsResponse } from '../dal';
import styles from './styles';

import { NewsCardSkeleton } from '../../../components/NewsCard/NewsCardSkeleton/newsCardSkeleton';

interface INewsMainPageProps {
  setHeader: (header: IHeader) => void;
  pageSize: number;
  classes: any;
  news_lang: string;
}

interface INewsMainPageState {
  newsResponse: INewsResponse;
  offset: number;
  page: number;
  loading: boolean;
}

class NewsMainPage extends Component<INewsMainPageProps, INewsMainPageState> {
  constructor(props: INewsMainPageProps) {
    super(props);
    this.state = {
      offset: 0,
      page: 1,
      loading: false,
      newsResponse: {
        articles: [],
        totalResults: 0,
      },
    };
  }

  public componentDidMount() {
    const { setHeader: changeHeader } = this.props;
    changeHeader({ title: 'Новости' });
    this.getNews();
  }

  public render() {
    const { pageSize, classes } = this.props;
    const {
      newsResponse: { articles, totalResults },
      offset,
      loading,
    } = this.state;
    const newsCards = articles.map((article: INews) => <NewsCard key={article.title} news={article} />);

    return loading ? (
      <div>{this.generateLoadingBlocks(pageSize)}</div>
    ) : (
      <div className={classes.container}>
        {newsCards}
        <Pagination
          onClick={this.handlePaginationChange.bind(this)}
          offset={offset}
          limit={pageSize}
          total={totalResults}
        />
      </div>
    );
  }

  private getNews() {
    const { pageSize, news_lang } = this.props;
    const { page } = this.state;
    this.setState({ loading: true });
    fetchNews(pageSize, page, news_lang).then(response => {
      this.setState({
        loading: false,
        newsResponse: response.data,
      });
    });
  }

  private handlePaginationChange(_e: any, offset: number, page: number) {
    this.setState(
      {
        offset,
        page,
      },
      this.getNews,
    );
  }

  private generateLoadingBlocks = (amount: number): React.ReactNode[] => {
    const blocks = [];
    for (let i = 0; i < amount; i++) {
      blocks.push(<NewsCardSkeleton />);
    }
    return blocks;
  };
}

const connectedToRedux = connect(
  (store: IState) => ({
    pageSize: store.settings.news_per_page,
    news_lang: store.settings.news_lang,
  }),
  { setHeader },
)(NewsMainPage);

export default withStyles(styles)(connectedToRedux);
