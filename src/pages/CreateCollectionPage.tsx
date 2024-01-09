import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LuPenLine } from "react-icons/lu";
import coverPhoto from "../assets/wedding_px/gettyimages.jpeg";
import CollectionSet from "../components/CollectionSet";
import InputGroup1 from "../components/InputGroup1";
import InputGroup2 from "../components/InputGroup2";
import { data } from "../json/dummyData";
import Select, { OnChangeValue, StylesConfig } from "react-select";

type OptionType = {
  value: string;
  label: string;
};

const customStyles: StylesConfig<OptionType, true> = {
  control: (provided) => ({
    ...provided,
    height: "65px", // Adjust the height as needed
  }),
};

const CreateCollectionPage = () => {
  const editMode = true;
  const collections = ["WEDDING", "ENGAGEMENT", "PRE-WEDDING"];
  const options: OptionType[] = [
    { value: "wedding", label: "Wedding" },
    { value: "pre-wedding", label: "Pre-Wedding" },
    { value: "engagement", label: "Engagement" },
  ];

  const handleSelectChange = (
    selectedOption: OnChangeValue<OptionType, true>
  ) => {
    if (selectedOption) {
      console.log("handleSelectChange -> ", selectedOption);
    }
  };

  return (
    <div className="h-fit flex justify-between md-lg-max:flex-col">
      <div className="w-[35%] md-lg-max:w-full flex flex-col items-center bg-[#E6E6E6] pb-32 md-lg-max:pb-16">
        <div className="flex justify-center items-center bg-[#487677] w-full h-[110px]">
          <h2 className=" text-center text-white">COLLECTION</h2>
        </div>

        <form className="flex flex-col w-[90%] md-lg-max:w-[70%] items-start mt-5">
          {editMode ? (
            <InputGroup1 label="Gallery Name" inputValue="Kwesi & Ama" />
          ) : (
            <div className="w-full mt-2">
              <label
                htmlFor="galleryName"
                className="text-gray-500 mt-2 text-xs font-semibold"
              >
                Gallery Name
              </label>
              <input
                type="text"
                className="mt-4 w-full h-[65px] p-5 bg-[#FCFCFC]"
                placeholder=""
                id="galleryName"
              />
            </div>
          )}

          {editMode ? (
            <InputGroup1 label="Project Date" inputValue="29th October, 2023" />
          ) : (
            <div className="w-full mt-10">
              <label
                htmlFor="galleryName"
                className="text-gray-500 mt-2 text-xs font-semibold"
              >
                Project Name
              </label>
              <input
                type="text"
                className="mt-4 w-full h-[65px] p-5 bg-[#FCFCFC]"
                placeholder=""
                id="galleryName"
              />
            </div>
          )}

          {editMode ? (
            <InputGroup2 label="Client Name" dataArray={data} infoType="name" />
          ) : (
            <div className="w-full mt-10">
              <label
                htmlFor="galleryName"
                className="text-gray-500 mt-2 text-xs font-semibold"
              >
                Client Name
              </label>
              <input
                type="text"
                className="mt-4 w-full h-[65px] p-5 bg-[#FCFCFC]"
                placeholder=""
                id="galleryName"
              />
            </div>
          )}

          {editMode ? (
            <InputGroup2
              label="Client Email"
              dataArray={data}
              infoType="email"
            />
          ) : (
            <div className="w-full mt-10">
              <label
                htmlFor="galleryName"
                className="text-gray-500 mt-2 text-xs font-semibold"
              >
                Client Email
              </label>
              <input
                type="text"
                className="mt-4 w-full h-[65px] p-5 bg-[#FCFCFC]"
                placeholder=""
                id="galleryName"
              />
            </div>
          )}

          <div className="w-full mt-10">
            <label
              htmlFor="galleryName"
              className=" text-gray-500  text-xs font-semibold"
            >
              Add Tag
            </label>

            <Select
              options={options}
              styles={customStyles}
              className="mt-4 w-full bg-[#FCFCFC] text-xs"
              onChange={handleSelectChange}
              isMulti={true}
              placeholder="Select"
            />

            {/* <input
              type="text"
              className="mt-4 w-full h-[65px] p-5 bg-[#FCFCFC]"
              placeholder=""
              id="galleryName"
            /> */}
            <p className="text-[10px] text-[#707070] mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, asperiores.
            </p>
          </div>

          <div className="w-full mt-10">
            <label
              htmlFor="galleryName"
              className=" text-gray-500  text-xs font-semibold"
            >
              Expiry Date
            </label>
            <input
              type="text"
              className="mt-4 w-full h-[65px] p-5 bg-[#FCFCFC]"
              placeholder=""
              id="galleryName"
            />
          </div>

          <div className="flex justify-between mt-10 md-lg-max:mt-[150px] w-full">
            <button
              className={
                "h-[65px] w-fit text-white text-xs  border-gray-400 bg-[#487677] px-9 py-5"
              }
            >
              Upload Cover Photo
            </button>
          </div>

          {editMode ? (
            <div className="w-full flex flex-col">
              <div className="flex justify-between mt-8 w-[95%] items-end">
                <div className="w-[65%] relative">
                  <label
                    htmlFor="galleryName"
                    className="w-full text-gray-500 mt-10 text-xs font-semibold"
                  >
                    Session Name
                  </label>
                  <div className="flex justify-between mt-4 w-full h-[65px] text-[#487677] items-center">
                    <span className="text-sm">WEDDING</span>
                    <div className="flex">
                      <span>
                        <LuPenLine className="cursor-pointer" size={20} />
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  className={
                    "w-[30%] h-[65px] text-white text-xs text-center border-gray-400 bg-[#487677] px-5 py-5"
                  }
                >
                  Upload Photos
                </button>
              </div>
              <div className="flex justify-between mt-8 w-[95%] items-end">
                <div className="w-[65%] relative">
                  <div className="flex justify-between mt-4 w-full h-[65px] text-[#487677] items-center">
                    <span className="text-sm">ENGAGEMENT</span>
                    <div className="flex">
                      <span>
                        <LuPenLine className="cursor-pointer" size={20} />
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  className={
                    "w-[30%] h-[65px] text-white text-xs text-center border-gray-400 bg-[#487677] px-5 py-5"
                  }
                >
                  Upload Photos
                </button>
              </div>
              <div className="flex justify-between mt-8 w-[95%] items-end">
                <div className="w-[65%] relative">
                  <div className="flex justify-between mt-4 w-full h-[65px] text-[#487677] items-center">
                    <span className="text-sm">PRE-WEDDING</span>
                    <div className="flex">
                      <span>
                        <LuPenLine className="cursor-pointer" size={20} />
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  className={
                    "w-[30%] h-[65px] text-white text-xs text-center border-gray-400 bg-[#487677] px-5 py-5"
                  }
                >
                  Upload Photos
                </button>
              </div>

              <div className="flex justify-between mt-8 w-[95%] items-end">
                <div className="w-[65%] relative">
                  <input
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
                    "w-[30%] h-[65px] text-white text-xs text-center border-gray-400 bg-[#487677] px-5 py-5"
                  }
                >
                  Upload Photos
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-col">
              <div className="flex justify-between mt-8 w-[85%] items-end">
                <div className="w-[65%] relative">
                  <label
                    htmlFor="galleryName"
                    className="w-full text-gray-500 mt-10 text-xs font-semibold"
                  >
                    Session Name
                  </label>
                  <input
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
                    "w-[30%] h-[65px] text-white text-xs text-center border-gray-400 bg-[#487677] px-5 py-5"
                  }
                >
                  Upload Photos
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-col mt-16 text-xs text-gray-700 w-full">
            <div className="flex mt-5 items-center">
              <input
                type="checkbox"
                className="cursor-pointer h-5 w-5 text-blue-600 focus:ring-blue-400 border-gray-300 rounded-md focus:outline-none focus:border-blue-300"
              />
              <span className="ml-5">
                Request email before entering the gallery
              </span>
            </div>
            <div className="flex mt-5 items-center">
              <input
                type="checkbox"
                className="cursor-pointer h-5 w-5 text-blue-600 focus:ring-blue-400 border-gray-300 rounded-md focus:outline-none focus:border-blue-300"
              />
              <span className="ml-5">
                Request email before entering the gallery
              </span>
            </div>

            <span className="mt-5 font-semibold">Downloads:</span>
            <div className="flex mt-5 items-center">
              <input
                type="checkbox"
                className="cursor-pointer h-5 w-5 text-blue-600 focus:ring-blue-400 border-gray-300 rounded-md focus:outline-none focus:border-blue-300"
              />
              <span className="ml-5">Allow free High-Res downloads</span>
            </div>
            <div className="flex mt-5 items-center">
              <input
                type="checkbox"
                className="cursor-pointer h-5 w-5 text-blue-600 focus:ring-blue-400 border-gray-300 rounded-md focus:outline-none focus:border-blue-300"
              />
              <span className="ml-5">Allow free Web size downloads</span>
            </div>

            <div className="w-full relative mt-6">
              <label
                htmlFor="galleryName"
                className="w-full text-gray-500 mt-10 text-xs font-semibold"
              >
                Gallery Styling Options
              </label>
              <input
                type="text"
                className="mt-2 w-full h-[65px] p-5 bg-[#FCFCFC]"
                placeholder=""
                id="galleryName"
              />
              <MdOutlineKeyboardArrowDown className="w-[20px] h-[20px] cursor-pointer absolute bottom-[25px] right-5" />
            </div>

            <button
              className={
                "h-[65px] w-[45%] text-white text-xs  border-gray-400 bg-[#487677] px-9 py-5 mt-5 ml-auto"
              }
            >
              Preview
            </button>
            <div className="flex justify-end mt-7 w-full">
              <button
                className={
                  "h-[65px] w-fit mr-3 text-white text-xs  border-gray-400 bg-[#d45353] px-9 py-5 mt-5"
                }
              >
                Cancel
              </button>
              <button
                className={
                  "h-[65px] w-fit text-white text-xs  border-gray-400 bg-[#487677] px-9 py-5 mt-5 "
                }
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
      {/*  */}
      <div className="w-[65%] md-lg-max:w-full bg-[#F0F0F0] flex flex-col px-10 pb-16 ">
        {editMode ? (
          <div className="flex flex-col items-center w-full mt-8">
            <div className="w-full h-[500px] relative">
              <img
                src={coverPhoto}
                alt="photo"
                className="w-full h-full object-cover"
              />
              <div className="rounded text-sm text-[#555252] absolute bg-white h-fit w-fit right-7 bottom-8 flex items-center py-3 px-7">
                <p className="mr-2">FOLLOW</p>{" "}
                <span className="absolute bottom-[11px] right-5 text-base">
                  +
                </span>
              </div>
            </div>
            {/* COLLECTIONS */}
            {collections.map((collection) => (
              <CollectionSet collectionName={collection} />
            ))}
            {/*  */}
          </div>
        ) : (
          <div className="h-[30%] w-full bg-[#919191] flex flex-col justify-end md-lg-max:h-[400px]">
            <div className="w-full text-sm text-white text-center">
              Created by
            </div>
            <div className="mt-3 mb-10 w-full text-2xl text-white text-center">
              RJAY Studios
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateCollectionPage;
