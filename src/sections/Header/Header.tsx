import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from "react-router-dom";

function Header() {
  const [value, setValue] = React.useState(0);
  //const [, themeActions] = useTheme();

  return (
    <Box
      elevation={2}
      position="fixed"
      sx={{ width: 500, bottom: 0, alignItems: "center", borderRadius: "16" }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
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
