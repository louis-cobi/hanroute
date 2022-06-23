import { useState } from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Meta from "@/components/Meta";
import { FullSizeCenteredFlexBox } from "@/components/styled";
import TextField from "@mui/material/TextField";
import Vocal from "@untemps/react-vocal";
import { useVocal } from "@untemps/react-vocal";
import { CenteredFlexBox } from "@/components/styled";
import andy from "./andy.svg";
import { Image } from "../Welcome/styled";
import Paper from "@mui/material/Paper";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Box } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";



function Page1() {
  function useInput() {
    const [value, setValue] = useState("");
    const formTheme = createTheme({
      palette: {
        text: {
          primary: "rgba(255,255,255,0)",
        },
      },
    });

  const _onVocalStart = () => {
    setValue("");
  };

  const _onVocalResult = (value) => {
    setValue(value);
  };

  const [, { start, subscribe }] = useVocal("fr_FR");
    const input = (
      <ThemeProvider theme={formTheme}>
        <TextField
          id="standard-basic"
          label=""
          variant="standard"
          onChange={(e) => setValue(e.target.value)}
          defaultValue={value}
          sx={{mt:"7vh",}}
        />
        <Vocal
          onStart={_onVocalStart}
          onResult={_onVocalResult}
          style={{ width: 40, position: "fixed", right: 10, top: 20 }}
          lang={"fr-FR"}
        />
      </ThemeProvider>
    );
    return [value, input];
  }
  const [answer, setAnswer] = useInput();

  return (
    <>
      <Meta title="notes" />
    <Typography variant="h5" color="#223F67" fontWeight="900" fontSize="44px"  sx={{m:"4vh 0 2vh 5vw"}}>
        QUESTION 1
      </Typography>
      <CenteredFlexBox>
        <Image alt="andy" src={andy} sx={{ width: "200px", mb:"2vh"}} />
      </CenteredFlexBox>
      <Paper elevation={3} sx={{ borderRadius: "30px 30px 0px 0px", height:"76vh" }}>
      <Box to={"/page-3"}
          component={Link}>
          <CloseIcon sx={{mt:"2vh", ml:"2vw"}}/>
        </Box>
      <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt:"5vh"}}>
          <Typography variant="h3" color="primary" sx={{fontWeight:"900", fontSize:"4rem"}}>Aujourd'hui, j'ai été</Typography>
      </Grid>
      <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          
          <Typography>{setAnswer}</Typography> 
      </Grid>
      <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Typography variant="h3" sx={{ bgcolor: "#ECBF41", transform:"rotate(-5deg)"}}>
            {answer}
          </Typography>
      </Grid>
      <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt:"15vh"}}>
        <Button variant="contained" color='secondary' sx={{ borderRadius: "50px", width: "40vw", height: "5vh", fontSize: "1.4rem" }} to={"/page-3"}
          component={Link}>VALIDER</Button>
      </Grid>
      </Paper>
    </>
  );
}

export default Page1;
