import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header/Header.jsx';
import { useNavigate } from 'react-router-dom';
import './CreatePollChain.css';
function CreatePollChain() {
  const [polls, setPolls] = useState([]);
  const [pollErr, setpollErr] = useState();
  const [poll, setpoll] = useState();
  const [question, setQuestion] = useState();
  const [formClosed, setFormClosed] = useState();
  const [questionErr, setQuestionErr] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="joinOuterContainer">
      <Header />
      <div className="form" style={{ marginTop: '10%' }}>
        <h1 style={{ marginBottom: '5px' }}>
          {question ? question : 'My poll chain'}
        </h1>
        {!formClosed ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (question) {
                setFormClosed(true);
              } else {
                setQuestionErr(<p className="passp">Enter a question</p>);
              }
            }}
          >
            <input
              type="text"
              placeholder="Question"
              className="qInput"
              onChange={(e) => {
                setQuestionErr('');
                setQuestion(e.target.value);
              }}
              onBlur={() => {
                if (!question) {
                  setQuestionErr(<p className="passp">Enter a question</p>);
                }
              }}
            ></input>
            {questionErr}
            <button className="button mt-20">Use name</button>
          </form>
        ) : (
          ''
        )}
        {formClosed ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (poll) {
                setPolls([...polls, poll]);

                setpoll('');
              }

              if (polls.length < 2 && !poll) {
                setpollErr(<p className="passp">Enter a poll</p>);
              }
            }}
          >
            <ol type="1">
              {polls
                ? polls.map((poll) => {
                    return <li>{poll}</li>;
                  })
                : ''}
            </ol>
            <input
              type="text"
              placeholder="Add Poll name"
              className="qInput"
              value={poll}
              onBlur={() => {
                if (!poll && polls.length < 2) {
                  setpollErr(<p className="passp">Enter a poll</p>);
                }
              }}
              onChange={(e) => {
                setpoll(e.target.value);
                setpollErr('');
              }}
            ></input>
            {pollErr}
            <button className="button mt-20">Add poll</button>
          </form>
        ) : (
          ''
        )}

        <button
          className="button mt-20"
          onClick={() => {
            if (!poll && polls.length > 0) {
              setpollErr('');
            }

            if (polls.length < 2) {
              setpollErr(
                <p className="passp">You need to add more than 1 poll</p>
              );
            }
            async function createPollChain() {
              const res = await fetch(
                'http://localhost:8000/v1/create-poll-chain/',
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    name: question,
                    polls: polls,
                    owner: {
                      name: localStorage.getItem('name'),
                      password: localStorage.getItem('password'),
                      gender: localStorage.getItem('gender'),
                    },
                  }),
                }
              );

              const data = await res.json();
              return data;
            }

            const result = createPollChain();
            if (result.error === 'Add more polls to the poll chain') {
              setpollErr(
                <p className="passp">Add more polls to the poll chain</p>
              );
            }
            if (!result.error) {
              navigate('/my-poll-chains');
            }
            setTimeout(() => {
              window.location.reload();
            }, 500);
          }}
        >
          Create Poll Chain
        </button>
      </div>
    </div>
  );
}
export default CreatePollChain;
