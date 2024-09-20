import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "../Redux/infoSlice";
import productSlice from "../Redux/productSlice";

export const store = configureStore({
  reducer: {
    info: infoSlice,
    product: productSlice,
  },
});
