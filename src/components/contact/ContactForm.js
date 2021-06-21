import React, { useContext, useState, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import { CLEAR_CURRENT } from "../../context/types";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const {addContact,current,clearCurrent,updateContact} = contactContext;

 
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    type: "Personal",
  });


  useEffect(()=>{
    if(current !== null)
    {
setContact(current)
    }
    else
    {
      setContact ( {
        name: "",
    email: "",
    phoneNumber: "",
    type: "personal",
      })
    }
  },[contactContext,current])
  const { name, email, phoneNumber, type } = contact;

  const onChange = e => setContact({...contact, [e.target.name]: e.target.value })
  const onSubmit = (e) => {
    e.preventDefault();
    if(current === null)
   { addContact(contact);}
   else
   {
    updateContact(contact)
   }
    clearAll();
  };

  const clearAll =() => {
    clearCurrent();
  }
  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary"> {current ? 'Edit Contact' : 'Add Contact'}</h2>
      <input
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={onChange}
            />
            <input
                type='text'
                placeholder='Email'
                name='email'
                value={email}
                onChange={onChange}
            />
            <input
                type='text'
                placeholder='Phone'
                name='phoneNumber'
                value={phoneNumber}
                onChange={onChange}
            />
            <h5>Contact Type</h5>
            <input type='radio' name='type' value='personal' checked={type === 'personal' } onChange={onChange}/> Personal
            {' '}
            <input type='radio' name='type' value='professional' checked={type === 'professional'} onChange={onChange}/> Professional
            <div>
                <input type='submit' value={current ? 'Update Contact' :'Add Contact'} className='btn btn-primary btn-block' />
            </div>
            {current && <div>
              
              <button  className='btn btn-kight btn-block' onClick={clearAll} >Clear </button>
              </div>}
            
    </form>
  );
};

export default ContactForm;
