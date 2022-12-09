import { useEffect, useState, useContext } from "react";
import { getUsers } from "../../../services/api";
import { Box, styled , Divider} from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";

//components
import Conversations from "./Conversations";


const Component = styled(Box)`
height:81vh;
overflow:overlay;`;

const DividerStyle = styled(Divider)`
margin:0 0 0 20px;
background-color:#e9edef;
opacity:0.6;`;

const Conversation = ({text}) => {
  const [users, SetUsers] = useState([]);
  const { account } = useContext(AccountContext);
  useEffect(() => {
    const fetchData = async () => {
      let response = await getUsers();
      const filterData = response.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()));
      SetUsers(filterData);
    }; 

    fetchData();
  }, [text]);

  return (
    <>
      <Component>
        {users.map(
          (user, index) =>
            user.sub !== account.sub && 
            <>
            <Conversations user={user} key={index} />
            <DividerStyle/>
            </>
        )}
        ;
      </Component>
    </>
  );
};

export default Conversation;
