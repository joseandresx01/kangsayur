import React from 'react'
import { Link } from 'react-router-dom';
import hora from '../assets/hora.png';
import logo from '../assets/kang.png';
import efecto from '../assets/efectov.png';
import personas from '../assets/personas1.png';
import g from '../assets/gooogle.png';
import f from '../assets/facebok.png';
const Start = () => {



  return (
    <div className='start'>
      <img className='efectov' src={efecto} alt="" />
      <img className='hora' src={hora} alt="" />
      <img className='logo' src={logo} alt="" />
      <img className='personas' src={personas} alt="" />
      <div className='botones'>
        {/* <button className='login'>Login</button> */}
        <Link to="/Login" className='loginn'><b>LOGIN</b></Link>
        <button className='register'><b>Register</b></button>
        <h1 className='orlw'>━━━━━━━━━━━━━━<b> Or login with </b>━━━━━━━━━━━━━━</h1>
        <div>
          <img className='g' src={g} alt="" />
          <button className='google'><b>Google</b></button>
        </div>
        <div>
        <img className='f' src={f} alt="" />
        <button className='facebook'><b>Facebook</b></button>
        </div>
      </div>
    </div>
  )
}

export default Start;