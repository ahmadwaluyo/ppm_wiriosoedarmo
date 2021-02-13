import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
// import axios from 'axios';
import { 
  CssBaseline,
  Drawer,
  Box,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Container,
  Grid,
  // Paper,
  Link,
  MenuItem
} from '@material-ui/core';
import { Menu, AccountCircle } from '@material-ui/icons';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Wysiwyg from './wysiwyg';
// import GridItem from 'components/Grid/GridItem';
// import { Row, Col, Form } from "react-bootstrap";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        wiriosoedarmogombong.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#f5f5f5',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    paddingRight: 8 
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    height: '100%'
  },
  fixedHeight: {
    height: 240,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    right: 50
  }
}));

export default function Dashboard(props) {
  const { history } = props;
  let isTrue = "none";
  let isFalse = "";
  let dataToken = JSON.parse(localStorage.getItem("token"));
  const { content } = dataToken;
  console.log(content, "<<<< data token")
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [openProfile, setOpenProfile] = useState(isTrue);
  const [auth] = useState(true);
  const [state] = useState({
    id: content.id,
    profileName : content.fullname,
    username: content.username,
    token: content.token
  })
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleMenu = () => {
    if(openProfile === isFalse) {
      setOpenProfile(isTrue);
    } else {
      setOpenProfile(isFalse);
    }
  };
  const handleClose = () => {
    setOpenProfile(isTrue);
  };
  const handleLogout = () => {
    localStorage.clear();
    history.push("/login-page")    
  }
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <Menu />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard Wiriosoedarmo
          </Typography>
              {auth && (
                <div>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                  >
                    <div className="d-flex align-items-center">
                      <Typography component="h3" variant="h6" color="inherit" noWrap className={classes.title}>
                      {state.profileName}
                      </Typography>
                      <AccountCircle />
                    </div>
                  </IconButton>
                  <div style={{
                    display: openProfile,
                    background: "#fff",
                    color: "#333",
                    position: "absolute",
                    top: 60,
                    right: 40
                  }}>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </div>
                </div>
              )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <List style={{ position: "absolute", bottom: 0, left: 0}}>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} style={{ flexDirection: "row", height: 500 }}>
              <h2>Article Post</h2>
                <Wysiwyg id={state.id} author={state.username} token={state.token} />
            </Grid>
          </Grid>
        </Container>
      </main>
      <Box className={classes.footer}>
        <Copyright />
      </Box>
    </div>
  );
}