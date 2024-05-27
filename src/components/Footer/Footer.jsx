import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import footercard from "../../assets/footercard.png";
import "./Footer.css"

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "Our Products",
    link: "/#arenaShowoff",
  },
  {
    title: "Rentals",
    link: "/#",
  },
  {
    title: "Contact",
    link: "/#footer",
  },
];

const bgImage = {
  backgroundImage: `url(${footercard})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",

};
const Footer = () => {
  return (
    <div style={bgImage} className="text-white " id="footer" >
      <div className="bg-black/40 min-h-[400px]" style={{fontSize: '20px', fontFamily: "courier"}}>
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            
            <p className="  pt-4" >
              At <span className="bazinga">Bamigos</span> we are Committed to "Make in India," we're challenging the dominance of Chinese imports in the amusement industry. Our innovative products are designed to help FECs attract a wider audience and boost revenue.

            </p>
            <a
              href="https://www.youtube.com/@bamigos.com1"
              target="_blank"
              className="inline-block bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full"
            >
              Visit our YouTube Channel
            </a>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200 "
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Address
              </h1>
              <div>
                <p className="mb-3">Delhi, India</p>
                <p>+91 123456xxxx</p>

                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                <a href="https://www.linkedin.com/company/bamigos/" target="_blank">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="https://www.linkedin.com/company/bamigos/" target="_blank">
                    <FaFacebook className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="https://www.linkedin.com/company/bamigos/" target="_blank">
                    <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;