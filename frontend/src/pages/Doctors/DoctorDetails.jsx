import { useState } from "react";
import doctorImage from "../../assets/images/doctor-img01.png";
import startIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import DoctorFeeBack from "./DoctorFeeBack";
import SidePanel from "./SidePanel";

export default function DoctorDetails() {
  const [tab, setTab] = useState("about");
  return (
    <section>
      <div className=" max-w-[1170px] px-5 mx-auto py-0 lg:py-10">
        <div className=" grid md:grid-cols-3 gap-[50px]">
          <div className=" md:col-span-2">
            <div className=" flex items-center gap-5">
              <figure className=" max-w-[200px] max-h-[200px]">
                <img src={doctorImage} alt="Image" className=" w-full" />
              </figure>
              <div>
                <span className=" bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded ">
                  Surgeon
                </span>
                <h3 className=" text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  Dr.Baidu Nkusi
                </h3>
                <div className=" flex items-center gap-[6px]">
                  <span className=" flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <img src={startIcon} alt="Star icon" /> 4.8
                  </span>
                  <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-medium text-gray-400">
                    (272)
                  </span>
                </div>
                <p className=" text_para text-[14px] md:text-[15px] leading-6 lg:max-w-[390px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  beatae similique perferendis nisi ex corrupti animi facilis
                  natus!
                </p>
              </div>
            </div>
            <div className=" mt-[50px] border-b border-solid border-[#0066ff34]">
              <button
                onClick={() => setTab("about")}
                className={`${
                  tab === "about" && "border-b border-solid border-primaryColor"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                About
              </button>
              <button
                onClick={() => setTab("feedBack")}
                className={`${
                  tab === "feedBack" &&
                  "border-b border-solid border-primaryColor"
                }  py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                FeedBack
              </button>
            </div>
            <div className=" mt-[50px]">
              {tab === "about" && <DoctorAbout />}
              {tab === "feedBack" && <DoctorFeeBack />}
            </div>
          </div>
          <div>
            <SidePanel />
          </div>
        </div>
      </div>
    </section>
  );
}
