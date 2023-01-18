import React from 'react'
import '../Style.scss';
import Call from '../img/call.png';
import { RC } from '../ReducerContext';
import { useContext, useRef, useState, useReducer } from 'react'

const Contact = () => {

    const {data} = useContext(RC);

  return (
    <div className="App">
        <div>전화번호가 저장된 연락처 100개</div>
        <div>
            <button>➕</button>
            <button>✔</button>
        </div>

        <input className='quest' type="text" placeholder='검색'/>
        <div className='list-box'>
            
                {
                    data.list.map((obj)=>{
                        console.log(obj)
                        return <div key={obj.id} className='list-item2'>
                                <div className='list-item1'>홍</div>
                                    {obj.a}   
                                <img src={Call} className='list-item3' alt='React' />  
                               </div>
                      })
                }
            
        </div>
    </div>
  )
}

export default Contact