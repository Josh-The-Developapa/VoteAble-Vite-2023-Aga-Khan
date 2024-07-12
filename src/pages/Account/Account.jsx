import React, { useState, useEffect } from 'react';
import './Account.css';
import Header from '../../components/Header/Header.jsx';
import Profile from '../../assets/Profile.svg';
import { FiHome } from 'react-icons/fi';
import { RiGraduationCapLine } from 'react-icons/ri';
import { GoDotFill } from 'react-icons/go';
import TeamPic from '../../assets/team-pic.jpg';
import BallotBox from '../../assets/BallotBox.png';
import { NavLink } from 'react-router-dom';
import AccountSVG from '../../assets/Account.svg';

function Account() {
  const [voted, setVoted] = useState('Status Pending...');

  useEffect(() => {
    const hasVoted = (async function checkPolls() {
      try {
        const res = await fetch(
          'https://voteable-backend.onrender.com/v1/myPolls',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              Student_ID: localStorage.getItem('Student_ID'),
              password: localStorage.getItem('password'),
            }),
          }
        );

        if (!res.ok) {
          throw new Error('Failed to fetch');
        }

        const data = await res.json();
        const pollsArray = data.data;

        const hasVoted = pollsArray.every((poll) =>
          poll.voted.some(
            (name) =>
              localStorage.getItem('name').toLowerCase() === name.toLowerCase()
          )
        );
        setVoted(hasVoted);
        return false;
      } catch (error) {
        console.error('Error checking polls:', error);
        return false; // Return false if there is an error
      }
    })();
    setVoted(hasVoted);
  }, []);
  function formatName(name) {
    if (!name) return '';
    let nameParts = name.split(' ');
    let firstName = nameParts[0].toLowerCase();
    firstName = firstName.split('');
    firstName[0] = firstName[0].toUpperCase();
    firstName = firstName.join('');
    let lastNamesInitials = nameParts
      .slice(1)
      .map((n) => n.charAt(0))
      .join('.');
    return `${firstName} ${lastNamesInitials}`;
  }
  return (
    <div>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100vw',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="user-card">
          <img className="profile-pic" src={Profile} />
          <h2 style={{ textAlign: 'center', fontWeight: 550 }}>
            {formatName(localStorage.getItem('name'))}
          </h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              paddingLeft: '70px',
              paddingRight: '70px',
            }}
          >
            <div
              style={{
                // width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <RiGraduationCapLine
                style={{ height: '20px', width: '20px', marginRight: '5px' }}
              />
              <p
                style={{
                  textAlign: 'left',
                  color: '#000000',
                  marginRight: '25px',
                }}
              >
                {localStorage.getItem('class')}
              </p>
            </div>
            <div
              style={{
                // width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <FiHome
                style={{ height: '18px', width: '18px', marginRight: '5px' }}
              />
              <p style={{ textAlign: 'right' }}>
                {localStorage.getItem('house')}
              </p>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <GoDotFill
              style={{
                marginLeft: '0px',
                marginRight: '5px',
                height: '30px',
                width: '30px',
                color:
                  voted == true
                    ? 'green'
                    : voted == 'Status Pending...'
                    ? 'red'
                    : 'red',
              }}
            />{' '}
            <p style={{ fontSize: '25px', fontFamily: 'Kumbh Sans' }}>
              {voted == true
                ? 'Voted'
                : voted == false
                ? 'Not Voted'
                : 'Pending...'}
            </p>
          </div>
        </div>

        <div className="about-card">
          <img className="team-pic" src={TeamPic} />
          <h2
            style={{
              textAlign: 'center',
              fontWeight: 550,
              margin: 'auto',
              marginBottom: '10px',
              marginTop: '20px',
            }}
          >
            About Vote<span style={{ color: '#312783' }}>Able.</span>{' '}
          </h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          >
            <p
              style={{
                textAlign: 'center',
                marginTop: '10px',
                width: '220px',
              }}
            >
              Learn more about VoteAble and the team behind it.
            </p>
          </div>
          <NavLink
            to="/about"
            className="pollLink"
            style={{
              backgroundColor: '#000000',
              textAlign: 'center',
              width: '140px',
              margin: 'auto',
              marginTop: '15px',
              fontWeight: 450,
            }}
          >
            About Us
          </NavLink>
        </div>

        <div className="vote-now">
          <h2
            style={{
              textAlign: 'center',
              fontWeight: 550,
              margin: 'auto',
              marginBottom: '10px',
              marginTop: '20px',
            }}
          >
            Vote Now
          </h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          >
            <p
              style={{
                textAlign: 'center',
                marginTop: '10px',
                width: '240px',
              }}
            >
              Cast your vote in the AKHS Student Council{' '}
              {new Date().getFullYear()} Elections
            </p>
          </div>
          <NavLink
            to="/polls"
            className="pollLink"
            style={{
              backgroundColor: '#000000',
              textAlign: 'center',
              width: '143px',
              margin: 'auto',
              marginTop: '15px',
              fontWeight: 450,
              background:
                'linear-gradient(to right, #312783 0%, #1C164A 33%, #0B091D 67%, #4A2342 100%)',
            }}
          >
            Vote Now
          </NavLink>
          <img className="vote-now-pic" src={BallotBox} />
        </div>
      </div>
      <img
        src={AccountSVG}
        alt="Polls background SVG"
        style={{
          position: 'absolute',
          left: 0,
          height: '400px',
          bottom: 0,
        }}
      />
    </div>
  );
}

export default Account;
