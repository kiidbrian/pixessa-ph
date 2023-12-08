import blackman from "./../assets/blackman.jpg";
const Testimonials = () => {
  return (
    <div className="flex flex-col justify-center items-center my-24 ">
      <h2 className="font-bold text-4xl md:text-center">
        What our users are saying
      </h2>
      <div className="flex  w-[80%] mt-10 md:flex-col md:items-center md:mt-16">
        <div className="w-[30%] flex flex-col items-center md:w-full mr-10">
          <img
            src={blackman}
            alt="photo_avatar"
            className="object-cover rounded-full w-[150px] h-[150px]"
          />
          <span className="text-[#707070] mt-2">Ben Reed</span>
          <span className="text-[#707070] text-xs">
            Wedding &#38; Event Photographer
          </span>
        </div>
        <div className="w-[60%] flex flex-col mt-10 md:w-full">
          <p className="text-[#707070] md:text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis libero suscipit asperiores ipsum deleniti laboriosam
            odio laudantium ducimus! Optio, numquam! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Dolorum fugiat dicta architecto iure
            distinctio eum nam quisquam ipsum unde? Fugit non repellendus,
            sapiente corporis aliquam fugiat veniam deleniti iste unde.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
