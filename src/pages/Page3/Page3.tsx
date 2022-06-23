import Typography from "@mui/material/Typography";
import andy from "./andy.svg";
import { Image } from "../Welcome/styled";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ElectricBoltSharpIcon from "@mui/icons-material/ElectricBoltSharp";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

import Meta from "@/components/Meta";
import { CenteredFlexBox } from "@/components/styled";

function Page3() {
  const handleClick = () => {
    console.log("You clicked the Chip.");
  };
  return (
    <>
      <Meta title="programme" />
      <Typography variant="h5" color="#223F67" fontWeight="900" fontSize="44px" sx={{m:"4vh 0 4vh 5vw"}}>
        MON PROGRAMME
      </Typography>
      <CenteredFlexBox>
        <Image alt="andy" src={andy} sx={{ width: "200px" }} />
      </CenteredFlexBox>
      <Paper elevation={3} sx={{ borderRadius: "30px 30px 0px 0px", height:"76vh" }}>
        <CenteredFlexBox>
          <Stack direction="row" spacing={5} sx={{mt:"2vh"}}>
            <Chip label="Lundi" onClick={handleClick} />
            <Chip label="Mardi" variant="outlined" onClick={handleClick} />
            <Chip label="Mercredi" variant="outlined" onClick={handleClick} />
            <ArrowForwardIosIcon />
          </Stack>
        </CenteredFlexBox>
        <Box sx={{ flexGrow: 1 , mt:"2vh"}}>
          <Grid container spacing={2} sx={{display: "flex", justifyContent:"center", alignItems: "center"}}>
            <Grid item xs={2} >
              <Typography color="#223F67" sx={{display: "flex", justifyContent:"center", alignItems: "center", fontSize:"1.8rem", fontWeight:"700", ml:"2vw"}}>9h-10h</Typography>
            </Grid>
            <Grid item xs={9}>
              <Paper sx={{width:"75vw", height:"10vh", display: "flex", alignItems: "center", backgroundColor:"#F7F7F9", boxShadow:"0px 4px 30px rgba(0, 0, 0, 0.15)", borderRadius:"30px"}} to={"/page-2"}
          component={Link}>
                  <Stack direction="row" spacing={2} sx={{gap:"20px"}}>
                    <Avatar sx={{ bgcolor: "#4C456B", width:"4rem", height:"4rem", ml:"20px"}} >
                      <ElectricBoltSharpIcon sx={{ color: "#FFF" }} />
                    </Avatar>
                    <Typography color="#223F67" sx={{display: "flex", justifyContent:"center", alignItems: "center", fontSize:"1.8rem", fontWeight:"510", ml:"1vw"}}>Atelier IceBreaker : Dès Virtuels</Typography>
                  </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 , mt:"2vh"}}>
          <Grid container spacing={2} sx={{display: "flex", justifyContent:"center", alignItems: "center"}}>
            <Grid item xs={2} >
              <Typography color="#223F67" sx={{display: "flex", justifyContent:"center", alignItems: "center", fontSize:"1.8rem", fontWeight:"700" , ml:"1vw"}}>10h-12h</Typography>
            </Grid>
            <Grid item xs={9}>
              <Paper sx={{width:"75vw", height:"10vh", display: "flex", alignItems: "center", backgroundColor:"#F7F7F9", boxShadow:"0px 4px 30px rgba(0, 0, 0, 0.15)", borderRadius:"30px"}}>
                  <Stack direction="row" spacing={2} sx={{gap:"20px"}}>
                    <Avatar sx={{ bgcolor: "#4C456B", width:"4rem", height:"4rem", ml:"20px"}} >
                      <ElectricBoltSharpIcon sx={{ color: "#FFF" }} />
                    </Avatar>
                    <Typography color="#223F67" sx={{display: "flex", justifyContent:"center", alignItems: "center", fontSize:"1.8rem", fontWeight:"510" , ml:"1vw"}}>Atelier IceBreaker : Dès Virtuels</Typography>
                  </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 , mt:"2vh"}}>
          <Grid container spacing={2} sx={{display: "flex", justifyContent:"center", alignItems: "center"}}>
            <Grid item xs={2} >
              <Typography color="#223F67" sx={{display: "flex", justifyContent:"center", alignItems: "center", fontSize:"1.8rem", fontWeight:"700" , ml:"1vw"}}>14h-15h</Typography>
            </Grid>
            <Grid item xs={9}>
              <Paper sx={{width:"75vw", height:"10vh", display: "flex", alignItems: "center", backgroundColor:"#F7F7F9", boxShadow:"0px 4px 30px rgba(0, 0, 0, 0.15)", borderRadius:"30px"}}>
                  <Stack direction="row" spacing={2} sx={{gap:"20px"}}>
                    <Avatar sx={{ bgcolor: "#4C456B", width:"4rem", height:"4rem", ml:"20px"}} >
                      <ElectricBoltSharpIcon sx={{ color: "#FFF" }} />
                    </Avatar>
                    <Typography color="#223F67" sx={{display: "flex", justifyContent:"center", alignItems: "center", fontSize:"1.8rem", fontWeight:"510"}}>Atelier IceBreaker : Dès Virtuels</Typography>
                  </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 , mt:"2vh"}}>
          <Grid container spacing={2} sx={{display: "flex", justifyContent:"center", alignItems: "center"}}>
            <Grid item xs={2} >
              <Typography color="#223F67" sx={{display: "flex", justifyContent:"center", alignItems: "center", fontSize:"1.8rem", fontWeight:"700" , ml:"1vw"}}>16h-17h</Typography>
            </Grid>
            <Grid item xs={9}>
              <Paper sx={{width:"75vw", height:"10vh", display: "flex", alignItems: "center", backgroundColor:"#F7F7F9", boxShadow:"0px 4px 30px rgba(0, 0, 0, 0.15)", borderRadius:"30px"}}>
                  <Stack direction="row" spacing={2} sx={{gap:"20px"}}>
                    <Avatar sx={{ bgcolor: "#4C456B", width:"4rem", height:"4rem", ml:"20px"}} >
                      <ElectricBoltSharpIcon sx={{ color: "#FFF" }} />
                    </Avatar>
                    <Typography color="#223F67" sx={{display: "flex", justifyContent:"center", alignItems: "center", fontSize:"1.8rem", fontWeight:"510"}}>Atelier IceBreaker : Dès Virtuels</Typography>
                  </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
}

export default Page3;
