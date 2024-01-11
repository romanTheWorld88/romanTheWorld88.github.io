import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function RatingFood(){


    const [score, setScore] = useState(5);

    return(
        <div>
            <Rating
                name="simple-controlled"
                value={score}
                onChange={(event, newValue) => {
                setScore(newValue);
            }}
            />
        </div>
    )
}