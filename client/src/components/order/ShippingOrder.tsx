import React from 'react';
import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

export default function ShippingOrder() {
  const location = useLocation();
  const { userInfo } = location.state;

  return (
    <div>
      <Typography variant="h5">Thank you for shopping with us</Typography>

      <Typography variant="h6" style={{ marginTop: '20px' }}>Shipping Address:</Typography>
      <Typography>{userInfo.firstName} {userInfo.lastName}</Typography>
      <Typography>{userInfo.address}</Typography>
      <Typography>{userInfo.apartment}</Typography>
      <Typography>{userInfo.city}, {userInfo.state}</Typography>
      <Typography>{userInfo.country}</Typography>
      <Typography>{userInfo.phone}</Typography>

      <Typography variant="body1" style={{ marginTop: '20px' }}>
        Your order will be delivered in 3-5 business days.
      </Typography>
    </div>
  );
}