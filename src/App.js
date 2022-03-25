import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './pages/Login'
import { DashBoard } from './pages/DashBoard'
import { Vendors } from "./pages/Vendors";
import { PageNotFound } from './pages/PageNotFound'
import { AddProduct } from "./components/panels/AddProduct";
import { AllProducts } from "./components/panels/AllProducts";

import './App.scss'


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<DashBoard />}>
                    <Route index element={<AllProducts title="All Products" />} />
                    <Route path="add" element={<AddProduct title="Add New Product" />} />
                </Route>
                <Route path="/vendors" element={<Vendors />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}