import Divider from '@material-ui/core/Divider';
import MaterialDrawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import CollectionsIcon from '@material-ui/icons/Collections';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';
import SettingsIcon from '@material-ui/icons/Settings';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMobileDrawer } from '../../store/actions/mobile_drawer';
import { IState } from '../../store/types';
import NavLink from '../NavLink';

interface IDrawerProps {
  classes: ClassNameMap;
}

const Drawer: React.FC<IDrawerProps> = props => {
  const { classes } = props;
  const dispatch = useDispatch();
  const isMobileDrawerOpen = useSelector((state: IState) => state.isMobileDrawerOpen);
  const handleMobileDrawerCancel = () => dispatch(toggleMobileDrawer());

  const drawerContent = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <NavLink to="/news" primary="Новости" icon={<CollectionsIcon />} />
        <NavLink to="/settings" primary="Настройки" icon={<SettingsIcon />} />
        <NavLink to="/help" primary="Помощь" icon={<HelpIcon />} />
        <NavLink to="/about" primary="О нас" icon={<InfoIcon />} />
      </List>
      <Divider />
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden lgUp implementation="css">
        <MaterialDrawer
          onClose={handleMobileDrawerCancel}
          open={isMobileDrawerOpen}
          variant="temporary"
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawerContent}
        </MaterialDrawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <MaterialDrawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawerContent}
        </MaterialDrawer>
      </Hidden>
    </nav>
  );
};

export default Drawer;
