import User from "../models/UserSchema.js";
import Doctors from "../models/DoctorSchema.js";
import Jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (user) => {
  return Jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "31d", //Expires in 31 days
    }
  );
};

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
    // if (user) return res.status(400).send("The user already exists");
    // if (user) return res.status(409).send("Email already in use");

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
  const { email } = req.body;
  try {
    // Get user from database by email
    let user = null;
    const patient = await User.findOne({ email });
    const doctor = await Doctors.findOne({ email });
    if (patient) {
      user = patient;
    }
    if (doctor) {
      user = doctor;
    }
    // check if user exist or not
    if (!user) throw new Error("User not found");
    // Checking Password
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordMatch) throw new Error("Wrong Password, Try again");

    // get jw token
    const token = generateToken(user);
    const { password, role, appointment, ...others } = user._doc;
    res.status(201).json({
      success: true,
      message: "Successfully Login!",
      token,
      data: {
        ...others,
      },
      role,
    });
  } catch (error) {
    res.status(500).json({ status: false, message: "Failed to Login" });
  }
};
