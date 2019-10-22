import React, {Component} from 'react';
import {connect} from 'react-redux';

import { setHeader } from '../../../store/actions/header';
import { IHeader } from '../../../store/types';

interface INewsMainPageProps {
  setHeader: (header: IHeader) => void;
}

class NewsMainPage extends Component<INewsMainPageProps> {
  public componentDidMount(): void {
    const { setHeader: changeHeader } = this.props;
    changeHeader({
      title: 'Новости',
    });
  }

  public render() {
    return (
      <div>

      </div>
    );
  }
}

export default connect(
  null,
  (dispatch) => ({
    setHeader: (header: IHeader) => dispatch(setHeader(header)),
  }),
)(NewsMainPage);
