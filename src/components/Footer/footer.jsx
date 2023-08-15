import React from 'react';
import Svg from '../../assets/icons8-call-100.png';
import Svg2 from '../../assets/youtube-icon.png';
import Svg3 from '../../assets/icons8-mail-48.png';
import InstaPic from '../../assets/instagram-pic.png';

function footer() {
  return (
    <div
      style={{
        backgroundColor: 'black',
        position: 'relative',
        marginTop: '200px',
        width: '100%',
        display: 'flex',
        alignItems: 'left',
        flexDirection: 'column',
        bottom: 0,
      }}
    >
      <h1 style={{ color: 'white' }}>VoteAble, Inc &copy; </h1>
      {/* <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <img src={Svg} alt='Call-logo-svg' /><a href='tel:+256754696499' style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>Call us</a>
          </div> */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: '1px',
        }}
      >
        <a
          href="https://youtube.com/channel/UCI9hvu4GkGLKyOZFenvcvoA"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <img
              src={Svg2}
              alt="Youtube-icon"
              style={{ marginRight: '10px' }}
            />{' '}
            <h2 style={{ color: 'white', fontSize: '20px' }}>VoteAble Inc</h2>
          </div>
        </a>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: '-8px',
        }}
      >
        <a
          href="mailto:voteable123@gmail.com"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <img src={Svg3} alt="Email-icon" style={{ marginRight: '10px' }} />{' '}
            <h2 style={{ color: 'white', fontSize: '20px' }}>Email us</h2>
          </div>
        </a>
      </div>
      {/* <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '-8px' }}>
            <a href='https://www.instagram.com/vote_able/' target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}><img src={InstaPic} alt='Insta-icon' style={{ marginRight: '10px' }} /> <h2 style={{ color: 'white', fontSize: '20px' }}>VoteAble Inc</h2></div>
            </a>
          </div> */}
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <footer>
          &copy; {new Date().getFullYear()} VoteAble, Inc. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default footer;
