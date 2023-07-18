import React from "react";

const Test3 = () => {
  return (
    <>
      <h1>Inquiry Form</h1>
      <h2>Enter Details</h2>
      <p>All fields are mandatory</p>
      <span title="close">X</span>
      <div data-testid="custom-element">Custom HTML Element</div>
      <form action="">
        <div>
          <label htmlFor="name">Enter Name</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            value="Saurav"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="email">Enter Email</label>
          <input id="email" type="text" />
        </div>
        <div>
          <label htmlFor="address">Enter Address</label>
          <textarea id="address" />
        </div>
        <input id="submit" type="submit" />
      </form>
    </>
  );
};

export default Test3;
