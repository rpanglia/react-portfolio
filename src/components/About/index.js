import React from "react";

import myPhoto from "../../assets/ravimg.jpg";

function About() {

  return (
    <section className="my-5">

      <h1 className="titles">About Me</h1>
      <hr></hr>

      <div id="container">
        <div className="img-text-box col">
          <div className="img-box my-2"><img src={myPhoto} alt="Ravneet's Headshot" className="headshot" />
          
          <div className="textBox my-2" style={{ display: 'flex', justifyContent: 'center' }}><strong>
            <p>
              I'm a Kinesiologist turned Web Developer!
            </p>
            <p>
            Graduate of a Full-Stack Web Development certificate from the University of Toronto. My educational background is in Human Kinetics and have experience working withinin Brain Injury rehab: specifically focused on return-to-work and improving quality of life treatment. With a passion for healthcare, I am in pursuit of furthering my skillset in a unique way by levering technology to one day improve lives.
            </p>
            <p>
              When I'm not in front of screens, I enjoy DIY-ing things around the house, gardening, exploring the world and making memories with friends and family.
            </p>
          </strong></div>
          </div>
        </div>
      </div>

    </section>

  );
}

export default About;