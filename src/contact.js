import React from 'react';
import Nav   from 'react-bootstrap/Nav';

export function Contact() {
    return(
        <p>This page is in development.  However, click <Nav.Link href="https://www.linkedin.com/in/vhartman11/" target="_blank">here</Nav.Link> to be taken to my LinkedIn profile page.</p>
    );
};

// use a ternary statement so when a user clicks a button, my info is then displayed