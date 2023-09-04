import React from 'react';
import { List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NavBarMenu() {
  

  return (
    <List style={{ display: 'flex', justifyContent: 'center' }}>
      <ListItem component={Link} to="/new" className="navbar-menu-item"> <span className="icon-text">New</span>
      </ListItem>
      <ListItem component={Link} to="/products" className="navbar-menu-item"> <span className="icon-text">Shop</span>
      </ListItem>
      <ListItem component={Link} to="/about" className="navbar-menu-item"> <span className="icon-text">About</span>
      </ListItem>
      <ListItem component={Link} to="/sale" className="navbar-menu-item"> <span className="icon-text">Sale</span>
      </ListItem>
    </List>
  );
}