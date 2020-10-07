import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import DescriptionIcon from '@material-ui/icons/Description';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Link } from "react-router-dom";


export const mainListItems = (
  <div>
    <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <Link to="/dashboard">
          <ListItemText style={{color: "rgba(0, 0, 0, 0.87)"}} primary="Dashboard" />
        </Link>
    </ListItem>
    <Link to="/dashboard/articles">
    <ListItem button>
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>
          <ListItemText style={{color: "rgba(0, 0, 0, 0.87)"}} primary="Articles" />
    </ListItem>
    </Link>
    <Link to="/dashboard/customers">
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
        <ListItemText style={{color: "rgba(0, 0, 0, 0.87)"}} primary="Customers" />
    </ListItem>
    </Link>
    <Link to="/dashboard/reports">
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
        <ListItemText style={{color: "rgba(0, 0, 0, 0.87)"}} primary="Reports" />
    </ListItem>
    </Link>
    <Link to="/dashboard/integrations">
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
        <ListItemText style={{color: "rgba(0, 0, 0, 0.87)"}} primary="Integrations" />
    </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <PowerSettingsNewIcon color="danger" />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </div>
);