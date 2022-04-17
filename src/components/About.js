import React from "react";

function About(props) {
const isPassed = props.bio;
  if(!isPassed) {
    return null
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
    <a href={props.github} alt="github"></a>
    <a href={props.linkedin} alt="linkedn"></a>
    </div>
  );
}

export default About;
