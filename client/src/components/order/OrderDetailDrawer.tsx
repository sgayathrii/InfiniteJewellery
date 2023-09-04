import React from 'react';
import { Drawer, Typography, Table, TableBody, TableCell, TableRow } from '@mui/material';

import { OrderDetailProps } from '../../types/types';

export default function OrderDetailsDrawer({ isOpen, onClose, orderDetails }: OrderDetailProps) {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <div style={{ padding: '20px' }}>
        <Typography variant="h5">Order Details</Typography>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Order ID:</TableCell>
              <TableCell>{orderDetails._id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Created Date:</TableCell>
              <TableCell>{new Date(orderDetails.createdAt).toLocaleDateString()}</TableCell>
            </TableRow>            
          </TableBody>
        </Table>

        <Typography variant="h6" style={{ marginTop: '20px' }}>Products in the Order:</Typography>
        <Table>
          <TableBody>
            {orderDetails.productList.map((product) => (
              <TableRow key={product._id}>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.price}</TableCell>                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Drawer>
  );
}