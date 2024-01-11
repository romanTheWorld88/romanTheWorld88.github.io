import { CssBaseline } from "@mui/material";
import { useState } from "react";
import ReviewList from "./ReviewList";
import Box from "@mui/material/Box";
import { useAuth } from './AuthContext';
export default function Reviews(){

    const { user, login, logout} = useAuth();

    const handleLogin = () => {
        const token = 'exampleToken';
        login(token);
    };

    const handleLogout = () => {
        logout();
    };


    return(
        <>
        <Box sx={{display: "flex", justifyContent: "center", flexDirection: "column",
        alignItems: "center"
        }}>
                <CssBaseline />
                <ReviewList />
        </Box>
        
        
        </>
    )
}