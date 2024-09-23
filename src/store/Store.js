import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "../Redux/infoSlice";
import productSlice from "../Redux/productSlice";
import { productApi } from "../services/Api/productService";

export const store = configureStore({
  reducer: {
    info: infoSlice,
    product: productSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
