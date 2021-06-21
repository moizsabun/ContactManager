import React , {useContext , useRef, useEffect} from 'react'
import ContactContext from '../../context/contact/contactContext'

const ContactFilter = () => {
    const contactContext = useContext(ContactContext)
    const {filterContact,clearFilter, filtered} = contactContext;
    const text  =  useRef('');
    const onChange = e => {
        if(text.current.value !== '')
        {
            filterContact(e.target.value);
        }  
        else
        {
            clearFilter();
        }
    }
    useEffect( () => {
        if(filtered === null)
        {
            text.current.value = '';
        }
    })

    return (
        <form>
            <input type='text'  ref = {text} placeholder = 'Search Contact' onChange={onChange} /> 
        </form>
    )
}

export default ContactFilter
