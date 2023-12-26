import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';


const SubChat = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [clickedMessageId, setClickedMessageId] = useState(null);
  const[isEdit,setIsEdit]=useState(false);
  const location = useLocation();
  const data = location.state;

  const currentTime = new Date();
  const options = { timeZone: 'Asia/Kolkata' };

  const indianLocalTime = currentTime.toLocaleTimeString('en-IN', options);
  console.log(indianLocalTime);;

  useEffect(() => {
    const jsonList = JSON.parse(localStorage.getItem('chat-list')) || [];
    setList(jsonList);


    

  }, []);

  function handle_change(e) {
    setInput(e.target.value);
  }

  function handle_send() {
    const maxId = list.length > 0 ? Math.max(...list.map((data) => data.id)) + 1 : 1;
    setList((prev) => {
      return [...prev, { id: maxId, name: data, message: input ,time:indianLocalTime }];
    });

    console.log("list",list);

    
  }
  useEffect(()=>{
    if(list.length > 0){
      localStorage.setItem('chat-list',JSON.stringify(list));
      setInput('');
    }
  },[list])

  function handleDelete(id) {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
    localStorage.setItem('chat-list', JSON.stringify(updatedList));
    setClickedMessageId(null); // Reset clicked message ID after deletion
  }

  function handleDivClick(id) {
    setClickedMessageId(id)
    setIsEdit((prev)=>!prev)                   
  }

  return (
    <div className='main-box'>
      <div className='msg-field p-0'>
        <h2>Messenger</h2>
        <div className='msg-box overflow-auto bg-dark p-2' id='msg-box'>
          <div id='msg-list ' className='msg-list p-0'>
            {list.map((item, index) => (
              <div
                key={index}
                className={`border-danger w-100 ${item.name === data ? 'text-end' : ''}`}
              >
                {clickedMessageId == item.id && (item.name === data) && isEdit && (
                    <div className='d-flex justify-content-end'>
                      <div className="delete-button right  bg-white  mx-5 text-end">
                        <FontAwesomeIcon className='text-danger bg-white' icon={faTrash} onClick={()=>(handleDelete(item.id))}/>

                      </div>
                    </div>
                  )}
                <div
                  onClick={() => handleDivClick(item.id)}
                  className={`text-div bubble  ${
                    item.name === data ? 'right' : 'left'
                  } d-inline-block  p-2  `}
                >
                  {/* {clickedMessageId == item.id && (item.name === data) && isEdit && (
                    <div className="delete-button">
                      <FontAwesomeIcon icon={faTrash} onClick={()=>(handleDelete(item.id))}/>
                    </div>
                  )} */}
                  <span className='text-primary mx-3'>{`${item.name}`}</span>
                  <br></br>
                  <span className='text-white mx-3 d-block mb-3'>{`${item.message}`}</span>
                  {/* <br></br> */}
                  {/* <span className='text-white '>{`${item.time}`}</span> */}
                </div>
                  
                <span className='d-block mb-4'>  <span className='text-white '>{`${item.time}`}</span> </span>
                
              </div>
            ))}
          </div>
        </div>

        <div className='d-flex '>
          <input
            className='form-control form-control-sm bg-secondary text-white'
            type='text'
            placeholder='Enter Your Chat....'
            onChange={handle_change}
            value={input}
          ></input>
          <button className='btn bg-black text-white' type='button' onClick={handle_send}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubChat;
