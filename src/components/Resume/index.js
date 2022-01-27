import React from "react";

import { rpResume } from "../../assets/RPResume.pdf";


function Resume() {

    return (
      <section className="mb-5">

        <h1 className="titles">Skills + Experience</h1>
        <hr></hr>

        <div id="container d-flex justify-content-center">
            <a className="get-resume" href="https://drive.google.com/file/d/1eUpLqL8RyNtpKwj1NzExapbS4R_1gzEg/view?usp=sharing"><button>View My Resume</button></a>
        </div>

        <div className="container">
            <div className="card-body" display="inline-block">
                <h3 className="titles">Front End</h3>
                <ul>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>Materialize</li>
                    <li>jQuery</li>
                    <li>React</li>
                </ul>
            </div>
            <div className="card-body" display="inline-block">
                <h3 className="titles">Back End</h3>
                <ul>
                    <li>APIs</li>
                    <li>SQL</li>
                    <li>Express</li>
                    <li>Node</li>
                    <li>REST</li>
                    <li>MySQL, Sequelize</li>
                    <li>GraphQL</li>
                    <li>MongoDB, Mongoose</li>
                </ul>
            </div>
               
            </div>



      </section>


    );
  }
  
export default Resume;

// add resume download button under <hr> and follow with front end and back end breakdown in seperate cards