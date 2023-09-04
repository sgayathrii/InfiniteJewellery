import React from 'react';
import { Button, List, ListItem, ListItemText, Typography, SwipeableDrawer } from "@mui/material";
import { Link } from 'react-router-dom';
import { AccountDrawerProps } from '../types/types';

export default function User({ open, onClose}:AccountDrawerProps) {

  const handleCloseDrawer = () => {
    onClose(); 
  };

  return (
    <SwipeableDrawer
      anchor="top"
      open={open}
      onClose={handleCloseDrawer}
      onOpen={() => {}}     
      PaperProps={{
        style: {
          width: '210px', 
          position: 'absolute',
          top: "60px",
          left: "1150px"
        },
      }}
    >
     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <List>
          <ListItem>
            <ListItemText>
              <Typography variant="h6" style={{ fontSize: "15px" }}>MY ACCOUNT</Typography>
              <Typography variant="subtitle1" style={{ fontSize: "10px" }}>Login to access your account</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <Link to="/login" style={{ textDecoration: 'none' }}>
             <Button onClick={handleCloseDrawer}>Login</Button>
            </Link>
            <Link to="/register" style={{ textDecoration: 'none' }}>
             <Button onClick={handleCloseDrawer}>Signup</Button>
            </Link>
          </ListItem>
        </List>
      </div>
    </SwipeableDrawer>
  );
}