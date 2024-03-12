import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import ColorTabs from './ColorTabs';
import { Grid } from '@mui/material';

function Catering() {
  
  return(
<React.Fragment>
      <CssBaseline />
      <Box sx={{
        position: 'relative',
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#597EE3",
        padding: "20px",
      }}>
      <Container maxWidth="sm">    
             <Typography sx={{fontFamily: "'Oleo Script Swash Caps', system-ui"}} variant="h1" align="center" gutterBottom>
              Mis Padres
            </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'white', height: '18vh', borderRadius: '255px', m: 4 }}>
            <Typography sx={{fontFamily: "'Lemon', serif"}} variant="h2" align="center" gutterBottom>
              Self-Serve Fajita Bars
            </Typography>
        </Box>
        <Box sx={{flexDirection: "column", display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'white', height: '80', borderRadius: '12px', m: 2}}>
            <Typography sx={{fontFamily: "'Lemon', serif"}} variant="h2" align="center">
              Party Pack #1 </Typography>
            <br/>
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h3" align="center">
                $180.00            </Typography>
                <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                        40 large handmade tortillas</Typography>
                        <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                        2 Pans of Chicken and Steak Fajita Mixed</Typography>
                        <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                        Large Pan of Rice</Typography>
                        <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>Large Pan of Refried Beans</Typography>
                        <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                        Large sides of sour cream, guacamole, shredded cheese, pico de gallo</Typography>
                        <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>1 Large Bag of Chips, 1 Large Salsa, and 1 Large Bean Dip</Typography>
                        <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                        Feeds 20-25 People </Typography>
        </Box>
        <Box sx={{flexDirection: "column", display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'white', height: '80', borderRadius: '12px', m: 2 }}>
            <Typography sx={{fontFamily: "'Lemon', serif"}} variant="h2" align="center">
              Party Pack #2 </Typography>
            <br/>
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h3" align="center" gutterBottom>
                $260.00            </Typography>
            <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                        40 large handmade tortillas</Typography>
                        <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                        2 Pans of Chicken and Steak Fajita Mixed</Typography>
                        <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                        Large Pan of Rice</Typography>
                        <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>Large Pan of Refried Beans</Typography>
                        <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                        Large sides of sour cream, guacamole, shredded cheese, pico de gallo</Typography>
                        <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>2 Large Bag of Chips, 2 Large Salsas, and 2 Large Bean Dips</Typography>

                        <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                        Feeds 20-25 People </Typography>
        </Box>
        <Box sx={{flexDirection: "column", display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'white', height: '80', borderRadius: '12px', m: 2 }}>
            <Typography sx={{fontFamily: "'Lemon', serif"}} variant="h2" align="center">
              Party Pack #3 </Typography>
            <br/>
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h3" align="center" gutterBottom>
                $360.00            </Typography>
            <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                        60 large handmade tortillas</Typography>
                        <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                        3 Large Pans of Chicken and Steak Fajita Mixed</Typography>
                        <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" >
                        Large Pan of Rice</Typography>
                        <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>Large Pan of Refried Beans</Typography>
                        <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                        Large sides of sour cream, guacamole, shredded cheese, pico de gallo</Typography>
                        <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>3 Large Bag of Chips, 3 Large Salsas, and 3 Large Bean Dips</Typography>
                        <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                        Feeds 30-35 People </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'white', height: '20vh', borderRadius: '285px', m: -1 }}>
            <Typography sx={{fontFamily: "'Lemon', serif"}} variant="h2" align="center" gutterBottom>
              Other Catering Options
            </Typography>
            </Box>

            <Box sx={{flexDirection: "column", display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'white', height: '80', borderRadius: '12px', m: 2 }}>
            <Typography sx={{fontFamily: "'Lemon', serif", marginBottom: '10px', textDecoration: 'underline'}} variant="h2" align="center" >
              By the Dozen</Typography>
              <Typography sx={{fontFamily: "'Lemon', serif", marginBottom: '15px'}} variant="h3" align="center">
              Ground Beef or Chicken Ranchero Tacos $35.00 </Typography>
              <Typography sx={{fontFamily: "'Lemon', serif", marginBottom: '15px'}} variant="h3" align="center">
              Fajita Tacos $45.00 </Typography>
              <Typography sx={{fontFamily: "'Lemon', serif", marginBottom: '15px'}} variant="h3" align="center">
              Flautas $30.00 </Typography>
              <Typography sx={{fontFamily: "'Lemon', serif", marginBottom: '15px'}} variant="h3" align="center">  
              Enchiladas $30.00 </Typography>
              <Typography sx={{fontFamily: "'Lemon', serif", marginBottom: '15px'}} variant="h3" align="center">
              Mini Chimis $30.00 </Typography>
              <Typography sx={{fontFamily: "'Lemon', serif", marginBottom: '15px'}} variant="h3" align="center">
              Brisket Tamales $55.00 </Typography>
              </Box>

              <Box sx={{flexDirection: "column", display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'white', height: '80', borderRadius: '12px', m: 2 }}>
              <Typography sx={{fontFamily: "'Lemon', serif", marginBottom: '10px', textDecoration: 'underline'}} variant="h2" align="center" >
              By the Pan</Typography>
              <Typography sx={{fontFamily: "'Lemon', serif", marginBottom: '15px'}} variant="h3" align="center">
              Pan of Rice $20.00 </Typography>
              <Typography sx={{fontFamily: "'Lemon', serif", marginBottom: '15px'}} variant="h3" align="center">
              Pan of Beans $20.00 </Typography>
              </Box>
      </Container>
      </Box>
    </React.Fragment>  )
}

export default Catering;
