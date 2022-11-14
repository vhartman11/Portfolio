import React    from 'react'; 
import Vincepic from './images/Vincepic.jpg';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from  'react-bootstrap';

export function Home() {
  return(
    <>
    {/* opening/welcome section */}
    <section id="welcome" class="bg-dark text-light p-5 text-center text-sm-start">
      <div class="container">
        <div class="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1><span class="text-warning">Welcome </span>to my Portfolio</h1>
            <p class="lead my-4">
              Hello, and welcome to my portfolio website.  My name is Vince Hartman and I am currently enrolled at MIT working on a Professional Certificate in Coding: Full Stack Development with MERN.
            </p>
            <br />
            <p class="lead my-4">Please navigate through this site to learn more about me.</p>
          </div>
          <div><img src={Vincepic} alt="Vince" /></div>
        </div>
      </div>
    </section>
    
    {/* this section is for my youtube video */}
    <section id="bio" class="p-5">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md">
            <Container fluid>
              <div className="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/L0XvrrxCIms" title="YouTube video" allowFullScreen></iframe>
              </div>
            </Container>
          </div>
          <div class="col-md p-5"><h2>Allow me intoduce myself.</h2></div>
        </div>
      </div>
    </section>
    
  
</>
  
  
  
  
  
  
  );
};