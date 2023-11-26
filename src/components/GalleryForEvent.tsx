const GalleryForEvent = () => {
  return (
    <div className="padding-x-1 h-[600px] w-full bg-[#343638] flex justify-between items-center md:flex-col md:h-[1000px] md:justify-start md:items-center">
      <div className="flex flex-col justify-center w-[33%] h-full md:w-full md:h-[400px]">
        <h2 className="text-white font-bold text-4xl">
          Gallery for event vendors in one place.
        </h2>

        <p className="text-white text-sm mt-5">
          Vendors can now have access to professional photos from their events
          to build their brand and business.
        </p>
      </div>
      <div className="flex justify-center w-[60%] md:w-full bg-white h-[75%] md:h-[400px]"></div>
    </div>
  );
};

export default GalleryForEvent;
