import React, { useEffect, useState } from 'react';
import { TextField, Typography, Grid, Button} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../types/types';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import { BASE_URL } from "../../api";
import { userActions } from '../../redux/slices/user';
import { cartActions } from '../../redux/slices/carts';

export default function ShippingForm() {
  
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
  const navigate = useNavigate();

  const cartList = useSelector((state: RootState) => state.cart.cartList);
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

  function handleShippingOrder() {
    const token = localStorage.getItem("userToken");
    const url = `${BASE_URL}/orders/${userDetail?._id}`;
    
    axios
    .post(
      url,
      { productList: cartList },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      if (response.status === 201) {
        dispatch(cartActions.clearCart());
        navigate("/ship-order", { state: { userInfo: userDetail}});
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        alert("Please log in to make order");
        return;
      }
    });
  }

  return (
    <div>
      <Typography variant="h6" style={{ marginTop: '20px', marginBottom: '20px' }}>Shipping Address</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            label="First Name"
            defaultValue="First Name"
            name="fName"
            value={userInfo.firstName} 
            onChange={handleInputChange}
            disabled={!editing}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            label="Last Name"
            defaultValue="Last Name"
            name="lName"
            value={userInfo.lastName}
            onChange={handleInputChange}
            disabled={!editing}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            label="Address"
            name="address"
            value={userInfo.address}
            onChange={handleInputChange}
            disabled={!editing}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="apartment"
            label="Apartment"
            defaultValue="Apartment, suite, etc (optional)"
            name="apartment"
            value={userInfo.apartment}
            onChange={handleInputChange}
            disabled={!editing}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="city"
            label="City"
            defaultValue="City"
            name="city"
            value={userInfo.city}
            onChange={handleInputChange}
            disabled={!editing}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            label="State"
            defaultValue="State"
            name="state"
            value={userInfo.state}
            onChange={handleInputChange}
            disabled={!editing}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="phoneNumber"
            label="Phone Number"
            defaultValue="Phone"
            type="tel" 
            name="phone"
            value={userInfo.phone}
            onChange={handleInputChange}
            disabled={!editing}
            fullWidth
          />
        </Grid>       
      </Grid>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
        {editing ? (
          <div>
            <Button variant="outlined" color="primary" onClick={handleSaveClick}>
              Save
            </Button>
            <Button variant="outlined" onClick={() => setEditing(false)}>
              Cancel
            </Button>
          </div>
        ) : (
          <Button variant="outlined" onClick={handleEditClick}>
            Edit
          </Button>
        )}

        <Button variant="outlined" color="primary" onClick={handleShippingOrder}>
          Continue to Shipping
        </Button>
      </div>
    </div>
  );
}