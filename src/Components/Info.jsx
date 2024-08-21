import React from 'react'
import { Link } from 'react-router-dom';
import hora2 from '../assets/hora2.png';
import lupa from '../assets/lupa.png';
import menu from '../assets/menu.png';
import carrito from '../assets/carrito.png';
import hojas from '../assets/hojas.png';
import manzanas from '../assets/manzana.png';
import carnes from '../assets/carnes.png';
import leche from '../assets/leche.png';
import cupcakes from '../assets/cupcakes.png';
import zanahorias from '../assets/zanahorias.png';
import chiles from '../assets/chiles.png';
import cebollas from '../assets/cebollas.png';
import papas from '../assets/papas.png';
import like from '../assets/like.png';
import mas from '../assets/mas.png';
const Info = () => {
    


    return (
        <div className='info'>
            <img className='hora2' src={hora2} alt="" />
            <div className='flex buscarp'>
                <h1>＜</h1>
                <div className='buscar relative'>
                    <img className='lupam' src={lupa} alt="" />
                    <img className='menu' src={menu} alt="" />
                    <input type="search" id="" name="q" placeholder='Search for fruits,veget...' />
                </div>
                <img src={carrito} alt="" />
            </div>
            <div className='categories mt-1'>
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
            <div className='productos1'>
                <div className='producto2'>
                    <div className='relative'>
                        <img className='like' src={like} alt="" />
                        <img src={zanahorias} alt="" />
                    </div>
                    <h1><b>Fresh Carrot</b></h1>
                    <h1><span className='verde'><b>Rp 18,000</b></span> / kg</h1>
                    <h1 className='gris'>Rp 21,000 </h1>
                    <Link to="/Detail"><img className='mas' src={mas} alt=""/></Link>
                </div>
                <div className='producto2'>
                    <div className='relative'>
                        <img className='like' src={like} alt="" />
                        <img src={chiles} alt="" />
                    </div>
                    <h1><b>Fresh Red Chili</b></h1>
                    <p><span className='verde'><b>Rp 12,000</b></span> / kg</p>
                    <h1 className='gris'>Rp 14,000 </h1>
                    <Link to="/Detail"><img className='mas' src={mas} alt=""/></Link>
                </div>
            </div>
            <div className='productos1'>
                <div className='producto2'>
                    <div className='relative'>
                        <img className='like' src={like} alt="" />
                        <img src={cebollas} alt="" />
                    </div>
                    <h1><b>Fresh Onion</b></h1>
                    <h1><span className='verde'><b>Rp 21,000</b></span> / kg</h1>
                    <h1 className='gris'>Rp 23,000 </h1>
                    <Link to="/Detail"><img className='mas' src={mas} alt=""/></Link>
                </div>
                <div className='producto2'>
                    <div className='relative'>
                        <img className='like' src={like} alt="" />
                        <img src={papas} alt="" />
                    </div>
                    <h1><b>Fresh Potato</b></h1>
                    <h1><span className='verde'><b>Rp 10,000</b></span> / 1 pack</h1>
                    <h1 className='gris'>Rp 12,000 </h1>
                    <Link to="/Detail"><img className='mas' src={mas} alt=""/></Link>
                </div>
            </div>
        </div>
    )
}

export default Info;