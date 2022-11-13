import React      from 'react';
import Nav        from 'react-bootstrap/Nav';
import * as Icon  from 'react-bootstrap-icons';
import Carpentry  from './images/carpentry.jpg';
import Fishing    from './images/fish.jpg';
import Homestead  from './images/homestead.jpg';
import Inspection from './images/inspection.jpg';

export function About() {
  return(
    <>
    {/* this section is the large top box displayed on this page */}
    <section class="p-5">
      <div class="container">
        <div class="row text-center g-4">
          <div class="col-md"> 
            <div class="card bg-secondary text-light">
              <div class="h1 mb-3"><i class="bi bi-file-earmark" /></div>
              <h3 class="card-title mb-3">Resume</h3>
              <p>To see my resume, use the link below to navigate to my LinkedIn profile page.</p>
              <a href=" " class="btn btn-primary"><Nav.Link href="https://www.linkedin.com/in/vhartman11/" target="_blank">My LinkedIn Page</Nav.Link></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* this section will contain some of my hobbies */}
    <section id="hobbies" class="p-5 bg-primary">
      <div class="container">
        <h2 class="text-center text-shite">Hobbies</h2>
        <p class="lead text-center text-white mb-5">These are some of my favorite things to do.</p>
        <div class="row g-4">

          {/* this is the far left box */}  
          <div class="col-md-6 col-lg-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <img src={Fishing} alt="9.5 pound carp" class="img-fluid rounded-circle mb-3" />
                <h3 class="card-title mb-3">Fishing</h3>
                <p class="card-text">I try to go out whenever I can.  I enjoy catching all species of fish.</p>
                {/* this is still in development, but i would like to add a map of some places that I have fished and a small photo album */}
                {/* <a href="fished map.html"><i class="bi bi-map text-dark mx-1" style="font-size: 2rem"></i></a> */}
                {/* <a href="fish pics.html"><i class="bi bi-images text-dark mx-1" style="font-size: 2rem"></i></a> */}
              </div>
            </div>
          </div>

          {/* this is the middle left box */}
          <div class="col-md-6 col-lg-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <img src={Inspection} alt="inspecting a beehive frame" class="img-fluid rounded-circle mb-3" />
                <h3 class="card-title mb-3">Bee Keeping</h3>
                <p class="card-text">This is a newer hobby of mine.  Feel free to check out my videos.</p>
                <a href=" "><Nav.Link href="https://www.youtube.com/channel/UCiW3ArGwqT4axhVvfOpr8Pw" target="_blank"><Icon.Youtube color="red" size="2rem"/></Nav.Link></a>
                {/* this is still in development, but I would like to add a small phot album here */}
                {/* <a href="bee keeping pics.html"><i class="bi bi-images text-dark mx-1" style="font-size: 2rem"></i></a> */}
              </div>
            </div>
          </div>

          {/* this is the middle right box */}
          <div class="col-md-6 col-lg-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <img src={Carpentry} alt="a complete beehive I built" class="img-fluid rounded-circle mb-3" />
                <h3 class="card-title mb-3">Woodworking</h3>
                <p class="card-text">I enjoy woodworking and the hive pictured here was one of my projects.</p>
                {/* this is still in development, but I would like to add a small phot album here */}
                {/* <a href="woodworking pics.html"><i class="bi bi-images text-dark mx-1" style="font-size: 2rem"></i></a> */}
              </div>
            </div>
          </div>

          {/* this is the far right box */}
          <div class="col-md-6 col-lg-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <img src={Homestead} alt="holding a young chicken" class="img-fluid rounded-circle mb-3" />
                <h3 class="card-title mb-3">Homesteading</h3>
                <p class="card-text">A personnal goal of mine is to become as self sufficient as possible.</p>
                <a href=" "><Nav.Link href="https://www.facebook.com/groups/hartmanhomestead" target="_blank"><Icon.Facebook color="blue" size="2rem"/></Nav.Link></a>
                {/* this is still in development, but I would like to add a small phot album here */}
                {/* <a href="homesteading pics.html"><i class="bi bi-images text-dark mx-1" style="font-size: 2rem"></i></a> */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  );
};