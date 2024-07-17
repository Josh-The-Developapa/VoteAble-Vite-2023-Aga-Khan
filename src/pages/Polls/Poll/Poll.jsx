import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import './Poll.css';

function Poll(props) {
  const { pollId } = useParams();
  const navigate = useNavigate();
  const [pollNotFound, setPollNotFound] = useState();
  const [question, setQuestion] = useState();
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [signupFirstErr, setSignupFirstErr] = useState();
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    async function poll() {
      const res = await fetch(
        `https://voteable-backend.onrender.com/v1/poll/${
          pollId ? pollId : props.pollId
        }`,
        {
          method: 'GET',
        }
      );
      const data = await res.json();
      if (data.error) {
        setPollNotFound(data.error);
        setIsLoading(false);

        return;
      } else {
        setQuestion(data.data.question);
        setOptions(data.data.options);
        setIsLoading(false);
      }
      console.log(data);
    }
    poll();
  }, [pollId, props.pollId]);

  async function vote() {
    if (!selectedOption) {
      setSignupFirstErr('Please select an option to vote.');
      return;
    }

    const res = await fetch(
      `https://voteable-backend.onrender.com/v1/vote/${
        pollId ? pollId : props.pollId
      }`,
      {
        method: 'POST',
        body: JSON.stringify({
          answer: selectedOption.text,
          Student_ID: localStorage.getItem('Student_ID'),
          password: localStorage.getItem('password'),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await res.json();
    if (res.ok) {
      setSignupFirstErr('Voted');
      props.handleNext(); // Call the function to go to the next item
    }
    if (data.error) {
      setSignupFirstErr(data.error);
      return;
    }
  }

  return (
    <div>
      <div className="pollContainer">
        <div className="header">
          <div>
            <h1 className="mainTitle">Select Your</h1>
            <h1 className="mainTitleQuestion">{question}</h1>
          </div>
        </div>
        {signupFirstErr === 'Voted' ? (
          <p
            className="mainTitleQuestion"
            style={{ fontSize: '30px', marginLeft: '10px', fontWeight: 700 }}
          >
            Voted
          </p>
        ) : (
          <p
            // className="passp"
            className="mainTitleQuestion"
            style={{
              fontSize: '30px',
              marginLeft: '10px',
              fontWeight: 700,
              color: 'red',
            }}
          >
            {signupFirstErr}
          </p>
        )}
        <div className="candidates">
          {options.map((option) => (
            <div
              key={option.text}
              className={`candidate-card ${
                selectedOption && selectedOption.text === option.text
                  ? 'selected'
                  : ''
              }`}
              onClick={() => setSelectedOption(option)}
            >
              {option.photo && (
                <img
                  src={`https://voteable-backend.onrender.com/uploads/${option.photo}`}
                  alt={option.text}
                  // className="optionImg"
                />
              )}
              <div className="candidate-info">
                <div style={{ height: '190px' }}>
                  <h1 className="poll-class">{option.class}</h1>
                  <h1 className={option.house}>{option.house}</h1>
                </div>
                <div>
                  <h2
                    style={{
                      color:
                        selectedOption && selectedOption.text === option.text
                          ? '#ffffff'
                          : '#000000',
                    }}
                  >
                    {option.text}
                  </h2>
                </div>
              </div>
            </div>
          ))}

          <div className="buttonContainer">
            <Link to={`/poll/results/${props.pollId}`} className="vote-button">
              Results
            </Link>
            <button className="vote-button" onClick={vote}>
              Vote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poll;
