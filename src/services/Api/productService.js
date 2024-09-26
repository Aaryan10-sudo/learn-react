// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../config/config";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  tagTypes: ["readProduct"],

  endpoints: (builder) => ({
    readProduct: builder.query({
      query: () => {
        return {
          url: "/product",
          method: "GET",
        };
      },
      providesTags: ["readProduct"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/product/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["readProduct"],
    }),

    readProductById: builder.query({
      query: (id) => {
        return {
          url: `/product/${id}`,
          method: "GET",
        };
      },
      providesTags: ["readProductById"],
    }),

    createProduct: builder.mutation({
      query: (data) => {
        return {
          url: "/product",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["readProduct"],
    }),

    updateProduct: builder.mutation({
      query: (info) => {
        return {
          url: `/product/${info.id}`,
          method: "PATCH",
          body: info.body,
        };
      },
      invalidatesTags: ["readProduct", "readProductById"],
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useReadProductQuery,
  useDeleteProductMutation,
  useReadProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
} = productApi;
