import actionTypes from '../action_types';
import { IToggleMobileDrawerAction } from '../actions/mobile_drawer';

const initialState: boolean = false;

const mobile_drawer = (state = initialState, action: IToggleMobileDrawerAction): boolean => {
  switch (action.type) {
    case actionTypes.TOGGLE_MOBILE_DRAWER: {
      return !state;
    }
    default:
      return state;
  }
};

export default mobile_drawer;
