import Input from "../components/Input";
import { IoSearch } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import wedding_px from "../assets/wedding_px/_MG_0971.jpg";
import { useNavigate } from "react-router-dom";

const ClientGalleriesPage = () => {
  const navigate = useNavigate();
  return (
    <div className="padding-x-1 bg-[#F0F0F0] flex flex-col items-center pt-6 pb-20 h-fit">
      <div className="w-[60%] h-fit relative">
        <IoSearch className="absolute right-4 bottom-3 cursor-pointer" />
        <Input
          className="mt-7 w-full h-[45px] p-5 bg-[#E8E8E8] rounded-2xl"
          placeholder="Search"
          type="text"
        />
      </div>

      <div className="flex justify-between items-center mt-7 sm:gap-1  ">
        <span className="text-sm mx-1">By Date:</span>
        <span className="text-sm  mx-1 sm:border-l-stone-700 sm:border-l-[1px] sm:pl-3">
          All
        </span>
        <MdOutlineKeyboardArrowDown className="w-[20px] h-[20px]" />
        <span className="text-sm  mx-1 sm:border-l-stone-700 sm:border-l-[1px] sm:pl-3">
          All Occasions
        </span>
        <MdOutlineKeyboardArrowDown className="w-[20px] h-[20px]" />
        <span className="text-sm  mx-1 sm:border-l-stone-700 sm:border-l-[1px] sm:pl-3">
          All Vendors
        </span>
        <MdOutlineKeyboardArrowDown className="w-[20px] h-[20px]" />
        <span className="text-sm  mx-1 sm:border-l-stone-700 sm:border-l-[1px] sm:pl-3">
          All Statuses
        </span>
        <MdOutlineKeyboardArrowDown className="w-[20px] h-[20px]" />
      </div>

      <div className="flex flex-col items-center w-full mt-8">
        <div className="flex justify-between items-center w-full">
          <span className="text-base font-semibold">Client Galleries</span>
          <div className="text-base text-[#4B797A] ">
            <span className="text-2xl ">+</span> New Gallery
          </div>
        </div>
        {/*  */}

        <div className="grid grid-cols-4 gap-3 h-fit w-full md:grid-cols-1 md:justify-center md-md-min:grid-cols-2 md-lg-min:grid-cols-4 mt-5">
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9,
            10, 11, 12,
          ].map((iter) => {
            return (
              <div
                className="w-full h-[350px] bg-transparent flex flex-col cursor-pointer relative group"
                key={`key-${iter}`}
              >
                <img
                  src={wedding_px}
                  alt="wedding_px"
                  className="object-cover w-full h-[82%]"
                />

                <div
                  onClick={() => {
                    navigate("/create-collection");
                  }}
                  className="absolute inset-x-0 top-0 bottom-[18%] flex items-center justify-center opacity-0 group-hover:opacity-60 group-hover:bg-black transition-opacity"
                >
                  <div className="text-white text-center">
                    <p className="text-2xl">EDIT</p>
                  </div>
                </div>
                <div className="text-center bg-transparent flex flex-col justify-center items-center h-[18%]">
                  <p className="text-sm font-semibold">Kwesi & Ama</p>
                  <p className="text-[9px] text-[#A29A9A] mt-[3.5px]">
                    24th Oct, 2023
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ClientGalleriesPage;
