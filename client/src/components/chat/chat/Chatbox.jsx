import React, { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { Box } from "@mui/material";
import { getConversation } from "../../../services/api";

import Maninheader from "./Mainheader";
import Mainmessages from "./Mainmessages";
import { useEffect } from "react";

const Chatbox = () => {
  const { person, account } = useContext(AccountContext);
  const [conversation, setConversation] = useState({});
  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        reciverId: person.sub,
      });
      setConversation(data);
    };
    getConversationDetails();
  }, [person.sub]);

  console.log("we are in chatbox");

  return (
    <>
      <Box style={{ height: "75%" }}>
        <Maninheader person={person} />
        <Mainmessages person={person} conversation={conversation} />
      </Box>
    </>
  );
};
export default Chatbox;
