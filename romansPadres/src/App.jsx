import React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Specials from './Components/Specials';
import Catering from "./Components/Catering";
import { Route, Routes } from "react-router";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/specials" element={<Specials />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
