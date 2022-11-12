import React  from 'react'; 
import Carpentry from './images/carpentry.jpg'
import Fishing from './images/fish.jpg'
import Homestead from './images/homestead.jpg'
import Inspection from './images/inspection.jpg'
import Nav from 'react-bootstrap/Nav';
//import Resume from './PDFs/Vincent_Hartman_Resume.pdf'

export function About() {
    return(
        <>
        <section class="p-5">
            <div class="container">
                <div class="row text-center g-4">

                <div class="col-md"> 
                    <div class="card bg-secondary text-light">
                        <div class="h1 mb-3">
                            <i class="bi bi-file-earmark"></i>
                        </div>
                        <h3 class="card-title mb-3">
                            Resume
                        </h3>
                        <p>
                            To see my resume, use the link below to go to my LinkedIn Profile page.
                        </p>
                        <Nav.Link href="https://www.linkedin.com/in/vhartman11/" target="_blank">LinkedIn Profile</Nav.Link>
                        {/*<p>Click <a href="https://www.linkedin.com/in/vhartman11/" target="_blank">here</a> to see my resume.</p>*/}
                    </div>
                </div>

                </div>
            </div>
        </section>

        <section id="hobbies" class="p-5 bg-primary">
            <div class="container">
                <h2 class="text-center text-shite">Hobbies</h2>
                <p class="lead text-center text-white mb-5">These are some of my favorite things to do.</p>
                <div class="row g-4">

                    <div class="col-md-6 col-lg-3">
                        <div class="card bg-light">
                            <div class="card-body text-center">
                                <img src={Fishing} alt="9.5 pound carp" class="img-fluid rounded-circle mb-3" />
                                <h3 class="card-title mb-3">Fishing</h3>
                                <p class="card-text">I try to go out whenever I can.  I enjoy catching all species of fish.</p>
                                {/* <a href="fished map.html"><i class="bi bi-map text-dark mx-1" style="font-size: 2rem"> 
                                </i></a>
                                <a href="fish pics.html"><i class="bi bi-images text-dark mx-1" style="font-size: 2rem">
                                </i></a> */}
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3">
                        <div class="card bg-light">
                            <div class="card-body text-center">
                                <img src={Inspection} alt="inspecting a beehive frame" class="img-fluid rounded-circle mb-3" />
                                <h3 class="card-title mb-3">Bee Keeping</h3>
                                <p class="card-text">This is a newer hobby of mine.  Feel free to check out my videos.</p>
                                {/*<a href="https://www.youtube.com/channel/UCiW3ArGwqT4axhVvfOpr8Pw"><i class="bi bi-youtube text-dark mx-1" style="font-size: 2rem">
                                </i></a>
                                <a href="bee keeping pics.html"><i class="bi bi-images text-dark mx-1" style="font-size: 2rem">
                                </i></a> */}
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3">
                        <div class="card bg-light">
                            <div class="card-body text-center">
                                <img src={Carpentry} alt="a complete beehive I built" class="img-fluid rounded-circle mb-3" />
                                <h3 class="card-title mb-3">Woodworking</h3>
                                <p class="card-text">I enjoy woodworking and the hive pictured here was one of my projects.</p>
                                {/* <a href="woodworking pics.html"><i class="bi bi-images text-dark mx-1" style="font-size: 2rem">
                                </i></a> */}
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3">
                        <div class="card bg-light">
                            <div class="card-body text-center">
                                <img src={Homestead} alt="holding a young chicken" class="img-fluid rounded-circle mb-3" />
                                <h3 class="card-title mb-3">Homesteading</h3>
                                <p class="card-text">A goal of mine is to become as self sufficient as possible.</p>
                                {/* <a href="homesteading pics.html"><i class="bi bi-images text-dark mx-1" style="font-size: 2rem">
                                </i></a> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        </>
    )
}