import Review from "../models/ReviewSchema.js";
import Doctor from "../models/DoctorSchema.js";

// get all reviews

export const getAllReviews = async (req, res) => {
  try {
    const reviewList = await Review.find({});
    res.status(200).json({
      success: true,
      message: "Successful Review",
      data: reviewList,
    });
    if (!reviewList) return res.status(404).json("No Reviews Found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Not Found" });
  }
};

// create review

export const createReview = async (req, res) => {
  //get the doctor id from params
  if (!req.body.doctor) req.body.doctor = req.params.doctorId;
  if (!req.body.user) req.body.user = req.userId;

  const savedReview = new Review(req.body);

  try {
    const savedReview = await newReview.save();
    let doc = await Doctor.findByIdAndUpdate(req.body.doctor, {
      $push: {
        reviews: savedReview._id,
      },
    });
    res.status(201).json({
      success: true,
      data: savedReview,
      message: "Submitted Review",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
    // console.log(error);
  }
};
