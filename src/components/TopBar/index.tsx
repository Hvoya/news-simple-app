import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import {ClassNameMap} from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { IHeader } from '../../store/types';

interface ITopBarProps {
  classes: ClassNameMap;
  header: IHeader;
}

const TopBar: React.FC<ITopBarProps> = (props) => {
  const { classes, header } = props;
  return (
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          {/*Меняем на div. Зачем нам h1?*/}
          <Typography variant="h5" component="div" noWrap>
            {header.title}
          </Typography>
        </Toolbar>
      </AppBar>
  );
};

export default TopBar;
