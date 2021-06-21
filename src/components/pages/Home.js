import React , {useContext , useEffect} from 'react'
import Contact from '../contact/Contact';
 import ContactForm from '../contact/ContactForm';
import ContactFilter from '../contact/ContactFilter';
import AuthContext from '../../context/auth/AuthContext';

const Home =() => {
    const authContext =useContext(AuthContext);

    useEffect( () => {
        authContext.loadUser()
      // eslint-disable-next-line
    },[])

    return (
        <div className='grid-2'>
          <div><ContactForm></ContactForm></div>
          <div>
                <ContactFilter></ContactFilter>
              <Contact></Contact>
          </div>
        </div>
    )
}

export default Home;
