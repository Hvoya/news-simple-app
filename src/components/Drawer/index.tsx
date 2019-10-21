import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CollectionsIcon from '@material-ui/icons/Collections';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';
import MaterialDrawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import {ClassNameMap} from '@material-ui/core/styles/withStyles';
import Divider from '@material-ui/core/Divider';

interface IDrawerProps {
  classes: ClassNameMap
}

const Drawer: React.FC<IDrawerProps> = (props) => {
  const { classes } = props;

  const drawerContent = (
    <div>
      <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem button key={'news'}>
            <ListItemIcon><CollectionsIcon /></ListItemIcon>
            <ListItemText primary='Главная' />
          </ListItem>
          <ListItem button key={'settings'}>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary='Настройки' />
          </ListItem>
          <ListItem button key={'help'}>
            <ListItemIcon><HelpIcon /></ListItemIcon>
            <ListItemText primary='Помощь' />
          </ListItem>
          <ListItem button key={'about'}>
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <ListItemText primary='О нас' />
          </ListItem>
        </List>
        <Divider />
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <MaterialDrawer
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
      <Hidden xsDown implementation="css">
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
