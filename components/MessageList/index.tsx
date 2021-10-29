import React from 'react';
import useMessages from '../../hooks/useMessages';

import MessageItem from '../MessageItem';

import { Container, Flex, Heading } from '@chakra-ui/react';

type Message = {
  id: number,
  content: string,
  createdAt: string,
  updatedAt: string,
  likes: number,
  loves: number,
  activeUserLikedIt: number,
  activeUserLovedIt: number,
  author: {
    id: number,
    username: string
  }
}

const MessageList: React.FC = () => {

  const token: any = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjksInVzZXJuYW1lIjoiZ3VpZHVjayIsImlhdCI6MTYzNTM4MzUyMCwiZXhwIjoxNjM1Mzg3MTIwfQ.xLDE9vzIQW5IOM2p073KqnAqdOmy4Zsc3D8vqyc6z7E';

  const {data: messages, error } = useMessages(token)

  return (
    <Container >
      <Heading>
        List of messages
      </Heading>
      {
        messages ?
        messages.map((message: Message) => {
          return (
            <MessageItem
              username={message.author.username}
              content={message.content}
              likes={message.likes}
              loves={message.loves}
              date={message.createdAt}
            />
          );
        }) :
        <Flex>Loading...</Flex>
      }
    </Container>
  );
}

export default MessageList;