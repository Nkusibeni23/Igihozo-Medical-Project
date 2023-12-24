import { services } from "./../../assets/data/services";
import ServicesCard from "./ServicesCard";

export default function ServiceLists() {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] ld:mt:[55px]">
      {services.map((item, index) => (
        <ServicesCard key={index} index={index} item={item} />
      ))}
    </div>
  );
}
