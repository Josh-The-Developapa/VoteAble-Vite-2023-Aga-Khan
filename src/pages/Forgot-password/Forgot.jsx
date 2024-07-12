import React, { useState } from 'react';
import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
// import ScrollToTop from "react-scroll-to-top";

import './Forgot.css';
import { useEffect } from 'react';

export default function Forgot() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [heading, setHeading] = useState('Forgot password');
  const [emM, setEmM] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  let namep = <p className="namep">Please enter a valid user name</p>;
  let signedInP = <p className="namep">You are already logged in</p>;
  let emailp2 = <p className="namep">Please enter a valid email address</p>;
  let emailp = <p className="namep">Please enter an email address</p>;
  let emailp3 = <p className="namep">User not found</p>;

  const forgotPass = async function () {
    if (name && email) {
      setIsLoading(true);
      const res = await fetch(
        'https://voteable-backend.onrender.com/v1/forgot-password',
        {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify({
            name: name,
            email: email,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await res.json();
      console.log(data);
      if (data.error === 'You must be signed out to access this route') {
        setEmailErr(signedInP);
      }
      setIsLoading(false);
      let emailsM = `Email was successfully sent, link will only be valid for the next hour. It will expire at ${new Date(
        data.time
      ).toLocaleTimeString()}`;

      if (data.message === 'Email successfully sent') {
        setHeading('Email successfully sent');
        setEmM(emailsM);
      }
      if (data.error === 'Enter your exact username here') {
        setEmailErr(emailp3);
        console.log(data.error);
        setTimeout(() => {
          setEmailErr('');
        }, 10000);
      }
    }

    if (!name) {
      setNameErr(namep);
    }
    if (!email) {
      setEmailErr(emailp);
    }
    if (!email.includes('@') && !email.includes('.com')) {
      setEmailErr(emailp2);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="joinOuterContainer">
      <Header />
      <div className="joinInnerContainer" style={{ marginTop: '20%' }}>
        {isLoading ? (
          <CircularProgress
            style={{
              color: '#4600b6',
              paddingTop: '20px',
              marginTop: '25px',
            }}
          />
        ) : (
          <div>
            <h1 className="heading">{heading}</h1>
            <p>{emM}</p>
          </div>
        )}
        <div>
          <input
            name="name"
            value={name}
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => {
              setNameErr('');
              setName(event.target.value);
            }}
            onBlur={() => {
              if (!name) {
                setNameErr(namep);
              }
            }}
          />
          {nameErr}
        </div>
        <div>
          <input
            name="email"
            value={email}
            placeholder="Email"
            className="joinInput"
            type="email"
            onChange={(event) => {
              setEmailErr('');
              setEmail(event.target.value);
            }}
            onBlur={() => {
              if (!email) {
                setEmailErr(emailp);
              }
            }}
          />
          {emailErr}
        </div>
        <button className="btn mt-20" onClick={forgotPass}>
          Send email
        </button>
        <Link to="/login" className="ALSU">
          <p>Remember password?</p>
        </Link>
      </div>
      {/* <ScrollToTop smooth /> */}
    </div>
  );
}
