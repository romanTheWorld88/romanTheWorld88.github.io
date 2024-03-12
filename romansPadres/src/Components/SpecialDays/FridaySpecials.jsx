import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import ColorTabs from '../ColorTabs';
import peppersImage from '../../images/peppers2.jpg';

export default function FridaySpecials() {
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
              Friday Specials
            </Typography>
        </Box>
        <Box sx={{flexDirection: "column", display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'white', height: '140vh', borderRadius: '12px', m: -3 }}>
            <Typography sx={{fontFamily: "'Lemon', serif", marginTop: "-100px"}} variant="h2" align="center" gutterBottom>
              Food Specials
            </Typography>
            <br/>
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h3" align="center" gutterBottom>
              Dine-In Only
            </Typography>
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h3" align="center" gutterBottom>
              Featured Friday
            </Typography>
            <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                        Try our new delicious menu items!</Typography>
                        <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h3" align="center" gutterBottom>
              Mongolian Beef Tacos $14.99
            </Typography>
            <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                Three Beef Tacos with our fresh Mongolian Sauce, topped with green onions, red bellpeppers, and cliantro. Served with Rice, Bean Soup, and Loco Sauce. 
            </Typography>
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h3" align="center" gutterBottom>
              Buffalo Chicken Sandwich $12.50
            </Typography><Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
               Grilled fajita chicken sandwich with melted cheese on a toasted buttered bun, ask for any add-ons you like. Served with cajun fries. 
            </Typography>
            <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                + Bacon for $2.00
            </Typography>
                
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h3" align="center" gutterBottom>
              Nutella Crepe $8.50
            </Typography>
            <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                 Unlike any crepe you have had before.. nutella inside our handmade tortillas with ice cream, chocolate syrup, and powdered sugar. Must have.  
            </Typography>
        </Box>
        <Box sx={{flexDirection: "column", display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'white', height: '75vh', borderRadius: '12px', m: 4 }}>
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
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h3" align="center" gutterBottom>
              Happy Hour 3pm - 7pm
            </Typography>
            <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
              12 oz House or Strawberry Margarita for $4.00
            </Typography>
        </Box>
      </Container>
      </Box>
    </React.Fragment>
);
}
