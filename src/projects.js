import React  from 'react';
import Eyes   from './images/eyes.png';
import Map    from './images/map.png';
import Pacman from './images/pacman.png';
import Nav    from 'react-bootstrap/Nav';
import { ProjectCard } from './components/projectCard';

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

    <ProjectCard
      sectionId="1st project"
      sectionStyle="p-5"
      alinement="row align-items-center justify-content-between"
      imgAline="col-md"
      imgSrc={Pacman}
      imgAlt="pacman project"
      headAline="col-md p-5"
      title="Pacman"
      sectionText="This project required me to take a pacman image and have it placed on the screen at a random location.  When you hit start, the image will begin to bounce around.  You can create as many pacmen as you'd like.">
    </ProjectCard>

    <ProjectCard
      sectionId="2nd project"
      sectionStyle="bg-dark text-light p-5 text-center text-sm-start"
      alinement="d-sm-flex align-items-center justify-content-between"
      imgAline=""
      imgSrc={Eyes}
      imgAlt="eye project"
      headAline="col-md p-5"
      title="Eyes"
      sectionText="In this project I had to make two eyes that would follow the mouse around on the screen.  I was also able to add pupils to the eyes.">
    </ProjectCard>

    <ProjectCard
      sectionId="3rd project"
      sectionStyle="p-5"
      alinement="row align-items-center justify-content-between"
      imgAline="col-md"
      imgSrc={Map}
      imgAlt="bus stop project"
      headAline="col-md p-5"
      title="Live Bus Tracking"
      sectionText="To complete this project, I had to fetch data and display it on a map.  The data I had to fetch was the location of each bus along its route that would update every 15 seconds.">
    </ProjectCard>
  </>
  );
};