import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SubChat = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  // const [isUser, setIsUser] = useState(false);

  const location = useLocation();
  const data = location.state;
  console.log("data", data);
  console.log("item", list);

  useEffect(() => {
    const jsonList = JSON.parse(localStorage.getItem('chat-list')) || [];
    setList(jsonList);
  }, []);

  function handle_change(e) {
    setInput(e.target.value);
  }

  function handle_send() {
    setList((prev) => {
      return [...prev, { name: data, message: input }];
    });

    localStorage.setItem(
      'chat-list',
      JSON.stringify([...list, { name: data, message: input }])
    );
    console.log(list);
    setInput('');
  }

  return (
    <div className='main-box'>
      <div className='msg-field'>
        <h2>Messenger</h2>
        <div className='msg-box overflow-auto bg-dark p-2' id='msg-box'>
          <div id='msg-list ' className='msg-list   p-0'>
            {list.map((item, index) => (
              <div
                key={index}
                className={`border-danger  w-100   ${item.name == data ? 'text-end' : ""}`}
              >

                <div className={` text-div bubble ${item.name == data ? 'right':'left' } d-inline-block w-25 p-2 `}>
                  <span className='text-primary'>{`${item.name}`}</span>
                  <br></br>
                  <span className='text-white'>{`${item.message}`}</span>
                </div>

              </div>
            ))}
          </div>
        </div>
        
        <div className='d-flex '>
            <input 
            className="form-control form-control-sm bg-secondary text-white" 
            type="text" 
            placeholder="Enter Your Chat...."
            onChange={handle_change}
            value={input}
            >
            </input>
            <button className='btn bg-black text-white' type='button' onClick={handle_send}>
            Send
            </button>
        </div>
      </div>
    </div>
  );
};

export default SubChat;
