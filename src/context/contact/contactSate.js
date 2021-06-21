import React, { useReducer } from "react";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";
import axios from "axios";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  CONTACT_ERROR
} from "../types";

const ContactState = (props) => {
  const InitialState = {
    contacts: [],
    current: null,
    filtered : null,
    error : null,
  };

  const [state, disptach] = useReducer(contactReducer, InitialState);

  //Actions

  //Add Contact

  const addContact = async (contact) => {
   
    const config = {
      headers : {
        'Content-Type' : 'application/json',
      }
    }
    try {
      const res = await axios.post('api/contacts',contact,config);
      disptach({ type: ADD_CONTACT, payload: res.data });
    } catch (error) {
      disptach({ type: CONTACT_ERROR, payload: error.msg });
    }
 
  };
  //Delete Contact

  const deleteContact = (id) => {
    disptach({ type: DELETE_CONTACT, payload: id });
  };

  //SET_CURRENT contact

  const setCurrent = (contact) => {
    disptach({ type: SET_CURRENT, payload: contact });
  };

  //CLEAR_CURRENT Contact
  const clearCurrent = () => {
    disptach({ type: CLEAR_CURRENT });
  };

  //Update Contact
  const updateContact = (contact) => {
    disptach({ type: UPDATE_CONTACT, payload: contact });
  };

//FILTER CONTACTS 
const filterContact = (text) => {
    disptach({ type: FILTER_CONTACT, payload: text });
}

//CLEAR FILTER
const clearFilter = () => {
    disptach({ type: CLEAR_FILTER });
}

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered : state.filtered,
        error  : state.error,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContact,
        clearFilter

      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
