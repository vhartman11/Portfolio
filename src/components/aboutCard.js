import React from 'react';

export function AboutCard(props) {
    return (
      <div class="col-md-6 col-lg-3">
      <div class="card bg-light">
        <div class="card-body text-center">
          <img src={props.imgSrc} alt={props.imgAlt} class="img-fluid rounded-circle mb-3" />
          <h3 class="card-title mb-3">{props.cardTitle}</h3>
          <p class="card-text">{props.cardText}</p>
          {/* this is still in development, but i would like to add a map of some places that I have fished and a small photo album */}
          {/* <a href="fished map.html"><i class="bi bi-map text-dark mx-1" style="font-size: 2rem"></i></a> */}
          {/* <a href="fish pics.html"><i class="bi bi-images text-dark mx-1" style="font-size: 2rem"></i></a> */}
        </div>
      </div>
    </div>
    )
  }