import mongoose from "mongoose";
import { API_CODE, API_STATUS } from "../model/api";
import { Planning } from "../model/planning/planning";
import { IPlanning, IPlanningPostData } from "../model/planning/interface";

export async function createPlanning(data: IPlanningPostData) {
  try {
    const item = await Planning.create({
      _id: new mongoose.Types.ObjectId(),
      soldier: data.soldier_id,
      planning_date: data.planning_date,
      type: data.type,
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
    console.log("new error", error);
    return {
      data: null,
      status: API_STATUS.FAILED,
      message: error,
      code: API_CODE.API_500,
    };
  }
}

export async function getPlanning() {
  try {
    const data = await Planning.find({})
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
