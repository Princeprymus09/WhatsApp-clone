import { useContext, useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";
import { setConversation, getConversation } from "../../../services/api";
import { formatDate } from "../../../utils/CommonUtils";

const Container = styled(Box)`
  display: flex;
  height: 45px;
  padding: 13px 0;
  cursor: pointer;
  position: relative;
`;

const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "50%",
  padding: "0 14px",
  objectFit: "cover",
});

const Container1 = styled(Box)`
  display: flex;
`;

const Timestamp = styled(Typography)`
  font-size: 12px;
  margin-left: auto;
  color: 00000099;
  margin-right: 15px;
`;

const Text = styled(Typography)`
  position: absolute;
  top: 30px;
  left: 70px;
  font-size: 14px;
`;

const Conversations = ({ user }) => {
  const { setPerson, account, newMessageFlag } = useContext(AccountContext);
  const [message, setMessage] = useState({});

  useEffect(() => {
    const getConversationsDetails = async () => {
      const data = await getConversation({
        senderId: account.sub,
        reciverId: user.sub,
      });
      setMessage({ text: data?.message, timestamp: data?.updatedAt });
    };
    getConversationsDetails();
  }, [newMessageFlag]);

  const getChats = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, reciverId: user.sub });
  };

  return (
    <>
      <Container onClick={() => getChats()}>
        <Box>
          <Image src={user.picture} alt="dp" />
        </Box>
        <Box style={{ width: "100%" }}>
          <Container1>
            <Typography>{user.name}</Typography>
            {message?.text && (
              <Timestamp>{formatDate(message?.timestamp)}</Timestamp>
            )}
          </Container1>
        </Box>
        <Box>
          <Text>
            {message?.text?.includes("localhost") ? "media" : message.text}
          </Text>
        </Box>
      </Container>
    </>
  );
};

export default Conversations;
