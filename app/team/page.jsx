import React from 'react';
import Section from './section';
import "./team.css";
import ProfileCard from './profileCard';

export default function Team() {
  return (
    <div className="whole-page">
      <div className="main-photo">
        <img src="pics/Frame 6356232.png" alt="Group photo" />
      </div>
      <div className="page-container">
        
        {/* Public Relations & Branding Section */}
        <div className="section-container">
          <h2>Public Relations & Branding</h2>
          <div className="profile-grid">
            <ProfileCard
              name="Sudhanshu Raj"
              role="Public Relations Head"
              phone="+91 8292967325"
              email="publicrelations@alcheringa.in"
              imageSrc="pics/pr pic 1.png"
            />
            <ProfileCard
              name="Siddharth Shukla"
              role="Public Relations Head"
              phone="+91 7566494761"
              email="publicrelations2@alcheringa.in"
              imageSrc="pics/pr pic 2.png"
            />
            <ProfileCard
              name="Sulabh Napit"
              role="Media and Outreach Head"
              phone="+91 8349363008"
              email="media@alcheringa.in"
              imageSrc="pics/pr pic 3.png"
            />
          </div>
        </div>

        {/* Corporate Relations & Marketing Section */}
        <div className="section-container">
          <h2>Corporate Relations & Marketing</h2>
          <div className="profile-grid2">
            <ProfileCard
              name="Prakrati Sahu"
              role="CR&M Head"
              phone="+91 8887710888"
              email="marketing1@alcheringa.in"
              imageSrc="pics/Frame 6356227.png"
            />
            <ProfileCard
              name="Prajapati Vivek M"
              role="CR&M Head"
              phone="+91 7696990943"
              email="marketing2@alcheringa.in"
              imageSrc="pics/Frame 6356227-1.png"
            />
            <ProfileCard
              name="Kishor Kunal"
              role="CR&M Head"
              phone="+91 8290098000"
              email="marketing3@alcheringa.in"
              imageSrc="pics/Frame 6356227-2.png"
            />
            <ProfileCard
              name="Jayes Ranjan"
              role="CR&M Head"
              phone="+91 8310037471"
              email="marketing4@alcheringa.in"
              imageSrc="pics/Frame 6356227-3.png"
            />
          </div>
        </div>

        {/* Events Section */}
        <div className="section-container">
          <h2>Events</h2>
          <div className="profile-grid">
            <ProfileCard
              name="Abhijeet Ghosh"
              role="Events Management Head"
              phone="+91 9336729959"
              email="events@alcheringa.in"
              imageSrc="pics/E pic 1.png"
            />
            <ProfileCard
              name="Krishna Agarwal"
              role="Pronites Head"
              phone="+91 7049606444"
              email="events@alcheringa.in"
              imageSrc="pics/E pic 2.png"
            />
            <ProfileCard
              name="Pramit Some"
              role="Campaigns Head"
              phone="+91 8697731037"
              email="campaigns@alcheringa.in"
              imageSrc="pics/E pic 3.png"
            />
          </div>
        </div>

        {/* Creatives Section */}
        <div className="section-container">
          <h2>Creatives</h2>
          <div className="profile-grid">
            <ProfileCard
              name="Anmol Sable"
              role="Creatives Head"
              phone="+91 8292967325"
              email="creatives@alcheringa.in"
              imageSrc="pics/c pic 1.png"
            />
            <ProfileCard
              name="Sai Sankeerth V"
              role="Pronites Head"
              phone="+91 8292967325"
              email="creatives@alcheringa.in"
              imageSrc="pics/c pic 2.png"
            />
            <ProfileCard
              name="Nikita Sharma"
              role="Digital Media Head"
              phone="+91 8292967325"
              email="creativess@alcheringa.in"
              imageSrc="pics/c pic 3.png"
            />
          </div>
        </div>

        {/* MUN Section */}
        <div className="section-container">
          <h2>MUN</h2>
          <div className="profile-grid two">
            <ProfileCard
              name="Yoshita Banerjee"
              role="MUN Secretary General"
              phone="+91 8292967325"
              email="iitgmun@alcheringa.in"
              imageSrc="pics/mun pic 1.png"
            />
            <ProfileCard
              name="Divya Mate"
              role="MUN Director General"
              phone="+91 8292967325"
              email="iitgmun@alcheringa.in"
              imageSrc="pics/mun pic 2.png"
            />
          </div>
        </div>

        {/* Web Ops & App Ops Section */}
        <div className="section-container">
          <h2>Web Ops & App Ops</h2>
          <div className="profile-grid">
            <ProfileCard
              name="Himank Bohara"
              role="Web Operations Head"
              phone="+91 8955774322"
              email="webops@alcheringa.in"
              imageSrc="pics/WO pic 1.png"
            />
            <ProfileCard
              name="Shivam Gupta"
              role="Web Operations Head"
              phone="+91 8085774946"
              email="webops@alcheringa.in"
              imageSrc="pics/WO Pic 2.png"
            />
            <ProfileCard
              name="Jivesh Firke"
              role="App Development Head"
              phone="+91 830877000"
              email="webops@alcheringa.in"
              imageSrc="pics/AO pic.png"
            />
          </div>
        </div>

        {/* Convener and Finance Head Section */}
        <div className="section-container">
          <h2>Convener and Finance Head</h2>
          <div className="profile-grid two">
            <ProfileCard
              name="Pradipta Jiwan H"
              role="Convener"
              phone="+91 8292967325"
              email="@alcheringa.in"
              imageSrc="pics/conve pic.png"
            />
            <ProfileCard
              name="Astitva Jain"
              role="Finance and Accounts Head"
              phone="+91 8527267283"
              email="@alcheringa.in"
              imageSrc="pics/FH pic.png"
            />
          </div>
        </div>

      </div>
    </div>
  );
}