const GalleryLive = () => {
  return (
    <div className="bg-[#F0F0F0] h-[950px] flex justify-center items-center ">
      <div className="relative h-[50%] w-[75%] bg-white rounded-lg shadow-lg flex justify-center items-center">
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 h-[110px] w-[110px]  flex justify-center items-center border-[1px] border-stone-200 rounded-xl bg-white">
          <span className="font-bold text-5xl">PX</span>
        </div>
        <div className="w-[60%] flex flex-col items-center">
          <div className="text-center w-full">
            <p className="font-bold text-3xl text-[#157074]">
              Awesome! Gallery is live.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryLive;
