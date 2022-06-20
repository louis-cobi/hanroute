import { useState } from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Meta from "@/components/Meta";
import { FullSizeCenteredFlexBox } from "@/components/styled";
import TextField from "@mui/material/TextField";



function Page1() {
  function useInput() {
    const [value, setValue] = useState("");
    const formTheme =  createTheme ( {
      palette: {
        text:{
          primary: 'rgba(255,255,255,0)',
        }
      }
    })
    const input = (
      <ThemeProvider theme={formTheme}>
      <TextField
        id="standard-basic"
        label=""
        variant="standard"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      </ThemeProvider>
    );
    return [value, input];
  }
  const [answer, setAnswer] = useInput();

  const ariaLabel = {'bgcolor': "#ECBF41" } as const

  return (
    <>
      <Meta title="page 1" />
      <FullSizeCenteredFlexBox sx={{ ml: -20 }}>
        <Typography variant="h3">Aujourd'hui, j'ai été &#160;</Typography>
        {setAnswer}
        <Typography variant="h3" sx={{ bgcolor: "#ECBF41", ml: -20 }}>
          {answer}
        </Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Page1;
