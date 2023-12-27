import Jwt from "jsonwebtoken";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";

export const authenticate = async (req, res, next) => {
  // get token headers
  const authToken = req.headers.authorization;

  //   check token is exists
  if (!authToken || !authToken.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ success: false, message: "You are not logged in" });
  }
  try {
    const token = authToken.split("")[1];

    // verify token
    const decoded = Jwt.verify(token, process.env.JWT_SECRET_KEY);
    // find user by id and add to request object
    req.userId = decoded.id;
    req.role = decoded.role;
    next(); // must be call the next function
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        error: "Token is expired",
      });
    }
    return res.status(403).json({
      message: false,
      error: "Authentication failed.",
    });
  }
};

export default authenticate;
