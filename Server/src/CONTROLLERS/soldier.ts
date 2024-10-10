import { Soldier } from "../model/soldier";


export async function createSoldier(data: any) {
  try {
    const sold = await Soldier.create(data);
    console.log(sold);
    return {
      status: "Success",
      data: sold
    };
  } catch (error) {
    return {
      status: "Failed",
      message: error
    };
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
    return solds;
  }
  catch (error) {
    return {
      status: "Failed",
      message: error
    }
  }
}