import './Home.css'
import '../../index.css'
import controller_image from '../../assets/contoller.svg'
import plus_sign from '../../assets/Group 12.svg'
import cube_1 from '../../assets/Asset 24 2.svg'
import cube_2 from '../../assets/Mask group.svg'
import group_8 from '../../assets/Group 8.svg'
import rounded_shape1 from '../../assets/Asset 7 1.svg'
import rounded_shape2 from '../../assets/dsds.svg'
import card1_image from '../../assets/card-1.png'
import card3_image from '../../assets/card3.png'
import arrow_image from '../../assets/Vector.svg'
import arrow_red from '../../assets/arrow-red.png'
import phone_img from '../../assets/phone-img.png'
import shape_hu from '../../assets/about-us-home.svg'
import shape_hu_mask from '../../assets/about-home-mask.svg'
import suc_image from '../../assets/success_image.svg'
const Home = () => {

    return ( 
        <div className="home">
            <div className="container">
                <div className="box-1">
                    <div className="text">
<img src={group_8} alt="" className="group-8" />
<img src={cube_1} alt="" className="cube1" />
<img src={cube_2} alt="" className="cube2" />
<img src={rounded_shape1} alt="" className="rounded1" />
<img src={rounded_shape2} alt="" className="rounded2" />

                <h1 className='title' >
                Best Gaming <br />
                Platform Ever
                </h1>
                <p className="button">
                Download Games
                </p>
                <img className='plus-sign' src={plus_sign} alt="" />
                    </div>
                <img src={controller_image} alt="" />
                </div>
                <div className="box-2">
                    <h2>
                    Our Amazing Games
                    </h2>
                    <div className="box-container">
                        
                        <div className="card">
                            <span>1</span>
                            <h2>Space Quest</h2>
                            <p>iOS Game</p>
                            <img src={card1_image} alt="" />
                        </div>
                        <div className="card-special">
                            <div className="content">
                            <span>#1</span>
                            <h1>Space Quest</h1>
                            <p>iOS Game</p>
                            <div className="button">
                                <span>View Details</span>
                                <img src={arrow_image} alt="" />
                            </div>
                            </div>
                        </div>
                        <div className="card">
                            <span>3</span>
                            <h2>Space <br /> Quest</h2>
                            <p>iOS Game</p>
                            <img src={card3_image} alt="" />
                        </div>
                    </div>
                </div>
            </div>

<h4 className="success-title">
Our Success
</h4>
<div className="square-container container">
<img src={suc_image} alt="" />
</div>
<h3 className="about-us-title">
About Us
</h3>
<div className="container">
    <div className="card-container">
        <img src={shape_hu} className='shape1' alt="" />
        <img src={shape_hu_mask} className='shape2' alt="" />
        <div className="left-card-home ">
            <img src={arrow_red} alt="img" />
            <h5>Our Vision</h5>
            <p>Our Vision We want develop high-quality mobile games that are
                fun and engaging. And we want to develop games that people will
                love to play and that will bring them joy.</p>
        </div>
        <div className="right-card-home ">
        <img src={phone_img} alt="img" />
            <h5>Our Vision</h5>
            <p>Our Vision We want develop high-quality mobile games that are
                fun and engaging. And we want to develop games that people will
                love to play and that will bring them joy.</p>
        </div>
    </div>
</div>
    </div>

);
}

export default Home;