import { API_CODE, API_STATUS } from "../model/api";
import { Visit } from "../model/visit/visit";


export async function createVisit(data: any) {
  try {
    const new_visit = await Visit.create(data);
    return {
      data: new_visit,
      status: API_STATUS.SUCCESS,
      message: "",
      code: API_CODE.API_200
    }
  } catch (error) {
    return {
      data: null,
      status: API_STATUS.FAILED,
      message: error,
      code: API_CODE.API_404
    }
  }
};

export async function updateVisit(id: string, data: any) {
  try {
    const visit = await Visit.findByIdAndUpdate({ "_id": id }, data, { new: true })

    if (!visit) {
      return {
        data: null,
        status: API_STATUS.FAILED,
        message: 'Visit not found',
        code: API_CODE.API_500
      }
    }
    return {
      data: visit,
      status: API_STATUS.SUCCESS,
      message: "",
      code: API_CODE.API_200
    }
  }
  catch (error) {
    return {
      data: null,
      status: API_STATUS.FAILED,
      message: error,
      code: API_CODE.API_404
    }
  }
}

export async function deleteVisit(id: string) {
  try {
    const visit = await Visit.findByIdAndDelete({ "_id": id });
    if (!visit) {
      return {
        data: null,
        status: API_STATUS.FAILED,
        message: 'Visit not found',
        code: API_CODE.API_404
      }
    } else {
      return {
        data: visit,
        status: API_STATUS.SUCCESS,
        message: "",
        code: API_CODE.API_200
      }
    }
  } catch (error) {
    return {
      data: null,
      status: API_STATUS.FAILED,
      message: error,
      code: API_CODE.API_500
    }
  }
}

export async function getVisits() {
  try {
    const visits = await Visit.find({});
    return {
      data: visits,
      status: API_STATUS.SUCCESS,
      message: "",
      code: API_CODE.API_200
    }
  }
  catch (error) {
    return {
      data: null,
      status: API_STATUS.FAILED,
      message: error,
      code: API_CODE.API_404
    }
  }
}