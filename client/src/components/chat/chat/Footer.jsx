import {Box, InputBase, styled} from "@mui/material";
import { AttachFile, Mic} from '@mui/icons-material';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import { useContext, useEffect } from "react";
import {uploadDataFile}  from "../../../services/api"




const Container = styled(Box)`
height:55px;
background:#ededed;
display:flex;
width:100%;
align-items:center;
padding:0 15px;
 
& >  * {
    margin:5px;
    color:#919191;
}`;

const Search = styled(Box)`
background-color:#ffffff;
border-radius:17px;
width: 660px;`;

const Inputfield = styled(InputBase)`
width:100%;
padding:20px;
height:20px;
padding-left:25px;
font-size:14px;`;

const Clipicon = styled(AttachFile)`
transform:rotate(40deg)`

const  Footer =({sendText, setValue , value , file , sendFile, setImage}) =>{
    
  useEffect(()=>{
    const getImage = async ()=>{
        if(file){
            const data = new FormData();
            data.append("name" , file.name);
            data.append("file" , file);

             let response = await  uploadDataFile(data);
             console.log(response);
               setImage(response.data);
        }
    } 

    getImage();
  },[file])


    const onfileChange = (e) =>{
        sendFile(e.target.files[0]);
        setValue(e.target.value);
    }



    return(
        <>
        <Container>
            <EmojiEmotionsOutlinedIcon/>
            <label htmlFor="fileInput">
            <Clipicon/>
                </label>           
             
            <input type="file" id ="fileInput"
            style={{display:"none"}} 
            onChange={(e)=>onfileChange(e)}/>
            <Search>
                <Inputfield placeholder="Type a message"
                onChange={(e)=>setValue(e.target.value)}
                onKeyPress={(e)=>sendText(e)} value={value}/>
            </Search>
            <Mic/>
        </Container>
        </>
    )
}

export default Footer;