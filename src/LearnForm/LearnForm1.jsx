import React, { useState } from "react";

const LearnForm1 = () => {
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [address, setAddress] = useState("");
  let [age, setAge] = useState(0);
  let [country, setCountry] = useState("Nepal");
  let [gender, setGender] = useState("Male");
  let [isMarried, setIsMarried] = useState(false);
  let [description, setDescription] = useState("");

  let genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Others", value: "others" },
  ];
  let countries = [
    { label: "Nepal", value: "nepal" },
    { label: "USA", value: "usa" },
    { label: "China", value: "china" },
  ];

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let data = {
            fullName: fullName,
            email: email,
            password: password,
            address: address,
            age: age,
            country: country,
            gender: gender,
            isMarried: isMarried,
            description: description,
          };
          console.log(data);
        }}
      >
        <div className="form">
          <label htmlFor="fullName">FullName:</label>

          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </div>
        <div className="form">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form">
          <label htmlFor="password">Password:</label>

          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="form">
          <label htmlFor="address">Address:</label>

          <input
            type="text"
            id="age"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div className="form">
          <label htmlFor="age">Age:</label>

          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="form">
          <label htmlFor="country">Country:</label>
          <select
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          >
            {countries.map((v, i) => {
              return (
                <option key={i} value={v.value}>
                  {v.label}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form">
          <label htmlFor="gender">Gender:</label>
          <br />
          {genders.map((items, i) => {
            return (
              <span key={i}>
                <label>{items.label}</label>
                <input
                  type="radio"
                  id={items.value}
                  value={items.value}
                  checked={gender === items.value}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
              </span>
            );
          })}
        </div>
        <div className="form">
          <label htmlFor="isMarried">isMarried:</label>
          <input
            type="checkbox"
            id="isMarried"
            checked={isMarried === true}
            onChange={(e) => {
              setIsMarried(e.target.checked);
            }}
          />
        </div>
        <div className="form">
          <label htmlFor="Description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="form">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </>
  );
};

export default LearnForm1;
