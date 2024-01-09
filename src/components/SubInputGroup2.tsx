import { useState } from "react";
import { LuPenLine } from "react-icons/lu";

type SubInputGroup2 = {
  inputValue: string;
  isNewAddition?: boolean;
};

const SubInputGroup2 = ({ inputValue, isNewAddition }: SubInputGroup2) => {
  const handleIsNewAddition = () => {
    if (isNewAddition) {
      return true;
    }
    return false;
  };

  const [isEditMode, setIsEditMode] = useState(handleIsNewAddition);
  const [newInput, setNewInput] = useState(inputValue);
  return (
    <div
      className={`flex flex-col justify-between w-full ${
        isEditMode ? "h-[65px] mb-9" : "h-[65px]"
      } text-[#487677]`}
    >
      {isEditMode ? (
        <div className="w-full relative">
          <input
            type="text"
            className="w-full h-full p-5 bg-[#FCFCFC]"
            placeholder=""
            id="galleryName"
            value={newInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setNewInput(e.target.value);
            }}
          />
          <div
            className="text-xs text-[#4B797A] absolute -bottom-7 right-1 cursor-pointer"
            onClick={() => {
              setIsEditMode(!isEditMode);
            }}
          >
            <span className="text-base ">+</span> Save
          </div>
        </div>
      ) : (
        <div className="flex justify-between mt-2">
          <span className="text-sm">{newInput}</span>
          <LuPenLine
            className="cursor-pointer"
            size={20}
            onClick={() => {
              setIsEditMode(!isEditMode);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default SubInputGroup2;
