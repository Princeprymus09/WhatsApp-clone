import { Box, styled } from "@mui/material";
import { useContext, useState, useEffect ,useRef} from "react";

import { AccountContext } from "../../../context/AccountProvider";
import { getMessages, newMessage } from "../../../services/api";

//Components
import Footer from "./Footer";
import Displaymessages from "./Displaymessages";
import { Socket } from "socket.io-client";

const Wraper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;

const Maincompo = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

const Container = styled(Box)`
  padding: 1px 80px;
`;

const Mainmessages = ({ person, conversation }) => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const { account, socket,newMessageFlag,SetnewMessageFlag } = useContext(AccountContext);
  const [file, sendFile] = useState();
  const [image, setImage] = useState("");
  const[incomingMessage, setIncomingMessage ] = useState(null);

  const ScrolReff= useRef();

  useEffect(()=>{
  socket.current.on("getMessage" , data=>{
       setIncomingMessage({
            ...data,
            createdAt:Date.now()
       })
  })
  },[])


  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conversation._id);
      setMessages(data);
    };

    conversation._id && getMessageDetails();
  }, [person._id, conversation._id, newMessageFlag]);

  useEffect(()=>{
   ScrolReff.current?.scrollIntoView({transition:"smooth"})
  },[messages]);


  useEffect(()=>{
    incomingMessage && conversation?.members?.includes(incomingMessage.senderId)&&
    setMessages(prev=>[...prev, incomingMessage])
  },[incomingMessage, conversation])

  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    // debugger
    if (code === 13) {
      let message = {};
      if (!file) {
        message = {
          senderId: account.sub,
          reciverId: person.sub,
          conversationId: conversation._id,
          type: "text",
          text: value,
        };
      } else {
        message = {
          senderId: account.sub,
          reciverId: person.sub,
          conversationId: conversation._id,
          type: "file",
          text: image,
        };
      }

      socket.current.emit("sendMessage" , message);

      await newMessage(message);
      let newMsgArr = messages;
      newMsgArr.push(message);
      setMessages(newMsgArr);
      setValue("");
      sendFile("");
      setImage("");
      SetnewMessageFlag((prev) => !prev);
     }
  }
    return (
      <>
        <Wraper>
          <Maincompo>
            {messages &&
              messages.map((message) => (
                <Container ref={ScrolReff}>
                  <Displaymessages message={message} />
                </Container>
              ))}
          </Maincompo>
          <Footer
            sendText={sendText}
            setValue={setValue}
            value={value}
            file={file}
            sendFile={sendFile}
            setImage={setImage}
          />
        </Wraper>
      </>
    );
  };

export default Mainmessages;
