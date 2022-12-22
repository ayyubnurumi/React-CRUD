import React from 'react';
import './App.css';

export const Home = () => {
  return (
    <div className='flex-container'>
      <div className='flex-item bg-one tilt'>
        <a href='-'>
          <h1 className='text'>crud1</h1>
        </a>
      </div>
      <div className='flex-item bg-two tilt'>
        <a href='-'>
          <h1 className='text'>crud2</h1>
        </a>
      </div>
    </div>
  )
}
