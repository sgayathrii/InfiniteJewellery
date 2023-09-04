import React, { useEffect, useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { BASE_URL } from "../../api";
import { AppDispatch, RootState } from "../../types/types";
import { userActions } from "../../redux/slices/user";

export default function UserProfile() {
  const [editing, setEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    country: "",
    phone: "",
  });

  const dispatch = useDispatch<AppDispatch>();

  const userDetail = useSelector(
    (state: RootState) => state.users.userInformation
  );

  useEffect(() => {
    if (userDetail) {
      setUserInfo(userDetail);
    }
  }, [userDetail]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    const token = localStorage.getItem("userToken");
    const url = `${BASE_URL}/users/${userDetail?._id}`;
    axios
      .put(url, userInfo, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        dispatch(userActions.setUserData(response.data));
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("pls log in to change your information");
          return;
        }
      });
    setEditing(false);
  };

  return (
    <div style={{ marginLeft: "300px", marginRight: "300px" }}>
      <Typography variant="h6" gutterBottom>
        Hi {userDetail?.firstName}!
      </Typography>
      <h2>User Profile</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={userInfo.firstName}
            onChange={handleInputChange}
            disabled={!editing}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={userInfo.lastName}
            onChange={handleInputChange}
            disabled={!editing}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Date of Birth"
            type="date"
            name="dateOfBirth"
            value={userInfo.dateOfBirth}
            onChange={handleInputChange}
            disabled={!editing}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            type="tel"
            value={userInfo.phone}
            onChange={handleInputChange}
            disabled={!editing}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Address"
            name="address"
            value={userInfo.address}
            onChange={handleInputChange}
            disabled={!editing}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Apartment & Suite"
            name="apartment"
            value={userInfo.apartment}
            onChange={handleInputChange}
            disabled={!editing}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="City"
            name="city"
            value={userInfo.city}
            onChange={handleInputChange}
            disabled={!editing}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="State"
            name="state"
            value={userInfo.state}
            onChange={handleInputChange}
            disabled={!editing}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Country"
            name="country"
            value={userInfo.country}
            onChange={handleInputChange}
            disabled={!editing}
          />
        </Grid>
        <Grid item xs={12} />
      </Grid>
      {editing ? (
        <Button variant="outlined" color="primary" onClick={handleSaveClick}>
          Save
        </Button>
      ) : (
        <Button variant="outlined" onClick={handleEditClick}>
          Edit
        </Button>
      )}
    </div>
  );
}
