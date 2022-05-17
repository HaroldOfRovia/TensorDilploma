import React from 'react';
import ReactDOM from 'react-dom';
import likesLogo from './images/likes.svg';
import profile from './images/home.png'
import { UserPost } from './userPost';
import { ReactElement } from 'react';

const listPosts: ReactElement[] = [];

function AddPost(){
  const [joke, setJoke] = React.useState("AAA");
  const [img, setImg] = React.useState("https://geek-jokes.sameerkumar.website/api?format=json");

  const getJoke = async () => {
    const res = await fetch("https://geek-jokes.sameerkumar.website/api?format=json");
    const data = await res.json();
    setJoke(data.joke);
  };
  const getImg = async () => {
    const res = await fetch("https://meme-api.herokuapp.com/gimme/wholesomememes/2");
    const data = await res.json();
    setImg(data.memes[0].url);
  };

  React.useEffect(() => {
    getJoke();
    getImg();
  }, []);

  const post = new UserPost(joke, img);
  const template = UserPost.template(post);
  return template;
}

function AddPosts(): void {
  for(let i = 0; i < 5; i++) {
    listPosts.push(<AddPost/>)
  };
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

{AddPosts()}

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
          {listPosts.map((post) => <>{post}</>)}
        <button onClick={() => AddPosts()} className="add_posts">Еще постов</button>
        </main>
        <div className='copyright'>© 2022 ЧТО-ТОGRAM</div>
      </div>
  );
}

export default App;
