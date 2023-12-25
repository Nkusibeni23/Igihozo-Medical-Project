import { AiFillStar } from "react-icons/ai";
import avatar from "../../assets/images/avatar-icon.png";
import { formatDate } from "../../utils/FormatDate";
import { useState } from "react";
import FeedBackForm from "./FeedBackForm";

export default function DoctorFeeBack() {
  const [showFeedBack, setFeedBack] = useState(false);
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-semibold text-headingColor mb-[30px]">
          All Reviews (203)
        </h4>
        <div className=" flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure>
              <img
                src={avatar}
                alt="avatar image"
                className=" w-10 h-10 rounded-full"
              />
            </figure>
            <div>
              <h5 className=" text-[14px] leading-6 text-primaryColor font-semibold">
                {" "}
                Benny Chrispin
              </h5>
              <p className=" text-[12px] leading-6 text-gray-400">
                {formatDate("11-05-2017")}
              </p>
              <p className=" text_para mt-3 font-medium text-[15px]">
                Good services, Highly recommended
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#0067FF" />
            ))}
          </div>
        </div>
      </div>
      {!showFeedBack && (
        <div className="text-center">
          <button className="btn" onClick={() => setFeedBack(true)}>
            Give FeedBack
          </button>
        </div>
      )}
      {showFeedBack && <FeedBackForm />}
    </div>
  );
}
