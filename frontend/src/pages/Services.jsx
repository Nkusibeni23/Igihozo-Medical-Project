import { services } from "../assets/data/services";
import ServicesCard from "../components/Services/ServicesCard";

export default function Services() {
  return (
    <section>
      <div className="container">
        <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]">
          {services.map((item, index) => (
            <ServicesCard key={index} index={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
