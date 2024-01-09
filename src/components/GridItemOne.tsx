import { useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import wedding_px from "../assets/wedding_px/_MG_0971.jpg";
import { Photo } from "../types/requestTypes";

type GridItemOneTypes = {
  item: Photo;
  itemIndexNum: number;
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
  applyIndex: (index: number) => void;
};

const GridItemOne = ({
  item,
  itemIndexNum,
  isSelected,
  setIsSelected,
  applyIndex,
}: GridItemOneTypes) => {
  const [editPhoto, setEditPhoto] = useState(false);
  return (
    <div
      onClick={() => {
        setEditPhoto(!editPhoto);
        setIsSelected(!isSelected);
        applyIndex(itemIndexNum);
      }}
      className=" h-[100px] bg-transparent flex flex-col relative cursor-pointer"
      key={`key-${item.id}`}
    >
      <div
        className={`bg-black opacity-[0.20] absolute top-0 left-0 right-0 bottom-0 ${
          !editPhoto && "hidden"
        }`}
      ></div>
      <span
        className={`bottom-2 left-2 absolute text-white ${
          !editPhoto && "hidden"
        }`}
      >
        <IoIosCheckmarkCircleOutline size={20} />
      </span>
      <img
        src={wedding_px}
        alt="wedding_px"
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default GridItemOne;
