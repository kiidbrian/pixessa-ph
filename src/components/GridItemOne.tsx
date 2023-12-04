import { useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import wedding_px from "../assets/wedding_px/_MG_0971.jpg";

type GridItemOneTypes = {
  iter: number;
};

const GridItemOne = ({ iter }: GridItemOneTypes) => {
  const [editPhoto, setEditPhoto] = useState(false);
  return (
    <div
      onClick={() => {
        setEditPhoto(!editPhoto);
      }}
      className=" h-[100px] bg-transparent flex flex-col relative"
      key={`key-${iter}`}
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
