import { FaFacebook, FaGoogle } from "react-icons/fa";
import { auth, googleProvider } from "../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type LoginFormDataType = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [, setError] = useState("");
  const navigate = useNavigate();

  const schema: ZodType<LoginFormDataType> = z.object({
    email: z.string().email(),
    password: z.string().min(5).max(25),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormDataType>({ resolver: zodResolver(schema) });

  const signIn = async (data: LoginFormDataType) => {
    setError("");
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("user -> ", user);
      navigate("/");
      console.log("Login successful!!!");
    } catch (err: unknown) {
      console.error(err);
      setError(err.message);
      console.log("ERROR MESSAGE ->", err);
      console.log("Sign in Failed");
    }
  };

  const signUpWithGoogle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError("");
    try {
      const user = await signInWithPopup(auth, googleProvider);
      console.log("user -> ", user);
      console.log("Google Sign in Successful");
    } catch (err: unknown) {
      console.error(err);
      console.log(err);
      setError(err.message);
      console.log("Google Sign in Failed");
    }
  };

  return (
    <div className="bg-[#F0F0F0] h-[1130px] flex justify-center items-center ">
      <div
        className={`
        relative w-[75%] bg-white h-[70%] rounded-lg shadow-lg flex justify-center 
        `}
      >
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 h-[110px] w-[110px]  flex justify-center items-center border-[1px] border-stone-200 rounded-xl bg-white">
          <span className="font-bold text-5xl">PX</span>
        </div>
        <div className="w-[60%] mt-[150px]">
          <div className="text-center w-full">
            <p className="font-bold text-base">Start your free trial!</p>
            <p className=" text-base mt-[6px]">
              Register and create beautiful galleries
            </p>
          </div>
          <form
            className="flex flex-col w-full items-center"
            onSubmit={handleSubmit(signIn)}
          >
            <input
              type="email"
              className="mt-12 w-full h-[45px] p-5 bg-[#F0F0F0]"
              placeholder="Email address"
              {...register("email")}
            />
            {errors.email && (
              <div className="w-full flex">
                <span className="mt-4 text-red-500 text-xs ">
                  {errors.email.message}
                </span>
              </div>
            )}
            <input
              type="password"
              className="mt-7 w-full h-[45px] p-5 bg-[#F0F0F0]"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <div className="w-full flex">
                <span className="mt-4 text-red-500 text-xs ">
                  {errors.password.message}
                </span>
              </div>
            )}

            <div className="h-[30px] w-full mt-5 flex justify-between items-center text-[#434445] text-sm sm:text-xs xs:flex-col xs:items-center">
              <div className="flex items-center w-[50%] xs:w-full">
                <input
                  type="checkbox"
                  className="h-5 w-5 text-blue-600 focus:ring-blue-400 border-gray-300 rounded-md focus:outline-none focus:border-blue-300"
                />
                <span className="ml-1  ">Remember me</span>
              </div>
              <p className="xs:w-full xs:mt-3">Forgot Password?</p>
            </div>

            <div className="flex justify-between text-sm mt-6 w-[90%] max-w-[180px]">
              <span className="text-gray-400">Have an account?</span>{" "}
              <Link to={"/sign-up"}>Sign Up</Link>
            </div>
            {/* <div
              className={`flex justify-center w-full xs:w-full mt-5 ${
                !error && "hidden"
              }`}
            >
              <span className="text-red-500">{error && error}</span>
            </div> */}
            <button
              type="submit"
              className="h-[55px] w-[200px] bg-[#157074] text-xs rounded text-white mt-7"
            >
              LOGIN
            </button>
          </form>
          <div className="w-full mt-9 relative min-w-[150px]">
            <span className="absolute left-1/2 transform -translate-x-1/2 -top-[10px] text-sm bg-white px-5 text-[#434445] w-fit text-center">
              or login with
            </span>
            <hr className="mx-auto w-[50%] border-t-2 md:w-[100%]" />
          </div>

          <div className="flex justify-between mx-auto mt-14 w-[15%] min-w-[90px]">
            <FaFacebook size={40} className="mx-1 h-[30px] w-[30px]" />
            <FaGoogle
              size={40}
              className="mx-1 h-[30px] w-[30px]"
              onClick={signUpWithGoogle}
            />
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

export default LoginPage;
