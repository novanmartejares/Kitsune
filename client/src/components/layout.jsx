import React, { useState, useEffect } from "react";
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Switch,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  HomeRounded,
  AccessTimeRounded,
  PlayArrowRounded,
} from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";

const drawerWidth = 240;

const useStyle = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    drawerPaper: {
      width: drawerWidth,
    },
    page: {
      width: "100%",
      padding: 10,
    },
    drawer: {
      width: drawerWidth,
    },
    active: {
      background: "rgba(255, 255, 255, 0.16)",
    },
    title: {
      padding: 15,
      letterSpacing: "0.1rem",
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    time: {
      flexGrow: 1,
    },
  };
});

function Layout({ onChange, children }) {
  const classes = useStyle();
  const history = useHistory();
  const location = useLocation();
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [switched, setSwitched] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  const menuItems = [
    {
      text: "HomePage",
      icon: <HomeRounded />,
      path: "/",
    },
    {
      text: "Recent Anime",
      icon: <PlayArrowRounded />,
      path: "/recent",
    },
    {
      text: "Schedule",
      icon: <AccessTimeRounded />,
      path: "/schedule",
    },
  ];

  const handleSwitch = (event) => {
    onChange(event.target.checked);
    setSwitched(event.target.checked);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} color="seconday" elevation={0}>
        <Toolbar>
          <Typography className={classes.time}>{time}</Typography>
          <Switch checked={switched} onChange={handleSwitch} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        anchor="left"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            ANIMEWORLDZ
          </Typography>
        </div>

        <List>
          {menuItems.map((menu, i) => (
            <ListItem
              key={i}
              button
              onClick={() => history.push(menu.path)}
              className={location.pathname == menu.path ? classes.active : null}
            >
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
