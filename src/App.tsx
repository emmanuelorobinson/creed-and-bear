import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Users from "./pages/Users/Users";
import Login from "./pages/Login/Login";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <Layout>
                <Outlet />
              </Layout>
            }
          >
            <Route path="/" element={<Users />} />
            <Route path="/users" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
