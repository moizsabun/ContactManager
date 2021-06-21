import React, { useState , useContext , useEffect} from 'react';
import AuthContext from '../../context/auth/AuthContext';
import AlertContext from '../../context/alert/alertContext'



const Login = props => {

  const authContext  =  useContext(AuthContext);
  const alertContext =  useContext(AlertContext);

const {setAlert} = alertContext;
const {loginUser, error, clearErrors, isAuthenticated} = authContext;

  const [user, setUser] = useState({
  
    email: '',
    password: '',
  
  });

useEffect( ()=> {
  if(isAuthenticated)
      {
          props.history.push('/');
      }
      if(error)
      {
        setAlert(error,'danger' , 3000);
          clearErrors();
      }
})
  const onChange = e  => 
  {
      setUser ({
          ...user,
          [e.target.name] : e.target.value
      })
  }

  const onSubmit = e =>{
    
    e.preventDefault();
    if(email === '' || password === '')
    {
      setAlert('Please fill Login Form ', 'danger')
    }
    else{
      loginUser({email,password});
    }
    //console.log('User Login')
  }

  const { email, password } = user;
  return (
    <div className='form-container' >
      <h1>User Login</h1>
      <form onSubmit={onSubmit}>
       
        <div className='form-group'>
          <label htmlFor='email'> Email </label>
          <input type='text' name='email' value={email} onChange={onChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'> Password </label>
          <input type='password' name='password' value={password} onChange={onChange} />
        </div>
        
        <input  type = 'submit' value = 'Login' className='btn btn-primary btn-block' />
      </form>
    </div>
  );
};

export default Login;
