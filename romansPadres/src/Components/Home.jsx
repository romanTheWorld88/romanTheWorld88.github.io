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



import fishImage from '../images/grilledFishSkillet.jpeg';
import brisketBowl from '../images/brisketBowl.jpg';
import happyPlate from '../images/happyPlate.jpg';
import alCarbon from '../images/alCarbon.jpg';
import papaNachos from '../images/papaNachos.jpg';
import crepe from '../images/crepe.jpeg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import descriptions from "./Descriptions";
import frontRestaurant from "../images/DTLocation.png";
import plates from "../images/plates.jpg";
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
  { title: 'Red Fish Tacos', description: findDescription('fishTacosDesc'), image: crepe },
  { title: 'Red Fish Filet', description: findDescription('fishFiletDesc'), image: redFish },
  { title: 'Ground Beef Enchiladas', description: findDescription('stkDescription'), image: comboEnch },
  { title: 'Steak Tampicana', description: findDescription('stkDescription'), image: crepe },
  { title: 'Papa Supreme Nachos', description: findDescription('papaNachosDesc'), image: papaNachos },
  { title: 'Happy Plate', description: findDescription('stkDescription'), image: happyPlate },
  { title: 'Fajita Chicken Sandwich', description: 'Description for Card 3', image: crepe },
  { title: 'Brisket Bowl', description: 'Description for Card 3', image: brisketBowl },
  { title: 'Tacos al Carbon', description: findDescription('stkDescription'), image: alCarbon },
  { title: 'Ground Beef Taco', description: findDescription('oneTaco'), image: oneTaco },
  { title: 'Mix Grill Fajitas', description: 'Description for Card 3', image: crepe },
  { title: 'Steak Quesadilla', description: 'Description for Card 3', image: crepe },
  { title: 'Lime Magaritas', description: 'Description for Card 3', image: crepe },
  { title: 'Watermelon Margarita', description: 'Description for Card 3', image: crepe },
  { title: 'Nutella Crepe', description: 'Description for Card 3', image: crepe },
  { title: 'Sopapillas', description: 'Description for Card 3', image: crepe },



  // Add more card data as needed
];

export default function Home() {
  return (
    <CssBaseline>
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
                  <Typography variant="h4" component="div" textAlign="center" fontFamily="'Kaushan Script', cursive">
                    {card.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
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
      </Box>
    </CssBaseline>
  );
}
