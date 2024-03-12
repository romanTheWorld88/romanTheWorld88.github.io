import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import ColorTabs from '../ColorTabs';
import peppersImage from '../../images/peppers3.jpg';

export default function SaturdaySpecials() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected && 'page'}
      {...props}
    />
  );
}

return (
  <React.Fragment>
      <CssBaseline />
      <Box sx={{
        position: 'relative', 
        backgroundImage: `url(${peppersImage})`,
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#597EE3",
        padding: "20px",
      }}>
      <Container maxWidth="sm">
        <Container maxWidth="sm">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#592EE3', height: '7vh', borderRadius: '12px', m: 5 }}>
            <ColorTabs />    
        </Box>
      </Container>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#592EE3', height: '18vh', borderRadius: '12px', m: 5 }}>
            <Typography sx={{fontFamily: "'Lemon', serif"}} variant="h2" align="center" gutterBottom>
              Saturday Specials
            </Typography>
        </Box>
        <Box sx={{flexDirection: "column", display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'white', height: '120vh', borderRadius: '12px', m: -4 }}>
            <Typography sx={{fontFamily: "'Lemon', serif"}} variant="h2" align="center" gutterBottom>
              Food Specials
            </Typography>
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h3" align="center" gutterBottom>
              Dine-In Only
            </Typography>
            <br/>
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h3" align="center" gutterBottom>
              Sampler Saturday
            </Typography>
            <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                        Discounted sampler platers. </Typography>
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h3" align="center" gutterBottom>
              Selecta Dinner for $13.99!
            </Typography><Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                Comes with one cheese enchilada, one ground beef enchilada, one ground beef taco, chicken flautas, guacamole, pico de gallo, and rice and beans
            </Typography>
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h3" align="center" gutterBottom>
              Buffalo Chicken Nachos $14.00
            </Typography>
            <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                Pizza Style Nachos with Fajita Chicken, pickled jalepenos, our house buffalo sauce, fresh cilantro, and queso. 
            </Typography>
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h3" align="center" gutterBottom>
              Nutella Crepe $8.50
            </Typography>
            <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
              Unlike any crepe you have had before.. nutella inside our handmade tortillas with ice cream, chocolate syrup, and powdered sugar. Must have.  
            </Typography>
        </Box>
        <Box sx={{flexDirection: "column", display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'white', height: '55vh', borderRadius: '12px', m: 6 }}>
            <Typography sx={{fontFamily: "'Lemon', serif"}} variant="h3" align="center" gutterBottom>
              Drink Specials
            </Typography>
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h3" align="center" gutterBottom>
            Premium Margarita Day $14.99
            </Typography>
            <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
              Discounted Premium Margaritas
            </Typography> 
            <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
            Try our 22 oz. Fresh Premium Margarita with Los Altos Tequila and Gran Marnier, fresh lime juice and agave. 
            </Typography>
            
        </Box>
      </Container>
      </Box>
    </React.Fragment>
);
}
