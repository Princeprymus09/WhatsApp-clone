import { useContext } from "react";
import {Box, Typography,styled} from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";
import { setConversation } from "../../../services/api";

const Container = styled(Box)`
display:flex;
height:45px;
padding:13px 0;
cursor:pointer;`;

const Image = styled("img")({
    height:40,
    width:40,
    borderRadius :"50%",
    padding:"0 14px",
    objectFit:"cover"
});




const Conversations = ({user}) =>{

    const {setPerson, account} = useContext(AccountContext);

    const getChats = async() =>{

        setPerson(user);
        await setConversation({senderId:account.sub, reciverId:user.sub})

    }


    return( 
        <>
        <Container onClick={()=>getChats()}>
            <Box>
                <Image src={user.picture} alt="dp" />
            </Box>
            <Box>
                <Typography>{user.name}</Typography>
            </Box>
        </Container> 
        </>
    )
}

export default Conversations;