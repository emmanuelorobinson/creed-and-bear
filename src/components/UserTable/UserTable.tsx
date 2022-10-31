import "./UserTable.scss";

import React, { useMemo } from "react";
import { User } from "../../utils/fakeAPI";

import Pagination from "../Pagination/Pagination";

import { FiEdit2 } from "react-icons/fi";
import { BiTrash } from "react-icons/bi";

interface Props {
  users: User[];
  deleteUser: (id: string) => void;
  
}

const pageSize = 7;

const UserTable = ({ users, deleteUser }: Props) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [navId, setNavId] = React.useState("");


  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    return users.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, users]);

  const handleDelete = (id: string) => {
    deleteUser(id);
  };

  return (
    <div>
      <table className="table-box">
        <thead>
          <tr>
            <th>
              <div className="table-head">
                <p>ID</p>
              </div>
            </th>
            <th>
              <div className="table-head">
                <p>EMAIL</p>
              </div>
            </th>
            <th>
              <div className="table-head">
                <p>FIRST NAME</p>
              </div>
            </th>
            <th>
              <div className="table-head">
                <p>LAST NAME</p>
              </div>
            </th>
            <th>
              <div className="table-head">
                <p>STATUS</p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((user) => (
            <tr key={user.id} id={user.id}>
              <td>
                <img
                  src={user.avatar}
                  alt=""
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                />
              </td>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>
                <BiTrash
                  size={20}
                  onClick={() => handleDelete(user.id)}
                  style={{
                    cursor: "pointer",
                  }}
                />
              </td>
              <td>
                <FiEdit2 size={20} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-box">
        <div className="outline">
          <p>
            Showing <span>{currentPage}</span> out of {(users.length/pageSize).toFixed()} pages
          </p>
        </div>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={users.length}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default UserTable;
