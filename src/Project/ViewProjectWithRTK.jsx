import React from "react";
import { useParams } from "react-router-dom";
import { useReadProductByIdQuery } from "../services/Api/productService";

const ViewProjectWithRTK = () => {
  let params = useParams();
  let result = useReadProductByIdQuery(params.id);
  //   console.log(result?.data?.data);
  let product = result?.data?.data || {};

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <div style={{ margin: "20px" }}>
        <img src={product.ProductImage} />
      </div>

      <div style={{ marginTop: "80px" }}>
        <div>
          <span style={{ fontWeight: "600" }}>Product Name : </span>
          {product.Name}
        </div>
        <br />
        <div>
          {" "}
          <span style={{ fontWeight: "600" }}>Quantity : </span>
          {product.Quantity}
        </div>
        <br />
        <div>
          <span style={{ fontWeight: "600" }}>
            Company : {product.Company}{" "}
          </span>
        </div>
        <br />
        <div>
          <span style={{ fontWeight: "600" }}>Manufactured Date : </span>
          {product.ManufactureDate}
        </div>
        <br />
        <div
          style={{
            fontWeight: "600",
            backgroundColor: "black",
            color: "White",
            width: "100px",
            height: "30px",
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Rs.{product.Price}
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default ViewProjectWithRTK;
