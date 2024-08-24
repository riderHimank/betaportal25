// components/ProfileCard.jsx
import React from 'react';

const ProfileCard = ({ name, role, phone, email, imageSrc }) => {
  return (
    <div className="profile-card">
      <img src={imageSrc} alt={`${name}`} className="profile-image" />
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
};

export default ProfileCard;
