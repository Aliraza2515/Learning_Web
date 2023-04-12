import React from 'react'
import './achievements.css'
import Achievements1 from '../../assets/achievements.png'
const Achievements = () => {
    return (
        <section className='about__achievements'>
            <div className="container about__achievements-container">
                <div className="about__achievements-left">
                    <img src={Achievements1} />
                </div>

                <div className="about__achievements-right">
                    <h1>Achievements</h1>
                    <p>A well-crafted resume will showcase your project management skills and experience and make a strong impression
                        on the hiring manager. But a poorly written resume could land your application in the trash. This article will guide
                        you through the process of creating a project manager resume that will make you stand out from the competition.</p>
                    <div className="achievements__cards">
                        <article className='achievement__card'>
                            <span className="achievement__icon">
                                <i className="uil uil-video"></i>
                            </span>
                            <h3>450+</h3>
                            <p>Courses</p>
                        </article>

                        <article className='achievement__card'>
                            <span className="achievement__icon">
                                <i className="uil uil-users-alt"></i>
                            </span>
                            <h3>80,000+</h3>
                            <p>Students</p>
                        </article>

                        <article className='achievement__card'>
                            <span className="achievement__icon">
                                <i className="uil uil-trophy"></i>
                            </span>
                            <h3>30+</h3>
                            <p>Awards</p>
                        </article>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Achievements