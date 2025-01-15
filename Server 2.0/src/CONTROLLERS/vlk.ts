import mongoose from "mongoose";
import { API_CODE, API_STATUS } from "../model/api";
import { Vlk } from "../model/vlk/vlk";


export async function getVlks() {
  try {
    const data = await Vlk.find({})
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