import Dice from 'react-dice-roll';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

import Meta from '@/components/Meta';
import { Link } from "react-router-dom";

import './styles.css';

function Page2() {
  const dice1 = [
    'https://imagizer.imageshack.com/img924/6879/eWIpv1.png',
    'https://imagizer.imageshack.com/img922/4978/s2ia6h.png',
    'https://imagizer.imageshack.com/img924/3272/tJuCNx.png',
    'https://imagizer.imageshack.com/img924/874/t1ka0P.png',
    'https://imagizer.imageshack.com/img922/3693/y59RYa.png',
    'https://imagizer.imageshack.com/img924/1553/pUVEKy.png',
  ];

  const dice2 = [
    'https://imagizer.imageshack.com/img924/627/Zpvkzu.png',
    'https://imagizer.imageshack.com/img922/6488/fNsGnH.png',
    'https://imagizer.imageshack.com/img922/1416/dK6R6G.png',
    'https://imagizer.imageshack.com/img924/2202/GdrAFx.png',
    'https://imagizer.imageshack.com/img923/1008/7SqY6O.png',
    'https://imagizer.imageshack.com/img922/2210/SbTyPp.png',
  ];

  return (
    <>
      <Typography variant="h5" color="#223F67" fontWeight="900" fontSize="44px"  sx={{m:"4vh 0 5vh 5vw"}}>
        DÉS VIRTUELS
      </Typography>
      <Meta title="iceBreaker" />
      <Paper elevation={3} sx={{ borderRadius: '30px 30px 0px 0px', height:"90vh" }}>
        <Box to={"/page-3"}
          component={Link}>
          <CloseIcon sx={{mt:"2vh", ml:"2vw"}}/>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt:"15vh"}}>
            <Grid item sm={10}>
              <div className="App">
                <div className="dices">
                  <div className="diceOne">
                    <Dice size={200} faces={dice1} />
                  </div>
                  <div className="diceTwo">
                    <Dice size={200} faces={dice2} />
                  </div>
                </div>
              </div>
              <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt:"25vh"}}>
                <Button variant="contained" color='secondary' sx={{ borderRadius: "50px", width: "40vw", height: "5vh", fontSize: "1.4rem" }} to={"/page-3"}
                component={Link}>FINIR LA SÉANCE</Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
}

export default Page2;
