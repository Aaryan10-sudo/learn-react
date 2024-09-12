import axios from "axios";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const Create = () => {
  let [Name, setName] = useState("");
  let [Quantity, setQuantity] = useState(0);
  let [Price, setPrice] = useState(0);
  let [Featured, setFeatured] = useState(false);
  let [ManufactureDate, setManufactureDate] = useState("");
  let [ProductImage, setProductImage] = useState("");
  let [Company, setCompany] = useState("");

  let Companies = [
    { label: "Choose a company" },
    { label: "Apple", value: "Apple" },
    { label: "Dell", value: "Dell" },
    { label: "HP", value: "HP" },
    { label: "Lenovo", value: "Lenovo" },
  ];

  const onDrop = useCallback(async (acceptedFiles) => {
    let fileData = acceptedFiles[0];
    let data = new FormData();
    data.append("document", fileData);
    try {
      let result = await axios({
        url: `http://localhost:3000/file/single`,
        method: "POST",
        data: data,
      });
      setProductImage(result.data.result);
    } catch (error) {}
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      Name: Name,
      Quantity: Quantity,
      Price: Price,
      Featured: Featured,
      ManufactureDate: ManufactureDate,
      ProductImage: ProductImage,
      Company: Company,
    };
    try {
      let result = await axios({
        url: `http://localhost:3000/product`,
        method: "POST",
        data: data,
      });
      console.log(result);
      setName("");
      setQuantity("");
      setPrice("");
      setFeatured(false);
      setManufactureDate("");
      setProductImage("");
      setCompany("");
    } catch (error) {}
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
            placeholder="Manufactured Date"
            value={ManufactureDate}
            style={{ margin: "10px" }}
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
        <button type="submit" style={{ margin: "10px" }}>
          Create Product
        </button>
      </form>
    </div>
  );
};

export default Create;
