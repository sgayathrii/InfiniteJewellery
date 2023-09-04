// server here
import Express from "express";
import cors from "cors";
import passport from "passport";

import apiErrorHandler from "./middlewares/apiErrorHandler";
import { jwtStrategy } from "./config/passport";
import productRouter from "./routes/products";
import userRouter from "./routes/users";
import orderRouter from "./routes/orders";
import categoryRouter from "./routes/categories";

const app = Express();
app.use(Express.json());
app.use(cors());
app.use(passport.initialize());
passport.use(jwtStrategy);

//routes
app.use("/products", productRouter);
app.use("/users", userRouter);
app.use("/orders", orderRouter);
app.use("/categories", categoryRouter);


// Handle error
app.use(apiErrorHandler);

export default app;
