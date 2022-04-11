import './Nav.css'
import React from 'react';

function Nav(){
    return(
        <nav className="Nav">
            <input className='text' type="text" placeholder='poisk' />
            <img className='home' src='../img/home.png'></img>
            <img className='message' src='../img/message.png'></img>
            <img className='plus' src='../img/plus.png'></img>
            <img className='safari' src='../img/safari.png'></img>
            <img className='like' src='../img/like.png'></img>
            <img className='d4' src='../img/d4.jpg'></img>
            <img className="App-logo" alt="logo" src="../img/insta.png"></img>
        </nav>
    );
}
export default Nav;