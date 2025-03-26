import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const drawerContent = (
    <Box sx={{ width: 250 }} onClick={toggleDrawer(false)}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>

        
          <>
            <ListItem button component={Link} to="/invite">
              <ListItemText primary="Invite Others" />
            </ListItem>
            <ListItem button component={Link} to="/admin">
              <ListItemText primary="Admin" />
            </ListItem>
          </>
         

        <ListItem button component={Link} to="/login">
          <ListItemText primary="Login" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        {isMobile && (
          <>
            <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
              {drawerContent}
            </Drawer>
          </>
        )}

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Progressive Kerala
        </Typography>

        {!isMobile && (
          <>
            <Button color="inherit" component={Link} to="/">Home</Button>
         
              <>
                <Button color="inherit" component={Link} to="/admin">Admin</Button>
                <Button color="inherit" component={Link} to="/invite">Invite Others</Button>
              </>
            
            <Button color="inherit" component={Link} to="/login">Login</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
