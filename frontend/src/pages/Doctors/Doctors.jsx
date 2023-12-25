import { doctors } from "../../assets/data/doctors";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Testimonial from "../../components/Testimonial/Testimonial";

export default function Doctors() {
  return (
    <>
      <section className=" bg-[#fff9ea] lg:py-8">
        <div className=" container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className=" max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-xl flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 px-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-gray-400"
              placeholder="Search Doctor..."
            />
            <button className=" btn mt-0 rounded-lg">Search</button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {doctors.map((doctors) => (
              <DoctorCard key={doctors._id} doctors={doctors} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className=" xl:w-4/5 mx-auto py-2 lg:py-4">
            <h2 className=" heading text-center">What our patient say</h2>
            <p className=" text_para text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              sunt voluptatem, nostrum consequatur sed ut cum, iusto culpa, non
              eius aliquam consectetur vel earum velit tenetur architecto
              dignissimos soluta odit?
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
}
