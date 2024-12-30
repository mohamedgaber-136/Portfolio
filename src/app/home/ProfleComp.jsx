'use client';
import React, { useState, useEffect, useRef } from 'react';
import profileImage from '../../../public/images/IMG_20230424_204627_901-01.jpeg';

export const ProfleComp = () => {
 
  return (
    <div className="ProfileComponent flex flex-col items-center justify-center relative">
      {/* Optional profile image */}
      {/* <div className="imageData">
        <Image src={profileImage} alt="profileImage" />
      </div> */}

      <div
        className="ProfileContent flex relative"
    
      >
        <h2 className="ProfileLabels">
          Hello I am Mohamed Gaber, I&apos;m a{' '}
          <small>Frontend Developer</small>
          <small>
            {' '}
            ReactJS <small>and</small> NextJS{' '}
          </small>
          <small>, WordPress</small>
        </h2>
      </div>

  
  
    </div>
  );
};
