import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Hello/Home";
import About from "./Component/Hello/About";
import Contact from "./Component/Hello/Contact";
import Items from "./Component/Items";
import ItemsDetails from "./Component/Hello/ItemsDetails";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="items" element={<Items />} />
      <Route path="items/itemsDetails" element={<ItemsDetails />} />
    </Routes>
  );
};

export default Routing;
