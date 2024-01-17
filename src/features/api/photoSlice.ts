import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Photo } from "../../types/requestTypes";

export const photoApi = createApi({
  reducerPath: "photoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => {
    return {
      getPhotos: builder.query<Photo[], number>({
        query: (batchNum: number) =>
          `photos?_start=${(batchNum - 1) * 10}&_limit=10`,
      }),
    };
  },
});

export const { useGetPhotosQuery } = photoApi;
