import React, { Children } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, json, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Nopage from "./pages/noPage/Nopage";
import MyState from "./context/myState";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signin";
import ProductInfo from "./pages/projectInfo/ProjectInfo";
import AddProduct from "./pages/admin/page/AddProduct";
import UpdateProduct from "./pages/admin/page/UpdateProduct";
import AllProjects from "./pages/allProjects/AllProjects";

function App() {
    return (
        <MyState>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route
                        path="/order"
                        element={
                            <ProtectedRoute>
                                <Order />
                            </ProtectedRoute>
                        }
                    ></Route>
                    <Route path="/bookmarks" element={<Bookmarks />}></Route>
                    <Route path="/dashboard" element={
                        <ProtectedRouteForAdmin>
                            <Dashboard />
                        </ProtectedRouteForAdmin>
                    }></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route
                        path="/productInfo/:id"
                        element={<ProductInfo />}
                    ></Route>
                    <Route path="/bookmarks" element={<Bookmarks />}></Route>
                    <Route path="/addproduct" element={<AddProduct />}></Route>
                    <Route
                        path="/updateproduct"
                        element={<UpdateProduct />}
                    ></Route>
                    <Route path="/allproject" element={<AllProjects/>}></Route>
                    <Route path="/*" element={<Nopage />}></Route>
                </Routes>
            </Router>
        </MyState>
    );
}

export default App;

export const ProtectedRoute = ({ children }) => {
    if (localStorage.getItem("currentUser")) {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
};

export const ProtectedRouteForAdmin = ({ children }) => {
    const admin = JSON.parse(localStorage.getItem("user"));
    console.log(admin.user.email);
    if (admin.user.email === "uditpanchal1106@gmail.com" || admin.user.email === "kapil12vaishnav@gmail.com") {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
};
