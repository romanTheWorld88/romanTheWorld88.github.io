import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import ColorTabs from '../ColorTabs';

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
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#597EE3",
        padding: "20px",
      }}>
      <Container maxWidth="sm">
        <Container maxWidth="sm">
        <Box sx={{ alignItems: "center", bgcolor: '#0aadf5', height: '7vh', borderRadius: '15px', overflow: 'hidden'}}>
            <ColorTabs />    
        </Box>
      </Container>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#CF30AC', height: '18vh', borderRadius: '12px', m: 5 }}>
            <Typography sx={{fontFamily: "'Lemon', serif"}} variant="h2" align="center" gutterBottom>
              Saturday Specials
            </Typography>
        </Box>
        <Box sx={{flexDirection: "column", display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'white', height: '55vh', borderRadius: '12px', m: 2 }}>
            <Typography variant="h3" align="center" gutterBottom>
              Food Specials
            </Typography>
            <br/>
            <Typography variant="h4" align="center" gutterBottom>
              Kids eat free. 
            </Typography>
            <Typography variant="h4" align="center" gutterBottom>
              Soup and Salad Combination Meal 
            </Typography>
            <Typography variant="h6" align="center" gutterBottom>
            Combo of your choice:
              Papa Salad or Taco Salad with any meat (+$2.00 for Shrimp)
              TOGETHER WITH
              A cup of Soup: Creamy Tortilla Soup, Chicken and Vegetable Soup, or Charro Bean Soup.
              </Typography>
            <Typography variant="h5" align="center" gutterBottom>
              Try this for only $10.99!
            </Typography>
        </Box>
        <Box sx={{flexDirection: "column", display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'white', height: '55vh', borderRadius: '12px', m: 2 }}>
            <Typography variant="h3" align="center" gutterBottom>
              Drink Specials
            </Typography>
            <Typography variant="h4" align="center" gutterBottom>
              16 oz Rocks or Frozen House Margarita for only $5.75! 
            </Typography> <Typography variant="h4" align="center" gutterBottom>
              Kids eat free. 
            </Typography>
        </Box>
      </Container>
      </Box>
    </React.Fragment>
);
}
