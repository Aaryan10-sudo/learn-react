import React, { useEffect } from "react";
import ProductForm from "./ProductForm";
import { useNavigate } from "react-router-dom";
import { useCreateProductMutation } from "../services/Api/productService";

const CreateProductUsingRTK = () => {
  let navigate = useNavigate();
  let [createProduct, { isLoading, isError, error, data, isSuccess }] =
    useCreateProductMutation();
  console.log(data);

  const onSubmit = async (data) => {
    createProduct(data);
  };
  useEffect(() => {
    if (isSuccess) {
      console.log("Created Successfully");
      navigate("/product");
    }
    if (isError) {
      console.log(error.error);
    }
  }, [isError, error, isSuccess]);
  return (
    <div>
      <ProductForm
        buttonName="Create Product"
        onSubmit={onSubmit}
        Product={""}
        isLoading={isLoading}
      />
    </div>
  );
};

export default CreateProductUsingRTK;
