import React from "react";

import myPhoto from "../../assets/ravimg.jpg";

function About() {

    return (
      <section className="my-5">

        <h1 className="titles">About Me</h1>
        <hr></hr>

        <div id="container">
          <div className="img-text-box col"> 
            <div className="img-box col-lg-4"><img src={myPhoto} alt="Ravneet's Headshot" className="margin-block headshot"/></div>
                <div className="my-2 margin-block col-lg-8">
                  <p>
                    I'm a Kinesiologist turned Web Developer!
                  </p>
                  <p>
                    I am on track to earn a Full-Stack Web Development certificate from the University of Toronto's School of Continuing Studies. I completed a Bachelor of Science in Human Kinetics and have experience working withinin Brain Injury rehab: specifically focused on return-to-work and improving quality of life treatment. With a passion for healthcare, I am in pursuit of furthering my skillset in a unique way by levering technology to one day improve lives. 
                  </p>
                  <p>
                    When I'm not in front of screens, I enjoy DIY-ing things around the house, gardening, exploring the world and making memories with friends and family.
                  </p>
                </div>
          </div>
        </div>

      </section>

    );
  }
  
export default About;