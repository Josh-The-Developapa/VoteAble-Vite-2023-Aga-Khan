import React from 'react';
import './About.css';
import Header from '../../components/Header/Header.jsx';
import Logo from '../../assets/Logo.svg';
import TeamPic from '../../assets/team-pic.jpg';
import LaptopPic from '../../assets/Laptop.png';
// import LaptopPic from '../../assets/Working.jpg';
import EmmanuelImage from '../../assets/Emmanuel Asiimwe.jpeg';
import AkhilImage from '../../assets/Akhil Muni.jpeg';
// import JoshuaImage from '../../assets/joshua.png';
import JoshuaImage from '../../assets/JMuks.jpeg';
import AlbertImage from '../../assets/Albert Jordan Mulumba.jpeg';
import KhushImage from '../../assets/Khush Shah.jpeg';

function AboutVoteable() {
  return (
    <div>
      <Header />
      <div className="about-container">
        <div className="about-left">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              width: '100%',
              padding: 0,
              textAlign: 'left',
            }}
          >
            <img src={Logo} alt="VoteAble Logo" className="logo2" />
            <h1>
              Voting <br />
              Made <br />
              <span className="highlight" style={{ fontFamily: 'Kumbh Sans' }}>
                Simple.
              </span>
            </h1>
          </div>
          <p className="about-description">
            Streamlining the electoral process with digital innovation, we offer
            intuitive and modern solutions to challenges encountered during
            elections.
          </p>
        </div>
        <div className="about-middle">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '45px',
            }}
          >
            <h2
              style={{
                fontFamily: 'Kumbh Sans',
                marginBottom: 0,
              }}
            >
              Why
              <span className="highlight" style={{ fontFamily: 'Kumbh Sans' }}>
                {' '}
                VoteAble
              </span>
              ?
            </h2>
            <p className="about-story">
              Our school had a lot of problems with the old voting system.
              Elections were often redone, votes recast, and results took weeks
              to come in. VoteAble was created to fix these issues, but we
              quickly realized it could do so much more. What started as an
              initiative to simplify the electoral process at Aga Khan is now
              expanding to other international schools in Uganda, providing a
              reliable, fast, and efficient e-voting solution for school
              elections.
            </p>
          </div>
          <img src={LaptopPic} alt="Laptop" className="laptop-pic" />
        </div>
        <div className="about-right">
          <img src={TeamPic} alt="Our Team" className="group-pic" />
          <div className="team-intro">
            <h2 style={{ textAlign: 'center' }}>Our Team</h2>
            <div className="team-members">
              <div className="team-member">
                <img
                  src={JoshuaImage}
                  alt="Joshua's Pic"
                  className="member-pic"
                />
                <p>Joshua Mukisa</p>
                <p className="role">Founder & CEO</p>
              </div>
              <div className="team-member">
                <img
                  src={KhushImage}
                  alt="Khush's Pic"
                  className="member-pic"
                />
                <p>Khush P. Shah</p>
                <p className="role" style={{ fontSize: '15px' }}>
                  Co-Founder & COO
                </p>
              </div>
              <div className="team-member">
                <img
                  src={AkhilImage}
                  alt="Akhil's Pic"
                  className="member-pic"
                />
                <p>Akhil Muni</p>
                <p className="role" style={{ fontSize: '15px' }}>
                  Co-Founder & CFO
                </p>
              </div>
              <div className="team-member" style={{ marginLeft: '20px' }}>
                <img
                  src={EmmanuelImage}
                  alt="Emmanuel's Pic"
                  className="member-pic"
                />
                <p style={{ fontSize: '15px' }}>Emmanuel Asiimwe</p>
                <p className="role">Tech Lead</p>
              </div>
              <div className="team-member">
                <img
                  src={AlbertImage}
                  alt="Albert's Pic"
                  className="member-pic"
                />
                <p>Albert J. Mulumba</p>
                <p className="role">Head of Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutVoteable;
