import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  let navigation = useNavigate();
  const { name, username, email, phone, website } = user;
  const onSubmit = async (evt) => {
    evt.preventDefault();
    await axios.post("http://localhost:3002/users", user);
    navigation("/");
  };

  const onInputChange = (evt) => {
    // console.log(evt.target.value)
    setUser({ ...user, [evt.target.name]: evt.target.value });
  };
  return (
    <div className="">
      <form
        action=""
        onSubmit={(evt) => onSubmit(evt)}
        className="py-3 mx-5 border border-dark mt-5"
      >
        <h1 className="text-center mb-3">Add User</h1>
        <div className="form-group mb-3 mx-5">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Name"
            name="name"
            value={name}
            onChange={(evt) => onInputChange(evt)}
          />
        </div>
        <div className="form-group mb-3 mx-5">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your UserName"
            name="username"
            value={username}
            onChange={(evt) => onInputChange(evt)}
          />
        </div>
        <div className="form-group mb-3 mx-5">
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Enter Your Email"
            name="email"
            value={email}
            onChange={(evt) => onInputChange(evt)}
          />
        </div>
        <div className="form-group mb-3 mx-5">
          <input
            type="tel"
            className="form-control form-control-lg"
            placeholder="Enter Your phone"
            name="phone"
            value={phone}
            onChange={(evt) => onInputChange(evt)}
          />
        </div>
        <div className="form-group mb-3 mx-5">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Website name"
            name="website"
            value={website}
            onChange={(evt) => onInputChange(evt)}
          />
        </div>
        <button className="btn btn-primary btn-block mt-2 ms-5">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
