import React from 'react'
import { Link } from 'react-router-dom';
import Call from '../img/call.png';

const Main = () => {
  return (
    <>
    <div className="App">
        <div className='main-text'>Contact<br/>Application</div>
        <img src={Call} className='Call-logo' alt='React' />
        <button className='btn1'><Link to="/write"> 신규등록 </Link></button>
        <button className='btn2'><Link to="/contact"> 리스트 </Link></button>
    </div>
      </>
  )
}

export default Main