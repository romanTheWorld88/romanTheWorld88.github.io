import { TextField } from "@mui/material";
import { useState } from "react";

export default function ReviewForm(){

    const [name, setName] = useState("");
    const [topic, setTopic] = useState("");
    const [review, setReview] = useState("");

    return( 
        <>
            <TextField sx={{m: 1}} id="outlined-basic" label="Name" variant="outlined" />
            <TextField sx={{m: 1}} id="outlined-basic" label="Topic" variant="outlined" />
            <TextField sx={{m: 1}} id="outlined-basic" label="Review" variant="outlined" />
        </>

    )
}