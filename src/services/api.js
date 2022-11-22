import axios from "axios";

const url =  "http://localhost:8000";

export const addUser = async(data) =>{
    try{
        console.log('INSIDE ADD USER FUNC ----')
       await axios.post(`${url}/add` , data)
    }

    catch(error){
        console.log("error while addUser api" , error.message)

    }
}