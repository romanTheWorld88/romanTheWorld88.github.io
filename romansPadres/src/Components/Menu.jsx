import { Box, Typography } from "@mui/material"
import dinnerMenuFront from "../images/menuFront.png";
import dinnerMenuBack from "../images/menuBack.png";
import Seperator from "./Seperator";
import "../Menu.css";

export default function Menu() {
  return(
    <>
    <Box sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        m: 0,
        backgroundColor: "#597EE3",
        fontFamily: "Permanent Marker",
    }}>
    <div className="white-box">
      <Typography
                variant="h5"
                sx={{ mx: 2, my: 2, color: 'black', 
                display: 'block', fontFamily: "Permanent Marker", textAlign: "center"}}>
                Lunch Menu
        </Typography>
        <Typography
                variant="h5"
                sx={{ mx: 2, my: 2, color: 'black', 
                display: 'block', fontFamily: "Permanent Marker",}}>
                Monday - Friday 10:30am - 3pm
        </Typography>
    </div>
        <Box sx={{m:0, display: "flex", justifyContent:"center", flexDirection: "row", 
        alignContent: "space-around", textAlign: "center"}}>
            <img src={dinnerMenuFront}></img>
            <img src={dinnerMenuBack}></img>
        </Box>
        </Box>
        <Seperator margin="0px"/>
        <div><Box sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        m: 0,
        backgroundColor: "#597EE3",
        fontFamily: "Permanent Marker"
    }}>
        <div className="white-box">
      <Typography
                variant="h5"
                sx={{ mx: 2, my: 2, color: 'black', 
                display: 'block', fontFamily: "Permanent Marker", textAlign: "center"}}>
                Dinner Menu
        </Typography>
        <Typography
                variant="h5"
                sx={{ mx: 2, my: 2, color: 'black', 
                display: 'block', fontFamily: "Permanent Marker",}}>
                All Day Every Day
        </Typography>
    </div>
        <Box sx={{display: "flex", justifyContent:"center", flexDirection: "row", alignContent: "space-around"}}>
            <img src={dinnerMenuFront}></img>
            <img src={dinnerMenuBack}></img>
        </Box>
      </Box>

      </div>

    </>
  )
}

