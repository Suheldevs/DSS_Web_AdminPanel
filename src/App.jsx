import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import BlogDashboard from "./pages/blog/BlogDashboard";
import GalleryDashboard from "./pages/gallery/GalleryDashboard";
import ProductDashboard from "./pages/product/ProductDashboard";
import TeamDashboard from "./pages/team/TeamDashboard";
import InquiryDashboard from "./pages/inquiry/InquiryDashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogForm from "./pages/blog/BlogForm";
import ProductForm from "./pages/product/ProductFrom";
import GalleryForm from "./pages/gallery/GalleryForm";
import TeamForm from "./pages/team/TeamForm";
import VisitorDashboard from "./pages/visitor/VisitorDashboard";
import SubscriberDashboard from "./pages/subscribers/SubscriberDashboard";
import JobDashboard from "./pages/job/JobDahboard";
function App() {
  return (
    <>
      <ToastContainer/>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<Layout />}>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/blog" element={<BlogDashboard/>}/>
      <Route path="/blog/add" element={<BlogForm/>}/>
      <Route path="/blog/update/:id" element={<BlogForm/>}/>
      <Route path="/gallery" element={<GalleryDashboard/>}/>
      <Route path="/gallery/add" element={<GalleryForm/>}/>
      <Route path="/gallery/update/:id" element={<GalleryForm/>}/>
      <Route path="/product" element={<ProductDashboard/>}/>
      <Route path="/product/add" element={<ProductForm/>}/>
      <Route path="/product/update/:id" element={<ProductForm/>}/>
      <Route path="/team" element={<TeamDashboard/>}/>
      <Route path="/team/add" element={<TeamForm/>}/>
      <Route path="/team/update/:id" element={<TeamForm/>}/>
      <Route path="/inquiry" element={<InquiryDashboard/>}/>
      <Route path="/visitor" element={<VisitorDashboard/>}/>
      <Route path="/subscriber" element={<SubscriberDashboard/>}/>
      <Route path="/job-application" element={<JobDashboard/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
