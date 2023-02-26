import React from 'react';

export function ProjectCard(props) {
  return(
    <section id={props.sectionId} className={props.sectionStyle}>
      <div className="container">
        <div className={props.alinement}>
          <div className={props.imgAline}><img src={props.imgSrc} alt={props.imgAlt} className="img-fluid" /></div>
          <div className={props.headAline}>
            <h2>{props.title}</h2>
            <p className="lead">{props.sectionText}</p>
          </div>
        </div>
      </div>
    </section>
  )
}