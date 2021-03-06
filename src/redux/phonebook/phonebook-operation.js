import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from "./phonebook-action";

axios.defaults.baseURL = "http://localhost:4040/";

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactRequest());

  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchContactSuccess(data));
  } catch (e) {
    dispatch(fetchContactError(e));
  }

  // axios
  //   .get("/contacts")
  //   .then(({ data }) => dispatch(fetchContactSuccess(data)))
  //   .catch((e) => dispatch(fetchContactError(e)));
};

const addContact = ({ name, number }) => (dispatch) => {
  const contact = { name, number };

  dispatch(addContactRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((e) => dispatch(addContactError(e)));
};

const deleteContact = (contactId) => (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch((e) => dispatch(deleteContactError(e)));
  console.log(contactId);
};

export default { addContact, deleteContact, fetchContacts };
