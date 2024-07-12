import React, { useContext } from 'react';
import './DropDown.css';
import { NavLink } from 'react-router-dom';
import avatarPic from '../../assets/Logo.svg';
import Context from '../../Context/Context.jsx';
import Menuu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import avatarImg from '../../assets/avatarIcon.jpeg';
import { MdOutlineAccountCircle } from 'react-icons/md';

function DropDown(props) {
  const ctx = useContext(Context);

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
  const [banchorEl, setBanchorEl] = React.useState(null);
  const bopen = Boolean(banchorEl);
  const bhandleClick = (event) => {
    setBanchorEl(event.currentTarget);
  };
  const bhandleClose = () => {
    setBanchorEl(null);
  };
  const logout = async () => {
    localStorage.removeItem('name');
    localStorage.removeItem('gender');
    localStorage.removeItem('Student_ID');
    localStorage.removeItem('password');
    localStorage.removeItem('class');
    localStorage.removeItem('house');

    window.location.reload();
  };

  return (
    <div>
      <div
        className="tsBG"
        onClick={() => {
          ctx.setIsDropVal(false);
        }}
      ></div>
      <div className="dropdown">
        {localStorage.getItem('name') ? (
          <div
            style={{
              margin: 0,
              marginTop: '50px',
              marginBottom: '50px',
            }}
          >
            <NavLink
              to="/account"
              style={{
                textDecoration: 'none',

                color: 'black',
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '15px',
                flexDirection: 'column',
                backgroundColor: '#d7d6d6',
                borderRadius: '10px',
              }}
            >
              <MdOutlineAccountCircle
                className="avatarImage"
                style={{ marginBottom: '0px', height: '90px', width: '90px' }}
              />
              <h2>
                <span class="highlight">Welcome,</span> <br />
                {formatName(localStorage.getItem('name'))}
              </h2>
            </NavLink>
          </div>
        ) : (
          ''
        )}
        {!localStorage.getItem('name') ? (
          <NavLink to="/login">
            <button
              className="btnn"
              style={{ fontSize: '16.5px' }}
              onClick={() => {
                ctx.setIsDropVal(false);
              }}
            >
              Login
            </button>
          </NavLink>
        ) : (
          ''
        )}
        <NavLink
          to="/home"
          className="dropDownPollLink"
          style={{
            textDecoration: 'none',
            color: 'black',
            textAlign: 'center',
            marginBottom: '30px',
          }}
          onClick={() => {
            ctx.setIsDropVal(false);
          }}
        >
          Home
        </NavLink>
        {localStorage.getItem('name') ? (
          <div>
            {/* <button
              className="btnn"
              style={{ fontSize: '16.5px' }}
              aria-controls={bopen ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={bopen ? 'true' : undefined}
              onClick={bhandleClick}
            >
              Poll Hub
            </button> */}
            <NavLink
              to="/polls"
              className="dropDownPollLink"
              style={{
                textDecoration: 'none',
                color: 'black',
                textAlign: 'center',
              }}
              onClick={() => {
                ctx.setIsDropVal(false);
              }}
            >
              Poll Hub
            </NavLink>
            {/* <NavLink
                to="/my-poll-chains"
                style={{ textDecoration: 'none', color: 'black' }}
                onClick={() => {
                  ctx.setIsDropVal(false);
                }}
              >
                <MenuItem>Poll Chains</MenuItem>
              </NavLink> */}
          </div>
        ) : (
          ''
        )}
        <NavLink
          to="/about"
          className="dropDownPollLink"
          style={{
            textDecoration: 'none',
            color: 'black',
            textAlign: 'center',
            marginTop: '30px',
          }}
          onClick={() => {
            ctx.setIsDropVal(false);
          }}
        >
          About Us
        </NavLink>

        {/* <form action='http://localhost:8000/v1/create-checkout-session' method="POST">
          <button className="btnn" type="submit">Donate</button>
        </form> */}
        {/* {localStorage.getItem('name') ? (
          <NavLink to="/subscribe">
            <button
              className="btnn"
              style={{ fontSize: '16.5px' }}
              onClick={() => {
                ctx.setIsDropVal(false);
              }}
            >
              Donate
            </button>
          </NavLink>
        ) : (
          ''
        )} */}
        {/* {Cookies.get('jwt') ?
          <div>
            <button className="btnn" style={{ fontSize: '16.5px' }} aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}>Create
            </button>
            <Menuu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <NavLink to="/create-poll" style={{ textDecoration: 'none', color: 'black' }} onClick={() => {
                ctx.setIsDropVal(false);
              }}>
                <MenuItem>Create Poll</MenuItem>
              </NavLink >
              <NavLink to="/create-poll-chain" style={{ textDecoration: 'none', color: 'black' }} onClick={() => {
                ctx.setIsDropVal(false);
              }}>
                <MenuItem>Create Poll Chain</MenuItem>
              </NavLink >
            </Menuu>
          </div> : ''} */}
        {localStorage.getItem('name') ? (
          <button
            className="dropDownPollLink"
            style={{ margin: '25px' }}
            onClick={logout}
          >
            Logout
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default DropDown;
