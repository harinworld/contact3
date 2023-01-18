import React, { useContext, useRef, useState, useReducer } from 'react'
import { RC } from '../ReducerContext';
import {Link} from 'react-router-dom';
import Contact from './Contact'

const Write = () => {

    const [text,setText] = useState('');
    const {data,dispatch} = useContext(RC);

  return (
    <div className="App">
        <div>새로운 친구를 등록해주세요</div>

        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={()=>{dispatch({type:'plus',value:text, id:Date.now()})}}>
            <Link to="/contact"> 저장. </Link>
        </button>
    </div>
  )
}

export default Write