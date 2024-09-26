import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "./ProductForm";
import {
  useReadProductByIdQuery,
  useUpdateProductMutation,
} from "../services/Api/productService";

const UpdateProductWithRTK = () => {
  let navigate = useNavigate();
  let params = useParams();

  let [updateProduct, { isLoading, isError, isSuccess, data, error }] =
    useUpdateProductMutation();

  let result = useReadProductByIdQuery(params.id);
  console.log(result?.data);
  let product = result?.data?.data || {};

  useEffect(() => {
    if (isError) {
      console.log(error);
    }
  }, [isError, error]);

  useEffect(() => {
    if (isSuccess) {
      console.log("updated");
      navigate("/product");
    }
  }, [isSuccess]);

  const onSubmit = async (body) => {
    updateProduct({ id: params.id, body: body });
  };
  return (
    <>
      <ProductForm
        buttonName="Update Product"
        onSubmit={onSubmit}
        Product={product}
      />
    </>
  );
};

export default UpdateProductWithRTK;
