import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {LC, NC, SC, UC} from './Data/data'

function App() {
  let [upper,setUpper]=useState(false);
  let [lower,setLower]=useState(false);
  let [number,setNumber]=useState(false);
  let [symbol,setSymbol]=useState(false);
  let [passlen,setPasslen]=useState(1);
  let [fpass,setFpass]=useState('')
  let [copy,setCopy]=useState(false)
  let createpass=()=>{
    let charset='';
    let finalpass='';
    if(upper || lower || number || symbol){
      if(upper) charset+=UC;
      if(lower) charset+=LC;
      if(number) charset+=NC;
      if(symbol) charset+=SC;
      for(let i=0;i<passlen;i++){
          finalpass+=charset.charAt(Math.floor(Math.random()*charset.length))
          setFpass(finalpass)
      }
    }
    else{
      alert("Please click on atleast one checkbox")
    }
  }
   let copypass=()=>{
      navigator.clipboard.writeText(fpass)
    }
  return (
    <>
      <div className='main'>
        <div className='box'>
          <div className='heading'>
            <h1>Password Generator</h1>
            <div className='info'>
              <input type='text' readOnly value={fpass}/><button onClick={copypass}>Copy
              </button>
            </div>
            <div className='option'>
              <label>Password length</label>
              <input type='number' max={25} min={1} value={passlen} onChange={(event)=>setPasslen(event.target.value)}/>
            </div>
            <div className='detail'>
              <label>Include uppercase letters</label>
              <input type='checkbox' checked={upper} onChange={()=>setUpper(!upper)}/>
            </div>
            <div className='detail'>
              <label>Include lowercase letters</label>
              <input type='checkbox'  checked={lower} onChange={()=>setLower(!lower)} />
            </div>
            <div className='detail'>
              <label>Include numbers</label>
              <input type='checkbox' checked={number} onChange={()=>setNumber(!number)} />
            </div>
            <div className='detail'>
              <label>Include symbols</label>
              <input type='checkbox' checked={symbol} onChange={()=>setSymbol(!symbol)}/>
            </div>
            <div className='btn'>
              <button onClick={createpass}>Generate password</button>
            </div>
            
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
