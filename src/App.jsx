import { useState,useCallback, useEffect,useRef } from 'react'
import './App.css'
function App() {
 const [length,setLength]=useState(8) 
 const [number,setNumber]=useState(false) 
 const [carecter,setCarecter]=useState(false) 
 const [password,setPassword]=useState("")
 const passcopy=useRef(null)

 const passwordGenaretor=useCallback(()=>{
  let pass="";
  let string="ABCDEFGHIJKLMNOPQRSTUVWXabcdefghijklmnopqrstuvwxyz"
  if (number){
    string+="1234567890"
 }
 if (carecter){
  string+="!@$%#&*(){}[]?~`"
}
for (let i = 1;  i<= length; i++) {
 let car =Math.floor(Math.random()*string.length + 1);
 pass+=string.charAt(car);
  
}
setPassword(pass)
 
}
 
 ,[length,number,carecter,setPassword]) ;

 const copyvalue=useCallback(()=>{
   window.navigator.clipboard.writeText(password)
 },[password])

useEffect(()=>{
passwordGenaretor()
},[number,carecter,length,setPassword])

 return (
    <>
     <div >
      <h1 className='pb-4'>Password Genaretor</h1>

     <input type="text" value={password} placeholder='password' ref={passcopy} readOnly class="input input-bordered w-full max-w-xs p-2  border-slate-950 border-4 rounded-lg" /><button onClick={copyvalue} class="btn btn-primary ml-3">Copy</button>
     <div className='flex gap-4 mt-5'>
     <input type="range" min="6" max="100" value={length} onChange={(e)=>{setLength(e.target.value)}}class="range" /><p>length({length})</p>
     <input type="checkbox" defaultValue={number} onChange={()=>{setNumber((prev)=>!prev)}}   class="checkbox" /><p>Number</p>
     <input type="checkbox" defaultValue={carecter} onChange={()=>{setCarecter((prev)=>!prev)}}   class="checkbox" /><p>Carecter</p>
     </div>
     </div>
    </>
  )
}

export default App
