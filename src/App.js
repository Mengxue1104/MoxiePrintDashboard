import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Login } from './pages/Login'
import { DashBoard } from './pages/DashBoard'
import { Products } from "./pages/Products";
import { PageNotFound } from './pages/PageNotFound'

import './App.scss'


export default function App() {
    var user = localStorage.getItem("user")

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="/products" element={<Products />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}