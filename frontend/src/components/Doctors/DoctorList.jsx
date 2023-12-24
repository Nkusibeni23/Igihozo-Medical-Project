import { doctors } from "./../../assets/data/doctors";
import DoctorCard from "./DoctorCard";

export default function DoctorList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {doctors.map((doctors) => (
        <DoctorCard key={doctors._id} doctors={doctors} />
      ))}
    </div>
  );
}
