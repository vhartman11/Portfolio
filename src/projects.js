import React  from 'react';
import Eyes   from './images/eyes.png';
import Map    from './images/map.png';
import Pacman from './images/pacman.png';
import Nav    from 'react-bootstrap/Nav';

export function Projects() {
  return(
    <>
    {/* this is the top box */}
    <section class="p-5">
      <div class="container">
        <div class="row text-center g-4">
          <div class="col-md">
            <div class="card bg-dark text-light">
              <div class="h1 mb-3"><i class="bi bi-github"></i></div>
                <h3 class="card-title mb-3">Projects</h3>
                <p class="card-text">
                  Check out some of my favorite projects. To see more of my projects, click the button below to go to my GitHub.
                </p>
                <a href=" " class="btn btn-primary"><Nav.Link href="https://github.com/vhartman11" target="_blank">My GitHub Page</Nav.Link></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* this section holds the first project */}
    <section id="1st project" class="p-5">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md"><img src={Pacman} alt="pacman project" class="img-fluid" /></div>
          <div class="col-md p-5">
            <h2>Pacman</h2>
            <p class="lead">
              This project required me to take a pacman image and have it placed on the screen at a random location.  When you hit start, the image will begin to bounce around.  You can create as many pacmen as you'd like.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* this section holds the second project */}
    <section id="2nd project" class="bg-dark text-light p-5 text-center text-sm-start">
      <div class="container">
        <div class="d-sm-flex align-items-center justify-content-between">
          <div class="col-md p-5">
            <h2>Eyes</h2>
            <p class="lead">
              In this project I had to make two eyes that would follow the mouse around on the screen.  I was also able to add pupils to the eyes.
            </p>
          </div>
          <img src={Eyes} alt="eye project" class="img-fluid" />
        </div>
      </div>
    </section>

    {/* this section holds the third project */}
    <section id="3rd project" class="p-5">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md"><img src={Map} alt="bus map project" class="img-fluid" /></div>
          <div class="col-md p-5">
            <h2>Live Bus Tracking.</h2>
            <p class="lead">
              To complete this project, I had to fetch data and display it on a map.  The data I had to fetch was the location of each bus along its route that would update every 15 seconds.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};