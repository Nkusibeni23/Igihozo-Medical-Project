import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaLinkedin, FaPinterest, FaGithub } from "react-icons/fa";

const socialLinks = [
  {
    path: "https://www.linkedin.com/in/willy-ingingo-208b26275/?originalSubdomain=rw",
    icon: <FaLinkedin />,
  },
  {
    path: "https://www.pinterest.com/igihozomedicalclinic/",
    icon: <FaPinterest />,
  },
  {
    path: "https://github.com/Nkusibeni23",
    icon: <FaGithub />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quickLink02 = [
  {
    path: "/find-a-doctors",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Find a location",
  },
  {
    path: "/",
    display: "Get an Opinion",
  },
];

const quickLink03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact us",
  },
];

export default function footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container py-3">
        <div className=" flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={Logo} alt="Image logo" />
            <p className=" text-[16px] leading-7 font-[400] text-gray-400 mt-4">
              Copyright &copy; {year} developed by Baidu all right reserved.
            </p>
            <div className=" flex items-center gap-3 mt-4">
              {socialLinks.map((links01, index) => (
                <Link to={links01.path} key={index}>
                  {links01.icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className=" text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to:
            </h2>
            <ul>
              {quickLink02.map((links02, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={links02.path}
                    className=" text-[16px] leading-7 font-[400] text-gray-400"
                  >
                    {links02.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className=" text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((links01, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={links01.path}
                    className=" text-[16px] leading-7 font-[400] text-gray-400"
                  >
                    {links01.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className=" text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLink03.map((links03, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={links03.path}
                    className=" text-[16px] leading-7 font-[400] text-gray-400"
                  >
                    {links03.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
