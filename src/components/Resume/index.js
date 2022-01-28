import React from "react";


function Resume() {

    return (
      <section className="mb-5">

        <h1 className="titles">Skills + Experience</h1>
        <hr></hr>

        <div id="container d-flex justify-content-center">
            <a className="get-resume" href={require('../../assets/RPResume.pdf')}><button>View My Resume</button></a>
        </div>

        <div className="box">
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
        </div>
        <div className="box">
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