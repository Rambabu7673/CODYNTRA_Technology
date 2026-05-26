import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Pages/Footer/Footer";
import Princing from "./Product/Princing";
import Container from "./Container/Container";
import Career from "./IsCarrer/Career";
import IsClientSolution from "./Features/IsClientSolution";
import AboutUs from "./Pages/AboutUsCompany/AboutUs";
import Contact from "./Pages/Contact";
import JobForm from "./Pages/JobForm";




const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/princing" element={<Princing />} />

        <Route path="/CarrerGrow" element={<Career />} />

        <Route path="/isClientSolution" element={<IsClientSolution />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jobForm" element={<JobForm />} />
        
      </Routes>
      <Footer />
      
    </>
  );
};

export default App;
