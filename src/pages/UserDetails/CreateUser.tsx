import "./UserDetails.scss";
import React, { useState, useRef } from "react";
import { User, addUser } from "../../utils/fakeAPI";
import { Link } from "react-router-dom";

const CreateUser = () => {
  const [showSubmit, setShowSubmit] = useState(false);

  const avatarRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const newUser: User = {
      id: "",
      avatar: String(avatarRef.current?.value),
      email: String(emailRef.current?.value),
      first_name: String(firstNameRef.current?.value),
      last_name: String(lastNameRef.current?.value),
    };

    try {
      await addUser(newUser);
    } catch (error) {
      console.log(error);
    }

    // reset form
    avatarRef.current!.value = "";
    emailRef.current!.value = "";
    firstNameRef.current!.value = "";
    lastNameRef.current!.value = "";
  };

  const handleChange = () => {
    // if ref is not null and the value of the ref is not equal to the value of the user, show update button
    if (
      avatarRef.current?.value !== "" &&
      emailRef.current?.value !== "" &&
      firstNameRef.current?.value !== "" &&
      lastNameRef.current?.value !== ""
    ) {
      setShowSubmit(true);
    } else {
      setShowSubmit(false);
    }
  };

  return (
    <div className="create-user-box">
      <Link to="/users">
        <p>Go back</p>
      </Link>

      <div className="detail-box">
        <div>
          <h1>Create User</h1>
        </div>
        <div className="user-input-box">
          <div className="user-input">
            <label>Avatar</label>
            <input
              type="text"
              placeholder="Enter Avatar URL"
              ref={avatarRef}
              onChange={handleChange}
            />
          </div>
          <div className="user-input">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              ref={emailRef}
              onChange={handleChange}
            />
          </div>
          <div className="user-input">
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              ref={firstNameRef}
              onChange={handleChange}
            />
          </div>
          <div className="user-input">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              ref={lastNameRef}
              onChange={handleChange}
            />
          </div>
          <div className="user-input">
            {showSubmit && <button onClick={handleSubmit}>Submit</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
