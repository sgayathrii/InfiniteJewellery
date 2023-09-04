import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Typography } from '@mui/material';

import { ShippingPageProps } from '../../types/types';

export default function CurrentOrder({ cartList }: ShippingPageProps) {

  const calculateTotalPrice = cartList.reduce<number>(
    (accumulator, current) => {
      const productTotal = current.price * current.quantity;
      return accumulator + productTotal;
    },
    0
  );

  return  (
    <div>
      <h2>Order Details</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell>Image</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartList.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.title}</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell>
                  <Avatar alt={item.title} src={item.images[0]} />
                </TableCell>
                <TableCell align="right">${item.price}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={3} align="right">
                <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                  Total
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                  ${calculateTotalPrice}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}







