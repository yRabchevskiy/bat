import mongoose from "mongoose";
import { API_CODE, API_STATUS } from "../model/api";
import { IRemissionPostData } from "../model/remission/interface";
import { Remission } from "../model/remission/remission";

export async function createRemission(data: IRemissionPostData) {
  try {
    const item = await Remission.create({
      _id: new mongoose.Types.ObjectId(),
      soldier: data.soldier_id,
      start_date: data.start_date,
      end_date: data.end_date,
      diagnosis: data.diagnosis,
      description: data.description,
      rank: data.rank,
      name: data.name,
      union: data.union,
    });
    if (data.soldier_id) {
      await item
        .populate("soldier")
        .then((it) => it)
        .catch((err) => console.log(err));
    }
    if (!item) {
      return {
        data: null,
        status: API_STATUS.FAILED,
        message: "Something went wrong",
        code: API_CODE.API_404,
      };
    }
    return {
      data: item,
      status: API_STATUS.SUCCESS,
      message: "",
      code: API_CODE.API_200,
    };
  } catch (error) {
    console.log('new error', error)
    return {
      data: null,
      status: API_STATUS.FAILED,
      message: error,
      code: API_CODE.API_500,
    };
  }
}

export async function getRemissions() {
  try {
    const data = await Remission.find({})
      .populate("soldier")
      .then((p) => p)
      .catch((error) => console.log(error));
    if (!data) {
      return {
        data: null,
        status: API_STATUS.FAILED,
        message: "Something went wrong",
        code: API_CODE.API_404,
      };
    }
    return {
      data: data,
      status: API_STATUS.SUCCESS,
      message: "",
      code: API_CODE.API_200,
    };
  } catch (error) {
    return {
      data: null,
      status: API_STATUS.FAILED,
      message: error,
      code: API_CODE.API_500,
    };
  }
}
