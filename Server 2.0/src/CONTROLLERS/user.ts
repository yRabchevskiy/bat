import { API_CODE, API_STATUS, IApiRes } from "../model/api";
import { IAuth, User } from "../model/user";

export async function login(data: IAuth): Promise<IApiRes> {
  try {
    const user = await User
      .findOne({ "nickname": data.nickname, "password": data.password })
      .select('_id nickname first_name last_name email role');
    if (!user) {

      return {
        data: null,
        status: API_STATUS.FAILED,
        message: "User not found",
        code: API_CODE.API_404
      }
    }
    return {
      data: user,
      status: API_STATUS.SUCCESS,
      message: "",
      code: API_CODE.API_200
    }
  } catch (error) {
    return {
      data: null,
      status: API_STATUS.FAILED,
      message: error as string,
      code: API_CODE.API_500
    }
  }
};

export async function getUsers() {
  try {
    const users = await User.find({}).select('_id nickname first_name last_name email role').exec();
    
    return {
      data: users || [],
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


export async function getUserById(id: any): Promise<IApiRes> {
  try {
    const user = await User.findOne({ '_id': id }).select('_id nickname first_name last_name email role').exec();
    if (!user) {
      return {
        data: null,
        status: API_STATUS.FAILED,
        message: "User not available",
        code: API_CODE.API_400
      }
    }
    return {
      data: user,
      status: API_STATUS.SUCCESS,
      message: "",
      code: API_CODE.API_200
    }
  }
  catch (error) {
    return {
      data: null,
      status: API_STATUS.FAILED,
      message: "Not available",
      code: API_CODE.API_500
    }
  }
}

// export async function updateSoldier(id: string, data: any) {
//   try {
//     const user = await Soldier.findByIdAndUpdate({ "_id": id }, data, { new: true })

//     if (!user) {
//       return {
//         status: "Failed",
//         message: "Post not available"
//       }
//     }
//     return {
//       status: "Success",
//       data: user
//     }
//   }
//   catch (error) {
//     return {
//       status: "Failed",
//       data: error
//     }
//   }
// }

// export async function deleteSoldier(id: string) {
//   try {
//       const user = await Soldier.findByIdAndDelete({ "_id": id });
//       if (!user) {
//           return {
//               status: "Failed",
//               message: "Post not available"
//           };
//       } else {
//           return {
//               status: "Success",
//               message: user
//           };
//       }
//   } catch (error) {
//       return {
//           status: "Failed",
//           message: error
//       };
//   }
// }

// export async function getSoldiers() {
//   try {
//     const users = await Soldier.find({});
//     return users;
//   }
//   catch (error) {
//     return {
//       status: "Failed",
//       message: error
//     }
//   }
// }