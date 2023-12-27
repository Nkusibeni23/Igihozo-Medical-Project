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
    const Doctor = await DoctorSchema.findById(id).select("-password");
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
    // Get the user by their ID from the database
    const users = await DoctorSchema.find({}).select("-password");
    if (!getAllDoctor) return res.status(404).send("No Doctor with that ID");
    res.status(200).json({
      success: true,
      message: "Doctors Found",
      data: Doctors,
    });
  } catch (error) {
    console.log(`Error in users : ${error}`);
    res.status(500).json({
      success: false,
      message: "doctors not found",
      error: `Server Error : ${error}`,
    });
  }
};
