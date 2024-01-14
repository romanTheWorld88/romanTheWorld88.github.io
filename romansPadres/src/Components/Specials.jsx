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
        <Box sx={{ alignItems: "center", bgcolor: '#0aadf5', height: '12vh' }}>
            <Typography variant="h5" align="center" gutterBottom>
          Choose Day
        </Typography>
            <ColorTabs />    
        </Box>
      </Container>
    </React.Fragment>
  );
}

