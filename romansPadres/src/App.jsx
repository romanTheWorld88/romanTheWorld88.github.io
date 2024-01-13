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
import Reviews from "./Components/Reviews";
import MondaySpecials from './Components/SpecialDays/MondaySpecials';
import TuesdaySpecials from './Components/SpecialDays/TuesdaySpecials';
import WednesdaySpecials from './Components/SpecialDays/WednesdaySpecials';
import ThursdaySpecials from './Components/SpecialDays/ThursdaySpecials';
import FridaySpecials from './Components/SpecialDays/FridaySpecials';
import SaturdaySpecials from './Components/SpecialDays/SaturdaySpecials';
import SundaySpecials from './Components/SpecialDays/SundaySpecials';

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
          <Route path="/specials/monday" element={<MondaySpecials />} />
          <Route path="/specials/tuesday" element={<TuesdaySpecials />} />
          <Route path="/specials/wednesday" element={<WednesdaySpecials />} />
          <Route path="/specials/thursday" element={<ThursdaySpecials />} />
          <Route path="/specials/friday" element={<FridaySpecials />} />
          <Route path="/specials/saturday" element={<SaturdaySpecials />} />
          <Route path="/specials/sunday" element={<SundaySpecials />} />

        </Routes>
      </Box>
    </>
  );
}

export default App;
