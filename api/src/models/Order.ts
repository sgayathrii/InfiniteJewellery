import mongoose, { Document } from "mongoose";

import { ProductDocument, ProductSchema } from "./Product";

// ProductOrder = Product+quantity
export type ProductOrder = ProductDocument & {
  quantity: number;
}

// type - typescript
export type OrderDocument = Document & {
  createdAt: Date;
  productList: ProductOrder[];
  userId: string;
};

const ProductOrderSchema = new mongoose.Schema({
  title: {
    type: String    
  },
  price: {
    type: Number
  },
  image: {
    type: String
  },
  quantity: {
    type: Number
  },
  designerId:{
    type: Number
  }
})


const OrderSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  // syntax for embedded
  productList: [ProductOrderSchema],

  // ref way
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  total: {
    type: Number,
  }
});

export default mongoose.model<OrderDocument>("Order", OrderSchema);
