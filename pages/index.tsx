import React from 'react';

import {
  Flex,
  Button,
  useColorMode
} from '@chakra-ui/react';

import AuthForm from '../components/AuthForm';
import NavBar from '../components/NavBar';

const Home: React.FC = () => {

  const { toggleColorMode } = useColorMode();

  return (
    <Flex direction='column' width='100%' height='100vh' justifyContent='center' alignItems='center'>
      <NavBar />
      <Button alignSelf='flex-start' onClick={toggleColorMode} >change color mode</Button>
      <AuthForm />
    </Flex>
  )
}

export default Home;