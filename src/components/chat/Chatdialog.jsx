import { Dialog, Box, styled } from "@mui/material";
import React from "react";

//components
import Menue from "./menu/Menue";
import Empetychat from "./chat/Empetychat";


const dialogStyle = {
  height: "95%",
  width: "100%",
  margin: "20px",
  borderRadius: "0px",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)`
  min-width: 450px;
`;

const RightCompnent = styled(Box)`
  width: 70%;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const Chatdialog = () => {
  return (
    <>
      <Dialog
        open={true}
        PaperProps={{ sx: dialogStyle }}
        hideBackdrop={true}
        maxWidth={"md"}
      >
        <Component>
          <LeftComponent>
            <Menue />
          </LeftComponent>

          <RightCompnent>
            <Empetychat />
          </RightCompnent>
        </Component>
      </Dialog>
    </>
  );
};

export default Chatdialog;
