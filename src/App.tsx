import React from 'react';
import likesLogo from './images/likes.svg';
import profile from './images/home.png'
import coffee from './images/coffee.jpg'
import bar from './images/bar.jpg'


function App() {
  return (
      <div className="app">
        <header className="header">
          <a className='header_logo link' href='/'>
            <h1 className='header_title'>Что-тоgram</h1>
          </a>
          <input type='search' className='header_search' placeholder='Search'/>
          <nav className='nav'>
            <a href='/'>
              <img src={likesLogo} alt="Likes" className='icon'/>
            </a>
            <a href='/'>
            <img src={profile} alt="profile" className='icon'/>
            </a>
          </nav>
        </header>
        <div className='friends'>
          <div className='user'>
            <button type='button' className='user_pic friend_pic'/>
            <div className='friend_name'>Hlebushek</div>
            <a href='/' className='link friend_link'>
              перейти
            </a>
          </div>
          <div className='user'>
            <button type='button' className='user_pic friend_pic'/>
            <div className='friend_name'>Hlebushek</div>
            <a href='/' className='link friend_link'>
              перейти
            </a>
          </div>
        </div>
        <main className='main'>
          <article className='article'>
            <div className='article_header'>
              <div className='user_pic'/>
              <h2 className='user_name'>Hlebushek</h2>
            </div>
            <img src={coffee} className='img'/>
            <div className='under_img'>
              <div className='reaction'>
                <a href='/'>
                  <img src={likesLogo} alt="Likes" className='icon'/>
                </a>
                <button type='button' className='com_button'>Comments</button>
              </div>
              <div className='date'>19.03.2022</div>
            </div>
            <div className='description'>
              Сижу, грущу, пью кофе...
            </div>
          </article>
          <article className='article'>
            <div className='article_header'>
              <div className='user_pic'/>
              <h2 className='user_name'>Hlebushek</h2>
            </div>
            <img src={bar} className='img'/>
            <div className='under_img'>
              <div className='reaction'>
                <a href='/'>
                  <img src={likesLogo} alt="Likes" className='icon'/>
                </a>
                <button type='button' className='com_button'>Comments</button>
              </div>
              <div className='date'>19.03.2022</div>
            </div>
            <div className='description'>
              Me and boys, hehe
            </div>
          </article>
        </main>
        <div className='copyright'>© 2022 ЧТО-ТОGRAM</div>
      </div>
  );
}

export default App;
