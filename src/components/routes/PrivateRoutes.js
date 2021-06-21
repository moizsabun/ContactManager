import React , {useContext} from 'react'
import AuthContext from '../../context/auth/AuthContext'
import {Route ,  Redirect } from 'react-router-dom';

function PrivateRoutes({component : Component , ...rest }) {
    const authContext =  useContext(AuthContext);
    const {isAuthenticated , isLoading} = authContext;


    return (
       <Route {...rest} render = {props => !isAuthenticated && !isLoading  ? (

        <Redirect to = 'login' />
       ) :     <Component {...props} /> } />
     
   
    )
}

export default PrivateRoutes
