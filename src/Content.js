import React from 'react'
import american from './images/american.png';
import './App.css';

const Content = (props) => {
  return (
    <div>
        <div className='item2'>
            <img src={american} alt='american'/>
            <h3>{props.title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
  )
}

export default Content