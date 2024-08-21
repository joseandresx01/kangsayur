import React from 'react'
import { Link } from 'react-router-dom';
import efecto from '../assets/efectov.png';
import hora from '../assets/hora.png';
import logo from '../assets/kang.png';
import mujeruno from '../assets/mujer1.png';
import hombreuno from '../assets/hombre1.png';
import bg from '../assets/punto.png';
import bb from '../assets/puntob.png';
const Getstarted = () => {



    return (
        <div className='getstarted'>
            <div className='fondo'>
                <img className='efectoverde' src={efecto} alt="" />
                <img className='hora z-10' src={hora} alt="" />
                <img className='logo z-10' src={logo} alt="" />
                <div className='personas z-10'>
                    <img className='mujeruno' src={mujeruno} alt="" />
                    <img className='hombreuno' src={hombreuno} alt="" />
                </div>
                <h1 className='texto'>Kangsayur is a solution for <b>Grocery <br /> Shopping</b> every you need</h1>
                <Link to="/Start" className='get'>Get Started</Link>
                <div className='botoness'>
                    <img src={bg} alt="" />
                    <img src={bg} alt="" />
                    <img src={bb} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Getstarted;