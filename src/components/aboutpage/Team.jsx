import React from 'react'
import './team.css'
import TeamData from './teamData'
const Team = () => {
    return (
        <section className="team">
            <h2>Meet Our Team</h2>
            <div className="container team__container">
                {
                    TeamData.map((team, index) => {
                        return (
                            <article key={index} className="team__member">
                                <div className="team__member-img">
                                    <img src={team.Image} alt='Team' />
                                </div>
                                <div className="team__member-info">
                                    <h4>{team.Name}</h4>
                                    <p>{team.About}</p>
                                </div>
                                <div className="team__member-soicals">
                                    <a href={team.SocialFB} target="_blank" rel="noopener noreferrer"> <i className='uil uil-facebook-f'></i></a>
                                    <a href={team.SocialIN} target="_blank" rel="noopener noreferrer"> <i className='uil uil-instagram-alt'></i></a>
                                    <a href={team.Linkedin} target="_blank" rel="noopener noreferrer"> <i className='uil uil-linkedin-alt'></i></a>
                                </div>
                            </article>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Team