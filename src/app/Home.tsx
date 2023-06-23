import * as React from 'react';

import './Home.css';
import {CSSObject, styled, Theme, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import {HomePage} from "./page/HomePage";
import TuneIcon from '@mui/icons-material/Tune';
import PreviewIcon from '@mui/icons-material/Preview';
import NetworkPingIcon from '@mui/icons-material/NetworkPing';
import {NavLink, Route, Routes} from "react-router-dom";
import {SettingPage} from "./page/SettingPage";
import {RouterName} from "./Enum/RouterEnum";
import {PathName} from "./Enum/PathEnum";
import {WebPage} from "./page/WebPage";
import {ApiPage} from "./page/ApiPage";
import {ConfigPage} from "./page/ConfigPage";
import Alerts from "./common/AlertCM";
const drawerWidth = 240;
const customTheme = {
  backgroundColor: '#181818',
  height: '100vh',
  color: '#F5F5F5',
}

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
  ({theme, open}) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const renderRouter = (name: string, open: any) => {
  switch (name) {
    case RouterName.HOME_PAGE:
      return generateNav(name, PathName.HOME_PAGE, open);
    case RouterName.SUPPORT_WEB:
      return generateNav(name, PathName.SUPPORT_WEB, open);
    case RouterName.SUPPORT_API:
      return generateNav(name, PathName.SUPPORT_API, open);
    case RouterName.CONFIG:
      return generateNav(name, PathName.CONFIG, open);
    case RouterName.SETTING:
      return generateNav(name, PathName.SETTING, open);
  }
}

const getNavIcon = (name: string) => {
  switch (name) {
    case RouterName.HOME_PAGE:
      return <HomeIcon/>;
    case RouterName.SUPPORT_WEB:
      return <PreviewIcon/>;
    case RouterName.SUPPORT_API:
      return <NetworkPingIcon/>;
    case RouterName.CONFIG:
      return <TuneIcon/>;
    case RouterName.SETTING:
      return <SettingsIcon/>;
  }
}
const generateNav = (text: string, path: string, open: any) => {
  return (
    <NavLink to={path}>
      <ListItem key={text} disablePadding sx={{display: 'block'}}>

        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            {getNavIcon(text)}
          </ListItemIcon>
          <ListItemText primary={text} sx={{opacity: open ? 1 : 0}}/>
        </ListItemButton>

      </ListItem>
    </NavLink>
  );
}

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <CssBaseline/>
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{backgroundColor: 'black'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && {display: 'none'}),
            }}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <NavLink to={PathName.HOME_PAGE}>DARK BOARD</NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
          </IconButton>
          <Alerts></Alerts>
        </DrawerHeader>
        <Divider/>
        <List>
          {[RouterName.HOME_PAGE, RouterName.SUPPORT_WEB, RouterName.SUPPORT_API, RouterName.CONFIG].map((text, index) => (
            renderRouter(text, open)
          ))}
        </List>
        <Divider/>
        <List>
          {[RouterName.SETTING].map((text, index) => (
            renderRouter(text, open)
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{flexGrow: 1, p: 3}}>
        <DrawerHeader/>
        <div className={"App-body"}>
          {/* SETTING ROUTER*/}
          <Routes>
            <Route path="/" element={<HomePage curentCaseNum={1} prefixCase={'No '} />}/>
            <Route path="/web" element={<WebPage/>}/>
            <Route path="/api" element={<ApiPage/>}/>
            <Route path="/config" element={<ConfigPage/>}/>
            <Route path="/setting" element={<SettingPage/>}/>
          </Routes>
        </div>
      </Box>
      <Box component="footer" sx={{backgroundColor: '#181818', color: 'white', height: 50}}>
        <div><h5>Footer</h5></div>
      </Box>
    </Box>
  );
}
