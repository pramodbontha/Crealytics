import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Products search and filter application
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
