import { FaHandshakeAngle } from "react-icons/fa6";

const ServiceList = () => {
  return (
    <div className="padding-x-1 py-20 flex items-center justify-center h-fit">
      <div className="grid grid-cols-4 gap-3 h-fit md:grid-cols-1 md:justify-center md-md-min:grid-cols-2 md-lg-min:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
          return (
            <div
              className={`p-4 flex flex-col items-center md:w-[55%] mx-auto min-w-[230px]`}
              key={`${item} + item`}
            >
              <div className="flex flex-col w-[100%] h-full items-center text-center">
                <div className="h-[30px]">
                  <FaHandshakeAngle
                    className="m-auto text-[#8B8888]"
                    size={35}
                  />
                </div>
                <p className="font-bold text-sm text-[#000000] mt-4">
                  CUSTOMER SUPPORT
                </p>
                <p className="text-xs text-[#767373] font-light mt-1 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
                  blanditiis consectetur sapiente totam ipsam.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceList;
