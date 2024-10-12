import { API_CODE, API_STATUS } from "../model/api";
import { Structure } from "../model/structure";

export async function getStructure() {
  try {
    const structure = await Structure.find({});
    if (!structure) {
      return {
        data: null,
        status: API_STATUS.FAILED,
        message: "Structure not found",
        code: API_CODE.API_404
      }
    }
    return {
      data: structure,
      status: API_STATUS.SUCCESS,
      message: "",
      code: API_CODE.API_200
    }
  }
  catch (error) {
    return {
      data: null,
      status: API_STATUS.FAILED,
      message: error as string,
      code: API_CODE.API_500
    }
  }
}