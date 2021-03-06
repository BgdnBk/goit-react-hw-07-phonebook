import { createSelector } from "@reduxjs/toolkit";

const getFilter = (state) => state.phonebook.filter;
const getAllContacts = (state) => state.phonebook.contacts;

// const getPhonebookFilter = (state) => {
//   const filter = getFilter(state);
//   const allContacts = getAllContacts(state);
//   const filterValues = filter.toLowerCase();

//   return allContacts.filter(({ name }) =>
//     name?.toLowerCase().includes(filterValues)
//   );
// };

const getPhonebookFilter = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const filterValues = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name?.toLowerCase().includes(filterValues)
    );
  }
);

export default {
  getFilter,
  getAllContacts,
  getPhonebookFilter,
};
