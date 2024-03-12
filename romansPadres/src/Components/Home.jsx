import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";
import stkFajitasImage from '../images/stkFajitas.png';
import frontLights from "../images/frontRestaurant.jpg";
import comboEnch from "../images/comboEnch.jpg";
import comboFajitas from "../images/comboFajitas.jpg";
import newSteakPic from "../images/newSteakPic.jpg";
import redFish from "../images/redFish.jpg";
import oneTaco from "../images/oneTaco.jpg";
import sideAngle from "../images/sideAngle.jpg";
import brisketBowl2 from "../images/brisketBowlNew.jpg";
import chickenTenders from "../images/chickenTenders.jpg";
import cknWrap from "../images/cknWrap.jpg";
import grilledVegies from "../images/grilledVegies.jpg";
import shrimpBowl from "../images/shrimpBowl.jpg";
import stkNachos from '../images/stkNachos.jpg';
import brisketBowl from '../images/brisketBowl.jpg';
import limeRita from "../images/limeRita.jpg";
import coronarita from "../images/coronarita.jpg";
import flautas from "../images/flautas.jpg";
import happyPlate from '../images/happyPlate.jpg';
import alCarbon from '../images/alCarbon.jpg';
import papaNachos from '../images/papaNachos.jpg';
import crepe from '../images/crepe.jpeg';
import descriptions from "./Descriptions";
import RatingFood from "./RatingFood";
import OrderButton from './OrderButton';
import newSteak from '../images/stkFaj.jpg'
import { useState } from 'react';

const ExpandMore = ({ expand }) => (
  <IconButton {...other} />
);

const findDescription = (variable) => {
  const foundDescription = descriptions.find(desc => desc.variable === variable);
  return foundDescription ? foundDescription.description : '';
}

<style>
  @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
</style>

const cardsData = [
  { title: 'Steak Fajitas', description: findDescription('stkDescription'), image: newSteakPic},
  { title: 'Chicken Lettuce Wraps', description: findDescription('fishTacosDesc'), image: cknWrap },
  { title: 'Red Fish Filet', description: findDescription('fishFiletDesc'), image: redFish },
  { title: 'Shrimp Bowl', description: findDescription('stkDescription'), image: shrimpBowl },
  { title: 'Brisket Bowl', description: findDescription('stkDescription'), image: brisketBowl2 },
  { title: 'Steak Nachos', description: findDescription('papaNachosDesc'), image: stkNachos },
  { title: 'Happy Plate', description: findDescription('stkDescription'), image: happyPlate },
  { title: 'Brisket Tacos', description: 'Description for Card 3', image: happyPlate },
  { title: 'Brisket Bowl', description: 'Description for Card 3', image: cknWrap },
  { title: 'Tacos al Carbon', description: findDescription('stkDescription'), image: alCarbon },
  { title: 'Ground Beef Taco', description: findDescription('oneTaco'), image: oneTaco },
  { title: 'Grilled Vegetables', description: 'Description for Card 3', image: grilledVegies },
  { title: 'Combination Enchiladas', description: 'Description for Card 3', image: comboEnch },
  { title: 'Chicken Tenders', description: 'Description for Card 3', image: chickenTenders },
  { title: 'Papa Supreme Nachos', description: 'Description for Card 3', image: papaNachos },
  { title: 'Nutella Crepe', description: 'Description for Card 3', image: crepe },
  { title: 'Lime Margarita', description: 'Description for Card 3', image: limeRita },
  { title: 'Chicken Flautas', description: 'Description for Card 3', image: flautas },
  { title: 'Steak Tacos', description: 'Description for Card 3', image: oneTaco },
  { title: 'Steak', description: 'Description for Card 3', image: stkFajitasImage },



  // Add more card data as needed
];

export default function Home() {
  return (
    <CssBaseline>
      <Grid container spacing={0} justifyContent="center" sx={{ backgroundColor: '#597EE3', padding: '10px', fontFamily: "'Lemon', serif", marginBottom: '-25px' }}>
             <Typography sx={{fontFamily: "'Oleo Script Swash Caps', system-ui"}} variant="h1" align="center" gutterBottom>
              Mis Padres
            </Typography>
            
        </Grid>
         <Grid container spacing={0} justifyContent="center" sx={{ backgroundColor: '#597EE3', padding: '10px', fontFamily: "'Lemon', serif", marginTop: '-65px' }}>
             <Typography sx={{fontFamily: "'Oleo Script Swash Caps', system-ui"}} variant="h1" align="center" gutterBottom>
              Mexican Grill
            </Typography>
            
        </Grid>
      <Grid container spacing={0} justifyContent="center" sx={{ backgroundColor: '#597EE3', padding: '10px', fontFamily: "'Lemon', serif", marginTop: '-55px' }}>
            <h2>225-313-3742</h2>
        </Grid>
        <Grid container spacing={0} justifyContent="center" sx={{ backgroundColor: '#597EE3', padding: '10px', fontFamily: "'Lemon', serif", marginTop: '-55px' }}>
            <h2>13424 LA-73</h2>
        </Grid>
        <Grid container spacing={0} justifyContent="center" sx={{ backgroundColor: '#597EE3', padding: '10px', fontFamily: "'Lemon', serif", marginTop: '-55px' }}>
            <h2>Geismar, Louisiana</h2>
        </Grid>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#597EE3",
        padding: "20px",
      }}>
        
    
        <Grid container spacing={2} justifyContent="center">
        <img src={frontLights} alt="" width="550" height= "500"/>
        <img src={comboFajitas} alt="" width="550" height= "500"/>
        <img src={sideAngle} alt="" width="550" height= "500"/>

        
        <Box sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#597EE3",
              padding: "80px",
            }}>
              <OrderButton />
        </Box>
        <Grid container spacing={2} justifyContent="center">
          {cardsData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  alt={card.title}
                  height="340"
                  image={card.image}
                />
                <CardContent>
                  <Typography sx={{m: -1, fontFamily: "'Lemon', serif"}} variant="h4" component="div" textAlign="center" fontFamily="'Kaushan Script', cursive">
                    {card.title}
                  </Typography>
                  <Typography sx={{m: 1, fontFamily: "'Lemon', serif"}} variant="body1" color="text.secondary">
                    {card.description}
                  </Typography>
                  <Box>
                    <RatingFood sx={{display: "flex", justifyContent: "center",
                                    flexDirection: "column", alignItems: "Center", m: 3}}/>
                  </Box>
                </CardContent>
              </Card>
              
            </Grid>
          ))}
          </Grid>
        </Grid>
        
      </Box>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#597EE3",
        padding: "20px",
      }}>
                    <OrderButton />
                    </Box>
 <Grid container spacing={0} justifyContent="center" sx={{ backgroundColor: '#597EE3', padding: '10px', fontFamily: "'Lemon', serif" }}>
          <h2>225-313-3742 | 13424 Hwy 73</h2>
            
        </Grid>
    </CssBaseline>
  );
}
