import { useState } from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Meta from "@/components/Meta";
import { FullSizeCenteredFlexBox } from "@/components/styled";
import TextField from "@mui/material/TextField";
import Vocal from "@untemps/react-vocal";
import { useVocal } from "@untemps/react-vocal";

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
        />
        <Vocal
          onStart={_onVocalStart}
          onResult={_onVocalResult}
          style={{ width: 40, position: "absolute", right: 10, top: 20 }}
          lang={"fr-FR"}
        />
      </ThemeProvider>
    );
    return [value, input];
  }
  const [answer, setAnswer] = useInput();

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
