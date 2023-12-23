import aboutImg from "../../assets/images/about.png";
import aboutCard from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

export default function About() {
  return (
    <section>
      <div className="container py-4">
        <div className=" flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* About images */}
          <div className=" relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="About Image" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCard} alt="About Card" />
            </div>
          </div>
          {/* About content */}
          <div className=" w-full lg:1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className=" heading">Proud to be one of the nations best</h2>
            <p className=" text_para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, quo! Labore voluptatum eaque natus accusamus
              fugiat iure dolorum, necessitatibus atque repudiandae explicabo
              quod provident cupiditate saepe? Quasi, laboriosam.
            </p>
            <p className=" text_para mt-[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, quo! Labore voluptatum eaque natus accusamus
              fugiat iure dolorum, necessitatibus atque repudiandae explicabo
              quod provident cupiditate saepe? Quasi, laboriosam.
            </p>
            <Link to="/">
              <button
                className=" btn rounded-full bg-primaryColor text-white font-bold py-[18px] px-[6
                4px] transition duration-300 ease-in-out flex items-center gap-3"
              >
                Learn More <BsArrowRight className=" font-bold w-6 h-6" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
