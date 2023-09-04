import {Request, Response, NextFunction} from "express";

import orderServices from "../services/orders";
import Order from "../models/Order";

export const createOrderController = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    try {
        const newOrder = new Order({
            userId: request.params.userId,
            productList: request.body.productList
        });
        const order = await orderServices.createOrder(newOrder);
        response.status(201).json(order);
    } catch (error) {
        next(error);
    }
};

export const getOrderListByUserId = async(
    request:Request,
    response: Response,
    next: NextFunction
) => {
    try {
        const id = request.params.id;        
        const orderList = await orderServices.getOrderByUserId(id);
        response.status(200).json(orderList);
    } catch(error) {
        next(error);
    }
};



