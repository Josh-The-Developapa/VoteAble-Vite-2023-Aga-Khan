import React, { useContext } from 'react';
import './DropDown.css';
import { NavLink } from 'react-router-dom';
import Context from '../../Context/Context.jsx';
import { MdOutlineAccountCircle } from 'react-icons/md';

const DropDown = () => {
  const ctx = useContext(Context);

  const formatName = (name) => {
    if (!name) return '';
    const [firstName, ...lastNames] = name.split(' ');
    const formattedFirstName =
      firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    const lastNamesInitials = lastNames.map((n) => n.charAt(0)).join('.');
    return `${formattedFirstName} ${lastNamesInitials}`;
  };

  const logout = () => {
    ['name', 'gender', 'Student_ID', 'password', 'class', 'house'].forEach(
      (item) => localStorage.removeItem(item)
    );
    window.location.reload();
  };

  const handleClose = () => {
    ctx.setIsDropVal(false);
  };

  return (
    <div>
      <div className="tsBG" onClick={handleClose}></div>
      <div className="dropdown">
        {localStorage.getItem('name') ? (
          <div className="user-info">
            <NavLink to="/account" className="nav-link">
              <MdOutlineAccountCircle className="avatarImage" />
              <h2>
                <span className="highlight">Welcome,</span> <br />
                {formatName(localStorage.getItem('name'))}
              </h2>
            </NavLink>
          </div>
        ) : (
          <NavLink to="/login">
            <button className="btnn" onClick={handleClose}>
              Login
            </button>
          </NavLink>
        )}
        <NavLink to="/home" className="dropDownPollLink" onClick={handleClose}>
          Home
        </NavLink>
        {localStorage.getItem('name') && (
          <NavLink
            to="/polls"
            className="dropDownPollLink"
            onClick={handleClose}
          >
            Poll Hub
          </NavLink>
        )}
        <NavLink to="/about" className="dropDownPollLink" onClick={handleClose}>
          About Us
        </NavLink>
        {localStorage.getItem('name') && (
          <button className="dropDownPollLink logout" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default DropDown;
