import {Box, styled, Typography} from "@mui/material";
import { MoreVert , Search } from "@mui/icons-material";
import { defaultProfilePicture } from "../../../constents/Data";


const Header = styled(Box)`
height:44px;
background:#ededed;
padding:8px 16px;
display:flex;
align-items:center;`;

const Image = styled("img")({
    height:40,
    width:40,
    objectFit:"cover",
    borderRadius:"50%"
});

const Name =styled(Typography)`
margin-left:12px !important`;

const Status =styled(Typography)`
margin-left:12px !important;
font-size:12px;
color:rgb(0,0,0,0.6)`;

const Rightcontainer = styled(Box)`
margin-left:auto;
& > svg{
    padding: 8px;
    font-size :24px;
    color: #000;
}`


const Maninheader = ({person}) =>{
    return(
        <>
        <Header>

            <Image src={person.picture} alt="dp" />
            <Box>
            <Name>{person.name}</Name>
            <Status>Offlne</Status>
            </Box>
            <Rightcontainer>
               <Search/>
               <MoreVert/>
            </Rightcontainer>
        </Header>
        </>
    )

}

export default Maninheader;