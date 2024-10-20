import mongoose from "mongoose";
import { API_CODE, API_STATUS } from "../model/api";
import { IStructure, Structure } from "../model/structure";

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

export async function createStructureItem(id: string, _data: IStructure) {
  const _obj = {
    _id: new mongoose.Types.ObjectId(),
    name: _data.name,
    data: _data.data
  };
  return await Structure.findByIdAndUpdate(id, { $push: { "structure": _obj } }, { returnDocument: 'after' }).then(value => {
    return {
      data: value,
      status: API_STATUS.SUCCESS,
      message: "",
      code: API_CODE.API_200
    }
  }).catch(error => {
    console.log(error);
    return {
      data: null,
      status: API_STATUS.FAILED,
      message: error,
      code: API_CODE.API_404
    }
  });
  // try {
  //   const _obj = {
  //     _id: new mongoose.Types.ObjectId(),
  //     name: _data.name,
  //     data: _data.data
  //   };
  //   await Structure.findByIdAndUpdate(id, { $push: { "structure": _obj } } );
  //   // await Structure.findById(id).updateOne({ $push: { "structure": _obj } });
  //   const item = await Structure.find({
  //     "structure._id": _obj._id
  //   });
  //   console.log('Inserted Successfully.', item)
  //   if (!item) {
  //     return {
  //       data: null,
  //       status: API_STATUS.FAILED,
  //       message: "Structure not found",
  //       code: API_CODE.API_404
  //     }
  //   }
  //   return {
  //     data: item,
  //     status: API_STATUS.SUCCESS,
  //     message: "",
  //     code: API_CODE.API_200
  //   }
  // }
  // catch (error) {
  //   return {
  //     data: null,
  //     status: API_STATUS.FAILED,
  //     message: error as string,
  //     code: API_CODE.API_500
  //   }
  // }
}


// export async function clearPosition(id: string) {
//   try {
//     const structure = await Structure.find({});
//     if (!structure) {
//       return {
//         data: null,
//         status: API_STATUS.FAILED,
//         message: "Structure not found",
//         code: API_CODE.API_404
//       }
//     }
//     return {
//       data: structure,
//       status: API_STATUS.SUCCESS,
//       message: "",
//       code: API_CODE.API_200
//     }
//   }
//   catch (error) {
//     return {
//       data: null,
//       status: API_STATUS.FAILED,
//       message: error as string,
//       code: API_CODE.API_500
//     }
//   }
// }