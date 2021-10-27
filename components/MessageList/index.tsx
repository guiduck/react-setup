import React from 'react';
import MessageItem from '../MessageItem';

const MessageList: React.FC = () => {
  return (
    <div>
      <h1>
        List of messages
      </h1>
      <MessageItem />
    </div>
  );
}

export default MessageList;