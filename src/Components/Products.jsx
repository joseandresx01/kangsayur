import React from 'react'
import { Link } from 'react-router-dom';
import efecto from '../assets/efectov.png';
import hora from '../assets/hora.png';
import logopequeño from '../assets/logopequeño.png';
import lupa from '../assets/lupa.png';
import correo from '../assets/mail.png';
import notificacion from '../assets/noti.png';
import location from '../assets/location.png';
import descuento from '../assets/descuento.png';
import raya from '../assets/-.png';
import punto from '../assets/punto.png';
import hojas from '../assets/hojas.png';
import manzanas from '../assets/manzana.png';
import carnes from '../assets/carnes.png';
import leche from '../assets/leche.png';
import cupcakes from '../assets/cupcakes.png';
import plato1 from '../assets/plato1.png';
import plato2 from '../assets/plato2.png';
import plato3 from '../assets/plato3.png';
import casa from '../assets/casa.png';
import corazon from '../assets/corazon.png';
import carrito from '../assets/carrito.png';
import usuario from '../assets/usuario.png';
// import pedazo from '../assets/pedazo.png';
const Products = () => {



  return (
    <div className='products'>
      <img className='efectov' src={efecto} alt="" />
      <img className='hora' src={hora} alt="" />
      <img className='hora' src={logopequeño} alt="" />
      <div className='busqueda'>
        <div className='relative'>
          <img className='lupa' src={lupa} alt="" />
          <input type="search" id="" name="q" placeholder='Search for fruits,veget...' />
        </div>
        <img src={correo} alt="" />
        <img src={notificacion} alt="" />
      </div>
      <div className='flex gap-1 mt-4'>
        <img className='location' src={location} alt="" />
        <h1 className='pamulang'>Pamulang Barat Residence No.5, RT 05/ ...</h1>
      </div>
      <img className='descuento' src={descuento} alt="" />
      {/* <img className='pedazo' src={pedazo} alt="" /> */}
      <div className='flex gap-1 mr-56'>
        <img className='raya' src={raya} alt="" />
        <img className='punto' src={punto} alt="" />
        <img className='punto' src={punto} alt="" />
        <img className='punto' src={punto} alt="" />
        <img className='punto' src={punto} alt="" />
      </div>
      <h1 className='mr-56 text-xl mt-5 mb-5'><b>Categories</b></h1>
      <div className='categories'>
        <div className='categori'>
          <img src={hojas} alt="" />
          <h1>Vegetables</h1>
        </div>
        <div className='categori'>
          <img src={manzanas} alt="" />
          <h1>Fruits</h1>
        </div>
        <div className='categori'>
          <img src={carnes} alt="" />
          <h1>Meat & Eggs</h1>
        </div>
        <div className='categori'>
          <img src={leche} alt="" />
          <h1>Drinks</h1>
        </div>
        <div className='categori'>
          <img src={cupcakes} alt="" />
          <h1>Bakery</h1>
        </div>
      </div>
      <h1 className='text-slate-500'>______________________________________________________</h1>
      <div className='special'>
        <h1 className='text-lg'><b>Special Deal</b></h1>
        <Link to="/Info" className='seemore'>See more ›</Link>
      </div>
      <div className='platos'>
        <img src={plato1} alt="" />
        <img src={plato2} alt="" />
        <img src={plato3} alt="" />
      </div>
      <div className='barra'>
        <img src={casa} alt="" />
        <img src={corazon} alt="" />
        <img src={carrito} alt="" />
        <img src={usuario} alt="" />
      </div>
    </div>
  )
}

export default Products;