import React from 'react'
import { Link } from 'react-router-dom';
import hora from '../assets/hora.png';
import efecto from '../assets/efectov.png';
import hombre2 from '../assets/hombre2.png';
import nover from '../assets/nover.png';

const Login = () => {



  return (
    <div className='login'>
      <img className='efectov' src={efecto} alt="" />
      <img className='hora' src={hora} alt="" />
      <h1 className='izquierda'>＜</h1>
      <div className='hombre2'>
        <h1><b>Login</b></h1>
        <img src={hombre2} alt="" />
      </div>
      <div className='correoycontra'>
        <div>
          <h1>email</h1>
          <input placeholder="yourmail@mail.com" type="text" />
        </div>
        <div>
          <h1>password</h1>
          <div className='password'>
            <img className='nover' src={nover} alt="" />
            <input placeholder="your password" type="password" />
          </div>
        </div>
      </div>
      <h3 className='forget'>Forgot Password ?</h3>
      <Link to="/Products" className='loginnn'><b>LOGIN</b></Link>
      <h3 className='not'>Not have an account? <b>Register</b></h3>
    </div>
  )
}

export default Login;