import React from "react";

// Swiper is a mobile touch slider, mainly compatible with up-to-date apps/platforms
//to be used for each project featured
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]); 


function Projects() {

    return (

        <section className="my-5">
            <h1 className="titles">Recent Projects</h1>
            <hr></hr>
    <>
        <SwiperSlide>
            <div class="card mb-3">
                <a href="https://med-i-search.herokuapp.com/" target="_blank">
                    <img class="card-img-top" src="../../medisearch.jpg" alt="medisearch app" />
                </a>
                <div class="card-body justify-center">
                    <h4 class="card-title">MEDiSEARCH</h4>
                        <a href="https://github.com/rpanglia/Medisearch" class="btn btn-secondary">
                            GitHub Repository
                        </a>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div class="card mb-3">
                <a href="https://nnikhil84.github.io/wellnesshub.github.io/" target="_blank">
                    <img class="card-img-top" src="../../wellness_hub.jpg" alt="wellness hub app"/>
                </a>
                <div class="card-body justify-center">
                    <h4 class="card-title">Wellness Hub</h4>
                        <a href="https://github.com/rpanglia/wellnesshub.github.io" class="btn btn-secondary">
                            GitHub Repository
                        </a>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div class="card mb-3">
                <a href="https://shielded-cove-35098.herokuapp.com/" target="_blank">
                    <img class="card-img-top" src="../../budget_trackers.jpg" alt="budget tracker app"/>
                </a>
                <div class="card-body justify-center">
                    <h4 class="card-title">Budget Tracker</h4>
                        <a href="https://github.com/rpanglia/budget-trackers" class="btn btn-secondary">
                            GitHub Repository
                        </a>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div class="card mb-3">
                <a href="https://note-it-97.herokuapp.com/" target="_blank">
                    <img class="card-img-top" src="../../note_it.jpg" alt="note it app"/>
                </a>
                <div class="card-body justify-center">
                    <h4 class="card-title">Note-It</h4>
                        <a href="https://github.com/rpanglia/Note-It" class="btn btn-secondary">
                            GitHub Repository
                        </a>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div class="card mb-3">
                <a href="https://rpanglia.github.io/Weather-Dashboard/" target="_blank">
                    <img class="card-img-top" src="../../weather_dashboard.jpg" alt="weather dashboard app"/>
                </a>
                <div class="card-body justify-center">
                    <h4 class="card-title">Weather Dashboard"</h4>
                        <a href="https://github.com/rpanglia/Weather-Dashboard" class="btn btn-secondary">
                            GitHub Repository
                        </a>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div class="card mb-3">
                <a href="https://rpanglia.github.io/work-day-scheduler/" target="_blank">
                    <img class="card-img-top" src="../../workday_schedule.jpg" alt="workday scheduler app" />
                </a>
                <div class="card-body justify-center">
                    <h4 class="card-title">Work Day scheduler</h4>
                        <a href="https://github.com/rpanglia/work-day-scheduler" class="btn btn-secondary">
                            GitHub Repository
                        </a>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div class="card mb-3">
                <a href="https://rpanglia.github.io/password-generator/" target="_blank">
                    <img class="card-img-top" src="../../password_generator.jpg" alt="password generator app"/>
                </a>
                <div class="card-body justify-center">
                    <h4 class="card-title">Password Generator</h4>
                        <a href="https://github.com/rpanglia/password-generator" class="btn btn-secondary">
                            GitHub Repository
                        </a>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div class="card mb-3">
                <a href="https://rpanglia.github.io/code-quiz/" target="_blank">
                    <img class="card-img-top" src="../../code_quiz.jpg" alt="coding quiz app" />
                </a>
                <div class="card-body justify-center">
                    <h4 class="card-title">Coding Quiz</h4>
                        <a href="https://github.com/rpanglia/code-quiz" class="btn btn-secondary">
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
            className="mySwiper"
            centeredSlides={true}
        >
        </Swiper>

    </>
    </section>
    )

}

export default Projects;


//fix card styles --- try to add deploy button next to repository button (incase user doesn't click card image)