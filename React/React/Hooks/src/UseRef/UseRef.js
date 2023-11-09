import React, { useRef, useEffect } from 'react';

function UseRef() {
  const previousValue = useRef(null);
  const currentValue = 42;

  useEffect(() => {
    previousValue.current = currentValue;
  }, [currentValue]);

  return (
    <div>
      <p>Previous Value: {previousValue.current}</p>
      <p>Current Value: {currentValue}</p>
    </div>
  );
}
export default UseRef