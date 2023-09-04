import React, { useState } from "react";
import { TextField, Button, Typography, Grid } from "@mui/material";
import axios from "axios";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { BASE_URL } from "../../api";
import { userActions } from "../../redux/slices/user";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { AppDispatch, AuthFormProps } from "../../types/types";

const LoginIcon = styled(LockOutlinedIcon)`
  margin-right: ${({ theme }) => theme.spacing(1)};
`;

export default function AccountLoginForm() {
  const [isFormOpen, setFormOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");
  const [loginError, setLoginError] = useState("");
  const [showPasswordError, setShowPasswordError] = useState(false);

  const handleFormClose = () => {
    setFormOpen(false);
  };

  const handleLogin = (userName: string) => {
    setLoggedInUser(userName);
  };

  const [userInformation, setUserInformation] = useState({
    email: "",
    password: "",
  });

  function getUserEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInformation({ ...userInformation, email: event.target.value });
  }

  function getUserPassword(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInformation({ ...userInformation, password: event.target.value });
  }

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  function onClickHandler() {
    const endPoint = `${BASE_URL}/users/login`;      
    axios
      .post(endPoint, userInformation)
      .then((response) => {
        if (response.status === 200) {
          dispatch(userActions.setUserData(response.data.userData));
          const userToken = response.data.token;
          localStorage.setItem("userToken", userToken);
          navigate("/products");
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          setShowPasswordError(true);
          setLoginError("Invalid credentials. Username or Password not correct");
        } else if (error.response && error.response.status === 404) {
          setLoginError("User not found. Create an account.");
        } else {
          setLoginError("An error occurred. Please try again later.");
        }
      });
  }

  function handleCreateAccount() {
    navigate("/register");
  }

  return (
    <div className="login">
      <Grid container justifyContent="center">
        <Grid item>
          <LoginIcon />
        </Grid>
      </Grid>
      <Typography component="h1" variant="h5" align="left">
        Login
      </Typography>
      <Typography variant="body1" align="center">
        Welcome back! Log into your account below to continue.
      </Typography>

      <form>
        <TextField
          variant="outlined"
          margin="normal"
          required
          sx={{ width: "70%" }}
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={getUserEmail}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          sx={{ width: "70%" }}
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={getUserPassword}
        />
        <Button
          type="button"
          sx={{ width: "40%" }}
          variant="contained"
          color="primary"
          onClick={onClickHandler}
        >
          LOG IN
        </Button>
      </form>
      {showPasswordError && (
        <Typography variant="body1" color="error" align="center">
          {loginError}
        </Typography>
      )}
      <Typography variant="body2" align="center">
        Not a user?
        <span
          style={{ cursor: "pointer", color: "blue" }}
          onClick={handleCreateAccount}
        >
          Create one
        </span>
      </Typography>
    </div>
  );
}
