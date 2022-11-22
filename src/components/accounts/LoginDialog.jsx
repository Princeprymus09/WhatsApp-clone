import React from "react";
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../../constents/Data";
import { GoogleLogin } from "@react-oauth/google";
import {jwt_decode } from "jwt-decode"

const dialogStyle = {
  height: "95%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
};

const Component = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 55px 0 55px 55px;
`;

const Qrimg = styled("img")({
  height: 264,
  width: 264,
  margin: "40px 20px 20px 50px",
});

const Title = styled(Typography)`
  font-size: 22px;
  margin-bottom: 25px;
  font-family: inherit;
`;

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    line-height: 28px;
  }
`;

const LoginDialog = () => {


  const onLoginSuccesss = (res) => {
    console.log(res);
  };

  const onLoginError = (res) => {
    console.log("login failed" , res);
  };

  return (
    <>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
        <Component>
          <Container>
            <Title>To use WhatsApp on your computer:</Title>
            <StyledList>
              <ListItem>1. Open whatsapp on your computer</ListItem>
              <ListItem>
                2. Tap Menu or Settings and select Linked Devices
              </ListItem>
              <ListItem>3. Tap on Link a Device </ListItem>
              <ListItem>
                4. Point your phone to this screen to capture the code
              </ListItem>
            </StyledList>
          </Container>
          <Box style={{position:"relative"}}>
            <Qrimg
              src={qrCodeImage}
              alt="qr code"
              onSuccess={onLoginSuccesss}
              onError={onLoginError}
            />
            <Box style={{ position: "absolute", top:"50%", transform:"translateX(50%)" }}>
              <GoogleLogin />
            </Box>
          </Box>
        </Component>
      </Dialog>
    </>
  );
};

export default LoginDialog;
