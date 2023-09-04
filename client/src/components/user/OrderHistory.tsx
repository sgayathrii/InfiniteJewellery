import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, Order, RootState } from '../../types/types';
import { fetchOrderData } from '../../redux/thunks/order';
import { Link } from 'react-router-dom';
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Button } from '@mui/material';

import OrderDetailsDrawer from "../order/OrderDetailDrawer";

export default function OrderHistory() {
  const orderList = useSelector((state: RootState) => state.order.orderList);
  const userDetail = useSelector((state: RootState) => state.users.userInformation);
  const dispatch = useDispatch<AppDispatch>();

  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null); 
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (userDetail) {
      dispatch(fetchOrderData(userDetail._id));
    }
  }, []);

  const handleViewDetails = (orderId: string) => {
    const order = orderList.find((item) => item._id === orderId);
    if (order) {
      setSelectedOrder(order);
      setDrawerOpen(true);
    } else {
      console.log(`Order details not found for ID: ${orderId}`);
    }
  };

  return (
    <div>
      <Typography variant="h5">Order History</Typography>
      <TableContainer>
        <Table>
          <TableBody>
            {orderList.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{new Date(item.createdAt).toLocaleDateString()}</TableCell>
                <TableCell>{item._id}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleViewDetails(item._id)}>
                    View details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedOrder && (
        <OrderDetailsDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} orderDetails={selectedOrder} />
      )}
    </div>
  );
}