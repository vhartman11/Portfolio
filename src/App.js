import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap';
import {About}      from './about';
import {Home}       from './home';
import {Projects}   from './projects';
import {Contact}    from './contact';
import {Navigation} from './components/navbar';

function App() {
  return (
    <HashRouter>
      <Navigation />
        <div className="container" style={{padding: "20px"}}>
          <Routes>
            <Route path="/"    exact element={<Home/>} />
            <Route path="/about/"    element={<About/>} />
            <Route path="/projects/" element={<Projects/>} />
            <Route path="/contact/"  element={<Contact/>} />
          </Routes>
        </div>
    </HashRouter>
  );
};

export default App;