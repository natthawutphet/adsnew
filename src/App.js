import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Google from './Component/Google';
import Facebook from './Component/Facebook';
import Dowloads from './Component/Dowloads';
import Post from './Component/Post';
import Admin from './Component/Admin';
import Nav from './Component/Nav'; 
import Footer from './Component/Footer'; 
import { Link } from 'react-router-dom';




const App = () => {

 
  return (
    <BrowserRouter>
<dav>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="img/logo.png" width={80}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item mx-3">
                   <Link to="/" >Home</Link>
        </li>
        <li className="nav-item mx-3">
        <Link to="/Google" className='active'>Google</Link>
        </li>
        <li className="nav-item mx-3">
        <Link to="/Facebook">Facebook</Link>
        </li>
        <li className="nav-item mx-3">
        <Link to="/Dowloads">Dowloads Free</Link>
        </li>
        <li className="nav-item mx-3">
        <Link to="/Post">Post</Link>
        </li>
        <li className="nav-item mx-3">
        <Link to="/admin">Admin</Link>
        </li>
        <li className="nav-item mx-3">
        
        </li>
      </ul>
    </div>
  </div>
</nav>

</dav>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Google" element={<Google />} />
        <Route path="/Facebook" element={<Facebook />} />
        <Route path="/Dowloads" element={<Dowloads />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/admin" element={<Admin />} />
       
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
};

export default App;
