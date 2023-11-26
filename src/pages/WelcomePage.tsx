import { useState } from "react";
import Input from "../components/Input";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
const WelcomePage = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  return (
    <div className="bg-[#F0F0F0] h-[950px] flex justify-center items-center ">
      <div className="relative h-[80%] w-[75%] bg-white rounded-lg shadow-lg flex justify-center ">
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 h-[110px] w-[110px]  flex justify-center items-center border-[1px] border-stone-200 rounded-xl bg-white">
          <span className="font-bold text-5xl">PX</span>
        </div>
        <div className="w-[60%] mt-[120px] flex flex-col items-center sm:w-[73%]">
          <div className="text-center w-full">
            <p className="font-bold text-3xl">WELCOME!</p>
          </div>
          <form className="flex flex-col w-[80%] items-center mt-5 sm:w-[100%]">
            <label htmlFor="galleryName" className="w-full text-gray-500 mt-7">
              How would you like to your name to appear on your gallery?
            </label>

            <Input
              type="text"
              className="mt-4 w-full h-[45px] p-5 bg-[#F0F0F0]"
              placeholder=""
              id="galleryName"
            />

            <label htmlFor="galleryName" className="w-full text-gray-500 mt-7">
              Create Password
            </label>
            <div className="w-full h-fit relative">
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
                className="mt-4 w-full h-[45px] p-5 bg-[#F0F0F0]"
                placeholder=""
                id="password1"
              />
            </div>

            <label htmlFor="galleryName" className="w-full text-gray-500 mt-7">
              Confirm Password
            </label>

            <div className="w-full h-fit relative">
              {isVisible2 ? (
                <FaEye
                  className="absolute right-4 bottom-3 cursor-pointer"
                  onClick={() => setIsVisible2(!isVisible2)}
                />
              ) : (
                <FaEyeSlash
                  className="absolute right-4 bottom-3 cursor-pointer"
                  onClick={() => setIsVisible2(!isVisible2)}
                />
              )}
              <Input
                type={isVisible2 ? "text" : "password"}
                className="mt-4 w-full h-[45px] p-5 bg-[#F0F0F0]"
                placeholder=""
                id="password2"
              />
            </div>

            <button className="h-[55px] w-[200px] bg-[#843232] text-xs rounded text-white mt-20">
              SAVE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
