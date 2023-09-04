import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import NavBarLogo from "./NavBarLogo";
import NavBarMenu from "./NavBarMenu";
import NavBarRight from "./NavBarRight";
import { AppDispatch, RootState } from "../../types/types";
import { userActions } from "../../redux/slices/user";

const RootAppBar = styled(AppBar)(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: "white",
  color: "black",
}));

const ToolbarContainer = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const RightIcons = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& > *": {
    marginLeft: theme.spacing(1),
  },
}));

const LogoutButton = styled("button")(({ theme }) => ({
  marginTop: theme.spacing(1),
  fontSize: "12px", 
  padding: theme.spacing(0.5, 1), 
  borderRadius: "10px",
  color:"blue"  
}));


export default function NavBar() {
  const cartItems = 1; 
  const userInformation = useSelector((state: RootState) => state.users.userInformation);
  const isLoggedIn = !!userInformation?.firstName; 

const navigate = useNavigate();
const dispatch = useDispatch<AppDispatch>();

const handleLogout = () => {
  localStorage.removeItem("userToken");
  dispatch(userActions.clearUserData()); 
  navigate("/login");
};

  return (
    <RootAppBar position="static">
    <ToolbarContainer>
      <NavBarLogo />
      <NavBarMenu />
      <RightIcons>
          {isLoggedIn && (
            <div>
              <Typography variant="body1">Welcome {userInformation?.firstName}</Typography>
              <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            </div>
          )}
          <NavBarRight cartItems={cartItems} isLoggedIn={isLoggedIn} />
        </RightIcons>
    </ToolbarContainer>
  </RootAppBar>
  );
}