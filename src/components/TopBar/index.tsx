import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {ClassNameMap} from '@material-ui/core/styles/withStyles';

interface ITopBarProps {
  classes: ClassNameMap,
}

const TopBar: React.FC<ITopBarProps> = (props) => {
  const { classes } = props;
  return (
      <AppBar className={classes.appBar} position='fixed'>
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
          <Typography variant="h6" noWrap>
            heheheheehh h ha he rqwe rqew qe rqw erqw erq erq er qwe
          </Typography>
        </Toolbar>
      </AppBar>
  );
};

export default TopBar;
