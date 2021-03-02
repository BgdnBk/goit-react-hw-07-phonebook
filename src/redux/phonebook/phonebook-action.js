import { createAction } from "@reduxjs/toolkit";

export const addContactRequest = createAction("phonebook/addContactRequest");
export const addContactSuccess = createAction("phonebook/addContactSuccess");
export const addContactError = createAction("phonebook/addContactError");

export const deleteContact = createAction("phonebook/delete");
export const changeFilter = createAction("phonebook/changeFilter");

// export default {
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   deleteContact,
//   filter,
// };

// const addContact = (newName, number) => (dispatch) => {
//   const contact = { newName, number };

//   dispatch({ type: "phonebook/addContactRequest" });

//   axios
//     .post("/contacts", contact)
//     .then(({ data }) =>
//       dispatch({ type: "phonebook/addContactSuccess", payload: data })
//     )
//     .catch((e) => dispatch({ type: "phonebook/addContactError", payload: e }));
// };

// const addContact = createAction("phonebook/add", ({ name, number }) => ({
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// }));
