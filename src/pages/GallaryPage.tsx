import photo from "../assets/wedding_px/gettyimages.jpeg";
import wedding_px from "../assets/wedding_px/_MG_0971.jpg";

const GallaryPage = () => {
  return (
    <div className="w-full pb-28">
      <div className="w-full h-[700px] relative">
        <img src={photo} alt="photo" className="w-full h-full object-cover" />
        <div className="rounded text-sm text-[#555252] absolute bg-white h-fit w-fit right-7 bottom-8 flex items-center py-3 px-7">
          <p className="mr-2">FOLLOW</p>{" "}
          <span className="absolute bottom-[11px] right-5 text-base">+</span>
        </div>
      </div>

      <div className="flex flex-col items-center w-full mt-8 padding-x-1">
        <div className="flex justify-between items-center w-full">
          <span className="text-base font-semibold">WEDDING</span>
        </div>

        <div className="grid grid-cols-4 gap-3 h-fit w-full md:grid-cols-1 md:justify-center md-md-min:grid-cols-2 md-lg-min:grid-cols-4 mt-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((iter) => {
            return (
              <div
                className="w-full h-[350px] bg-transparent flex flex-col"
                key={`key-${iter}`}
              >
                <img
                  src={wedding_px}
                  alt="wedding_px"
                  className="object-cover w-full h-[82%]"
                />
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

export default GallaryPage;
