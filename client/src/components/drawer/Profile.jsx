import { useContext } from "react";
import { Box, styled } from "@mui/system";
import { AccountContext } from "../../context/AccountProvider";
import { Typography } from "@mui/material";


  const ImageStyle = styled(Box)`
    display: flex;
    justify-content: center;
  `;

  const Image = styled("img")({
    width: 200,
    height: 200,
    borderRadius: "50%",
    padding: "25px 0 ",
  });

  const BoxStyle = styled(Box)`
    background: #ffffff;
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    & :first-child {
      font-size: 13px;
      color: #009688;
      font-weight: 200;
    }
    & :last-child {
      margin: 14px 0;
      color: #4a4a4a;
    }
  `;

  const DescriptionContainer = styled(Box)`
    padding: 15px 20px 28px 30px;
    & > p {
      font-size: 13px;
      color: #8696a0;
    }
  `;
  const Profile = () => {
  const { account } = useContext(AccountContext);
  return (
    <>
      <ImageStyle>
        <Image src={account.picture} alt="dp " />
      </ImageStyle>
      <BoxStyle>
        <Typography>Your name</Typography>
        <Typography>{account.name}</Typography>
      </BoxStyle>

      <DescriptionContainer>
        <Typography>
          This is not your username or pin. This name will be visible to your
          whatsApp contacts
        </Typography>
      </DescriptionContainer>
      <BoxStyle>
        <Typography>About</Typography>
        <Typography>Don't call WhatsApp Only</Typography>
      </BoxStyle>
    </>
  );
};

export default Profile;
