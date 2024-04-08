import React from 'react'
import { Link } from "react-router-dom";
import './Games.css'
import '../../index.css'
import game_image from '../../assets/game-image.png'
import GameOne from './GameOne'; 
const Games = () => {

return (
    <div className='Games'>
        <div className="games-container container">
            <Link to="./GameOne">
            <div className="box">
                <img src={game_image} alt="aa" />
                <span>space quest</span>
            </div>
            </Link>
            <Link to="./GameTwo">
            <div className="box">
                <img src={game_image} alt="aa" />
                <span>space quest</span>
            </div>
            </Link>
            <Link to="./GamesThree">
            <div className="box">
                <img src={game_image} alt="aa" />
                <span>space quest</span>
            </div>
            </Link>
        </div>
    </div>
)
}

export default Games;
