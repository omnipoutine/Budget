import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';

const Home = () => {
    return(
        <div>
            <div>
                <h1>Welcome to Budget</h1>
                <LoginButton/>
            </div>

            <div>
                <h3>About <br/>
                &darr;</h3>

                <h2>bd makes sticking to your budget easy.</h2>
                <p>First enter your aloted budget, select three endpoints to visually confirm your spending. Then easily check your budget and know you are spending properly.</p>
                <p>First enter your aloted budget, select three endpoints to visually confirm your spending. Then easily check your budget and know you are spending properly.</p>
            </div>
        </div>
    )
}
export default Home;