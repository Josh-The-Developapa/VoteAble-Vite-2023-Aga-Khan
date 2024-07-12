import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import { CircularProgress } from '@mui/material';
import readXlsxFile from 'read-excel-file';
import { v4 as uuidv4 } from 'uuid';

import './VotedUser.css';
import DropDown from '../../components/Drop-down/DropDown.jsx';

function VotedUser() {
  const id = uuidv4();
  const { pollId } = useParams();
  const [selectedFile, setSelectedFile] = useState();
  const [question, setQuestion] = useState('');
  const [isData, setData] = useState([]);
  const [err, setErr] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [notVoted, setNotVoted] = useState([]);
  const [unauthorisedVoters, setUnauthorisedVoters] = useState([]);
  const [submit, setSubmited] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    async function votedUsers(param) {
      const res = await fetch(`http://localhost:8000/v1/voted-users/${param}`, {
        method: 'GET',
      });

      const data = await res.json();

      setData(data.data);

      if (data.error) {
        setErr(data.error);
        return;
      }
      setIsLoading(false);
    }

    console.log(isData);

    votedUsers(pollId);
    // eslint-disable-next-line

    async function poll() {
      const res = await fetch(`http://localhost:8000/v1/poll/${pollId}`, {
        method: 'GET',
      });
      const data = await res.json();
      setQuestion(data.data.question);
    }

    poll();
  }, []);

  return (
    <div className="joinOuterContainer" style={{ flexDirection: 'row' }}>
      <Header />
      {isLoading ? (
        <CircularProgress
          style={{
            color: 'white',
            // position: "absolute",
            // top: "20%",
            // left: "40%",
          }}
        />
      ) : (
        <div className="vuc">
          <h1>Voted Users</h1>
          <h3>{err}</h3>
          {isData.length !== 0 ? (
            <ol type="1" className="ulvuc">
              {isData.map((option) => {
                return (
                  <li key={id} style={{ margin: '15px' }}>
                    {option}
                  </li>
                );
              })}
            </ol>
          ) : (
            <h4>No users have voted yet</h4>
          )}
          <input
            type="file"
            onChange={(e) => {
              setSelectedFile(e.target.files[0]);
              console.log(selectedFile);
            }}
          />
          <div>
            <button
              onClick={() => {
                readXlsxFile(selectedFile).then((rows) => {
                  const res = rows
                    .slice(1)
                    .map((val) => val[0])
                    .sort();
                  const dbData = isData.map((val) => val.name).sort();
                  console.log(dbData, res, res.slice(dbData.length));
                  const result = [];
                  const illegalvotersArray = [];

                  for (let i of res) {
                    if (!dbData.includes(i)) {
                      result.push(i);
                    }
                  }

                  for (let k of dbData) {
                    if (!res.includes(k)) {
                      illegalvotersArray.push(k);
                    }
                  }
                  setNotVoted(result);
                  setUnauthorisedVoters(illegalvotersArray);
                  console.log(illegalvotersArray, unauthorisedVoters);
                  setSubmited(true);
                });
              }}
              className="btnn"
              style={{ marginTop: '20px', fontSize: '17px' }}
            >
              Submit
            </button>
            {/* <DropDown /> */}
          </div>
        </div>
      )}
      {notVoted.length > 0 && selectedFile ? (
        <div
          style={{ background: 'white', borderRadius: '20px' }}
          className="vuc"
        >
          <h2>Users that have not voted</h2>
          <ul className="ulvuc">
            {notVoted.map((val) => {
              return <li style={{ margin: '15px' }}>{val}</li>;
            })}
          </ul>
        </div>
      ) : (
        ''
      )}
      {unauthorisedVoters.length > 0 && selectedFile ? (
        <div
          style={{ background: 'white', borderRadius: '20px' }}
          className="vuc"
        >
          <h2>Unauthorised voters</h2>
          <ul className="ulvuc">
            {unauthorisedVoters.map((val) => {
              return <li style={{ margin: '15px' }}>{val}</li>;
            })}
          </ul>
        </div>
      ) : (
        ''
      )}
      {unauthorisedVoters.length === 0 && submit && selectedFile ? (
        <div
          style={{
            background: 'white',
            borderRadius: '20px',
            height: '150px',
            padding: '10px',
          }}
          className="vuc"
        >
          <h2>No unauthorised voters</h2>
        </div>
      ) : (
        ''
      )}
      {notVoted.length === 0 && submit && selectedFile ? (
        <div
          style={{
            background: 'white',
            borderRadius: '20px',
            height: '150px',
            padding: '10px',
          }}
          className="vuc"
        >
          <h2>All registered users have voted</h2>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default VotedUser;
