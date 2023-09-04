import React, { useState } from "react";
import { TextField, Button, Typography, Grid } from "@mui/material";
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { BASE_URL } from "../../api";

const RegistrationIcon = styled(AccessibilityNewOutlinedIcon)`
  margin-right: ${({ theme }) => theme.spacing(1)};
`;

export default function AccountRegistrationForm() {
  const [userInformation, setUserInformation] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function setUserFirstName(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInformation({ ...userInformation, firstName: event.target.value });
  }

  function setUserLastName(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInformation({ ...userInformation, lastName: event.target.value });
  }

  function setUserEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInformation({ ...userInformation, email: event.target.value });
  }

  function setUserPassword(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInformation({ ...userInformation, password: event.target.value });
  }

  const navigate = useNavigate();

  function onClickHandler() {
    const endpoint = `${BASE_URL}/users`;
    axios
      .post(endpoint, userInformation)
      .then((response) => {
        if (response.status === 201) {
          navigate("/login");
        }
      })
      .catch((error) => console.log(error));
    setUserInformation({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  }

  return (
    <div className="register">
      <Grid container justifyContent="center">
        <Grid item>
          <RegistrationIcon />
        </Grid>
      </Grid>
      <Typography component="h1" variant="h5" align="left">
        Register
      </Typography>
      <Typography variant="body1" align="center">
        Thanks for signing up! We're happy to have you.
      </Typography>
      <form>
        <TextField
          variant="outlined"
          margin="normal"
          id="firstName"
          label="First Name"
          name="fName"
          sx={{ paddingRight: "16px" }}
          onChange={setUserFirstName}
          value={userInformation.firstName}
        />
        <TextField
          variant="outlined"
          margin="normal"
          id="lastName"
          label="Last Name"
          name="lName"
          onChange={setUserLastName}
          value={userInformation.lastName}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Your email address"
          name="email"
          sx={{ width: "70%" }}
          onChange={setUserEmail}
          value={userInformation.email}
        />
        <br />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Create a password"
          type="password"
          id="password"
          sx={{ width: "70%" }}
          onChange={setUserPassword}
          value={userInformation.password}
        />
        <Button
          type="submit"
          sx={{ width: "40%" }}
          variant="contained"
          color="primary"
          onClick={onClickHandler}
        >
          CREATE ACCOUNT
        </Button>
      </form>
    </div>
  );
}
