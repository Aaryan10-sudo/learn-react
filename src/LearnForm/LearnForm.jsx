import React from "react";

//e is event
let handleSubmit = (e) => {
  e.preventDefault();

  console.log("Submit button was clicked");
};

const LearnForm = () => {
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name :</label>
            <input type="text" placeholder="Name" />
          </div>
          <br />
          <div>
            <label>Email :</label>
            <input type="email" placeholder="Email" />
          </div>
          <br />
          <div>
            <label>Password :</label>
            <input type="password" placeholder="Password" />
          </div>
          <br />
          <div>
            <label>Age :</label>
            <input type="number" />
          </div>
          <br />
          <div>
            <label>Gender:</label>
            <input type="radio" />
          </div>
          <br />
          <div>
            <label>isMarried:</label>
            <input type="checkbox" />
          </div>
          <br />
          <div>
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LearnForm;
