import User from "../models/UserSchema.js";
import Doctors from "../models/DoctorSchema.js";
import Jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  //   console.log('register', req.body);

  const { email, password, name, role, photo, gender } = req.body;

  try {
    let user = null;
    if (role === "patient") {
      user = await User.findOne({ email });
    } else if (role === "doctor") {
      user = Doctors.findOne({ email });
    }
    // Check if you is exist
    if (user) return res.status(400).send("The user already exists");
    if (user) return res.status(409).send("Email already in use");

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    // Create new user

    if (role === "patient") {
      user = new User({
        email,
        password: hashPassword,
        name,
        photo,
        gender,
        role,
      });
    }

    if (role === "doctor") {
      user = new Doctors({
        email,
        password: hashPassword,
        name,
        photo,
        gender,
        role,
      });
    }
    await user.save();
    res
      .status(200)
      .json({ success: true, message: "User successfully created" });

    // Generate token

    // const token = Jwt.sign(
    //   { _id: newUser._id, isAuth: true },
    //   process.env.JWT_SECRET,
    //   { expiresIn: "365d" }
    // );
    // res.cookie("auth-token", token, { httpOnly: true }).send(newUser);
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .json({ success: false, message: "Internal server error, Try again" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Get user from database by email
  } catch (error) {}
};
