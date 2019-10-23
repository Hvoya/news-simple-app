import Pagination from 'material-ui-flat-pagination';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core';
import NewsCard from '../../../components/NewsCard';
import { setHeader } from '../../../store/actions/header';
import { IHeader, INews, IStore } from '../../../store/types';
import { fetchNews, INewsResponse } from '../dal';
import styles from './styles';

import { NewsCardSkeleton } from '../../../components/NewsCard/NewsCardSkeleton';

interface INewsMainPageProps {
  setHeader: ( header: IHeader ) => void;
  pageSize: number;
  classes: any;
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
      page: 0,
      loading: false,
      newsResponse: {
        articles: [],
        totalResults: 0,
      },
    };
  }

  public componentDidMount() {
    const { setHeader: changeHeader } = this.props;
    changeHeader({ title: 'Новости'});
    this.getNews();
  }

  public render() {
    const { pageSize, classes } = this.props;
    const { newsResponse: { articles, totalResults }, offset, loading } = this.state;
    const newsCards = articles.map((article: INews) => <NewsCard  {...article}/>);
    return loading ?
      <div>
        <NewsCardSkeleton/>
        <NewsCardSkeleton/>
        <NewsCardSkeleton/>
        <NewsCardSkeleton/>
      </div>
      : <div className={classes.container}>
        {newsCards}
        <Pagination
          onClick={this.handlePaginationChange.bind(this)}
          offset={offset}
          limit={pageSize}
          total={totalResults}/>
      </div>;
  }

  private getNews() {
    const { pageSize } = this.props;
    const { page } = this.state;
    this.setState({ loading: true });
    fetchNews(pageSize, page).then((response) => {
      this.setState({
        loading: false,
        newsResponse: response.data,
      });
    });
  }

  private handlePaginationChange(e: any, offset: number, page: number) {
    this.setState({
      offset,
      page,
    }, this.getNews);
  }
}

const connectedToRedux = connect(
  (store: IStore) => ({ pageSize: store.settings.news_per_page }),
  { setHeader },
)(NewsMainPage);

export default withStyles(styles)(connectedToRedux);
