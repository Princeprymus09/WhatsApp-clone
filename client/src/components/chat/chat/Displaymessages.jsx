import { Box, styled, Typography } from "@mui/material";
import { formatDate } from "../../../utils/CommonUtils";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
// import message from "../../../../../server/model/Messages";

const Own = styled(Box)`
  background: #dcf8c6;
  max-width: 60%;
  margin-left: auto;
  padding: 5px;
  margin-top: 1px;
  width: fit-container;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  word-break: break-word;
`;

const Wraper = styled(Box)`
  background: #ffffff;
  max-width: 60%;
  padding: 5px;
  margin-top: 1px;
  width: fit-container;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
`;

const Text = styled(Typography)`
  font-size: 14px;
  padding: 0 25px 0 5px;
`;

const Time = styled(Typography)`
  font-size: 10px;
  color: #919191;
  margin-top: 6px;
  word-break: keep-all;
  margin-top: auto;
`;

const ImageMessage = ({ message }) => {
  return (
    <>
      {message?.text?.includes(".pdf") ? (
        <Box></Box>
      ) : (
        <img src={message.text} alt={message.text} />
      )}
    </>
  );
};

const TextMessage = ({ message }) => {
  return (
    <>
      <Text>{message.text}</Text>
      <Time>{formatDate(message.createdAt)}</Time>
    </>
  );
};

const Displaymessages = ({ message }) => {
  const { account } = useContext(AccountContext);
  console.log(message);
  return (
    <>
      {account.sub === message.senderId ? (
        <Own>
          {message.type === "file" ? (
            <ImageMessage message={message} />
          ) : (
            <TextMessage message={message} />
          )}
        </Own>
      ) : (
        <Wraper>
          <Text>{message.text}</Text>
          <Time>{formatDate(message.createdAt)}</Time>
        </Wraper>
      )}
    </>
  );
};

export default Displaymessages;
