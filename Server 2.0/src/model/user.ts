import mongoose, { Schema, model } from 'mongoose';
import Joi from 'joi';
import { APP_ROLES } from './interfaces';

const app_roles = Joi.object().keys({
  type: Joi.string().valid(
    'User',
    'Admin'
  ),
});

export const AuthSchemaValidate = Joi.object({
  nickname: Joi.string().required(),
  password: Joi.string().required(),
});

export const UserSchemaValidate = Joi.object({
  _id: Joi.string(),
  nickname: Joi.string().required(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  role: app_roles,
});

export interface IAuth {
  nickname: string;
  password: string;
}

export interface IUser {
  _id?: string;
  nickname: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: APP_ROLES;
}

const userSchema = new Schema<IUser>({
  _id: mongoose.SchemaTypes.ObjectId,
  nickname: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String },
});

export const User = model<IUser>('users', userSchema );