import React from "react";
import { List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import companyLogo from "../../asserts/images/logo.png";

export default function NavBarLogo() {
  return (
    <div>
      <List>
        <ListItem component={Link} to="/" className="navbar-menu-item">
        <img src={companyLogo} alt="Logo" className="navbar-logo-img" style={{ width: "100px", height: "100px", borderRadius: "20px" }}/>
        </ListItem>
      </List>
    </div>
  );
}
