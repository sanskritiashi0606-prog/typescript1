import {useState} from 'react'

export default function App() {
  const[count,setCount]=useState<number>(0);
  const increment=():void =>{
    setCount(count+1);
  };
  return (
    <div>
      <h1>React+TypeScript Example-2500032605-Deepak</h1>
      <h2>Count:{count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
