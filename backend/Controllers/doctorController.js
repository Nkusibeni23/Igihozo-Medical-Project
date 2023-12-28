import BookingSchema from "../models/BookingSchema.js";
import DoctorSchema from "../models/DoctorSchema.js";

export const updateDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    // Get the user by their ID from the database
    const updateDoctor = await DoctorSchema.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    if (!updateDoctor) return res.status(404).send("No user with that ID");
    res.status(200).json({
      success: true,
      message: "SuccessFully Update",
      data: updateDoctor,
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

export const deleteDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    // Get the user by their ID from the database
    await DoctorSchema.findByIdAndDelete(id);
    if (!deleteDoctor) return res.status(404).send("No user with that ID");
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

export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    // Get the user by their ID from the database
    const Doctor = await DoctorSchema.findById(id)
      .populate("reviews")
      .select("-password");
    if (!getSingleDoctor) return res.status(404).send("No user with that ID");
    res.status(200).json({
      success: true,
      message: "User Found!",
      data: Doctor,
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

export const getAllDoctor = async (req, res) => {
  try {
    const { query } = req.query;
    let doctors;
    if (query) {
      doctors = await DoctorSchema.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    } else {
      doctors = await DoctorSchema.find({ isApproved: "approved" }).select(
        "-password"
      );
    }

    // Check if doctors array is empty
    if (!doctors || doctors.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No doctors found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Doctors found",
      data: doctors,
    });
  } catch (error) {
    console.error(`Error in users: ${error}`);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: `Server Error: ${error}`,
    });
  }
};

export const getDoctorProfile = async (req, res) => {
  const doctorId = req.userId;

  try {
    const doctor = await DoctorSchema.find(doctorId);

    if (!doctor) {
      return res.status(401).json({
        success: false,
        message: "Not authorized to access this information",
      });
    }
    const { password, ...rest } = doctor._doc;
    const appointments = await BookingSchema.find({ doctor: doctorId });
    res.status(200).json({
      success: true,
      data: { ...rest, appointments },
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
