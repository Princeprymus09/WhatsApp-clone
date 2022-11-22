import { useContext } from "react";
import { Box, styled } from "@mui/material";
import { Chat as MessageIcon } from "@mui/icons-material";

import { AccountContext } from "../../../context/AccountProvider";
import Headermenu from "./Headermenu";
import InfoDrawer from "../../drawer/InfoDrawer";
import { useState } from "react";

const MainComonent = styled(Box)`
  height: 44px;
  background-color: #ededed;
  display: flex;
  align-items: center; 
`;

const Wraper = styled(Box)`
  margin-left: auto;
  & > * {
    margin-left: 2px;
    padding: 8px;
  }
  & :first-child {
    font-size: 22px;
    margin-right: 8px;
    margin-top: 2px;
  }
`;

const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "50%",
});

const Header = () => {
  const [opeDrawer, SetOpendreawr] = useState(false);
  const { account } = useContext(AccountContext);
  
  const toggleDrawer = () => {
    SetOpendreawr(false);
  };

  return (
    <>
      <MainComonent>
        <Image src={account.picture} alt="dp" onClick={() => toggleDrawer()} />
        <Wraper>
          <MessageIcon />
          <Headermenu SetOpendreawr={SetOpendreawr} />
        </Wraper>
      </MainComonent>
      <InfoDrawer open={opeDrawer} setOpen={SetOpendreawr} />
    </>
  );
};

export default Header;
