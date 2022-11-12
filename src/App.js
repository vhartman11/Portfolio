import React from 'react';
import 'bootstrap';
import {HashRouter, Route, Routes} from 'react-router-dom';
import {About}       from './about'
import {Home}          from './home';
import {Projects}     from './projects';
import {Contact}          from './contact';
import {Navigation}    from './components/navbar';
// import {Footer} from './components/footer';

function App() {
    return (
      <HashRouter>
          <Navigation/>
            <div className="container" style={{padding: "20px"}}>
              <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/about/"   element={<About/>} />
                <Route path="/projects/" element={<Projects/>} />
                <Route path="/contact/" element={<Contact/>} />
              </Routes>
            </div>
      </HashRouter>
    );
};

export default App;