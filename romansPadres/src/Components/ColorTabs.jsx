import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { BrowserRouter as Router } from 'react-router-dom';


export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const changeDay = () => {
    console.log("Going to day1..")
  }

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
    <Box sx={{ m: 1, width: '100%', display: 'flex' }}>
      <Tabs
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          aria-label="scrollable auto tabs example"
          sx={{fontWeight: 'bold' }}
      >
     {/* <Tab
  label={
    <Link to="/specials/monday" style={{ m: 2, fontFamily: "'Lemon', serif", color: 'white' }}>
      Monday
    </Link>
  }/>  */}
    <LinkTab label={
    <Link to="/specials/monday" style={{ m: 2, fontFamily: "'Lemon', serif", color: 'white' }}>
      Monday
    </Link>
  } href="/specials/monday" />
  <LinkTab label={
    <Link to="/specials/tuesday" style={{ m: 2, fontFamily: "'Lemon', serif", color: 'white' }}>
      Tuesday
    </Link>
  } href="/specials/tuesday" />
  <LinkTab label={
    <Link to="/specials/wednesday" style={{ m: 2, fontFamily: "'Lemon', serif", color: 'white' }}>
      Wednesday
    </Link>
    
  } href="/specials/wednesday" />
  <LinkTab label={
    <Link to="/specials/thursday" style={{ m: 2, fontFamily: "'Lemon', serif", color: 'white' }}>
      Thursday
    </Link>
    
  } href="/specials/thursday" />
  <LinkTab label={
    <Link to="/specials/friday" style={{ m: 2, fontFamily: "'Lemon', serif", color: 'white' }}>
      Friday
    </Link>
  } href="/specials/friday" />
  <LinkTab label={
    <Link to="/specials/saturday" style={{ m: 2, fontFamily: "'Lemon', serif", color: 'white' }}>
      Saturday
    </Link>
  } href="/specials/saturday" />
  <LinkTab label={
    <Link to="/specials/sunday" style={{ m: 2, fontFamily: "'Lemon', serif", color: 'white' }}>
      Sunday
    </Link>
  } href="/specials/sunday" />

      </Tabs>
    </Box>
  );
}
