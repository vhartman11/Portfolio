import React      from 'react';
import Nav        from 'react-bootstrap/Nav';
import Carpentry  from './images/carpentry.jpg';
import Fishing    from './images/fish.jpg';
import Homestead  from './images/homestead.jpg';
import Inspection from './images/inspection.jpg';
import Logo       from './images/logo.jpg';
import { AboutCard } from './components/aboutCard';
import { StoryCard } from './components/myStoryCard';
//import { FishMap } from './fishmap';
import Col from 'react-bootstrap/Col';

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

    <section id="my story" class="p-5">
      <div class="container p-1">
        <StoryCard
          question="How I found web development?"
          first="In 2021 I was looking for a way that I could meet my personal goals while working in a profession that I would enjoy."
          second="While doing some initial research on possible career options, a family member mentioned coding."
          third="I did some searching and found some random free online crash courses and found myself wanting to learn more.">
        </StoryCard>
      </div>
      
      <div class="container p-1">
        <StoryCard
          question="Why I choose web development?"
          first="I ended up choosing web development not only because I believe it may help me reach some of my goals but I also find it *******.  I really enjoy the fact that potentially thousands of people may end up using something that I helped to build."
          second=""
          third="">
        </StoryCard>
      </div>

      <div class="container p-1">
        <StoryCard
          question="What I have enjoyed most about web development?"
          first="I ended up choosing a full stack program because after the free online crash courses it all seemed so fasicinating and I wanted to learn more."
          second="After completing my program at MIT, I found that I enjoyed the front end of the development process the most."
          third="However, nothing beats the feeling of putting a whole project together and getting to experience it all working.">
        </StoryCard>
      </div>
    </section>

    {/* this section will contain some of my hobbies */}
    <section id="hobbies" class="p-5 bg-primary">
      <div class="container">
        <h2 class="text-center text-shite">Hobbies</h2>
        <p class="lead text-center text-white mb-5">These are some of my favorite things to do.</p>
        <div class="row g-4">

        <Col sm>
          <AboutCard
            title="Web Development"
            imgSrc={Logo}
            imgAlt="a Hartman Homestead logo that will be in our website"
            cardText="The next project that I would like to build will be about beekeeping.  I would like to include a photo album and educational material.  There will also be a signin for me so that I can keep all my hive note organized.  Maybe someday I will even be making and selling products from this site."
            link=""
            target=""
            iconType="">
          </AboutCard>
          </Col>

          <Col sm>
          <AboutCard
            title="Fishing"
            imgSrc={Fishing}
            imgAlt="9.5 pound carp"
            cardText="I try to go out I can.  I enjoy catching all species of fish."
            link=""
            target=""
            iconType="">
          </AboutCard>
          </Col>

          <Col sm>
          <AboutCard
            title="Bee Keeping"
            imgSrc={Inspection}
            imgAlt="inspecting a beehive frame"
            cardText="This is a newer hobby of mine.  Feel free to check out my videos."
            link="https://www.youtube.com/channel/UCiW3ArGwqT4axhVvfOpr8Pw"
            target="_blank"
            iconType="youtube">
          </AboutCard>     
          </Col>

          <Col sm>
          <AboutCard
            title="Homesteading"
            imgSrc={Homestead}
            imgAlt="holding a young chicken"
            cardText="A personnal goal of mine is to become as self sufficient as possible."
            link="https://www.facebook.com/groups/hartmanhomestead"
            target="_blank"
            iconType="facebook">
          </AboutCard>
          </Col>

          <Col sm>
          <AboutCard
            title="Carpentry"
            imgSrc={Carpentry}
            imgAlt="a complete beehive that I built"
            cardText="One of my projects was building my own beehives."
            link=""
            target=""
            iconType="">
          </AboutCard>
          </Col>

        </div>
      </div>
    </section>
    </>
  );
};