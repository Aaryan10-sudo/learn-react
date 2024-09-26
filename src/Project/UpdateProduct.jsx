// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { hitApi } from "../services/HitApi";
// import ProductForm from "./ProductForm";

// const UpdateProduct = () => {
//   let [product, setProduct] = useState({});
//   let navigate = useNavigate();
//   let params = useParams();

//   const getData = async () => {
//     try {
//       let result = await hitApi({
//         url: `/product/${params.id}`,
//         method: "GET",
//       });
//       setProduct(result.data.data);
//     } catch (error) {}
//   };
//   useEffect(() => {
//     getData();
//   }, []);

//   const onSubmit = async (data) => {
//     try {
//       let result = await hitApi({
//         url: `/product/${params.id}`,
//         method: "PATCH",
//         data: data,
//       });
//       console.log(result);
//       navigate(`/product/${params.id}`);
//     } catch (error) {}
//   };
//   return (
//     <>
//       <ProductForm
//         buttonName="Update Product"
//         onSubmit={onSubmit}
//         Product={product}
//       />
//     </>
//   );
// };

// export default UpdateProduct;
