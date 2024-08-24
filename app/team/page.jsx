import React from 'react';
import Section from './section';
import "./team.css";
import ProfileCard from './profileCard';

const data = {
  "Public Relations & Branding": [
    {
      name: 'Sudhanshu Raj',
      role: 'Public Relations Head',
      phone: '+91 8292967325',
      email: 'publicrelations@alcheringa.in',
      imageSrc: 'pics/pr pic 1.png',
    },
    {
      name: 'Siddharth Shukla',
      role: 'Public Relations Head',
      phone: '+91 7566494761',
      email: 'publicrelations2@alcheringa.in',
      imageSrc: 'pics/pr pic 2.png',
    },
    {
      name: 'Sulabh Napit',
      role: 'Media and Outreach Head',
      phone: '+91 8349363008',
      email: 'media@alcheringa.in',
      imageSrc: 'pics/pr pic 3.png',
    },
  ],
  "Corporate Relations & Marketing": [
    {
      name: 'Prakrati Sahu',
      role: 'CR&M Head',
      phone: '+91 8887710888',
      email: 'marketing1@alcheringa.in',
      imageSrc: 'pics/Frame 6356227.png',
    },
    {
      name: 'Prajapati Vivek M',
      role: 'CR&M Head',
      phone: '+91 7696990943',
      email: 'marketing2@alcheringa.in',
      imageSrc: 'pics/Frame 6356227-1.png',
    },
    {
      name: 'Kishor Kunal',
      role: 'CR&M Head',
      phone: '+91 8290098000',
      email: 'marketing3@alcheringa.in',
      imageSrc: 'pics/Frame 6356227-2.png',
    },
    {
      name: 'Jayes Ranjan',
      role: 'CR&M Head',
      phone: '+91 8310037471',
      email: 'marketing4@alcheringa.in',
      imageSrc: 'pics/Frame 6356227-3.png',
    },
  ],

  "Events": [
    {
      name: 'Abhijeet Ghosh',
      role: 'Events Management Head',
      phone: '+91 9336729959',
      email: 'events@alcheringa.in',
      imageSrc: 'pics/E pic 1.png',
    },
    {
      name: 'Krishna Agarwal',
      role: 'Pronites Head',
      phone: '+91 7049606444',
      email: 'events@alcheringa.in',
      imageSrc: 'pics/E pic 2.png',
    },
    {
      name: 'Pramit Some',
      role: 'Campaigns Head',
      phone: '+91 8697731037',
      email: 'campaigns@alcheringa.in',
      imageSrc: 'pics/E pic 3.png',
    },
  ],


    "Creatives": [
    {
      name: 'Anmol Sable',
      role: 'Creatives Head',
      phone: '+91 8292967325',
      email: 'creatives@alcheringa.in',
      imageSrc: 'pics/c pic 1.png',
    },
    {
      name: 'Sai Sankeerth V',
      role: 'Pronites Head',
      phone: '+91 8292967325',
      email: 'creatives@alcheringa.in',
      imageSrc: 'pics/c pic 2.png',
    },
    {
      name: 'Nikita Sharma',
      role: 'Digital Media Head',
      phone: '+91 8292967325',
      email: 'creativess@alcheringa.in',
      imageSrc: 'pics/c pic 3.png',
    },
  ],

  "MUN": [
    {
      name: 'Yoshita Banerjee',
      role: 'MUN Secretary General',
      phone: '+91 8292967325',
      email: 'iitgmun@alcheringa.in',
      imageSrc: 'pics/mun pic 1.png',
    },
    {
      name: 'Divya Mate',
      role: 'MUN Director General',
      phone: '+91 8292967325',
      email: 'iitgmun@alcheringa.in',
      imageSrc: 'pics/mun pic 2.png',
    },
    
  ],

  "Web Ops & App Ops": [
    {
      name: 'Himank Bohara',
      role: 'Web Operations Head',
      phone: '+91 8955774322',
      email: 'webops@alcheringa.in',
      imageSrc: 'pics/WO pic 1.png',
    },
    {
      name: 'Shivam Gupta',
      role: 'Web Operations Head',
      phone: '+91 8085774946',
      email: 'webops@alcheringa.in',
      imageSrc: 'pics/WO pic 2.png',
    },
    {
        name: 'Jivesh Firke',
        role: 'App Development Head',
        phone: '+91 830877000',
        email: 'webops@alcheringa.in',
        imageSrc: 'pics/AO pic.png',
      },  
  ],


  "Convener and Finance Head": [
    {
      name: 'Pradipta Jiwan H',
      role: 'Convener',
      phone: '+91 8292967325',
      email: '@alcheringa.in',
      imageSrc: 'pics/conve pic.png',
    },
    {
        name: 'Astitva Jain',
        role: 'Finance and Accounts Head',
        phone: '+91 8527267283',
        email: '@alcheringa.in',
        imageSrc: 'pics/FH pic.png',
      },
  ],

  // Add more sections and members as needed
};

export default function Team() {
  return (
    <div className = "whole-page">
        <div className = "main-photo">
            <img src="pics/Frame 6356232.png" alt="Group photo" />
        </div>
        <div className="page-container">
    {Object.entries(data).map(([sectionTitle, profiles]) => (
      <div className="section-container" key={sectionTitle}>
        <h2>{sectionTitle}</h2>
        <div className={sectionTitle === "Web Ops" || sectionTitle === "Convener" ? "profile-grid-two-columns" : "profile-grid"}>
          {profiles.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
          ))}
        </div>
      </div>
    ))}
  </div>
  </div>
  );
}
