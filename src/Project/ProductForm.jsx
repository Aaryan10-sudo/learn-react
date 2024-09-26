import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { hitApi } from "../services/HitApi";

const ProductForm = ({
  buttonName = "",
  onSubmit = () => {},
  Product = {},
  isLoading = false,
}) => {
  let [Name, setName] = useState(Product?.Name || "");
  let [Quantity, setQuantity] = useState(Product?.Quantity || 0);
  let [Price, setPrice] = useState(Product?.Price || 0);
  let [Featured, setFeatured] = useState(Product?.Featured || false);
  let [ManufactureDate, setManufactureDate] = useState(
    Product?.ManufactureDate || ""
  );
  let [ProductImage, setProductImage] = useState(Product?.ProductImage || "");
  let [Company, setCompany] = useState(Product?.Company || "");

  let Companies = [
    { label: "Choose a company" },
    { label: "Apple", value: "Apple" },
    { label: "Dell", value: "Dell" },
    { label: "HP", value: "HP" },
    { label: "Lenovo", value: "Lenovo" },
    { label: "Samsung", value: "Samsung" },
  ];

  const onDrop = useCallback(async (acceptedFiles) => {
    let fileData = acceptedFiles[0];
    let data = new FormData();
    data.append("document", fileData);

    try {
      let result = await hitApi({
        url: `/file/single`,
        method: "POST",
        data: data,
      });
      console.log(result);
      setProductImage(result.data.result);
    } catch (error) {}
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  useEffect(() => {
    setName(Product?.Name || "");
    setQuantity(Product?.Quantity || 0);
    setPrice(Product?.Price || 0);
    setFeatured(Product?.Featured || false);
    setManufactureDate(Product?.ManufactureDate || "");
    setProductImage(Product?.ProductImage || "");
    setCompany(Product?.Company || "");
  }, [Product]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      Name,
      Quantity,
      Price,
      Featured,
      ManufactureDate,
      ProductImage,
      Company,
    };
    onSubmit(formData);
  };
  return (
    <div>
      <form style={{ margin: "10px" }} onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="ProductName"
            value={Name}
            style={{ margin: "10px" }}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Quantity"
            value={Quantity}
            style={{ margin: "10px" }}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Price"
            value={Price}
            style={{ margin: "10px" }}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Featured</label>
          <input
            type="checkbox"
            value={Featured}
            style={{ margin: "10px" }}
            checked={Featured === true}
            onChange={(e) => {
              setFeatured(e.target.checked);
            }}
          />
        </div>
        <div
          {...getRootProps()}
          style={{ border: "1px solid black", width: "300px" }}
        >
          <label>Product Image : </label>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag and drop some files here, or click to select files</p>
          )}
          {ProductImage ? (
            <img
              src={ProductImage}
              alt="Product Image"
              height={"100px"}
              width={"100px"}
            ></img>
          ) : null}
          {/* <input
        type="file"
        placeholder=""
        value={ProductImage}
        style={{ margin: "10px" }}
        onChange={(e) => {
          setProductImage(e.target.value);
        }}
      /> */}
        </div>
        <div>
          <input
            type="date"
            value={ManufactureDate}
            onChange={(e) => {
              setManufactureDate(e.target.value);
            }}
          />
        </div>
        <div>
          <select
            style={{ margin: "10px" }}
            value={Company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          >
            {Companies.map((value, index) => {
              return (
                <option
                  key={index}
                  value={value.value}
                  label={value.label}
                ></option>
              );
            })}
          </select>
        </div>
        <button>{isLoading ? "Creating...." : buttonName}</button>
      </form>
    </div>
  );
};
export default ProductForm;
