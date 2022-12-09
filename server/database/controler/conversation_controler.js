import Conversation from "../../model/conversation.js";

export const newConversation = async (request, response) => {
  try {
    const senderId = request.body.senderId;
    const reciverId = request.body.reciverId;

    const exist = await Conversation.findOne({
      members: { $all: [reciverId, senderId] },
    });
    if (exist) {
      return response.status(200).json("conversation already exist");
    }

    const newConversation = new Conversation({
      members: [senderId, reciverId],
    });

    await newConversation.save();
    return response.status(200).json("conversation saved succesfully");
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const getConversation = async (request, response) => {
  try {
    // const senderId = request.body.senderId;
    // const reciverId = request.body.reciverId;

    const conversation = await Conversation.findOne({
      members: { $all: [request.body.senderId, request.body.receiverId] },
    });
    return response.status(200).json(conversation);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
