import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContentWrapper from '../../../components/ContentWrapper';
import { IFilters } from '../../../components/FiltersPanel';
import { NewsCardSkeleton } from '../../../components/NewsCard/NewsCardSkeleton';
import { setHeader } from '../../../store/actions/header';
import { IHeader, IState } from '../../../store/types';
import EndlessNewsList from '../components/EndlessNewsList';
import PaginationNewsList from '../components/PaginationNewsList';
import { INewsResponse } from '../dal';
import styles from './styles';

interface INewsMainPageProps {
  setHeader: (header: IHeader) => void;
  pageSize: number;
  classes: any;
  news_lang: string;
  sources: string[];
  is_endless_news_list: boolean;
}

interface INewsMainPageState {
  newsResponse: INewsResponse;
  offset: number;
  page: number;
  filters: IFilters;
}

class NewsMainPage extends Component<INewsMainPageProps, INewsMainPageState> {
  public componentDidMount(): void {
    const { setHeader: changeHeader } = this.props;
    changeHeader({ title: 'Новости' });
  }

  public render() {
    const { pageSize, news_lang, sources, is_endless_news_list, classes } = this.props;

    return (
      <ContentWrapper className={classes.container}>
        {is_endless_news_list ? (
          <EndlessNewsList
            generateLoadingBlocks={() => this.generateLoadingBlocks(pageSize)}
            pageSize={pageSize}
            news_lang={news_lang}
            sources={sources}
          />
        ) : (
          <PaginationNewsList
            generateLoadingBlocks={() => this.generateLoadingBlocks(pageSize)}
            pageSize={pageSize}
            news_lang={news_lang}
            sources={sources}
          />
        )}
      </ContentWrapper>
    );
  }

  private generateLoadingBlocks = (amount: number): React.ReactNode[] => {
    const blocks = [];
    for (let i = 0; i < amount; i++) {
      blocks.push(<NewsCardSkeleton key={i} />);
    }
    return blocks;
  };
}

const connectedToRedux = connect(
  ({ settings: { news_per_page, news_lang, sources, is_endless_news_list } }: IState) => ({
    pageSize: news_per_page,
    news_lang,
    sources,
    is_endless_news_list,
  }),
  { setHeader },
)(NewsMainPage);

export default withStyles(styles)(connectedToRedux);
