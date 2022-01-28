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

        <section className="my-5">
            <h1 className="titles">Recent Projects</h1>
            <hr></hr>
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                className="mySwiper"
                centeredSlides={true}
            >
            
                <SwiperSlide>
                    <div className="card mb-3">
                        <a href="https://med-i-search.herokuapp.com/" target="_blank" rel="noreferrer">
                            <img className="card-img-top" src={medisearchImg} alt="medisearch app" />
                        </a>
                        <div className="card-body">
                            <h4 className="card-title">MEDiSEARCH</h4>
                                <a href="https://github.com/rpanglia/Medisearch" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                                    GitHub Repository
                                </a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card mb-3">
                        <a href="https://nnikhil84.github.io/wellnesshub.github.io/" target="_blank" rel="noreferrer">
                            <img className="card-img-top" src={wellnessHubImg} alt="wellness hub app"/>
                        </a>
                        <div className="card-body">
                            <h4 className="card-title">Wellness Hub</h4>
                                <a href="https://github.com/rpanglia/wellnesshub.github.io" target="_blank" rel="noreferrer" className="btn btn-secondar btn-sm">
                                    GitHub Repository
                                </a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card mb-3">
                        <a href="https://shielded-cove-35098.herokuapp.com/" target="_blank" rel="noreferrer">
                            <img className="card-img-top" src={budgetTrackerImg} alt="budget tracker app"/>
                        </a>
                        <div className="card-body">
                            <h4 className="card-title">Budget Tracker</h4>
                                <a href="https://github.com/rpanglia/budget-trackers" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                                    GitHub Repository
                                </a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card mb-3">
                        <a href="https://note-it-97.herokuapp.com/" target="_blank" rel="noreferrer">
                            <img className="card-img-top" src={noteItImg} alt="note it app"/>
                        </a>
                        <div className="card-body">
                            <h4 className="card-title">Note-It</h4>
                                <a href="https://github.com/rpanglia/Note-It"  target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                                    GitHub Repository
                                </a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card mb-3">
                        <a href="https://rpanglia.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer">
                            <img className="card-img-top" src={weatherDashboardImg}alt="weather dashboard app"/>
                        </a>
                        <div className="card-body">
                            <h4 className="card-title">Weather Dashboard</h4>
                                <a href="https://github.com/rpanglia/Weather-Dashboard" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                                    GitHub Repository
                                </a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card mb-3">
                        <a href="https://rpanglia.github.io/work-day-scheduler/" target="_blank" rel="noreferrer">
                            <img className="card-img-top" src={workdaySchedulerImg} alt="workday scheduler app" />
                        </a>
                        <div className="card-body">
                            <h4 className="card-title">Work Day scheduler</h4>
                                <a href="https://github.com/rpanglia/work-day-scheduler" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                                    GitHub Repository
                                </a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card mb-3">
                        <a href="https://rpanglia.github.io/password-generator/" target="_blank" rel="noreferrer">
                            <img className="card-img-top" src={passwordGeneratorImg} alt="password generator app"/>
                        </a>
                        <div className="card-body">
                            <h4 className="card-title">Password Generator</h4>
                                <a href="https://github.com/rpanglia/password-generator" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                                    GitHub Repository
                                </a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card mb-3">
                        <a href="https://rpanglia.github.io/code-quiz/" target="_blank" rel="noreferrer">
                            <img className="card-img-top" src={codingQuizImg} alt="coding quiz app" />
                        </a>
                        <div className="card-body">
                            <h4 className="card-title">Coding Quiz</h4>
                                <a href="https://github.com/rpanglia/code-quiz" target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                                    GitHub Repository
                                </a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

    </>
    </section>
    )

}

export default Projects;