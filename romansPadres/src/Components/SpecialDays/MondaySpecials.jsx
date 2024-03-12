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

export default function MondaySpecials() {
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
        <Box sx={{ alignItems: "center", bgcolor: '#592EE3', height: '7vh', borderRadius: '15px', overflow: 'hidden'}}>
            <ColorTabs />    
        </Box>
      </Container>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#592EE3', height: '18vh', borderRadius: '12px', m: 5 }}>
            <Typography sx={{fontFamily: "'Lemon', serif"}} variant="h2" align="center" gutterBottom>
              Monday Specials
            </Typography>
        </Box>
        
        <Box sx={{flexDirection: "column", display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'white', height: '85vh', borderRadius: '12px', m: 2 }}>
            <Typography sx={{fontFamily: "'Lemon', serif"}} variant="h2" align="center" gutterBottom>
              Food Specials
            </Typography>
            <br/>
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h3" align="center" gutterBottom>
              Dine-In Only
            </Typography>
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h3" align="center" gutterBottom>
              Kids Eat Free 
            </Typography>
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h3" align="center" gutterBottom>
              Soup & Salad Combination Meal 
            </Typography>
            <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
            Combo of your choice:
              Papa Salad or Taco Salad with any meat (+$2.00 for Shrimp)
                <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                AND</Typography>
               <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom></Typography>A cup of Soup: Creamy Tortilla Soup, Chicken and Vegetable Soup, or Charro Bean Soup.
              </Typography>
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h4" align="center" gutterBottom>
              Try this for only $12.99!
            </Typography>
        </Box>
        <Box sx={{flexDirection: "column", display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'white', height: '55vh', borderRadius: '12px', m: 2 }}>
            <Typography sx={{fontFamily: "'Lemon', serif"}} variant="h3" align="center" gutterBottom>
              Drink Specials
            </Typography>
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h3" align="center" gutterBottom>
                Margarita Monday
            </Typography>
            <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
              16 oz Rocks or Frozen House Margarita for only $5.75! 
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
