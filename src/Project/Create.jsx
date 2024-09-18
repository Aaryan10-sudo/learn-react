import React from "react";
import { hitApi } from "../services/HitApi";
import ProductForm from "./ProductForm";
import { useNavigate } from "react-router-dom";

const Create = () => {
  let navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      let result = await hitApi({
        url: `/product`,
        method: "POST",
        data: data,
      });
      console.log(result);
      navigate("/product");
    } catch (error) {}
  };
  return (
    <div>
      <ProductForm
        buttonName="Create Product"
        onSubmit={onSubmit}
        Product={""}
      />
    </div>
  );
};

export default Create;
