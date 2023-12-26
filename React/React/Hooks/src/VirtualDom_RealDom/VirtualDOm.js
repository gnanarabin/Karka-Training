import React, { useState, useEffect } from 'react';

const VirtualDOm = () => {
  const [time, setTime] = useState('');

//   useEffect(() => {
//     setInterval(() => {
//     }, 1000);

 
//   }, []);
setInterval(()=>{
    setTime(new Date().toLocaleTimeString());

},1000)

  return (
    <div>
      <h1>welcome</h1>
      <h2>hi</h2>
      <p>{time}</p>
    </div>
  );
};

export default VirtualDOm;
