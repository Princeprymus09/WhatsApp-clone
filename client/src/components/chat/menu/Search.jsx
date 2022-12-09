import {Box, styled} from "@mui/material";
import {Search as Searchicon} from "@mui/icons-material";
import {InputBase} from "@mui/material";


const HeadComponent = styled(Box)`
background:#fff;
height:45px;
border-bottom : 1px solid #f2f2f2;
display:flex;
align-items:center`;

const Wraper = styled(Box)`
background-color:#f0f2f5;
positon:relative;
margin:0 13px;
border-radius:10px;
width:100%;`

const Icon =  styled(Box)`
position:absolute;
height:100%;
padding: 6px 18px;
color:#919191;`

const Inputfield = styled(InputBase)`
height:16px;
width:100%;
padding:16px;
padding-left:65px;
height:15px;
font-size:14px`

const Search = ({setText}) =>{
    return(
        <HeadComponent>
            <Wraper>
                <Icon>
                <Searchicon fontSize="small"/>

                </Icon>
                <Inputfield placeholder="Search or start new chat"
                onChange={(e)=>setText(e.target.value)}/>
            </Wraper>
        </HeadComponent>
    )
}

export default Search;
