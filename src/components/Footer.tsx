import { Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="padding-x-1 h-fit bg-[#545454] py-10  md-lg-max:py-20 flex flex-col text-white ">
      <div className="flex justify-between md-lg-max:h-[400px] md-lg-max:flex-col md-lg-max:justify-start">
        <div className="flex w-[70%] md-lg-max:flex-col md-lg-max:w-full">
          <div className="h-full md-lg-max:w-full">
            <span className="font-bold text-2xl">PIXESSA</span>
          </div>
          <div className="ml-24 md-lg-max:ml-0 flex justify-between w-[75%] md-lg-max:w-full gap-3">
            <div className="h-full flex flex-col w-full  md-lg-max:mt-10">
              <h2 className="font-bold text-sm mb-3">PRODUCT</h2>
              <Link to="/" className="text-xs mb-3">
                Client Gallery
              </Link>
              <Link to="/" className="text-xs mb-3">
                Profile Page
              </Link>
              <Link to="/" className="text-xs mb-3">
                Vendor Gallery
              </Link>
              <Link to="/" className="text-xs mb-3">
                Pricing
              </Link>
            </div>
            <div className="h-full flex flex-col w-full  md-lg-max:mt-10">
              <h2 className="font-bold text-sm mb-3">RESOURCES</h2>
              <Link to="/" className="text-xs mb-3">
                Help &#38; Support
              </Link>
              <Link to="/" className="text-xs mb-3">
                Examples
              </Link>
              <Link to="/" className="text-xs mb-3">
                Blog
              </Link>
              <Link to="/" className="text-xs mb-3">
                Service Status
              </Link>
            </div>
            <div className="h-full flex flex-col w-full  md-lg-max:mt-10">
              <h2 className="font-bold text-sm mb-3">COMPANY</h2>
              <Link to="/" className="text-xs mb-3">
                About Us
              </Link>
              <Link to="/" className="text-xs mb-3">
                Camera
              </Link>
              <Link to="/" className="text-xs mb-3">
                Terms of Services
              </Link>
              <Link to="/" className="text-xs mb-3">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[20%] md-lg-max:w-[35%]  flex flex-col md-lg-max:mt-10">
          <h2 className="font-bold text-sm mb-3 ">SOCIALS</h2>
          <div className="flex justify-between mt-3">
            <IoLogoInstagram />
            <FaTwitter />
            <FaFacebookF />
            <FaLinkedin />
          </div>
        </div>
      </div>

      <p className="text-center text-xs mt-10 md-lg-max:mt-2">
        &#169; Pixessa 2023
      </p>
    </div>
  );
};

export default Footer;
