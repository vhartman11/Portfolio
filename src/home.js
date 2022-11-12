import React  from 'react'; 
import Vincepic from './images/Vincepic.jpg'
import './home.css';

export function Home() {
    return(
        <>
        <section id="welcome" class="bg-dark text-light p-5 text-center text-sm-start">
            <div class="container">
                <div class="d-sm-flex align-items-center justify-content-between">
                    <div>
                        <h1><span class="text-warning">Welcome </span>to my Portfolio</h1>
                        <p class="lead my-4">
                            Hello, and welcome to my portfolio website.  My name is Vince Hartman and I am currently enrolled at MIT working on a Professional Certificate in Coding: Full Stack Development with MERN.
                        </p>
                        <br></br>
                        <p class="lead my-4">
                            Please navigate through this site to learn more about me.
                        </p>
                    </div>
                    <div>
                        <img src={Vincepic} alt="Vince" />
                    </div>
                </div>
            </div>
        </section>
    
        <section id="bio" class="p-5">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-md">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/L0XvrrxCIms"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>
                    <div class="col-md p-5">
                        <h2>Let me intoduce myself.</h2>
                    </div>
                </div>
            </div>
        </section>
    </>
    )

}