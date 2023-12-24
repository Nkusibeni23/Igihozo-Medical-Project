import { Link } from "react-router-dom";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceLists from "../components/Services/ServiceLists";
import DoctorList from "../components/Doctors/DoctorList";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <>
        <section className="hero_section pt-[60px] 2xl:h-[800px] ">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/* hero content */}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className=" text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                    We Help patients live a healthy, longer life.
                  </h1>
                  <p className="text_para">
                    Our mission is to provide the best possible care for our
                    patients and their families while promoting public health
                    through education and advocacy.
                  </p>
                  <button className="btn">Request an Appointment</button>
                </div>
                {/* hero counter */}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30]">
                  <div>
                    <h2 className=" text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      30+
                    </h2>
                    <span className=" w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                    <p className=" text_para">Years of Experience</p>
                  </div>
                  <div>
                    <h2 className=" text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      15+
                    </h2>
                    <span className=" w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                    <p className=" text_para">Clinic Location</p>
                  </div>
                  <div>
                    <h2 className=" text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      100%
                    </h2>
                    <span className=" w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                    <p className=" text_para">Patient Satisfaction</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-[30px] justify-end">
                <div>
                  <img src={heroImg01} alt="Image" className=" w-full" />
                </div>
                <div className=" mt-[30px]">
                  <img
                    src={heroImg02}
                    alt="Image"
                    className=" w-full mb-[30px]"
                  />
                  <img src={heroImg03} alt="Image" className=" w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Hero section end */}

        <section>
          <div className="container py-4">
            <div className=" lg:w-[470px] mx-auto">
              <h2 className=" heading text-center">
                Providing the best medical services
              </h2>
              <p className=" text_para text-center">
                World-class care for everyone. Our Health System offers
                unmatched, expert health care
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
              <div className=" py-[30px] px-5">
                <div className=" flex items-center justify-center">
                  <img src={icon01} alt="Image" />
                </div>
                <div className=" mt-[30px]">
                  <h2 className=" text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Find a Doctors
                  </h2>
                  <p className=" text-[16px] leading-7 text-headingColor font-[400] mt-4 text-center">
                    World-class care for everyone. Our health system offers
                    unmatched, expert health care. Form the lab to the clinic.
                  </p>
                  <Link
                    to={"/doctors"}
                    className=" w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className=" group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>

              <div className=" py-[30px] px-5">
                <div className=" flex items-center justify-center">
                  <img src={icon02} alt="Image" />
                </div>
                <div className=" mt-[30px]">
                  <h2 className=" text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Find a Location
                  </h2>
                  <p className=" text-[16px] leading-7 text-headingColor font-[400] mt-4 text-center">
                    World-class care for everyone. Our health system offers
                    unmatched, expert health care. Form the lab to the clinic.
                  </p>
                  <Link
                    to={"/doctors"}
                    className=" w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className=" group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>

              <div className=" py-[30px] px-5">
                <div className=" flex items-center justify-center">
                  <img src={icon03} alt="Image" />
                </div>
                <div className=" mt-[30px]">
                  <h2 className=" text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Book Appointment
                  </h2>
                  <p className=" text-[16px] leading-7 text-headingColor font-[400] mt-4 text-center">
                    World-class care for everyone. Our health system offers
                    unmatched, expert health care. Form the lab to the clinic.
                  </p>
                  <Link
                    to={"/doctors"}
                    className=" w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className=" group-hover:text-white w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About sections */}
        <About />

        {/* Services sections */}
        <section>
          <div className="container py-3">
            <div className=" xl:w-4/5 mx-auto">
              <h2 className=" heading text-center">Our medical services</h2>
              <p className=" text_para text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt sunt voluptatem, nostrum consequatur sed ut cum, iusto
                culpa, non eius aliquam consectetur vel earum velit tenetur
                architecto dignissimos soluta odit?
              </p>
            </div>
            <ServiceLists />
          </div>
        </section>
        {/* feature section */}
        <section>
          <div className="container py-3">
            <div className=" flex items-center justify-between flex-col lg:flex-row">
              {/* features content */}
              <div className="xl:w-[670px]">
                <h2 className="heading">
                  Get Virtual Treatment <br />
                  anytime.
                </h2>
                <ul className=" pl-4 text_para">
                  <li>1. Schedule the appointment directly.</li>
                  <li>
                    2. Search for your physician here. and contact their office.
                  </li>
                  <li>
                    3. View our physicians who are accepting new patients, use
                    the online scheduling tools to select an appointment time.
                  </li>
                </ul>
                <Link to="/button">
                  <button className="btn flex items-center gap-3">
                    Learn More
                    <BsArrowRight className="w-6 h-6" />
                  </button>
                </Link>
              </div>
              {/* features img */}
              <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-2">
                <img src={featureImg} alt="Image features" className="w-3/4" />
                <div className="w-[150px] h-auto lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-3 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] border">
                  <div className="flex gap-[10px] lg:gap-5">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-gray-500 font-[400]">
                      10:00AM
                    </p>
                  </div>
                  <div className="flex items-center justify-center rounded-full w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 text-center">
                    Consultation
                  </div>
                  <div className=" flex items-center justify-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                    <img src={avatarIcon} alt="Avatar Icon" />
                    <h4 className=" text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                      Baidu Wayne
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Great Doctors */}
        <section>
          <div className="container py-3">
            <div className=" xl:w-4/5 mx-auto">
              <h2 className=" heading text-center">Our Great Doctors</h2>
              <p className=" text_para text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt sunt voluptatem, nostrum consequatur sed ut cum, iusto
                culpa, non eius aliquam consectetur vel earum velit tenetur
                architecto dignissimos soluta odit?
              </p>
            </div>
            <DoctorList />
          </div>
        </section>
      </>
    </>
  );
}
