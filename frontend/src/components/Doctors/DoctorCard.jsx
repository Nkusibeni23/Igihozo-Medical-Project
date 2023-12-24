import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function DoctorCard({ doctors }) {
  const { name, photo, specialty, totalPatients, hospital } = doctors;
  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={photo} className=" w-full" alt="" />
      </div>
      <h2 className=" text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-semibold mt-3 lg:mt-5">
        {name}
      </h2>
      <div className="mt-2 lg:mt-4 flex items-center justify-between ">
        <span className=" bg-[#CCF0F3] text-irisBlueColor py-3 lg:py-3 px-2 lg:px-6 text-[18px] rounded leading-4 lg:text-[16px] lg:leading-7 font-semibold">
          {specialty}
        </span>
        {/* Star here!! */}
      </div>
      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <div>
          <h3 className=" text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor">
            + {totalPatients} Patients
          </h3>
          <p className=" text-[14px] leading-6 font-[400] text-gray-400">
            {hospital}
          </p>
        </div>
        <Link
          to={"/doctors"}
          className=" w-10 h-7 lg:w-10 lg:h-10 rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none"
        >
          <BsArrowRight className=" group-hover:text-white w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
