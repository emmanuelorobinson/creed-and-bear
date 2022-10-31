import { faker } from "@faker-js/faker";

export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface UserJSON {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

function createRandomUser(): User {
  return {
    id: faker.datatype.uuid(),
    email: faker.internet.email(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    avatar: faker.image.avatar(),
  };
}

// populate user.data with 10 random users
let users: UserJSON = {
  page: 2,
  per_page: 6,
  total: 12,
  total_pages: 2,
  data: Array.from({ length: 100 }, createRandomUser),
};

export const getUsers = async (): Promise<UserJSON> => {
  return new Promise((resolve, reject) => {
    if (!users) {
      return setTimeout(() => {
        reject(new Error("No users found"));
      }, 1000);
    }
    setTimeout(() => {
      resolve(users);
    }, 1000);
  });
};

export const getUser = async (id: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    const user = users.data.find((user) => user.id === id);
    if (!user) {
      return setTimeout(() => {
        reject(new Error("No user found"));
      }, 1000);
    }
    setTimeout(() => {
      resolve(user);
    }, 1000);
  });
};

export const addUser = async (user: User) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.data.push(user);
      resolve({ status: "success" });
    }, 1000);
  });
};

export const updateUser = async (user: User) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = users.data.findIndex((u) => u.id === user.id);
      if (index === -1) {
        return reject(new Error("User not found"));
      }
      users.data[index] = user;
      resolve({ status: "success" });
    }, 1000);
  });
};

export const verifyUser = async (email: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.data.find((user) => user.email === email);
      if (!user) {
        return reject(new Error("No user found"));
      }
      resolve({ status: "success", user: user });
    }, 1000);
  });
};

export const deleteUser = async (id: string): Promise<UserJSON> => {
  return new Promise((resolve, reject) => {
    if (!users) {
      return setTimeout(() => {
        reject(new Error("No users found"));
      }, 3000);
    }
    setTimeout(() => {
      users.data = users.data.filter((user) => user.id !== id);
      resolve(users);
    }, 250);
  });
};
