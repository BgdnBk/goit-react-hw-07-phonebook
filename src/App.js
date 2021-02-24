import React, { Component } from "react";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import СontactForm from "./components/ContactForm/ContactForm";
import style from "./components/Title/Title.module.css";
import s from "./components/ContactForm/ContactForm.module.css";
import Title from "./components/Title/Title";
import { CSSTransition } from "react-transition-group";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

export default class Phonebook extends Component {
  state = {
    // contacts: [],
    // filter: "",
  };

  // componentDidMount() {
  //   const contacts = localStorage.getItem("contacts");
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }

  // addContact = (contact) => {
  //   this.setState({
  //     contacts: [contact, ...this.state.contacts],
  //   });
  // };

  // valuesFilter = (e) => {
  //   const { name, value } = e.currentTarget;
  //   this.setState({ [name]: value });
  // };

  // getFilter = () => {
  //   const { filter, contacts } = this.state;
  //   const filterValues = filter.toLowerCase();
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(filterValues)
  //   );
  // };

  checkName = (newName) => {
    return this.state.contacts.some(
      ({ name }) => name === Object.values(newName).join("")
    );
  };

  // deletedContact = (contactId) => {
  //   this.setState((prevState) => ({
  //     contacts: prevState.contacts.filter(
  //       (contact) => contact.id !== contactId
  //     ),
  //   }));
  // };

  render() {
    // const filterContact = this.getFilter();

    return (
      <div className={s.container}>
        {/*  */}
        <ToastContainer autoClose={3000} />
        <CSSTransition
          in={true}
          appear={true}
          classNames={style}
          timeout={500}
          unmountOnExit
        >
          <Title />
        </CSSTransition>
        <Form contactList={this.checkName} />
        <h2 className={s.contactList}>Контакты</h2>
        {/* <Filter velue={this.state.filter} searchContact={this.valuesFilter} /> */}
        <Filter />
        <СontactForm
        // contactList={filterContact}
        // onDeleted={this.deletedContact}
        />
      </div>
    );
  }
}
