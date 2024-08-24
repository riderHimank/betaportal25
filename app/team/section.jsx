// components/Section.jsx
import React from 'react';
import ProfileCard from './profileCard';

const Section = ({ title, members }) => {
  console.log(members);
  return (
    <section className="section-container ">
      <h2>{title}</h2>
      <div className={`profile-grid`}>
        {members.map((member, index) => (
          <ProfileCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default Section;
