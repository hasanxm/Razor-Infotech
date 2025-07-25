import React, { useState, useEffect, useRef } from "react";
import {
  FaHome,
  FaLocationArrow,
  FaBars,
  FaTimes,
  FaUser,
  FaStar,
  FaCalendar,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef();

  const toggleSubMenu = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const desktopMenus = [
    {
      title: "About",
      items: [
        { icon: <FaUser />, label: "About Company", path: "/about-company" },
        { icon: <FaStar />, label: "Career", path: "/career" },
        { icon: <FaCalendar />, label: "Jobs", path: "/jobs" },
      ],
    },
    {
      title: "IT Solution",
      items: [
        { icon: <FaUser />, label: "Software Development", path: "/software-development" },
        { icon: <FaStar />, label: "App Development", path: "/app-development" },
        { icon: <FaCalendar />, label: "Marketing & Branding", path: "/marketing-branding" },
        { icon: <FaCalendar />, label: "Website Development", path: "/website-development" },
        { icon: <FaCalendar />, label: "Web Hosting", path: "/web-hosting" },
      ],
    },
    {
      title: "BPO Services",
      items: [
        { icon: <FaUser />, label: "Customer Support Services", path: "/customer-support" },
        { icon: <FaStar />, label: "Back Office Service", path: "/back-office" },
        { icon: <FaCalendar />, label: "Content Management Services", path: "/content-management" },
        { icon: <FaCalendar />, label: "IT Help Desk", path: "/it-helpdesk" },
        { icon: <FaCalendar />, label: "Backend Outsourcing Services", path: "/backend-outsourcing" },
      ],
    },
    {
      title: "HR Outcome",
      items: [
        { icon: <FaUser />, label: "Recruitment Process Outsourcing (RPO)", path: "/rpo" },
        { icon: <FaStar />, label: "Training & Development", path: "/training-development" },
        { icon: <FaCalendar />, label: "Talent Development", path: "/talent-development" },
      ],
    },
    {
      title: "Products",
      items: [
        { icon: <FaUser />, label: "Gadgetfobia", path: "/gadgetfobia" },
        { icon: <FaStar />, label: "Human Maximizer", path: "/human-maximizer" },
      ],
    },
    {
      title: "Explore More",
      items: [
        { icon: <FaUser />, label: "Legal & Compliance (LPO)", path: "/legal-compliance" },
        { icon: <FaStar />, label: "Financial Services (FPO)", path: "/financial-services" },
        { icon: <FaStar />, label: "Business Consultancy", path: "/business-consultancy" },
        { icon: <FaStar />, label: "Angel Investors", path: "/angel-investors" },
      ],
    },
  ];

  return (
    <nav
      ref={menuRef}
      className="fixed left-1/2 transform -translate-x-1/2 z-50 w-screen bg-white px-9 py-4.5 flex items-center justify-between shadow-lg"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="./footerlogo.png" alt="NavLogo" className="h-14" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center space-x-6 text-[#0a1a2f] font-semibold relative">
        {/* Home Link */}
        <li>
          <Link to="/" className="flex items-center gap-2 hover:underline">
            <FaHome className="text-xl" />
          </Link>
        </li>

        {/* Dropdowns */}
        {desktopMenus.map((menu, index) => (
          <li
            key={index}
            className="relative cursor-pointer"
            onClick={() => toggleSubMenu(menu.title)}
          >
            <span className="hover:underline">{menu.title} ▾</span>
            {activeMenu === menu.title && (
              <ul className="absolute top-8 left-0 bg-white rounded-xl shadow-lg w-72 py-4 px-4 space-y-3 z-50">
                {menu.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md"
                  >
                    <Link
                      to={item.path || "#"}
                      onClick={() => setActiveMenu(null)}
                      className="flex items-center gap-3 w-full"
                    >
                      <div className="bg-gray-100 p-2 rounded-full text-[#0a1a2f]">
                        {item.icon}
                      </div>
                      <span className="text-[#0a1a2f] font-semibold">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}

        {/* Blogs Link */}
        <li>
          <Link to="/blogs" className="hover:underline text-[#0a1a2f] font-semibold">
            Blogs
          </Link>
        </li>

        {/* Contact Us */}
        <li className="flex items-center gap-1 hover:underline cursor-pointer">
          Contact Us <FaLocationArrow className="text-sm" />
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div
        className="lg:hidden text-2xl text-[#0a1a2f] cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="absolute top-[72px] left-1/2 transform -translate-x-1/2 w-[90%] bg-white rounded-xl shadow-lg px-6 py-4 flex flex-col gap-4 text-[#0a1a2f] font-semibold lg:hidden">
          {/* Home */}
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              <FaHome className="text-xl" />
              Home
            </Link>
          </li>

          {/* Dropdowns */}
          {desktopMenus.map((menu, index) => (
            <li key={index} className="cursor-pointer">
              <div
                className="flex justify-between items-center hover:underline"
                onClick={() => toggleSubMenu(menu.title)}
              >
                <span>{menu.title}</span>
                <span>{activeMenu === menu.title ? "▲" : "▼"}</span>
              </div>

              {activeMenu === menu.title && (
                <ul className="pl-4 mt-2 space-y-2">
                  {menu.items.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.path || "#"}
                        className="flex items-center gap-2"
                        onClick={() => {
                          setMenuOpen(false);
                          setActiveMenu(null);
                        }}
                      >
                        <div className="bg-gray-100 p-2 rounded-full text-[#0a1a2f]">
                          {item.icon}
                        </div>
                        <span className="text-sm font-medium">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* Blogs */}
          <li>
            <Link
              to="/blogs"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Blogs
            </Link>
          </li>

          {/* Contact Us */}
          <li className="flex items-center gap-1 hover:underline cursor-pointer">
            Contact Us <FaLocationArrow className="text-sm" />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
