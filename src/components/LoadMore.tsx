import spinner from "../assets/spinner/no-bg-spinner.gif";

type LoadMoreTypes = {
  handleLoadMore: () => void;
  isFetching: boolean;
};

const LoadMore = ({ handleLoadMore, isFetching }: LoadMoreTypes) => {
  if (isFetching) {
    return (
      <div
        className=" h-[100px] bg-transparent flex cursor-pointer  justify-center items-center"
        key={`loadMore`}
      >
        <img src={spinner} alt="hh" className="w-[60%] h-[60%]" />
      </div>
    );
  }

  return (
    <div
      onClick={() => {
        handleLoadMore();
      }}
      className="h-[100px] bg-transparent flex cursor-pointer justify-center items-center border-neutral-500 border-[1px] hover:bg-[#E6E6E6]"
      key={`loadMore`}
    >
      <p className="text-base w-[50%] text-center">More</p>
    </div>
  );
};

export default LoadMore;
