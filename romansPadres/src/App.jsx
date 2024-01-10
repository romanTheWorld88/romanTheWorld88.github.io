import CssBaseline from "@mui/material/CssBaseline";
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Specials from './Components/Specials';
import Catering from "./Components/Catering";
import { Route, Routes } from "react-router";

function App() {
  
  return (
    <>
    <CssBaseline />
    <Navbar />
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "Menu" element={<Menu />} />
        <Route path = "Catering" element={<Catering />} />
        <Route path = "Specials" element={<Specials />} />

      </Routes>
    </>
  )
}

export default App
