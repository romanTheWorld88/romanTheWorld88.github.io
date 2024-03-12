import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import ColorTabs from '../ColorTabs';
import peppersImage from '../../images/peppersBackground.jpg';

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
        <Box sx={{ alignItems: "center", bgcolor: '#592EE3', height: '7vh', borderRadius: '15px', overflow: 'hidden'}}>
        
            <ColorTabs />    
        </Box>
      </Container>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#592EE3', height: '18vh', borderRadius: '12px', m: 5 }}>
            <Typography sx={{fontFamily: "'Lemon', serif"}} variant="h2" align="center" gutterBottom>
              Tuesday Specials
            </Typography>
        </Box>
        <Box sx={{flexDirection: "column", display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'white', height: '110vh', borderRadius: '12px', m: 0 }}>
            <Typography sx={{fontFamily: "'Lemon', serif"}} variant="h2" align="center" gutterBottom>
              Food Specials
            </Typography>
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h3" align="center" gutterBottom>
              Dine-In Only
            </Typography>
            <br/>
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h3" align="center" gutterBottom>
              Original Taco Tuesday
            </Typography>
            <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                        A La Carte Taco Special (Single Taco)</Typography>
            <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
              Ground Beef ($2.00)
            </Typography>
             <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
              Chicken Ranchero ($2.00)
            </Typography>

                <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                Chicken Fajita Taco ($3.00)
                </Typography>
                <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                Fajita Steak Taco ($3.25),
                </Typography><Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
                Fish or Shrimp ($3.75)
                </Typography>
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h3" align="center" gutterBottom>
              Taco y Tequila Special 
            </Typography>
            <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
            Get 3 Tacos and a 16 oz. Margarita for only $15.00!
              </Typography>
              <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
            Updrade to Grilled Chicken ($16.00), Fajita Steak ($16.50), or Fish / Shrimp ($17.50)
              </Typography>
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h4" align="center" gutterBottom>
              Try this for only $15.00!
            </Typography>
        </Box>
        <Box sx={{flexDirection: "column", display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'white', height: '55vh', borderRadius: '12px', m: 1 }}>
            <Typography sx={{fontFamily: "'Lemon', serif"}} variant="h3" align="center" gutterBottom>
              Drink Specials
            </Typography>
            <Typography sx={{fontFamily: "'Lilita One', sans-serif"}}variant="h3" align="center" gutterBottom>
                Taco and Tequila Tuesday
            </Typography>
            <Typography sx={{fontFamily: "'Roboto Condensed', sans-serif"}} variant="h4" align="center" gutterBottom>
              Get a 16 oz Margarita when you order any 3 tacos! 
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
