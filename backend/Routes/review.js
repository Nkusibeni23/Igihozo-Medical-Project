import express from "express";
import {
  createReview,
  getAllReviews,
} from "../Controllers/reviewController.js";
import authenticate, { restrict } from "../auth/verifyToken.js";

const router = express.Router({
  mergeParams: true, // allows us to access the params of parent routes in nested routes
});

// doctor/doctorId/reviews

router
  .route("/")
  .get(getAllReviews)
  .post(authenticate, restrict(["patient"]), createReview);

export default router;
