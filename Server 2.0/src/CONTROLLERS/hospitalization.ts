import mongoose from "mongoose";
import { API_CODE, API_STATUS } from "../model/api";
import { Hospitalization } from "../model/hospitalization/hospitalization";
import { IHospitalization } from "../model/hospitalization/interface";


export async function getHospitalizations() {
  try {
    const data = await Hospitalization.find({})
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

export async function createHospitalization(data: IHospitalization) {
  try {
    const item = await Hospitalization.create({ ...data, _id: new mongoose.Types.ObjectId() });
    
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