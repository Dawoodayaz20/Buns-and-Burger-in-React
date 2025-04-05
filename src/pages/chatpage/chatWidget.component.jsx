import React, { useState } from 'react';
import ChatBot from '../../components/chatbot/chatbot.component';

const BurgerChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Box */}
      {isOpen && (
        <div className="mb-2">
          <ChatBot />
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full p-4 shadow-lg"
      >
        💬
      </button>
    </div>
  );
};

export default BurgerChatWidget;
