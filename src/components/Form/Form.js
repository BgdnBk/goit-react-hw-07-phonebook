import React, { Component } from "react";
import shortid from "shortid";
import s from "../Form/Form.module.css";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import phonebookAction from "../../redux/phonebook/phonebook-action";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  InputValues = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        this.setState({ name: value });
        break;
      case "number":
        this.setState({ number: value });
        break;
      default:
        return;
    }
  };

  addContact = (e) => {
    e.preventDefault();

    // const checkName = this.props.contactList({ name: this.state.name });
    // const checNumer = this.state.number;

    // if (checkName) {
    //   return toast.error("Это имя уже существует");
    // }

    // if (checNumer === "") {
    //   return toast.error("Введите номер");
    // }

    this.props.onSubmit({
      id: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    });
    this.resetInputValues();
  };

  resetInputValues = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const idName = shortid.generate();
    const idNumber = shortid.generate();

    return (
      <form className={s.form} onSubmit={this.addContact}>
        <label htmlFor={idName} className={s.labelName}>
          Имя
        </label>
        <input
          id={idName}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.InputValues}
          autoComplete="off"
        ></input>
        <label htmlFor={idNumber} className={s.labelNumber}>
          Номер
        </label>
        <input
          id={idNumber}
          type="tel"
          pattern="^[ 0-9]+$"
          name="number"
          value={this.state.number}
          onChange={this.InputValues}
          autoComplete="off"
        ></input>
        <button className={s.btnForm} type="submite">
          Добавить контакт
        </button>
      </form>
    );
  }
}

const checkName = (contactList, name) => {
  return contactList.some(({ name }) => name === name);
};

const mapStateToProps = (state) => ({
  contactList: state.phonebook.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, number, contactList) => {
    // if (checkName(contactList, name)) {
    //   return toast.error("Это имя уже существует");
    // }
    dispatch(phonebookAction.addContact(name, number));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
