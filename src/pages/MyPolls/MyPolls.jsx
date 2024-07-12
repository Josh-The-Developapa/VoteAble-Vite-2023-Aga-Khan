import React, { useState, useEffect } from 'react';
import './MyPolls.css';
import Header from '../../components/Header/Header.jsx';
import Poll from '../Polls/Poll/Poll.jsx';
import PollSVG from '../../assets/Poll.svg';

function MyPolls() {
  const [copy, setCopy] = useState(true);
  const [signupFirstErr, setSignupFirstErr] = useState(false);
  const [error, setError] = useState('');
  const [polls, setPolls] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    const myPolls = async () => {
      setIsLoading(true);
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

      const data = await res.json();
      setIsLoading(false);

      if (res.ok) {
        setPolls(data.data);
      }

      if (data.error) {
        setError(data.error);
        return;
      }
    };

    if (localStorage.getItem('name')) {
      setSignupFirstErr(false);
      myPolls();
    } else {
      setSignupFirstErr(true);
    }
  }, []);

  return (
    <div>
      <div
        className="FlexBG"
        style={{
          // backgroundImage: 'linear-gradient(180deg,#17005c, #4600b6)',
          flexDirection: 'row',
        }}
      >
        <Header />
        <img
          src={PollSVG}
          alt="Polls background SVG"
          style={{
            position: 'fixed',
            left: '50%',
            height: '400px',
            width: '400px',
            top: '30px',
            // zIndex: 0,
          }}
        />
        {signupFirstErr && (
          <div className="pollc">
            <h1>Login First to access polls</h1>
            <p style={{ marginLeft: '10px', marginRight: '10px' }}>
              Please login with valid credentials to vote as a student of Aga
              Khan High School, Kampala. <br /> <br />
              Please end the shenanigans and stop gallivanting
            </p>
          </div>
        )}

        {!signupFirstErr && isLoading ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            {/* Loading Animation */}
            {/* You can add your loading animation here */}
          </div>
        ) : (
          ''
        )}

        {polls && !isLoading
          ? polls.map((poll) => <Poll key={poll._id} pollId={poll._id} />)
          : ''}

        {!polls && !isLoading ? (
          <div className="pollc">
            <h1>{error}</h1>
            {error === 'Student account does not exist' ? (
              <p>
                The ID that you entered does not belong to a student of Aga Khan
                High School, Kampala. <br /> <br />
                Please end the shenanigans and stop gallivanting
              </p>
            ) : (
              ''
            )}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default MyPolls;
