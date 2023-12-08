import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type SignUpFormDataType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpPage = () => {
  const [, setError] = useState("");
  const navigate = useNavigate();

  const schema: ZodType<SignUpFormDataType> = z
    .object({
      firstName: z.string().min(2).max(20),
      lastName: z.string().min(2).max(20),
      email: z.string().email(),
      password: z.string().min(6).max(25),
      confirmPassword: z.string().min(6).max(25),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match!",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormDataType>({
    resolver: zodResolver(schema),
  });

  const signUp = async (data: SignUpFormDataType) => {
    setError("");
    console.log("SIGN UP RAN");

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("user -> ", user);
      navigate("/");
      console.log("Sign Up Successful");
    } catch (err: unknown) {
      console.error(err);
      setError(err.message);
      console.log("ERROR MESSAGE ->", err);
      console.log("Sign Up Failed");
    }
  };

  const signUpWithGoogle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
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

  console.log("User -> ", auth?.currentUser?.email);

  return (
    <div className=" bg-[#F0F0F0] h-fit flex justify-center items-center py-20">
      <div className="padding-x-1 relative h-fit  w-[75%] bg-white rounded-lg shadow-lg flex justify-center md:h-[74%] pb-12">
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
          <form
            className="flex flex-col w-full items-center"
            onSubmit={handleSubmit(signUp)}
          >
            <input
              type="text"
              className="mt-8 min-w-[250px] w-full max-w-[460px] h-[45px] p-5 bg-[#F0F0F0]"
              placeholder="First Name"
              {...register("firstName")}
            />
            {errors.firstName && (
              <div className="w-full flex">
                <span className="mt-4 text-red-500 text-xs ">
                  {errors.firstName.message}
                </span>
              </div>
            )}
            <input
              type="text"
              className="mt-8 min-w-[250px] w-full max-w-[460px] h-[45px] p-5 bg-[#F0F0F0]"
              placeholder="Last Name"
              // onChange={(e) => {
              //   setLastName(e.target.value);
              // }}
              {...register("lastName")}
            />
            {errors.lastName && (
              <div className="w-full flex">
                <span className="mt-4 text-red-500 text-xs ">
                  {errors.lastName.message}
                </span>
              </div>
            )}
            <input
              type="email"
              className="mt-8 min-w-[250px] w-full max-w-[460px] h-[45px] p-5 bg-[#F0F0F0]"
              placeholder="Email"
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
              className="mt-8 min-w-[250px] w-full max-w-[460px] h-[45px] p-5 bg-[#F0F0F0]"
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
            <input
              type="password"
              className="mt-8 min-w-[250px] w-full max-w-[460px] h-[45px] p-5 bg-[#F0F0F0]"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <div className="w-full flex">
                <span className="mt-4 text-red-500 text-xs ">
                  {errors.confirmPassword.message}
                </span>
              </div>
            )}
            {/* <div
              className={`flex justify-center w-full xs:w-full mt-5 ${
                !error && "hidden"
              }`}
            >
              <span className="text-red-500">{error && error}</span>
            </div> */}
            <div className="flex justify-between text-sm mt-6 w-[90%] max-w-[160px]">
              <span className="text-gray-400">Have an account?</span>{" "}
              <Link to={"/login"}>Login</Link>
            </div>
            <button
              className="h-[55px] w-[200px] bg-[#843232] text-xs rounded text-white mt-5"
              type="submit"
            >
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

export default SignUpPage;
