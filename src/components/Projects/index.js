import React from "react";

// Swiper is a mobile touch slider, mainly compatible with up-to-date apps/platforms
//to be used for each project featured
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";

import medisearchImg from '../../assets/medisearch.jpg';
import wellnessHubImg from '../../assets/wellness_hub.jpg';
import budgetTrackerImg from '../../assets/budget_trackers.jpg';
import noteItImg from '../../assets/note_it.jpg';
import weatherDashboardImg from '../../assets/weather_dashboard.jpg';
import workdaySchedulerImg from '../../assets/workday_schedule.jpg';
import passwordGeneratorImg from '../../assets/password_generator.png';
import codingQuizImg from '../../assets/code_quiz.jpg';

SwiperCore.use([Pagination, Navigation]); 


function Projects() {

    return (

        <section classNameName="my-5">
            <h1 classNameName="titles">Recent Projects</h1>
            <hr></hr>
        <>
        <SwiperSlide>
            <div className="card mb-3">
                <a href="https://med-i-search.herokuapp.com/" target="_blank" rel="noreferrer">
                    <img classNameName="card-img-top" src={medisearchImg} alt="medisearch app" />
                </a>
                <div className="card-body justify-center">
                    <h4 className="card-title">MEDiSEARCH</h4>
                        <a href="https://github.com/rpanglia/Medisearch" className="btn btn-secondary">
                            GitHub Repository
                        </a>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="card mb-3">
                <a href="https://nnikhil84.github.io/wellnesshub.github.io/" target="_blank" rel="noreferrer">
                    <img classNameName="card-img-top" src={wellnessHubImg} alt="wellness hub app"/>
                </a>
                <div className="card-body justify-center">
                    <h4 className="card-title">Wellness Hub</h4>
                        <a href="https://github.com/rpanglia/wellnesshub.github.io" className="btn btn-secondary">
                            GitHub Repository
                        </a>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="card mb-3">
                <a href="https://shielded-cove-35098.herokuapp.com/" target="_blank" rel="noreferrer">
                    <img classNameName="card-img-top" src={budgetTrackerImg} alt="budget tracker app"/>
                </a>
                <div className="card-body justify-center">
                    <h4 className="card-title">Budget Tracker</h4>
                        <a href="https://github.com/rpanglia/budget-trackers" className="btn btn-secondary">
                            GitHub Repository
                        </a>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="card mb-3">
                <a href="https://note-it-97.herokuapp.com/" target="_blank" rel="noreferrer">
                    <img classNameName="card-img-top" src={noteItImg} alt="note it app"/>
                </a>
                <div className="card-body justify-center">
                    <h4 className="card-title">Note-It</h4>
                        <a href="https://github.com/rpanglia/Note-It" className="btn btn-secondary">
                            GitHub Repository
                        </a>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="card mb-3">
                <a href="https://rpanglia.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer">
                    <img classNameName="card-img-top" src={weatherDashboardImg}alt="weather dashboard app"/>
                </a>
                <div className="card-body justify-center">
                    <h4 className="card-title">Weather Dashboard</h4>
                        <a href="https://github.com/rpanglia/Weather-Dashboard" className="btn btn-secondary">
                            GitHub Repository
                        </a>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="card mb-3">
                <a href="https://rpanglia.github.io/work-day-scheduler/" target="_blank" rel="noreferrer">
                    <img classNameName="card-img-top" src={workdaySchedulerImg} alt="workday scheduler app" />
                </a>
                <div className="card-body justify-center">
                    <h4 className="card-title">Work Day scheduler</h4>
                        <a href="https://github.com/rpanglia/work-day-scheduler" className="btn btn-secondary">
                            GitHub Repository
                        </a>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="card mb-3">
                <a href="https://rpanglia.github.io/password-generator/" target="_blank" rel="noreferrer">
                    <img classNameName="card-img-top" src={passwordGeneratorImg} alt="password generator app"/>
                </a>
                <div className="card-body justify-center">
                    <h4 className="card-title">Password Generator</h4>
                        <a href="https://github.com/rpanglia/password-generator" className="btn btn-secondary">
                            GitHub Repository
                        </a>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="card mb-3">
                <a href="https://rpanglia.github.io/code-quiz/" target="_blank" rel="noreferrer">
                    <img classNameName="card-img-top" src={codingQuizImg} alt="coding quiz app" />
                </a>
                <div className="card-body justify-center">
                    <h4 className="card-title">Coding Quiz</h4>
                        <a href="https://github.com/rpanglia/code-quiz" className="btn btn-secondary">
                            GitHub Repository
                        </a>
                </div>
            </div>
        </SwiperSlide>


        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            classNameName="mySwiper"
            centeredSlides={true}
        >
        </Swiper>

    </>
    </section>
    )

}

export default Projects;


//fix card styles --- try to add deploy button next to repository button (incase user doesn't click card image)