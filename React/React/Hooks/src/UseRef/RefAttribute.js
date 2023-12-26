import React, { useEffect, useRef } from 'react'

const RefAttribute = () => {
    const myInputRef = useRef(null);

    useEffect(() => {
      // Focus on the input element when the component mounts
      myInputRef.current.focus();
    }, []);
  
    return (
      <div>
        {/* Attaching the ref to an input element */}
        <input type="text" ref={myInputRef} />
        <button onClick={() => myInputRef.current.value = ''}>
          Clear Input
        </button>
      </div>
    );
};

export default RefAttribute