import {Box,   styled} from "@mui/material";
import { useContext , useState, useEffect} from "react";

import { AccountContext } from "../../../context/AccountProvider";
import { getMessages, newMessage } from "../../../services/api";



//Components
import Footer from "./Footer";
import Displaymessages from "./Displaymessages";

const Wraper = styled(Box)`
background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
background-size:50%`;

const Maincompo = styled(Box)`
height:80vh;
overflow-y: scroll;`;

const Container = styled(Box)`
padding:1px 80px`;

const Mainmessages = ({person, conversation}) =>{
    const [value, setValue] = useState('');
    const [messages, setMessages] = useState([]);
    const {account} = useContext(AccountContext);
    const[newMessageFlag, SetnewMessageFlag] = useState();
    const[file, sendFile] = useState();

    useEffect(()=>{
      const getMessageDetails = async()=>{ 
         let data =  await getMessages(conversation._id);
        setMessages(data);
      }

            conversation._id &&   getMessageDetails();
    },[person._id ,conversation._id, newMessageFlag])

    const sendText = async(e) =>{
      
      const code = e.keyCode || e.which;
      // debugger
      if(code===13){
        let message = {
            senderId : account.sub,
            reciverId : person.sub,
            conversationId: conversation._id,
            type:'text',
            text:value
        };

        await newMessage(message);
        let newMsgArr = messages;
        newMsgArr.push(message);
        setMessages(newMsgArr);
        setValue('');
        SetnewMessageFlag(prev=> !prev);
      }
    }



       return(
        <>
       <Wraper>
        <Maincompo>
           {

          messages && messages.map(message =>
            <Container>
               <Displaymessages message={message}/>
            </Container>
          

           )}
        </Maincompo>
        <Footer sendText={sendText}
         setValue={setValue}
          value={value}
          file={file}
          sendFile={sendFile}/>

       </Wraper>
        </>
    )
}

export default Mainmessages;