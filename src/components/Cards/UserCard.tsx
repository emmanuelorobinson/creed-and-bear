import "./UserCard.scss";
import React from "react";

interface CardProps {
  title: string;
  amount: string;
}

const UserCard = ({ title, amount }: CardProps) => {
  return (
    <div className="user-card">
        <p>{title}</p>
        <h3>{amount}</h3>
    </div>
  );
};

export default UserCard;
