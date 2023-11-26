import Input from "../components/Input";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import "./login.css";
const SignUpPage = () => {
  return (
    <div className=" bg-[#F0F0F0] h-[1130px] flex justify-center items-center ">
      <div className="padding-x-1 relative h-[70%] w-[75%] bg-white rounded-lg shadow-lg flex justify-center md:h-[74%]">
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 h-[110px] w-[110px]  flex justify-center items-center border-[1px] border-stone-200 rounded-xl bg-white">
          <span className="font-bold text-5xl">PX</span>
        </div>
        <div className="w-[60%] mt-[90px]">
          <div className="text-center w-full">
            <p className="font-bold text-base">Start your free trial!</p>
            <p className=" text-base mt-[6px]">
              Register and create beautiful galleries
            </p>
          </div>
          <form className="flex flex-col w-full items-center">
            <Input
              type="text"
              className="mt-8 min-w-[250px] w-full max-w-[460px] h-[45px] p-5 bg-[#F0F0F0]"
              placeholder="First Name"
            />
            <Input
              type="text"
              className="mt-8 min-w-[250px] w-full max-w-[460px] h-[45px] p-5 bg-[#F0F0F0]"
              placeholder="Last Name"
            />
            <Input
              type="email"
              className="mt-8 min-w-[250px] w-full max-w-[460px] h-[45px] p-5 bg-[#F0F0F0]"
              placeholder="Email"
            />
            <Input
              type="password"
              className="mt-8 min-w-[250px] w-full max-w-[460px] h-[45px] p-5 bg-[#F0F0F0]"
              placeholder="Password"
            />
            <button className="h-[55px] w-[200px] bg-[#843232] text-xs rounded text-white mt-10">
              GET STARTED
            </button>
          </form>
          <div className="w-full mt-9 relative min-w-[150px]">
            <span className="absolute left-1/2 transform -translate-x-1/2 -top-[10px] text-sm bg-white px-5 text-[#434445] w-fit text-center">
              or Sign Up with
            </span>
            <hr className="mx-auto w-[50%] border-t-2 md:w-[100%]" />
          </div>

          <div className="flex justify-between mx-auto mt-14 w-[15%] min-w-[90px]">
            <FaFacebook size={40} className="mx-1 h-[30px] w-[30px]" />
            <FaGoogle size={40} className="mx-1 h-[30px] w-[30px]" />
          </div>
          <div className="text-[#434445] flex flex-col text-center text-sm mt-9">
            <span className="">By clicking "Get Started"</span>
            <span className="">you agree to our Terms of Use.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
