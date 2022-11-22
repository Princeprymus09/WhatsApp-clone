import React from "react";
import LoginDialog from "./accounts/LoginDialog";
import { AppBar, Toolbar, styled, Box } from "@mui/material";

const Header = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;

const Component = styled(Box)`
height:100vh;
background-color:#DCDCDC`

const Messanger = () => {
  return (
    <Component>
      <Header>
        <Toolbar></Toolbar>
      </Header>

      <LoginDialog />
    </Component>
  );
};

export default Messanger;
