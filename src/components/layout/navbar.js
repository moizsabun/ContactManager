import React ,{useContext} from 'react'
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';


 const Navbar = ({title ,icon}) => {
     const authContext = useContext(AuthContext);

     const {logout , isAuthenticated , user} = authContext;

     const onLogout = () => {
        logout();
     }
     const authLinks = ( 
        
        <>
            <li>Hello {user && user.name} </li>
            <li> <a  onClick ={onLogout} href = '#!' > 
            <i className = 'fas fa-sign-out-alt' />
            <span className='hide-sm'>Logout</span>
            </a> </li>
         </>
     )

     const guestLinks = ( 
        
        <>
           
                   <li>
                   <Link to='/register'>Register</Link>
                   </li>
                <li>
                <Link to='/login'> Login</Link>
                </li>
                   
         </>
     )
    return (
        <div className= "navbar bg-primary">
            <h1>

                <i className= {icon}>
                    {title}
                </i>
            </h1>
            <ul>
               {isAuthenticated  ? authLinks : guestLinks}
            </ul>
        </div>
    )
}

Navbar.propTypes = {  
    title : PropTypes.string.isRequired,
    icon : PropTypes.string,
}

Navbar.defaultProps = {
    title : 'Contact Management',
    icon : 'fas fa-id-card-alt',
}

export default Navbar;