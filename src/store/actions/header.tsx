import actionTypes from '../action_types';
import { IHeader } from '../types';

export interface ISetHeaderAction {
  type: actionTypes.SET_HEADING;
  header: IHeader;
}

export const setHeader = (header: IHeader): ISetHeaderAction => {
  return {
    header,
    type: actionTypes.SET_HEADING,
  };
};
