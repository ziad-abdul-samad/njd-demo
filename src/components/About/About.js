import React from 'react'
import './About.css'
import '../../index.css'
import about_image from '../../assets/about-us-image.svg'
import team_image from '../../assets/team-img.png'
const About = () => {
return (
    <div className='about'>
    <div className="about-container">
        <div className="sec-1">
            <div className="content">
            <h1>Know About <br /> Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Nec et turpis <br />
            blandit diam. Elit enim vel quam porta.</p>
            </div>
            <img src={about_image} alt="" />
        </div>
        <div className="sec-2">
            <h5 className='sec2-title'>Our Story</h5>
            <p>Lorem ipsum dolor sit amet consectetur. Id faucibus velit ultrices ac dis lobortis congue. Cras enim aliquam
                condimentum vitae lacus in massa arcu. Maecenas in blandit donec magna. Dictum a volutpat in duis a mi auctor proin.
                Vehicula orci id non consequat. Varius et vitae sagittis platea. Hendrerit porttitor varius ut aenean sed quis.
                Ridiculus in varius feugiat feugiat aenean. Dictumst enim vel elit amet. Magnis lectus natoque gravida ac ut in euismod. Mattis viverra sed ac nibh diam in.
                Lorem in sed lobortis non elit consequat. Dignissim et leo libero sagittis sed ipsum fermentum id.</p>
            <p>Lorem eget curabitur donec sit tristique ut sed euismod. Augue neque et phasellus eu tellus eget egestas.
                Nunc enim nibh nisl libero odio. Ut ut interdum cras in felis maecenas etiam. Duis risus imperdiet eu vestibulum
                vestibulum nisi molestie nisi facilisis. Rhoncus bibendum sollicitudin sit aenean suspendisse luctus sit. Ullamcorper
                id ut non vehicula elementum consequat. Laoreet risus sed et a est odio aliquet nulla.
                Ante senectus enim sed aliquam. Vestibulum quisque maecenas molestie id. Velit eget massa vel odio fermentum consequat. Neque tortor lobortis nisl porta suscipit interdum in.
                Sed bibendum amet pretium nibh elementum turpis. Enim aliquam purus massa cras neque mollis.</p>
        </div>
        <div className="sec-3">
            <h1>Our Great Team</h1>
            <div className="team-container">
                <div className="team-box">
                    <img src={team_image} alt="aq" />
                    <h5>Jhon Wick</h5>
                    <p>Senior Developer</p>
                </div>
                <div className="team-box">
                    <img src={team_image} alt="aq" />
                    <h5>Jhon Wick</h5>
                    <p>Senior Developer</p>
                </div>
                <div className="team-box">
                    <img src={team_image} alt="aq" />
                    <h5>Jhon Wick</h5>
                    <p>Senior Developer</p>
                </div>
                <div className="team-box">
                    <img src={team_image} alt="aq" />
                    <h5>Jhon Wick</h5>
                    <p>Senior Developer</p>
                </div>
                <div className="team-box">
                    <img src={team_image} alt="aq" />
                    <h5>Jhon Wick</h5>
                    <p>Senior Developer</p>
                </div>
                <div className="team-box">
                    <img src={team_image} alt="aq" />
                    <h5>Jhon Wick</h5>
                    <p>Senior Developer</p>
                </div>
            </div>
        </div>
        <div className="sec-4">
            <h2>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Id faucibus velit ultrices ac dis lobortis congue. 
                Cras enim aliquam condimentum vitae lacus in massa arcu. Maecenas in blandit
                donec magna. Dictum a volutpat in duis a mi auctor proin. Vehicula orci id non consequat. Variu
                s et vitae sagittis platea. Hendrerit p
                orttitor varius ut aenean sed quis. Ridiculus in varius
                feugiat feugiat aenean. Dictumst enim vel elit amet. Magnis lectus natoque gravida ac ut in euismod.
                Mattis viverra sed ac nibh diam in. Lorem in sed lobortis non elit consequat. Dignissim et leo libero sagittis sed ipsum fermentum id.</p>
        </div>
    </div>
    </div>
)
}

export default About
