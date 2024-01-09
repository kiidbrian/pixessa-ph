import { FaPlus } from "react-icons/fa";
import SubInputGroup2 from "./SubInputGroup2";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
// import { LuPenLine } from "react-icons/lu";

type InputGroup2 = {
  label: string;
  dataArray: {
    email: string;
    name: string;
  }[];
  infoType: "name" | "email";
};
const InputGroup2 = ({ label, dataArray, infoType }: InputGroup2) => {
  const [isNewAddition, setIsNewAddition] = useState(false);
  return (
    // <div className={`w-full mt-2 ${isEditMode && "mb-8"}`}>
    <div className={`w-full mt-2 `}>
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <label htmlFor="galleryName" className="mt-2 text-xs font-semibold">
          {label}
        </label>
        <span
          className="cursor-pointer"
          onClick={() => {
            setIsNewAddition(!isNewAddition);
          }}
        >
          {!isNewAddition ? <FaPlus size={20} /> : <MdCancel size={20} />}
        </span>
      </div>
      {dataArray.map((item) => {
        return (
          <SubInputGroup2
            inputValue={infoType === "name" ? item.name : item.email}
          />
        );
      })}

      {isNewAddition && (
        <SubInputGroup2
          inputValue="New Client Name"
          isNewAddition={isNewAddition}
        />
      )}
    </div>
  );
};

export default InputGroup2;
