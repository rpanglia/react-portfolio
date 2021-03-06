import React from "react";


function Resume() {

    return (
      <section className="my-5">

        <h1 className="titles">Skills + Experience</h1>
        <hr></hr>

        <div id="container justify-content-center">
            <div className="img-text-box"> 
                <a className="get-resume" href={require('../../assets/RPResume.pdf')} target="_blank" rel="noreferrer"><button>View My Resume</button></a>
            </div>

            
            <div className="box d-inline-block">
                <div className="card-body">
                    <h3 className="titles">Front End</h3>
                    <ul><strong>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>Materialize</li>
                        <li>jQuery</li>
                        <li>React</li>
                    </strong></ul>
                </div>
            </div>

            <div className="box d-inline-block">
                <div className="card-body">
                    <h3 className="titles">Back End</h3>
                    <ul><strong>
                        <li>APIs</li>
                        <li>SQL</li>
                        <li>Express</li>
                        <li>Node</li>
                        <li>REST</li>
                        <li>MySQL, Sequelize</li>
                        <li>GraphQL</li>
                        <li>MongoDB, Mongoose</li>
                    </strong></ul>
                </div>
            </div>

        </div>

      </section>

    );
}
  
export default Resume;