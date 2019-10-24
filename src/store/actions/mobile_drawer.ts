import actionTypes from '../action_types';

export interface IToggleMobileDrawerAction {
  type: actionTypes.TOGGLE_MOBILE_DRAWER;
}

export const toggleMobileDrawer = (): IToggleMobileDrawerAction => {
  return {
    type: actionTypes.TOGGLE_MOBILE_DRAWER,
  };
};
