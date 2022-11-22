import { Typography, Box, styled, Divider } from "@mui/material";

import { emptyChatImage } from "../../../constents/Data";

const MainComponent = styled(Box)`
  background:#f8f9fa;
  padding:30px 0;
  text-align:center;
  height:100vh`;

const Container = styled(Box)`
  padding: 0 100px;
`;

const Image = styled("img")({
  width: 400,
  marginTop: 100,
});
const FirstTitle = styled(Typography)`
  font-size: 32px;
  margin: 25px 0 10px 0;
  font-family: inherit;
  font-weight: 300;
  color: #41525d;
`;

const SecondTitle = styled(Box)`
font-size:14px;
color:#667781;
font-weight:400;
font-family:inherit;`;

const StyledDevider = styled(Divider)`
margin:40px 0;
opacity:0.4;`

const Empetychat = () => {
  return (
    <>
      <MainComponent>
        <Container>
          <Image src={emptyChatImage} alt="img" />
          <FirstTitle>WhatsApp Web</FirstTitle>
          <SecondTitle>
            Now send and recive messages without keeping you phone online.
          </SecondTitle>
          <SecondTitle>
            Use WhatsApp on upto 4 linked devices and 1 phone at the same time.
          </SecondTitle>
          <StyledDevider/>
        </Container>
      </MainComponent>
    </>
  );
};

export default Empetychat;
