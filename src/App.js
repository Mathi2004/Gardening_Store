import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Main from './component/Main';
function App() {

  return (
    <div className="App" style={{backgroundColor:'#eff0f2'}}>
      <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Login/>}/>
        <Route index path='/Main' element={<Main/>}/>
      </Routes>
      </BrowserRouter>
     </div>
  );
}

export default App;
