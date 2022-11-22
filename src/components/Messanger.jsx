import React from "react";
import LoginDialog from "./accounts/LoginDialog";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import Chatdialog from "./chat/Chatdialog";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";

const Header = styled(AppBar)`
  background-color: #00a884;
  height: 125px;
  box-shadow: none;
`;

const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;

const Component = styled(Box)`
  height: 100vh;
  background-color: #dcdcdc;
`;

const Messanger = () => {
  const { account } = useContext(AccountContext);

  return (
    <Component>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>

          <Chatdialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      )}
    </Component>
  );
};

export default Messanger;
