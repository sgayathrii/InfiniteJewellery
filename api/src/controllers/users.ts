// product controller
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

import User from "../models/User";
import UserServices from "../services/users";
import { BadRequestError } from "../helpers/apiError";

export const createUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { firstName, lastName, email, password } = request.body;

  const salt = await bcrypt.genSalt(15);
  const hashedPassword = await bcrypt.hash(password, salt);

  const userInformation = new User({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: hashedPassword,
  });

  try {
    const userCreate = await UserServices.createUserService(userInformation);
    response.status(201).json(userCreate);
  } catch (error) {
    next(error);
  }
};

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

export const logInWithPassword = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const userData = await UserServices.findUserByEmail(request.body.email);
    if (!userData) {
      response
        .status(403)
        .json({ message: "User do not have account yet. Create one!" });
      return;
    }

    //Check for password
     const isPasswordMatch = await bcrypt.compare(
      request.body.password,
      userData.password
    );

    if (!isPasswordMatch) {
      return response
        .status(401)
        .json({ message: "Invalid credentials. Password does not match." });
    }
    const token = jwt.sign(
      {
        email: userData.email,
        _id: userData._id,
        firstName: userData.firstName,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    response.status(200).json({ userData, token });
  } catch (error) {
    next(error);
  }
};

// Update user inforamtion
export const updateUserController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try{
  const update = request.body;
  const userId = request.params.id;
  const updatedUser = await UserServices.updateUser(userId, update);
  response.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};
