import actionTypes from '../action_types';

interface IToggleMobileDrawerAction {
  type: actionTypes.TOGGLE_MOBILE_DRAWER;
}

export const toggleMobileDrawer = (): IToggleMobileDrawerAction => {
  return {
    type: actionTypes.TOGGLE_MOBILE_DRAWER,
  };
};

interface ICloseMobileDrawerAction {
  type: actionTypes.CLOSE_MOBILE_DRAWER;
}

export const closeMobileDrawer = (): ICloseMobileDrawerAction => {
  return {
    type: actionTypes.CLOSE_MOBILE_DRAWER,
  };
};

export type TChangeMobileDrawerAction = IToggleMobileDrawerAction | ICloseMobileDrawerAction;
