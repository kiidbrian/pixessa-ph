import NavigationButton from "./NavigationButton";

const Hero = () => {
  return (
    <div className="padding-x-1 flex justify-between bg-gradient-to-r from-[#003F41] via-[#003F41] to-[#047074] w-full sm:h-fit sm:flex-col  ">
      <div className="flex flex-col justify-center w-[42%] h-[500px] sm:w-full">
        <h2 className="text-white font-bold text-4xl">
          A great way to share your storage space with your clients.
        </h2>

        <p className="text-white text-sm mt-5">
          Pixessa gives your clients unlimited access to their beautiful <br />
          galleries after they expire for a monthly subscription of $2.99
        </p>

        <hr className="mt-5" />

        <NavigationButton
          to="/"
          className={
            "h-[48px] w-[130px] bg-[#000000] text-xs  rounded text-white mt-8"
          }
        >
          SIGN UP
        </NavigationButton>
      </div>
      <div className="flex flex-col justify-center w-[42%] bg-yellow-200 h-[500px] sm:w-full"></div>
    </div>
  );
};

export default Hero;
