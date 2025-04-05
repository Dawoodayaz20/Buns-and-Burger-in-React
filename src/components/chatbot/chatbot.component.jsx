import React, { useState } from 'react';
import { askAgent } from './api';

const ChatBot = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    const result = await askAgent(question);
    setResponse(result);
  };

  return (
    <div className="my-36 bg-yellow-100 mx-20 border-solid border-red-700 place-content-center rounded-xl">
      <h1 className='text-center text-4xl'><strong>Ask Our Burger Bot 🍔</strong></h1>
      <div className='mx-4 w-auto'>
        <p className='text-lg'>
            <strong>Bot Response:</strong>
        </p> 
        <p>
            <b>{response}</b>
        </p>
      </div>
      <div className='items-center justify-between mx-10'>
        <input className=' rounded w-4/5 p-2'
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="What's your burger craving?"
      />
      <button className='bg-red-600 mx-5 p-2 w-12 rounded mt-20 mb-5' onClick={handleSubmit}>Ask</button>
      </div>
    </div>
  );
};

export default ChatBot;