import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import User from './Pages/User/User';
// import Work from './Pages/WorkDetails/Work';
import { useState } from 'react';
import User from './Page/User/User';
import Work from './Page/WorkDetails/Work';
function App() {
  const [value,setValue]=useState()
  const handlename=(data)=>{
  console.log(data);
  setValue(data)
    }
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<User handlename={handlename}/>}></Route>
      <Route path="/work" element={<Work value={value}/>}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
