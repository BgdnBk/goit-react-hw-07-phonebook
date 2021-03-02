import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
} from "./phonebook-action";

axios.defaults.baseURL = "http://localhost:4040/";

const addContact = (newName, number) => (dispatch) => {
  const contact = { newName, number };

  dispatch(addContactRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((e) => dispatch(addContactError(e)));
};

export default { addContact };
