import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ColorTabs() {
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
    <Box sx={{ width: '100%' }}>
      <Tabs
  variant="scrollable"
  scrollButtons="auto"
  allowScrollButtonsMobile
  aria-label="scrollable auto tabs example"
  sx={{fontWeight: 'bold' }}
>
  <LinkTab label="Monday" href="/specials/monday" />
  <LinkTab label="Tuesday" href="/specials/Tuesday" />
  <LinkTab label="Wednesday" href="/specials/Wednesday" />
  <LinkTab label="Thursday" href="/specials/Thursday" />
  <LinkTab label="Friday" href="/specials/Friday" />
  <LinkTab label="Saturday" href="/specials/Saturday" />
  <LinkTab label="Sunday" href="/specials/Sunday" />

</Tabs>
    </Box>
  );
}
