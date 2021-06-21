import React, { useState,useContext ,useEffect} from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/AuthContext';

const Register = props => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const {registerUser , error, clearErrors , isAuthenticated} = authContext;

    const {setAlert} = alertContext;
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  useEffect( () => {
      if(isAuthenticated)
      {
          props.history.push('/');
      }
      if(error)
      {
        setAlert(error,'danger' , 3000);
          clearErrors();
      }

      // eslint-disable-next-line
  },[error,isAuthenticated, props.history])
  const onChange = e  => 
  {
      setUser ({
          ...user,
          [e.target.name] : e.target.value
      })
  }

  const onSubmit = e =>{
   
    e.preventDefault();
 
    if(name === '' || email === ''  || password === '')
    {
        setAlert('Please enter all fields','danger');
    }
    else if(password !== confirmPassword)
    {
        setAlert('Password and Confirm Pasword not matched','warning');
    }
    else
    {
        registerUser({
            name,email,password
        })
        console.log('User Registered');
    }
  }

  const { name, email, password, confirmPassword } = user;
  return (
    <div className='form-container' >
      <h1>User Registration</h1>
      <form onSubmit={onSubmit} > 
        <div className='form-group'>
          <label htmlFor='name'> Name </label>
          <input type='text' name='name' value={name} onChange={onChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='email'> Email </label>
          <input type='text' name='email' value={email} onChange={onChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'> Password </label>
          <input type='password' name='password' value={password} onChange={onChange}  minLength = '6'/>
        </div>
        <div className='form-group'>
          <label htmlFor='confirmPassword'> Confirm Password </label>
          <input type='password' name='confirmPassword' value={confirmPassword} onChange={onChange} minLength = '6' />
        </div>
        <input  type = 'submit' value = 'Register' className='btn btn-primary btn-block' />
      </form>
    </div>
  );
};

export default Register;
