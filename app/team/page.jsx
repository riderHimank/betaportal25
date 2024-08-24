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
              phone="+91 82929 67325"
              email="sudhanshu@alcheringa.in"
              imageSrc="pics/pr pic 1.png"
            />
            <ProfileCard
              name="Siddharth Shukla"
              role="Public Relations Head"
              phone="+91 73546 47811"
              email="siddharth@alcheringa.in"
              imageSrc="pics/pr pic 2.png"
            />
            <ProfileCard
              name="Sulabh Napit"
              role="Media and Outreach Head"
              phone="+91 83198 55908"
              email="sulabh@alcheringa.in"
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
              phone="+91 80837 21976"
              email="prakrati@alcheringa.in"
              imageSrc="pics/Frame 6356227.png"
            />
            <ProfileCard
              name="Prajapati Vivek M"
              role="CR&M Head"
              phone="+91 70169 90353"
              email="vivek@alcheringa.in"
              imageSrc="pics/Frame 6356227-1.png"
            />
            <ProfileCard
              name="Kishor Kunal"
              role="CR&M Head"
              phone="+91 62041 80280"
              email="kunal.k@alcheringa.in"
              imageSrc="pics/Frame 6356227-2.png"
            />
            <ProfileCard
              name="Jayes Ranjan"
              role="CR&M Head"
              phone="+91 80023 57771"
              email="Jayes@alcheringa.in"
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
              phone="+91 93367 29959"
              email="abhijeet@alcheringa.in"
              imageSrc="pics/E pic 1.png"
            />
            <ProfileCard
              name="Krishna Agarwal"
              role="Pronites Head"
              phone="+91 70496 06444"
              email="krishna@alcheringa.in"
              imageSrc="pics/E pic 2.png"
            />
            <ProfileCard
              name="Pramit Some"
              role="Campaigns Head"
              phone="+91 86977 31037"
              email="Pramit@alcheringa.in"
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
              phone="+91 70210 59025"
              email="creatives@alcheringa.in"
              imageSrc="pics/c pic 1.png"
            />
            <ProfileCard
              name="Nikita Sharma"
              role="Digital Media Head"
              phone="+91 93053 82620"
              email="creativess@alcheringa.in"
              imageSrc="pics/c pic 3.png"
            />
            <ProfileCard
              name="Sai Sankeerth V"
              role="Pronites Head"
              phone="+91 88850 59696"
              email="creatives@alcheringa.in"
              imageSrc="pics/c pic 2.png"
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
              phone="+91 80174 71933"
              email="iitgmun@alcheringa.in"
              imageSrc="pics/mun pic 1.png"
            />
            <ProfileCard
              name="Divya Mate"
              role="MUN Director General"
              phone="+91 95791 45131"
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
              phone="+91 89557 74322"
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
              phone="+91 83080 77000"
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
              phone="+91 70862 00153"
              email="pradipta@alcheringa.in"
              imageSrc="pics/conve pic.png"
            />
            <ProfileCard
              name="Astitva Jain"
              role="Finance and Accounts Head"
              phone="+91 85272 67283"
              email="astitva@alcheringa.in"
              imageSrc="pics/FH pic.png"
            />
          </div>
        </div>

      </div>
    </div>
  );
}