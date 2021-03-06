import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import СontactForm from "./components/ContactForm/ContactForm";
import style from "./components/Title/Title.module.css";
import s from "./components/ContactForm/ContactForm.module.css";
import Title from "./components/Title/Title";
import { CSSTransition } from "react-transition-group";
import { ToastContainer } from "react-toastify";
import phonebookOperation from "../src/redux/phonebook/phonebook-operation";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class Phonebook extends Component {
  state = {
    // contacts: [],
    // filter: "",
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className={s.container}>
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
        <Form />
        <h2 className={s.contactList}>Контакты</h2>
        <Filter />
        <СontactForm />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(phonebookOperation.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(Phonebook);
