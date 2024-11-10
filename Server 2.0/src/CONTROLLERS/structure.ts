import mongoose from "mongoose";
import { API_CODE, API_STATUS } from "../model/api";
import { Structure } from "../model/structure/structure";
import { IUnit } from "../model/structure/interfaces";

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

export async function createStructureItem(id: string, _data: IUnit) {
  const _obj = {
    _id: new mongoose.Types.ObjectId(),
    name: _data.name,
    personnel: _data.personnel.map(it => ({...it, _id: new mongoose.Types.ObjectId()})),
    units: _data.units.map(it => {
      const _it = { ...it, _id: new mongoose.Types.ObjectId()};
      if (_it.personnel.length) {
        _it.personnel.forEach(a => {
          a._id = new mongoose.Types.ObjectId() as any;
        });
      }
      if (_it.units.length) {
        _it.units.forEach(a => {
          a._id = new mongoose.Types.ObjectId() as any;
          if (a.personnel.length) {
            _it.personnel.forEach(b => {
              b._id = new mongoose.Types.ObjectId() as any;
            });
          }
          if (a.units.length) {
            _it.units.forEach(b => {
              b._id = new mongoose.Types.ObjectId() as any;
            });
          }
        });
      }
      return it;
    }),
  };
  console.log(_obj)
  return await Structure.findByIdAndUpdate(id, { $push: { "main_units": _obj } }, { returnDocument: 'after' }).then(value => {
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