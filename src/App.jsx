import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Getstarted from './Components/Getstarted';
import Start from './Components/Start';
import Login from './Components/Login';
import Products from './Components/Products';
import Info from './Components/Info';
import Detail from './Components/Detail';


const App = () => {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route index path={"/"} element={<Getstarted />}/>
          <Route path={"/Start"} element={<Start />}/>
          <Route path={"/Login"} element={<Login />}/>
          <Route path={"/Products"} element={<Products />}/>
          <Route path={"/Info"} element={<Info />}/>
          <Route path={"/Detail"} element={<Detail />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;