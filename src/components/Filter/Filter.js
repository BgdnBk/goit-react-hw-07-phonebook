import React from "react";
import shortid from "shortid";
import s from "../Filter/Filter.module.css";
import { connect } from "react-redux";
import phonebookAction from "../../redux/phonebook/phonebook-action";

function Filter({ value, searchContact }) {
  const id = shortid.generate();
  console.log("this is value filter", value);
  return (
    <div className={s.containerSearch}>
      <label className={s.labelSearch} htmlFor={id}>
        Поиск контакта по имени
      </label>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={searchContact}
        id={id}
        className={s.inputSearch}
      ></input>
    </div>
  );
}
const mapStateToProps = (state) => ({
  value: state.phonebook.filter,
});

const mapDispatchToProps = (dispatch) => ({
  searchContact: (e) => dispatch(phonebookAction.filter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
