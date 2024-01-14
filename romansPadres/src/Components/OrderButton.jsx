import { Box } from "@mui/material";
import { TextField, Button, Typography } from "@mui/material";





export default function OrderButton(){

    <style>
@import url('https://fonts.googleapis.com/css2?family=Lemon&display=swap');
</style>

    return(
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
          <Button size="large" variant="contained" color="error">
          <Typography sx={{m: 1, fontFamily: "'Lemon', serif"}} variant="h4" component="div" textAlign="center" fontFamily="'Kaushan Script', cursive">
                    Order Online
                  </Typography>
          </Button>
          <Button href="/menu"size="large" variant="contained" color="error">
          <Typography sx={{m: 1, fontFamily: "'Lemon', serif"}} variant="h4" component="div" textAlign="center" fontFamily="'Kaushan Script', cursive">
                    See Menu
                  </Typography>
          </Button>
          <Button href="/specials" size="large" variant="contained" color="error">
          <Typography sx={{m: 1, fontFamily: "'Lemon', serif"}} variant="h4" component="div" textAlign="center" fontFamily="'Kaushan Script', cursive">
                    See Specials
                  </Typography>
          </Button>
        </Box>
    )
}