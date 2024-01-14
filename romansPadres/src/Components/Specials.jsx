import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import ColorTabs from './ColorTabs';

export default function Specials() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ alignItems: "center", bgcolor: '#0aadf5', height: '18vh', borderRadius: '15px', overflow: 'hidden'}}>
        <Typography sx={{m: 2, fontFamily: "'Lemon', serif", color: 'white'}} variant="h2" component="div" textAlign="center" fontFamily="'Kaushan Script', cursive">
                    Day
                  </Typography>
            <ColorTabs />    
        </Box>
      </Container>
    </React.Fragment>
  );
}

