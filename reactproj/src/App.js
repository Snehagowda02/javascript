import './App.css';
import { useCallback, useEffect, useState , useRef} from 'react';
// if you need reference of any object

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setChar] = useState(false);
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)


  //  use callback keep the function in memory
  // useCallback is a react Hook that helps in caching function defiition between re-renders
  //  usecallback(function, dependencies)
  // const PasswordGen = useCallback( (), []);
const PasswordGen = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if(numAllowed) str += "0123456789";
  if(charAllowed) str += "()*&%^#$@{}[]";

  for(let i = 1; i <= length; i++){
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);

  }
  setPassword(pass)

}, [length, numAllowed, charAllowed, setPassword]);

// const copyPasswoedClipboard = useCallback(() => {
//   window.navigator.clipboard.writeText(password)
// }, [password])

const copyPasswoedClipboard = useCallback(() => {
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password);
}, [password])

useEffect(() => {
  PasswordGen();
}, [length, numAllowed, charAllowed, PasswordGen]);

  return (
 <>
 <h1>Password Generator</h1>
 <input type='text'
 value={password}
 placeholder='Password'
 ref={passwordRef}/>

 <button onClick={copyPasswoedClipboard}>
  copy
 </button>
 <div>
<input 
type='range'
min={6}
max={15}
value={length}
onChange={(e) => {setLength(e.target.value)}}
/>
<label>Length: {length}</label>

 </div>
 <div>
  <input type="checkbox"
  defaultChecked = {numAllowed}
 // id='numberInput'
  onChange={() => {
    setNumAllowed((prev) => !prev);
  
  }}
  />
  <label>Numbers</label>
  <input type= 'checkbox'
  defaultChecked={charAllowed}
  onChange={() => {
    setChar((prev) => !prev);
  }}
  />
  <label> Character</label>
 </div>
 </>
  );
}

export default App;
