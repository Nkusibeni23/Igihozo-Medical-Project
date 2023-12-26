import UserSchema from "../models/UserSchema.js";

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
    const user = await UserSchema.findById(id);
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
    const users = await UserSchema.find({});
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
