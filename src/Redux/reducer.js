import axios from "axios";

const Data = "";
const Url = "http://127.0.0.1:3000/api/messages";

const initialState = [];

//reducer
export default function Messagereducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MESSAGES":
      return action.payload;
    default:
      return state;
  }
}

//action
export const getMessages = () => async (dispatch) => {
  const { data } = await axios.get("http://127.0.0.1:3000/api/messages");
  console.log(data);
  dispatch({
    type: "GET_MESSAGES",
    payload: data[0],
  });
};
