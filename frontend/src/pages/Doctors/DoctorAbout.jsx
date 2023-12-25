import { formatDate } from "../../utils/FormatDate";

export default function DoctorAbout() {
  return (
    <div>
      <div>
        <h3 className="text-[20px] font-semibold leading-[30px] text-headingColor flex items-center gap-2">
          About of{" "}
          <span className=" text-irisBlueColor font-bold text-[24px] leading-9">
            Dr.Baidu Nkusi
          </span>
        </h3>
        <p className=" text_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          laborum quae enim nam magni distinctio porro, dolorum, accusamus
          necessitatibus nostrum ullam sed! Consequatur, voluptatem porro
          officia eos provident fugiat similique.
        </p>
      </div>
      <div className=" mt-12">
        <h3 className="text-[20px] font-semibold">Education</h3>
        <ul className=" pt-4 md:p-5">
          <li className=" flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className=" text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("03-13-2014")} - {formatDate("09-13-2016")}
              </span>
              <p className=" text-[16px] leading-6 font-medium text-gray-400">
                Phd in Surgeon
              </p>
            </div>
            <p className=" text-[14px] leading-5 font-medium text-gray-400">
              King Faisal Kigali
            </p>
          </li>
          <li className=" flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className=" text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("07-04-2010")}-{formatDate("07-04-2014")}
              </span>
              <p className=" text-[16px] leading-6 font-medium text-gray-400">
                Phd in Surgeon
              </p>
            </div>
            <p className=" text-[14px] leading-5 font-medium text-gray-400">
              University of Michigan
            </p>
          </li>
        </ul>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] font-semibold">Experience</h3>
        <ul className=" grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className=" p-4 rounded-lg bg-[#fff9ea]">
            <span className="  text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("07-04-2015")}-{formatDate("07-04-2017")}
            </span>
            <p className=" text-[16px] leading-6 font-medium text-headingColor">
              Sr.Surgeon
            </p>
            <p className=" text-[14px] leading-5 font-medium text-gray-400">
              King Faisal Kigali
            </p>
          </li>
          <li className=" p-4 rounded-lg bg-[#fff9ea]">
            <span className="  text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("17-05-2017")}-{formatDate("11-08-2020")}
            </span>
            <p className=" text-[16px] leading-6 font-medium text-headingColor">
              Sr.Surgeon
            </p>
            <p className=" text-[14px] leading-5 font-medium text-gray-400">
              CHUK
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
