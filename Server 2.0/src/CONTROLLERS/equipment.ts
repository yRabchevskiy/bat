import mongoose from "mongoose";
import { API_CODE, API_STATUS } from "../model/api";
import { Vlk } from "../model/vlk/vlk";

export async function getEquipments() {
  try {
    const data = await Vlk.find({});
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

// export async function createVlk(data: IVlkPostData) {
//   try {
//     const item = await Vlk.create({
//       _id: new mongoose.Types.ObjectId(),
//       soldier: data.soldier_id,
//       name: data.name,
//       rank: data.rank,
//       position: data.position,
//       address: data.address,
//       union: data.union,
//       birthday: data.birthday,
//       vlk_result: data.vlk_result,
//       vlk_number: data.vlk_number,
//       vlk_date: data.vlk_date,
//       vlk_institution: data.vlk_institution,
//       diagnosis: data.diagnosis,
//     });

//     if (data.soldier_id) {
//       await item
//         .populate("soldier")
//         .then((it) => it)
//         .catch((err) => console.log(err));
//     }
//     if (!item) {
//       return {
//         data: null,
//         status: API_STATUS.FAILED,
//         message: "Something went wrong",
//         code: API_CODE.API_404,
//       };
//     }
//     return {
//       data: item,
//       status: API_STATUS.SUCCESS,
//       message: "",
//       code: API_CODE.API_200,
//     };
//   } catch (error) {
//     console.log("new error", error);
//     return {
//       data: null,
//       status: API_STATUS.FAILED,
//       message: error,
//       code: API_CODE.API_500,
//     };
//   }
// }
