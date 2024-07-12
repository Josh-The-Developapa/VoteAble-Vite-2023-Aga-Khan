import React, { useState, useEffect } from 'react';
import './PollChain.css';
import Header from '../../../components/Header/Header.jsx';
// import { CircularProgress } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import QRCode from 'react-qr-code';
import { RWebShare } from 'react-web-share';
import Menuu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';

function PollChain() {
  // eslint-disable-next-line
  const [signupFirstErr, setSignupFirstErr] = useState();
  // eslint-disable-next-line
  const [noPollsFound, setNoPollsFound] = useState();
  const [polls, setPolls] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [name, setName] = useState('');
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const params = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const myPolls = async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://voteable-backend.onrender.com/v1/poll-chain-polls/${params.id}`,
        {
          method: 'GET',
          credentials: 'include',
        }
      );
      const data = await res.json();
      if (res.ok) {
        setIsLoading(false);
        setPolls(data.data);
        console.log(polls);
      }
      setName(data.name);
      if (!res.ok) {
        setIsLoading(false);
      }
      console.log(data);

      if (data.error === 'You have to login / signup first') {
        setSignupFirstErr('You have to login first');
        return;
      }
      if (data.error === 'No polls found') {
        setNoPollsFound(true);
        return;
      }
    };
    myPolls();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div className="FlexBG">
        <Header />
        {isLoading ? (
          // <CircularProgress
          //   style={{
          //     color: "white",
          //     position: "absolute",
          //     top: "20%",
          //     left: "40%",
          //   }}
          // />
          <div
            style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
          >
            <div className="pollc" style={{ background: '#d8d8d8' }}>
              <div
                style={{
                  height: '80px',
                  width: '90%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '25px',
                  borderRadius: '15px',
                }}
              ></div>
              <div
                style={{
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '30%',
                  borderRadius: '10px',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '80%',
                  borderRadius: '10px',
                }}
              ></div>
              <div
                style={{
                  position: 'relative',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '65%',
                  borderRadius: '10px',
                  marginLeft: '-120px',
                }}
              ></div>
              <div
                style={{
                  position: 'relative',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '87%',
                  borderRadius: '10px',
                  marginLeft: '-130px',
                }}
              ></div>
            </div>
            <div className="pollc" style={{ background: '#d8d8d8' }}>
              <div
                style={{
                  height: '80px',
                  width: '90%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '25px',
                  borderRadius: '15px',
                }}
              ></div>
              <div
                style={{
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '30%',
                  borderRadius: '10px',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '80%',
                  borderRadius: '10px',
                }}
              ></div>
              <div
                style={{
                  position: 'relative',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '65%',
                  borderRadius: '10px',
                  marginLeft: '-120px',
                }}
              ></div>
              <div
                style={{
                  position: 'relative',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '87%',
                  borderRadius: '10px',
                  marginLeft: '-130px',
                }}
              ></div>
            </div>
            <div className="pollc" style={{ background: '#d8d8d8' }}>
              <div
                style={{
                  height: '80px',
                  width: '90%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '25px',
                  borderRadius: '15px',
                }}
              ></div>
              <div
                style={{
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '30%',
                  borderRadius: '10px',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '80%',
                  borderRadius: '10px',
                }}
              ></div>
              <div
                style={{
                  position: 'relative',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '65%',
                  borderRadius: '10px',
                  marginLeft: '-120px',
                }}
              ></div>
              <div
                style={{
                  position: 'relative',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '87%',
                  borderRadius: '10px',
                  marginLeft: '-130px',
                }}
              ></div>
            </div>
            <div className="pollc" style={{ background: '#d8d8d8' }}>
              <div
                style={{
                  height: '80px',
                  width: '90%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '25px',
                  borderRadius: '15px',
                }}
              ></div>
              <div
                style={{
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '30%',
                  borderRadius: '10px',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '80%',
                  borderRadius: '10px',
                }}
              ></div>
              <div
                style={{
                  position: 'relative',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '65%',
                  borderRadius: '10px',
                  marginLeft: '-120px',
                }}
              ></div>
              <div
                style={{
                  position: 'relative',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '87%',
                  borderRadius: '10px',
                  marginLeft: '-130px',
                }}
              ></div>
            </div>
          </div>
        ) : (
          ''
        )}
        {polls && !isLoading
          ? polls.map((poll) => {
              return (
                <div className="pollc">
                  <div className="hC">
                    <h1>{poll.question}</h1>
                  </div>
                  <Link
                    to={`/poll/${poll._id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <button className="Btn">View Poll</button>
                  </Link>
                  <button
                    className="dBtn"
                    onClick={async () => {
                      const res = await fetch(
                        `https://voteable-backend.onrender.com/v1/delete-poll/${poll._id}`,
                        {
                          method: 'DELETE',
                          credentials: 'include',
                        }
                      );
                      const data = await res.json();
                      if (data.message === 'Poll successfully deleted') {
                        alert('Poll deleted');
                        window.location.reload();
                      }
                    }}
                  >
                    Delete Poll
                  </button>
                  <div>
                    <Link
                      to={`/voted-users/${poll._id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <button className="Btn2">Voted Users</button>
                    </Link>
                    <button
                      className="Btn2"
                      style={{ marginLeft: '57%' }}
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    >
                      Share Poll
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
                      {/* <MenuItem onClick={handleClose}> */}
                      <RWebShare
                        data={{
                          text: `VoteAble - ${poll.name}`,
                          url: `http://localhost:3000/poll/${poll._id}`,
                          title: `VoteAble Poll - ${poll.question}`,
                        }}
                        onClick={() => console.log('shared successfully!')}
                      >
                        <MenuItem
                          onClick={() => {
                            handleOpenModal();
                            handleClose();
                          }}
                        >
                          Share
                        </MenuItem>
                      </RWebShare>
                      {/* </MenuItem> */}
                      <MenuItem
                        onClick={() => {
                          handleOpenModal();
                          handleClose();
                        }}
                      >
                        Scan QR code
                      </MenuItem>
                    </Menuu>
                  </div>
                  <Modal
                    open={openModal}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    style={{ marginTop: '50px', marginLeft: '1%' }}
                  >
                    <div className="pollc">
                      {' '}
                      <QRCode
                        value={`http://192.168.3.21:3000/poll/${poll._id}`}
                        style={{ marginTop: '25px' }}
                      />
                    </div>
                  </Modal>
                </div>
              );
            })
          : ''}
        {!polls && !isLoading ? (
          <div className="pollc">
            <h1>No polls found</h1>
            <Link to="/create-poll">
              <button className="vpBtn">Create a poll</button>
            </Link>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default PollChain;
