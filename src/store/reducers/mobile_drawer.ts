import actionTypes from '../action_types';
import { TChangeMobileDrawerAction } from '../actions/mobile_drawer';

const initialState: boolean = false;

const mobile_drawer = (state = initialState, action: TChangeMobileDrawerAction): boolean => {
  switch (action.type) {
    case actionTypes.TOGGLE_MOBILE_DRAWER: {
      return !state;
    }
    case actionTypes.CLOSE_MOBILE_DRAWER: {
      return false;
    }
    default:
      return state;
  }
};

export default mobile_drawer;
