import React, { useState } from 'react';
// import ChatBot from '../../components/chatbot/chatbot.component';
import { Link } from 'react-router-dom';

const BurgerChatWidget = () => {

  return (
    <div className="fixed bottom-7 right-4 z-50">
      <Link
        className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full p-4 shadow-lg"
        to='/chat'
      >
        💬 Chat with Us
      </Link>
    </div>
  );
};

export default BurgerChatWidget;
