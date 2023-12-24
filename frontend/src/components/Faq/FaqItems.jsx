import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

/* eslint-disable react/prop-types */
export default function FaqItems({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer"
      onClick={toggleAccordion}
    >
      <div className="flex items-center justify-between gap-5">
        <h4 className=" text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-[600]">
          {item.question}
        </h4>
        <div
          className={`${
            isOpen &&
            " bg-primaryColor text-white border-none transition-all duration-300"
          } w-7 h-7 lg:w-8 lg:h-8 border border-[#141F21] rounded flex items-center justify-center`}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      {isOpen && (
        <div className="mt-4">
          <p className="text-sm lg:text-base lg:leading-7 leading-6 font-[400] text-gray-500">
            {item.content}
          </p>
        </div>
      )}
    </div>
  );
}
