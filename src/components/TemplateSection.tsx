import NavigationButton from "./NavigationButton";

const TemplateSection = () => {
  return (
    <div className="padding-x-1 h-fit w-full bg-[#F6F8F9] flex flex-col items-center py-20">
      <h2 className="font-bold text-4xl  w-[75%] text-center">
        Smart &#38; beautiful landing pages for your photography business.
      </h2>

      <div className="flex justify-center w-full mt-14 flex-wrap gap-3 h-fit">
        <div className="h-[300px] w-[370px] bg-white shadow-md"></div>
        <div className="h-[300px] w-[370px] bg-white shadow-md"></div>
        <div className="h-[300px] w-[370px] bg-white shadow-md"></div>
      </div>

      <NavigationButton
        to="/"
        className={
          "h-[55px] w-[200px] bg-[#843232] text-xs  rounded text-white mt-16"
        }
      >
        MORE TEMPLATES
      </NavigationButton>
    </div>
  );
};

export default TemplateSection;
