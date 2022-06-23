import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';

function Header() {
  const [value, setValue] = React.useState(0);
  //const [, themeActions] = useTheme();

  return (
    <Box
      elevation={2}
      position="fixed"
      sx={{ width: "60%", bottom: "5%",left:"20%", alignItems: "center",
      justifyContent:"center", }}
    >

      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ borderRadius: "26px", boxShadow:"0px 6px 29px 0px rgba(0, 0, 0, 0.25)", }}
        elevation={5}
      >
        <BottomNavigationAction
          label="Programme"
          icon={<CalendarTodayOutlinedIcon />}
          to={"/page-1"}
          component={Link}
          value="Programme"
        />
        <BottomNavigationAction
          label="Mes notes"
          icon={<CreateOutlinedIcon />}
          to={"/page-2"}
          component={Link}
          value="Notes"
        />
        <BottomNavigationAction
          label="Mon profil"
          icon={<AccountCircleOutlinedIcon />}
          to={"/page-3"}
          component={Link}
          value="Profil"
        />
      </BottomNavigation>
    </Box>
  );
}

export default Header;
