/* eslint-disable no-unused-vars */
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

export default function FeedBackForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    // later we will use our api
  };

  return (
    <form action="">
      <div>
        <h3 className=" text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          {" "}
          How would you the overall experience?{" "}
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;
            return (
              <button
                key={index}
                type="button"
                className={`${
                  index < ((rating && hover) || hover)
                    ? "text-yellowColor"
                    : " text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className=" mt-[30px]">
        <h3 className=" text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          {" "}
          Share your FeedBack or Suggestion{" "}
        </h3>
        <textarea
          rows={8}
          name="feedback"
          id=""
          placeholder="Write your message..."
          onChange={(e) => setReview(e.target.value)}
          className="w-full h-[90px] px-4 py-2 border-2 border-gray-200 rounded-md shadow-sm focus:ring-
        yellowColor focus:border-yellowColor block"
        />
      </div>
      <button type="submit" className=" btn mt-3" onSubmit={handleSubmitReview}>
        Send FeedBack
      </button>
    </form>
  );
}
