import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import UserTable from "./components/UserTable/UserTable";
import Users from "./pages/Users/Users";
import { User, getUsers, deleteUser } from "./utils/fakeAPI";

let users: User[];

const getUser = async () => {
  const newUsers = await getUsers();

  users = newUsers.data;
};

const handleDelete = async (id: string) => {
  const newUsers = await deleteUser(id);
  users = newUsers.data;
};

getUser();

// test that the user table renders
test("user table renders", () => {
  render(<UserTable users={users} deleteUser={handleDelete} />);
  expect(screen.getByText("ID")).toBeInTheDocument();
  expect(screen.getByText("EMAIL")).toBeInTheDocument();
  expect(screen.getByText("FIRST NAME")).toBeInTheDocument();
  expect(screen.getByText("LAST NAME")).toBeInTheDocument();
  expect(screen.getByText("STATUS")).toBeInTheDocument();
});

// test that the user table renders the correct number of users
test("user table renders correct number of users", () => {
  render(<UserTable users={users} deleteUser={handleDelete} />);
  expect(screen.getAllByRole("row")).toHaveLength(users.length + 1);
});

// test that the user table renders the correct user data
test("user table renders correct user data", () => {
  render(<UserTable users={users} deleteUser={handleDelete} />);
  const rows = screen.getAllByRole("row");
  rows.forEach((row, i) => {
    if (i > 0) {
      expect(row.children[0].textContent).toBe(users[i - 1].id);
      expect(row.children[1].textContent).toBe(users[i - 1].email);
      expect(row.children[2].textContent).toBe(users[i - 1].first_name);
      expect(row.children[3].textContent).toBe(users[i - 1].last_name);
    }
  });
});

// test that the delete button works
test("delete button works", () => {
  render(<UserTable users={users} deleteUser={handleDelete} />);
  const rows = screen.getAllByRole("row");
  rows.forEach((row, i) => {
    if (i > 0) {
      fireEvent.click(row.children[5].children[0]);
      expect(handleDelete).toHaveBeenCalledWith(users[i - 1].id);
    }
  });
});

// test that the edit button works
test("edit button works", () => {
  render(<UserTable users={users} deleteUser={handleDelete} />);
  const rows = screen.getAllByRole("row");
  rows.forEach((row, i) => {
    if (i > 0) {
      fireEvent.click(row.children[5].children[1]);
      // wait for the edit page to load
      setTimeout(() => {
        // change the first name
        fireEvent.change(screen.getByLabelText("First Name"), {
          target: { value: "test" },
        });

        // expect update button to appear
        expect(screen.getByText("Update")).toBeInTheDocument();
      }, 3000);
    }
  });
});

// test that the create button works
test("create button works", () => {
  render(<Users />);
  // click the create button svg
  fireEvent.click(screen.getByTestId("create-user-button"));
  // wait for the create page to load
  setTimeout(() => {
    // change the avatar url
    fireEvent.change(screen.getByLabelText("Avatar"), {
      target: { value: "test" },
    });

    // change the email
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test" },
    });

    // change the first name
    fireEvent.change(screen.getByLabelText("First Name"), {
      target: { value: "test" },
    });

    // change the last name
    fireEvent.change(screen.getByLabelText("Last Name"), {
      target: { value: "test" },
    });

    // expect submit button to appear
    expect(screen.getByText("Submit")).toBeInTheDocument();

    // click the submit button
    fireEvent.click(screen.getByText("Submit"));
    
  }, 3000);
});
