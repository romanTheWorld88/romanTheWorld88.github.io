import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import RatingFood from "./RatingFood";
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import ReviewForm from './ReviewForm';
// const initialReviews = [
//     {id: 1, topic: "Chicken Fajitas", text: "The grilled chicken was so tender and crispy, paired with the fresh tortillas, it was just a great all around experience. Great staff as well!", name: "Ryan"},
//     {id: 2, topic: "Ground Beef Enchiladas", text: "Ask for the queso on top.. to die for!", name: "Jacob"},
//     {id: 3, topic: "Bar Environment", text: "Loved the baretender and the service was great! Can't go wrong with anything steak here.", name: "Jakobi"},
//     {id: 4, topic: "Margaritas", text: "Drinks are strong and food is great! One of our favorite spots in Louisiana.", name: "Dylan"},
//     {id: 5, topic: "Steak Fajitas", text: "I order the steak fajitas every time, and they smack, every time. Fresh flour tortillas as well, there is nothing better. ", name: "John"}
// ];

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem('reviews'));
  if (!data) return [];
  return data;
}

export default function ReviewList(){

    const [reviews, setReview] = useState(getInitialData);

    useEffect(() => {
      localStorage.setItem('reviews', JSON.stringify(reviews));
    }, [reviews])

    const addReview = (name, topic, text, rating) => {
      setReview(prevReview => {
        return [...prevReview, {name: name, topic: topic, text: text, rating: rating}]
      })
    }

    return(<>
    <Box sx={{
        display: "flex", backgroundColor: '#9BAAFF', padding: 2, borderRadius: 9,
        width: '400px', justifyContent: "center", m: 1, flexDirection: "column", textAlign: "center"
    }}>
    <h1 className=''>Reviews</h1>
        <ReviewForm addReview = {addReview}/>

    </Box>
    <List sx={{ m: 1, width: '100%', borderRadius: 9, maxWidth: 400, bgcolor: '#9BAAFF' }}>
        {reviews.map(rev => {
            return <ListItem alignItems="flex-start">
                    <ListItemText
                      primary={rev.name}
                      secondary={
                                <React.Fragment>
                                    {/* <RatingFood /> */}
                                  <Typography
                                    sx={{ display: 'inline' }} component="span"
                                    variant="h4" color="text.primary">
                                        <div className="container">{rev.topic}</div>
                                    
                                    </Typography>
                                  <h3>{rev.text}</h3>
                                  <Divider variant="inset" component="li" />
                          </React.Fragment> }/>
                    </ListItem>

        })}
        </List>
           </> )
        }
      