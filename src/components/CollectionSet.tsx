import { useCallback, useEffect, useState } from "react";
import { useGetPhotosQuery } from "../features/api/photoSlice";
import GridItemOne from "./GridItemOne";
import LoadMore from "./LoadMore";
import { Photo } from "../types/requestTypes";
import ImageViewer from "react-simple-image-viewer";

type CollectionSetType = {
  collectionName: string;
};

const CollectionSet = ({ collectionName }: CollectionSetType) => {
  const [batchNum, setBatchNum] = useState(1);
  const [isSelected, setIsSelected] = useState(false);

  // IMAGE VIEWER STATES
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const {
    data: photosData,
    isLoading,
    isError,
    // isSuccess,
    isFetching,
  } = useGetPhotosQuery(batchNum);
  const [photos, setPhotos] = useState<Photo[] | []>([]);

  useEffect(() => {
    if (!isLoading && !isError && batchNum === 1 && photosData) {
      setPhotos([...photosData]);
    }
  }, [isLoading, isError]);

  useEffect(() => {
    if (!isLoading && !isError && photosData) {
      setPhotos((prevPhotos) => {
        console.log("prevResult -> ", prevPhotos);
        return [...prevPhotos, ...photosData];
      });
    }
  }, [batchNum]);

  const applyIndex = useCallback((index: number) => {
    setCurrentImage(index);
    // setIsViewerOpen(true);
  }, []);

  const openViewer = useCallback(() => {
    // setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading photos</p>;
  }

  const handleLoadMore = () => {
    setBatchNum((batchNum) => batchNum + 1);
  };

  const images: string[] = [];

  return (
    <div className="flex flex-col w-full mt-7">
      <div className="flex justify-between items-center w-full">
        <span className="text-base font-semibold">{collectionName}</span>
        <div className="text-xs text-[#4B797A] ">
          {isSelected ? (
            <>
              <span
                className="ml-4 cursor-pointer"
                onClick={() => openViewer()}
              >
                View
              </span>
              <span className="ml-4 cursor-pointer">Delete</span>
            </>
          ) : (
            <span className="ml-4 text-[#6e9d9d]">Select a Photo</span>
          )}
          {/* <span className="ml-4">Hide</span>
          <span className="ml-4">Move</span>
          <span className="ml-4">Copy</span> */}
        </div>
      </div>
      <div className="grid grid-cols-6 gap-2 w-full md-xxs-min:grid-cols-2 md-xs-min:grid-cols-3 md-sm-min:grid-cols-3 md:justify-center md-md-min:grid-cols-4 md-lg-min:grid-cols-7 mt-5">
        {photos.map((item, itemIndexNum) => {
          images.push(item.url);
          return (
            <GridItemOne
              item={item}
              itemIndexNum={itemIndexNum}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
              applyIndex={applyIndex}
            />
          );
        })}

        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={false}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)",
            }}
            closeOnClickOutside={true}
          />
        )}
        <LoadMore handleLoadMore={handleLoadMore} isFetching={isFetching} />
      </div>
    </div>
  );
};

export default CollectionSet;
