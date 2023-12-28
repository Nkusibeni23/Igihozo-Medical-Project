import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
// import userImg from "../../assets/images/avatar-icon.png";
import { BiMenu } from "react-icons/bi";
import { useEffect, useRef, useContext } from "react";
import { authContext } from "../../context api/authcontext";

const navLink = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctors",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);

  const handleStickyHeader = () => {
    window.addEventListener(`scroll`, () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("stick_header");
      } else {
        headerRef.current.classList.remove("stick_header");
      }
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);

  return (
    <header className="header py-6 px-3 flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between gap-3">
          {/* Logo  */}
          <div>
            <img src={logo} alt="Logo" className=" w-2/5 h-1/5" />
          </div>
          {/* menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.2rem]">
              {navLink.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    activeClassName="active"
                    exact
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-base leading-7 font-[600] text-nowrap"
                        : " text-gray-600 text-base leading-7 font-[500] hover:text-primaryColor duration-200 transition-all w-full text-nowrap"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Nav right */}
          <div className=" flex items-center gap-4">
            {token && user ? (
              <div>
                <Link
                  to={`${
                    role === "doctors"
                      ? "doctor/profile/me"
                      : "/users/profile/me"
                  }`}
                >
                  <figure className="w-[35px] h-[35px] rounded-full">
                    <img
                      src={user?.photo}
                      alt=""
                      className="w-full rounded-full"
                    />
                  </figure>
                  {/* <h2 className=" font-semibold text-sm flex items-end justify-end">
                    {user?.name}
                  </h2> */}
                </Link>
              </div>
            ) : (
              <Link to={"/login"}>
                <button className=" bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                  Login
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className=" w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
