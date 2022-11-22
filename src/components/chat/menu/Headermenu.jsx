import { useState } from "react";

import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem, styled } from "@mui/material";

const MenuIcon = styled(MenuItem)`
  font-size: 14px;
  padding: 15px 60px 5px 24px;
  color: #4a4a4a;
`;

const Headermenu = ({ SetOpendreawr }) => {
  const [open, Setopen] = useState(null);

  const handleClose = () => {
    Setopen(null);
  };

  const handelClick = (e) => {
    Setopen(e.currentTarget);
  };

  return (
    <>
      <MoreVert onClick={handelClick} />
      <Menu
        id="basic-menu"
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top", 
          horizontal: "right",
        }}
      >
        <MenuIcon
          onClick={() => {
            handleClose();
            SetOpendreawr(true);
          }}
        >
          Profile
        </MenuIcon>
      </Menu>
    </>
  );
};

export default Headermenu;
