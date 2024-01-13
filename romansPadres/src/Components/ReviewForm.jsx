import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { Box } from '@mui/material';

export default function ReviewForm({addReview}){

  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');
  const [text, setText] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addReview(name, topic, text);
        // clear the form fields after submitting
        setName('');
        setTopic('');
        setText('');

    }
    

    return( 
        <>
        <Box sx={{display: "flex", justifyContent: "center", flexDirection: "column",
        alignItems: "center"
        }}>
            <form onSubmit= {handleSubmit}>
                <TextField sx={{m: 1}} id="outlined-basic" label="Name" variant="outlined" 
                onChange={(e) => setName(e.target.value)} value={name}/>
                <TextField sx={{m: 1}} id="outlined-basic" label="Topic" variant="outlined"
                onChange={(e) => setTopic(e.target.value)} value={topic} />
                <TextField sx={{m: 1}} id="outlined-basic" label="Review" variant="outlined"
                onChange={(e) => setText(e.target.value)} value={text} />
                    {/* <Button variant="outlined"><h2>Add Review!</h2></Button> */}
                <Button onClick={handleSubmit}><h1>Add Review</h1></Button>
            </form>
        </Box>
        </>

    )
}