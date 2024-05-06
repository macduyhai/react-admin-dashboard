import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import dotenv from "dotenv"
// dotenv.config()

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl:"http://192.168.0.184:8585/"}), //192.168.0.184 - http://14.241.68.101:21883/
    reducerPath: "adminApi",
    tagTypes: [
       "User" 
    ],
    endpoints: (build) =>({
        getUser: build.query({
            query: ({ page, limit, with_count }) => ({
              url: "api/v1/users",
              method: "GET",
              params: { page, limit, with_count },
            }),
            providesTags: ["User"],
          }),
    })

})

export const {
    useGetUserQuery,
  } = api;
  