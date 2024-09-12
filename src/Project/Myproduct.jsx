import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Myproduct = () => {
  let [product, setProduct] = useState([]);

  const myProduct = async () => {
    try {
      let result = await axios({
        url: `http://localhost:3000/product`,
        method: "GET",
      });
      setProduct(result.data.data);
    } catch (error) {}
  };

  const handleDelete = async (id) => {
    try {
      let result = await axios({
        url: `http://localhost:3000/product/${id}`,
        method: "DELETE",
      });
      myProduct();
      console.log(result);
    } catch (error) {}
  };
  const sweetalert2 = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(id);
      }
    });
  };
  useEffect(() => {
    myProduct();
  }, []);
  return (
    <div style={{ display: "flex" }}>
      {product.map((value, index) => {
        return (
          <div
            key={index}
            style={{
              border: "1px solid black",
              margin: "10px",
              height: "300px",
              width: "300px",
            }}
          >
            <div
              style={{
                height: "100px",
                width: "150px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={value.ProductImage} height={"100px"} width={"full"} />
            </div>
            <br />
            <div style={{ padding: "10px" }}>Product Name :{value.Name}</div>
            <div style={{ padding: "10px" }}>Price :{value.Price}</div>
            <div style={{ padding: "10px" }}>Quantity :{value.Quantity}</div>
            <br />
            <button style={{ margin: "7px" }}>View</button>
            <button style={{ margin: "7px" }}>Update</button>
            <button
              style={{ margin: "7px" }}
              onClick={() => {
                sweetalert2(value._id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
  ``;
};

export default Myproduct;
