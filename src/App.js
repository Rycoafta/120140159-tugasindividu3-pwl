import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./Halaman/page.css"
import Beranda from './Halaman/Beranda';
import Tentang from './Halaman/Tentang';
import Kontak from './Halaman/Kontak';

class App extends React.Component {
  // ...
  render() {
    return (
      <div className="myBG">
      <div className="container">
        <Router>
          <header className="mt-3">
            <nav className="px-3 navbar navbar-expand-lg navbar-primary bg-primary">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-white" href="/Beranda">Beranda</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/tentang">Tentang</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/kontak">Kontak</a>
                </li>
              </ul>
            </nav>
          </header>
          <div className="text-black">
            <Routes>
              <Route path="/Beranda" element={<Beranda />} />
              <Route path="/tentang" element={<Tentang />} />
              <Route path="/kontak" element={<Kontak />} />
            </Routes>
          </div>
        </Router>
        <footer className="bg-primary">
          <h1 className="p-3 text-center text-black">THANK YOU</h1>
        </footer>
      </div>
      </div>
    );
  }
}

export default App;