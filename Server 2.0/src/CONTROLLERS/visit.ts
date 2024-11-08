import { Visit } from "../model/visit";


export async function createVisit(data: any) {
  try {
    const new_visit = await Visit.create(data);
    console.log(new_visit);
    return {
      status: "Success",
      data: new_visit
    };
  } catch (error) {
    return {
      status: "Failed",
      message: error
    };
  }
};

export async function updateVisit(id: string, data: any) {
  try {
    const visit = await Visit.findByIdAndUpdate({ "_id": id }, data, { new: true })

    if (!visit) {
      return {
        status: "Failed",
        message: "Post not available"
      }
    }
    return {
      status: "Success",
      data: visit
    }
  }
  catch (error) {
    return {
      status: "Failed",
      data: error
    }
  }
}

export async function deleteVisit(id: string) {
  try {
      const visit = await Visit.findByIdAndDelete({ "_id": id });
      if (!visit) {
          return {
              status: "Failed",
              message: "Post not available"
          };
      } else {
          return {
              status: "Success",
              message: visit
          };
      }
  } catch (error) {
      return {
          status: "Failed",
          message: error
      };
  }
}

export async function getVisits() {
  try {
    const visits = await Visit.find({});
    return visits;
  }
  catch (error) {
    return {
      status: "Failed",
      message: error
    }
  }
}