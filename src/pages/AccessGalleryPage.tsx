import { useState } from "react";
import Input from "../components/Input";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AccessGalleryPage = () => {
  const [isVisible1, setIsVisible1] = useState(false);

  return (
    <div className="bg-[#F0F0F0] h-[950px] flex justify-center items-center ">
      <div className="relative h-[70%] w-[75%] bg-white rounded-lg shadow-lg flex justify-center">
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 h-[110px] w-[110px]  flex justify-center items-center border-[1px] border-stone-200 rounded-xl bg-white">
          <span className="font-bold text-5xl">PX</span>
        </div>
        <div className="w-[60%] sm:w-[85%] mt-[120px] flex flex-col items-center">
          <div className="text-center w-full">
            <p className="font-bold text-3xl">WELCOME!</p>
          </div>
          <form className="flex flex-col w-[80%] items-center mt-5">
            <label htmlFor="email" className="w-full text-gray-500 mt-7">
              Enter your email and secret code sent to your email to access
              gallery
            </label>

            <Input
              type="text"
              className="mt-10 w-full h-[45px] p-5 bg-[#F0F0F0]"
              placeholder="Email"
              id="email"
            />

            <div className="w-full h-fit relative mt-10">
              {isVisible1 ? (
                <FaEye
                  className="absolute right-4 bottom-3 cursor-pointer"
                  onClick={() => setIsVisible1(!isVisible1)}
                />
              ) : (
                <FaEyeSlash
                  className="absolute right-4 bottom-3 cursor-pointer"
                  onClick={() => setIsVisible1(!isVisible1)}
                />
              )}

              <Input
                type={isVisible1 ? "text" : "password"}
                className=" w-full h-[45px] p-5 bg-[#F0F0F0]"
                placeholder="Secret Code"
                id="password1"
              />
            </div>

            <button className="h-[55px] w-[200px] bg-[#157074] text-xs rounded text-white mt-20">
              ACCESS GALLERY
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccessGalleryPage;
