import React from 'react'
import './coursespage.css'
import CoursesData from './coursesData'
import { Link } from 'react-router-dom';
const Coursesinfo = () => {
    return (
        <section className="course1">
            <div className="container courses__container">
                {
                    CoursesData.map((courses, index) => {
                        return (
                            <article key={index} className="course">
                                <div className="course__img">
                                    <Link
                                        to='/coursesvideos'>
                                        <img src={courses.Image} alt='Courses' />
                                    </Link>

                                </div>
                                <div className="course__info">
                                    <h4>{courses.Name}</h4>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Coursesinfo