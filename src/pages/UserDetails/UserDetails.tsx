import "./UserDetails.scss";

import React, { useEffect, useState, useRef } from "react";

import { Link, useParams } from "react-router-dom";

import { User, getUserById, updateUser } from "../../utils/fakeAPI";

const UserDetails = () => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const avatarRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);

  // on change of any ref, show update button
  const [showUpdate, setShowUpdate] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const newUser = await getUserById(String(id));
      setUser(newUser);
    };

    try {
      fetchUser();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [id, user]);

  const handleChange = () => {
    // if ref is not null and the value of the ref is not equal to the value of the user, show update button
    if (
      avatarRef.current?.value !== user?.avatar ||
      emailRef.current?.value !== user?.email ||
      firstNameRef.current?.value !== user?.first_name ||
      lastNameRef.current?.value !== user?.last_name
    ) {
      setShowUpdate(true);
    } else {
      setShowUpdate(false);
    }
  };

  const handleUpdate = (e: any) => {
    e.preventDefault();
    // update user with new values
    if (user) {
      const updatedUser: User = {
        ...user,
        avatar: String(avatarRef.current?.value),
        email: String(emailRef.current?.value),
        first_name: String(firstNameRef.current?.value),
        last_name: String(lastNameRef.current?.value),
      };

      try {
        updateUser(updatedUser);
        setUser(updatedUser);
        setShowUpdate(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <div>
            <Link
              to={"/users"}
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "1.5rem",
                padding: "1rem",
                display: "inline-block",
              }}
            >
              Go back
            </Link>
            <h1>User Details</h1>
          </div>
          <div className="detail-box">
            <div>
              <img src={user?.avatar} alt="" />
              <h2>{`${user?.first_name} ${user?.last_name}`}</h2>
            </div>
            <div className="user-input-box">
              <div className="user-input">
                <label>Avatar</label>
                <input
                  type="text"
                  defaultValue={user?.avatar}
                  ref={avatarRef}
                  onChange={handleChange}
                />
              </div>
              <div className="user-input">
                <label>Email</label>
                <input
                  type="text"
                  defaultValue={user?.email}
                  ref={emailRef}
                  onChange={handleChange}
                />
              </div>
              <div className="user-input">
                <label>First Name</label>
                <input
                  type="text"
                  defaultValue={user?.first_name}
                  ref={firstNameRef}
                  onChange={handleChange}
                />
              </div>
              <div className="user-input">
                <label>Last Name</label>
                <input
                  type="text"
                  defaultValue={user?.last_name}
                  ref={lastNameRef}
                  onChange={handleChange}
                />
              </div>
              <div className="user-input">
                {showUpdate && <button onClick={handleUpdate}>Update</button>}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          {isLoading ? <h1>Loading...</h1> : <h1>User not found</h1>}
        </div>
      )}
    </div>
  );
};

export default UserDetails;
