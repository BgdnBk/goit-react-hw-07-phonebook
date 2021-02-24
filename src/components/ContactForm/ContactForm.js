import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import s from "../ContactForm/ContactForm.module.css";
import { connect } from "react-redux";
import phonebookAction from "../../redux/phonebook/phonebook-action";

function СontactForm({ contactList, onDeleted }) {
  return (
    <TransitionGroup component="ul" classNames={s.table}>
      {contactList.map(({ id, name, number }) => {
        return (
          <CSSTransition key={id} timeout={250} classNames={s} unmountOnExit>
            <li>
              {name}: {number}
              <button
                className={s.btnList}
                type="button"
                onClick={() => onDeleted(id)}
              >
                Удалить
              </button>
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

const getFilter = (allContacts, filter) => {
  const filterValues = filter.toLowerCase();
  console.log("this is ALLCONT", allContacts);
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(filterValues)
  );
};

const mapStateToProps = ({ phonebook: { contacts, filter } }) => ({
  contactList: getFilter(contacts, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleted: (id) => dispatch(phonebookAction.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(СontactForm);
