import mongoose from "mongoose";
import { API_CODE, API_STATUS } from "../model/api";
import { IRemission } from "../model/remission/interface";
import { Remission } from "../model/remission/remission";

export async function createRemission(data: IRemission) {
  try {
    const item = await Remission.create({ ...data, _id: new mongoose.Types.ObjectId() });
    
    await item.populate('soldier').then(it => it).catch(err => console.log(err));
    if (!item) {
      return {
        data: null,
        status: API_STATUS.FAILED,
        message: 'Something went wrong',
        code: API_CODE.API_404
      }
    }
    return {
      data: item,
      status: API_STATUS.SUCCESS,
      message: "",
      code: API_CODE.API_200
    }
  } catch (error) {
    return {
      data: null,
      status: API_STATUS.FAILED,
      message: error,
      code: API_CODE.API_500
    }
  }
};

export async function getRemissions() {
  try {
    const data = await Remission.find({})
      .populate("soldier")
      .then(p => p)
      .catch(error => console.log(error));
    if (!data) {
      return {
        data: null,
        status: API_STATUS.FAILED,
        message: 'Something went wrong',
        code: API_CODE.API_404
      }
    }
    return {
      data: data,
      status: API_STATUS.SUCCESS,
      message: '',
      code: API_CODE.API_200
    }
  }
  catch (error) {
    return {
      data: null,
      status: API_STATUS.FAILED,
      message: error,
      code: API_CODE.API_500
    }
  }
}