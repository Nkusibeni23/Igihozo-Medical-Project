import UserSchema from "../models/UserSchema.js";
import BookingSchema from "../models/BookingSchema.js";
import DoctorSchema from "../models/DoctorSchema.js";

export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    // Get the user by their ID from the database
    const updateUser = await UserSchema.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    if (!updateUser) return res.status(404).send("No user with that ID");
    res.status(200).json({
      success: true,
      message: "SuccessFully Update",
      data: updateUser,
    });
  } catch (error) {
    console.log(`Error in updating a user : ${error}`);
    res.status(500).json({
      success: false,
      message: "Failed to update",
      error: `Server Error : ${error}`,
    });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    // Get the user by their ID from the database
    await UserSchema.findByIdAndDelete(id);
    if (!updateUser) return res.status(404).send("No user with that ID");
    res.status(200).json({
      success: true,
      message: "SuccessFully Deleted",
    });
  } catch (error) {
    console.log(`Error in deleting a user : ${error}`);
    res.status(500).json({
      success: false,
      message: "Failed to delete",
      error: `Server Error : ${error}`,
    });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    // Get the user by their ID from the database
    const user = await UserSchema.findById(id).select("-password");
    if (!updateUser) return res.status(404).send("No user with that ID");
    res.status(200).json({
      success: true,
      message: "User Found!",
      data: user,
    });
  } catch (error) {
    console.log(`Error in user : ${error}`);
    res.status(500).json({
      success: false,
      message: "No User Found!",
      error: `Server Error : ${error}`,
    });
  }
};

export const getAllUser = async (req, res) => {
  try {
    // Get the user by their ID from the database
    const users = await UserSchema.find({}).select("-password");
    if (!updateUser) return res.status(404).send("No user with that ID");
    res.status(200).json({
      success: true,
      message: "Users Found",
      data: users,
    });
  } catch (error) {
    console.log(`Error in users : ${error}`);
    res.status(500).json({
      success: false,
      message: "users not found",
      error: `Server Error : ${error}`,
    });
  }
};

export const getUserProfile = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await UserSchema.find(userId);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Not authorized to access this information",
      });
    }
    const { password, ...rest } = user._doc;
    res.status(200).json({
      success: true,
      data: { ...rest },
      message: "profile Info is getting",
    });
  } catch (error) {
    console.log(`Error in profile : ${error}`);
    return res.status(401).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};

export const getMyAppointments = async (req, res) => {
  try {
    // step-1: retrieve appointments from booking
    const bookings = await BookingSchema.find({ user: req.userId });
    // step-2: extract doctor ids from appointment bookings
    const doctorId = bookings.map((el) => el.doctor.id);
    // step-3: retrieve doctors using doctor ids
    const doctors = await DoctorSchema.find({ _id: { $in: doctorId } }).select(
      "-password"
    );
    // combine both the results and send it as response
    res.status(200).json({
      success: true,
      message: "Appointments are getting",
      data: doctors,
    });
  } catch (error) {}
};
