import Input from "../components/Input";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const CreateCollectionPage = () => {
  return (
    <div className="h-fit flex justify-between md-lg-max:flex-col">
      <div className="w-[35%] md-lg-max:w-full flex flex-col items-center bg-[#E6E6E6] pb-32">
        <div className="flex justify-center items-center bg-[#487677] w-full h-[110px]">
          <h2 className=" text-center text-white">COLLECTION</h2>
        </div>

        <form className="flex flex-col w-[90%] md-lg-max:w-[70%] items-start mt-5">
          <label
            htmlFor="galleryName"
            className="w-full text-gray-500 mt-2 text-xs font-semibold"
          >
            Gallery Name
          </label>
          <Input
            type="text"
            className="mt-4 w-full h-[65px] p-5 bg-[#FCFCFC]"
            placeholder=""
            id="galleryName"
          />

          <label
            htmlFor="galleryName"
            className="w-full text-gray-500 mt-10 text-xs font-semibold"
          >
            Project Name
          </label>
          <Input
            type="text"
            className="mt-4 w-full h-[65px] p-5 bg-[#FCFCFC]"
            placeholder=""
            id="projectName"
          />

          <label
            htmlFor="galleryName"
            className="w-full text-gray-500 mt-10 text-xs font-semibold"
          >
            Client Name
          </label>
          <Input
            type="text"
            className="mt-4 w-full h-[65px] p-5 bg-[#FCFCFC]"
            placeholder=""
            id="galleryName"
          />

          <label
            htmlFor="galleryName"
            className="w-full text-gray-500 mt-10 text-xs font-semibold"
          >
            Client Email
          </label>
          <Input
            type="text"
            className="mt-4 w-full h-[65px] p-5 bg-[#FCFCFC]"
            placeholder=""
            id="galleryName"
          />

          <label
            htmlFor="galleryName"
            className="w-full text-gray-500 mt-10 text-xs font-semibold"
          >
            Add Tag
          </label>
          <Input
            type="text"
            className="mt-4 w-full h-[65px] p-5 bg-[#FCFCFC]"
            placeholder=""
            id="galleryName"
          />
          <p className="text-[10px] text-[#707070] mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            asperiores.
          </p>

          <label
            htmlFor="galleryName"
            className="w-full text-gray-500 mt-10 text-xs font-semibold"
          >
            Expiry Date
          </label>
          <Input
            type="text"
            className="mt-4 w-full h-[65px] p-5 bg-[#FCFCFC]"
            placeholder=""
            id="galleryName"
          />
        </form>
      </div>
      <div className="w-[65%] md-lg-max:w-full bg-[#F0F0F0] flex flex-col px-10 pb-16">
        <div className="flex justify-between  mt-[170px] md-lg-max:mt-[50px] w-[85%]">
          <button
            className={
              "h-[65px] w-fit text-white text-xs  border-gray-400 bg-[#487677] px-9 py-5"
            }
          >
            Upload Cover Photo
          </button>
        </div>

        <div className="flex justify-between mt-8 w-[80%] items-end">
          <div className="w-[65%] relative">
            <label
              htmlFor="galleryName"
              className="w-full text-gray-500 mt-10 text-xs font-semibold"
            >
              Expiry Date
            </label>
            <Input
              type="text"
              className="mt-4 w-full h-[65px] p-5 bg-[#FCFCFC]"
              placeholder=""
              id="galleryName"
            />
            <div className="text-xs text-[#4B797A] absolute -bottom-7 right-1">
              <span className="text-base ">+</span> Add
            </div>
          </div>
          <button
            className={
              "h-[65px] w-fit text-white text-xs  border-gray-400 bg-[#487677] px-9 py-5"
            }
          >
            Upload Cover Photo
          </button>
        </div>

        <div className="flex flex-col mt-16 text-xs text-gray-700">
          <div className="flex mt-5 items-center">
            <input
              type="checkbox"
              className="h-5 w-5 text-blue-600 focus:ring-blue-400 border-gray-300 rounded-md focus:outline-none focus:border-blue-300"
            />
            <span className="ml-5">
              Request email before entering the gallery
            </span>
          </div>
          <div className="flex mt-5 items-center">
            <input
              type="checkbox"
              className="h-5 w-5 text-blue-600 focus:ring-blue-400 border-gray-300 rounded-md focus:outline-none focus:border-blue-300"
            />
            <span className="ml-5">
              Request email before entering the gallery
            </span>
          </div>

          <span className="mt-5 font-semibold">Downloads:</span>
          <div className="flex mt-5 items-center">
            <input
              type="checkbox"
              className="h-5 w-5 text-blue-600 focus:ring-blue-400 border-gray-300 rounded-md focus:outline-none focus:border-blue-300"
            />
            <span className="ml-5">Allow free High-Res downloads</span>
          </div>
          <div className="flex mt-5 items-center">
            <input
              type="checkbox"
              className="h-5 w-5 text-blue-600 focus:ring-blue-400 border-gray-300 rounded-md focus:outline-none focus:border-blue-300"
            />
            <span className="ml-5">Allow free Web size downloads</span>
          </div>

          <div className="w-[65%] relative mt-6">
            <label
              htmlFor="galleryName"
              className="w-full text-gray-500 mt-10 text-xs font-semibold"
            >
              Gallery Styling Options
            </label>
            <Input
              type="text"
              className="mt-4 w-full h-[65px] p-5 bg-[#FCFCFC]"
              placeholder=""
              id="galleryName"
            />
            <MdOutlineKeyboardArrowDown className="w-[20px] h-[20px] cursor-pointer absolute bottom-[25px] right-5" />
          </div>

          <button
            className={
              "h-[65px] w-fit text-white text-xs  border-gray-400 bg-[#487677] px-9 py-5 mt-5"
            }
          >
            Preview
          </button>
          <div className="flex justify-end mt-7">
            <button
              className={
                "h-[65px] w-fit text-white text-xs  border-gray-400 bg-[#487677] px-9 py-5 mt-5 mr-5"
              }
            >
              Preview
            </button>
            <button
              className={
                "h-[65px] w-fit text-white text-xs  border-gray-400 bg-[#d45353] px-9 py-5 mt-5"
              }
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCollectionPage;
