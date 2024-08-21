import React from 'react'
import hora from '../assets/hora.png';
import zanahoriasg from '../assets/zanahoriasg.png';
import atras from '../assets/atras.png';
import like from '../assets/like.png';
import puntob from '../assets/puntob.png';
import punto from '../assets/punto.png';
import chiles2 from '../assets/chiles2.png';
import cebollas2 from '../assets/cebollas2.png';
const Detail = () => {
  return (
    <div className='detail'>
      <img className='zanahoriasg' src={zanahoriasg} alt="" />
      <img className='hora' src={hora} alt="" />
      <div className='flex gap-64 mt-3'>
        <img src={atras} alt="" />
        <img src={like} alt="" />
      </div>
      <div className='flex gap-1 mt-28 mb-5'>
        <img src={puntob} alt="" />
        <img src={punto} alt="" />
        <img src={punto} alt="" />
      </div>
      <div className='bg-white informacion'>
        <div>
          <h1 className='vegetables'>vegetables</h1>
          <h1><b>Fresh Carrot</b></h1>
          <h1><span className='verde'><b>Rp 18,000</b></span> / kg Rp 21,000</h1>
        </div>
        <div className='flex gap-20 items-center'>
          <h1 className='verde'>Description</h1>
          <h1>Nutrition facts</h1>
        </div>
        <h1 className='text-slate-500'>_____________________________________________________</h1>
        <h1 className='gris'>
          The carrot is a root vegetable, most commonly <br />
          observed as orange in color, though purple, <br />
          black, red, white, and yellow cultivars exist, all of <br />
          which are domesticated forms of the wild carrot, <br />
          Daucus carota, native to Europe and <br /> Southwestern Asia.</h1>
        <h1 className='mr-52'><b>Related Product</b></h1>
        <div className='flex gap-4'>
          <div className='flex'>
            <img src={chiles2} alt="" />
            <div className='borde'>
              <h1 className='text-sm'><b>Fresh Red Chili</b></h1>
              <h1 className='text-sm'><span className='verde'><b>Rp 12,000</b></span>/kg</h1>
            </div>
          </div>
          <div className='flex'>
            <img src={cebollas2} alt="" />
            <div className='borde'>
              <h1 className='text-sm'><b>Fresh Onion</b></h1>
              <h1 className='text-sm'><span className='verde'><b>Rp 21,000</b></span></h1>
            </div>
          </div>
        </div>
        <div className='flex gap-5 centro'>
          <div className='flex gap-4'>
            <h1 className='signos'>-</h1>
            <h1 className='dos'>2</h1>
            <h1 className='signos'>+</h1>
          </div>
          <button className='cart'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Detail