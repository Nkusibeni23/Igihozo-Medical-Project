export default function SidePanel() {
  return (
    <div className=" shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className=" flex items-center justify-between">
        <p className=" text_para mt-0 font-semibold">Ticket Price</p>
        <span className=" text-[16px] leading-7 lg:text-[22px] text-headingColor font-bold">
          5000 Rfw
        </span>
      </div>
      <div className=" mt-[30px]">
        <p className=" text_para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>
        <ul className=" mt-3">
          <li className=" flex items-center justify-between mb-2">
            <p className=" text-[15px] leading-6 text-gray-400 font-semibold">
              Sunday:
            </p>
            <p className=" text-[14px] md:text-[10px] leading-6 text-gray-400 font-semibold">
              04:00 PM - 9:30 PM
            </p>
          </li>
          <li className=" flex items-center justify-between mb-2">
            <p className=" text-[14px] leading-6 text-gray-400 font-semibold">
              Tuesday
            </p>
            <p className=" text-[14px] md:text-[10px] leading-6 text-gray-400 font-semibold">
              03:00 PM - 22:30 PM
            </p>
          </li>
          <li className=" flex items-center justify-between mb-2">
            <p className=" text-[14px] leading-6 text-gray-400 font-semibold">
              Wednesday
            </p>
            <p className=" text-[14px] md:text-[10px] leading-6 text-gray-400 font-semibold">
              04:00 PM - 9:30 PM
            </p>
          </li>
        </ul>
      </div>
      <button className="bg-primaryColor p-3 rounded-lg text-white font-semibold text-center w-full cursor-pointer hover:opacity-90">
        Book Appointment
      </button>
    </div>
  );
}
