import React from 'react';
import likesLogo from './images/likes.svg';
import profile from './images/home.png';
import { getNewPosts } from './script';
import { UserPost } from './userPost';



function App() {
  const posts: UserPost[] = []
  const [listPosts, setListPosts] = React.useState(posts);

  return (
      <div className="app">
        <header className="header">
          <a className='header_logo link' href='/'>
            <h1 className='header_title'>Что-тоgram</h1>
          </a>
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
          {listPosts.map((post) => 
            UserPost.template(post)
          )}
        <button onClick={() => {
          getNewPosts().then((userPosts) => {
            setListPosts(listPosts.concat(userPosts))
          })
        }} 
          className="add_posts">Еще постов</button>
        </main>
        <div className='copyright'>© 2022 ЧТО-ТОGRAM</div>
      </div>
  );
}

export default App;
