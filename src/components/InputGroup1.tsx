import { useState } from "react";
import { LuPenLine } from "react-icons/lu";

type InputGroup1 = {
  label: string;
  inputValue: string;
};
const InputGroup1 = ({ label, inputValue }: InputGroup1) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [newInput, setNewInput] = useState(inputValue);
  return (
    <div className={`w-full mt-2 ${isEditMode && "mb-8"}`}>
      <label
        htmlFor="galleryName"
        className="text-gray-500 mt-2 text-xs font-semibold"
      >
        {label}
      </label>

      <div className="flex justify-between mt-4 w-full h-[65px] text-[#487677]">
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
          <>
            <span className="text-sm">{newInput}</span>
            <LuPenLine
              className="cursor-pointer"
              size={20}
              onClick={() => {
                setIsEditMode(!isEditMode);
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default InputGroup1;
