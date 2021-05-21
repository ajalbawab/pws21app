import React from 'react';

const header1 = {
  display: 'flex',
  justifyContent: 'Left',
  alignItems: 'Right',
  height: '100vh',
  fontSize: "15px",
  padding: 20
 }

function About () {
  return (
    <div>
    <h1 style={header1} >Panthers on Wall Street is a cohort composed of 18 exceptional students from Georgia State University.</h1>
    </div>
  );
};
  
export default About;