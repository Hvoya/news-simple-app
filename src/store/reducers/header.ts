import actionTypes from '../action_types';
import { ISetHeaderAction } from '../actions/header';
import { IHeader } from '../types';

const initialState: IHeader = {
  title: '',
};

const header = (state = initialState, action: ISetHeaderAction): IHeader => {
  switch (action.type) {
    case actionTypes.SET_HEADING: {
      return {
        ...state,
        title: action.header.title,
      };
    }
    default:
      return state;
  }
};

export default header;
