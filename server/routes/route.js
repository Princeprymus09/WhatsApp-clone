import express from "express";

import { addUser , getUsers } from "../database/controler/user_controler.js";
import { newConversation , getConversation} from "../database/controler/conversation_controler.js";
import { newMessage ,getMessages } from "../database/controler/message-controler.js";
import { uploadFile } from "../database/controler/image_controller.js";

const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUsers);
route.post("/conversation/add" , newConversation);
route.post("/conversation/get" , getConversation);
route.post ("/message/add" , newMessage);
route.get("/message/get/:id" , getMessages);
route.post("/file/upload" ,upload.single("file") , uploadFile);

export default route;
