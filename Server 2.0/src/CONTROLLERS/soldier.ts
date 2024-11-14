import mongoose from "mongoose";
import { API_CODE, API_STATUS } from "../model/api";
import { ISoldier } from "../model/soldier/interfaceses";
import { Soldier } from "../model/soldier/soldier";

export async function createSoldier(data: ISoldier) {
  try {
    const sold = await Soldier.create({ ...data, _id: new mongoose.Types.ObjectId()});
    if (!sold) {
      return {
        data: null,
        status: API_STATUS.FAILED,
        message: 'Something went wrong',
        code: API_CODE.API_404
      }
    }
    return {
      data: sold,
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

export async function updateSoldier(id: string, data: any) {
  try {
    const sold = await Soldier.findByIdAndUpdate({ "_id": id }, data, { new: true })

    if (!sold) {
      return {
        status: "Failed",
        message: "Post not available"
      }
    }
    return {
      status: "Success",
      data: sold
    }
  }
  catch (error) {
    return {
      status: "Failed",
      data: error
    }
  }
}

export async function deleteSoldier(id: string) {
  try {
      const sold = await Soldier.findByIdAndDelete({ "_id": id });
      if (!sold) {
          return {
              status: "Failed",
              message: "Post not available"
          };
      } else {
          return {
              status: "Success",
              message: sold
          };
      }
  } catch (error) {
      return {
          status: "Failed",
          message: error
      };
  }
}

export async function getSoldiers() {
  try {
    const solds = await Soldier.find({});
    if (!solds) {
      return {
        data: null,
        status: API_STATUS.FAILED,
        message: 'Something went wrong',
        code: API_CODE.API_404
      }
    }
    return {
      data: solds,
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