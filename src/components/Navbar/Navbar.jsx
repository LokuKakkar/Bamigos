import React from "react";
// import Logo from "../../assets/website/coffee_logo.png";
import { FaCoffee } from "react-icons/fa";
// import "../../fonts/Buzinga-Regular.otf"
// import "../../font.css"

const Menu = [
  {
    id: 1,
    name: "Event Rentals",
    link: "/#",
  },
  {
    id: 2,
    name: "Contact",
    link: "/#footer",
  },
];
const Navbar = () => {
  return (
    <>
      <div className="shadow-md  text-white"
      style={{backgroundColor: "#070630", fontFamily:"courier", height:"10vh"  }}>
        <div className="container py-2">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true"  className="flex">
              <div className="mx-4">
                <a
                  href="#"
                  className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider "
                  style={{fontFamily: "courier"}}
                >
                  {/* <img src={Logo} alt="Logo" className="w-14" /> */}
                  Home
                </a>

              </div>

              <div className="mx-4">

                <a
                  href="#arenaShowoff"
                  className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider "

                >
                  {/* <img src={Logo} alt="Logo" className="w-14" /> */}
                  Our Products
                </a>

              </div>


            </div>

            {/* Link section */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="flex justify-between items-center gap-4"
            >
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"

                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;