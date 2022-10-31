import "./Users.scss";

import React, { useState, useEffect } from "react";
import { User } from "../../utils/fakeAPI";

import UserCard from "../../components/Cards/UserCard";
import UserTable from "../../components/UserTable/UserTable";

import { getUsers, deleteUser } from "../../utils/fakeAPI";

const Users = () => {
  const [users, fillUsers] = useState<User[]>([]);


  useEffect(() => {
    const fetchUsers = async () => {
      const newUsers = await getUsers();
      fillUsers(newUsers.data);
    };

    try {
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleDelete = async (id: string) => {
    const newUsers = await deleteUser(id);
    fillUsers(newUsers.data);
  };

  return (
    <div className="user-base">
      <h1>Customers</h1>
      <div className="user-cards">
        <UserCard title={"Total customers"} amount={"2,420"}></UserCard>
        <UserCard title={"Members"} amount={"1,210"}></UserCard>
        <UserCard title={"Active now"} amount={"316"}></UserCard>
      </div>
      <div className="user-table">
        <UserTable users={users} deleteUser={handleDelete} />
      </div>
    </div>
  );
};

export default Users;
