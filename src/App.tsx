//import React from "react";
import Footer from '@components/Footer/Footer';
import Article from "@components/Article/Article";
import BigButton from '@components/Buttons/BigButton';


const App = () => {
  return (
    <div className="container">
      <div className='profile-pic'>
        <img src="/src/assets/img/Profile.png" alt="My photo" width="100%" className='profile-photo' />
      </div>
      <div className="main">
        <div className='name'>Neon Charon</div>
        <div className="job-title">Frontend Dev</div>
        <a href="http://bitly.ws/ZT9"><div className='site-link'>NeonCharon.com</div></a>
        <BigButton src="/src/assets/img/Icon.png">Email</BigButton>
        <Article title="About">
          I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
        </Article>
        <Article title="Interest">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </Article>
      </div>
      <Footer />
    </div>
  );
}

export default App;