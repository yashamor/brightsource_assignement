import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import InfoPage from "../InfoPage";
const drawerWidth = 240;

const MainComponent = props => {
  const {
    classes,
    menuItems,
    resourceInfo,
    resourceActions,
    activeMenuItem,
    onMenuItemClick
  } = props;

  console.log(resourceInfo);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            My App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <List>
          {menuItems.map(item => (
            <ListItem
              button
              key={item.id}
              selected={item.id === activeMenuItem}
              onClick={() => onMenuItemClick(item.id)}
            >
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.content}>
        <div className={classes.toolbar} />
        <InfoPage
          resourceInfo={resourceInfo}
          resourceActions={resourceActions}
        />
      </div>
    </div>
  );
};

MainComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  menuItems: PropTypes.array.isRequired,
  resourceInfo: PropTypes.object.isRequired,
  resourceActions: PropTypes.array.isRequired,
  activeMenuItem: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
});

export default withStyles(styles)(MainComponent);
