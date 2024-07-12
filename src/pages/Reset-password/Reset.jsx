import React, { useEffect, useState } from 'react';
import avatarPic from '../../assets/VoteAble logo.png';
import { useParams, useNavigate } from 'react-router-dom';
import './Reset.css';
import Header from '../../components/Header/Header.jsx';

export default function Reset() {
  const [password, setPassword] = useState('');
  const { resetToken } = useParams();
  const [passErr, setPassErr] = useState();

  let passp = <p className="passp">Please enter a valid password</p>;
  let passp2 = (
    <p className="passp">
      Please enter a valid password of atleast 8 characters
    </p>
  );
  let signedInP = <p className="passp">You are already logged in</p>;
  let invToken = <p className="passp">Invalid token</p>;
  let navigate = useNavigate();
  const resetPass = async function () {
    if (password) {
      const res = await fetch(
        `https://voteable-backend.onrender.com/v1/reset-password/${resetToken}`,
        {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            password: password,
          }),
        }
      );
      if (res.status === 200) {
        navigate('/home');
      }
      const data = await res.json();

      if (data.error === 'Invalid token') {
        setPassErr(invToken);
        return;
        return;
      } else if (data.error !== 'Invalid token') {
        setPassErr('');
      }

      if (data.error === 'You are already logged in') {
        setPassErr(signedInP);
        return;
      }
    }

    if (!password) {
      setPassErr(passp);
    }
    if (password && password.length < 8) {
      setPassErr(passp2);
    }
  };

  const Btn = (
    <button className={'button mt-20'} type="submit" onClick={resetPass}>
      <p>Login</p>
    </button>
  );
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="joinOuterContainer">
      <Header />
      <div className="joinInnerContainer">
        <img src={avatarPic} className="avPic" alt="VoteAble" />
        <h1 className="heading">Reset Password</h1>
        <div>
          <input
            name="password"
            placeholder="Password"
            value={password}
            className="joinInput mt-20"
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
              setPassErr('');
            }}
            onBlur={() => {
              if (!password) {
                setPassErr(passp);
              }
              if (password && password.length < 8) {
                setPassErr(passp2);
              }
            }}
          />
          {passErr ? passErr : ''}
        </div>
        {Btn}
      </div>
    </div>
  );
}
