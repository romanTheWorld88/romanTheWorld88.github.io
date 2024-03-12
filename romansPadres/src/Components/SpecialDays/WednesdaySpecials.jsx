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

export default function WednesdaySpecials() {
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
              Wednesday Specials
            </Typography>
        </Box>
        <Box sx={{flexDirection: "column", display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'white', height: '75vh', borderRadius: '12px', m: 0 }}>
            <Typography sx={{fontFamily: "'Lemon', serif"}} variant="h2" align="center" gutterBottom>
              Food Specials
            </Typography>
            <br/>
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h3" align="center" gutterBottom>
              Fajita Wednesday
            </Typography>
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h3" align="center" gutterBottom>
              Dine-In Only
            </Typography>
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h3" align="center" gutterBottom>
              4pm - 9pm
            </Typography>
            <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                        Discount on All Fajitas For One</Typography>
            <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
              Chicken Fajitas ($11.50)
            </Typography>
             <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
              Steak Fajitas ($12.50)
            </Typography>

                <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                Mix Grill ($18.00)
                </Typography>
                <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                All fajitas come with a a setup plate on the side, as well as the meat, grilled onions, and fresh tortillas. 
                </Typography>
        </Box>
        <Box sx={{flexDirection: "column", display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'white', height: '65vh', borderRadius: '12px', m: 2 }}>
            <Typography sx={{fontFamily: "'Lemon', serif"}} variant="h3" align="center" gutterBottom>
              Drink Specials
            </Typography>
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h3" align="center" gutterBottom>
                Pitcher Margarita Day
            </Typography>
            <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
              Discounted Pitchers of Margaritas
            </Typography> 
            <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
              House: $25.50
            </Typography>
            <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
              Top Shelf: $37.00
            </Typography><Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
              Flavor: $26.50
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
