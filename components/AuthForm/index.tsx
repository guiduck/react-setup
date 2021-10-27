import React from 'react';

import {
  Flex,
  Heading,
  Input,
  Button,
  useColorModeValue
} from '@chakra-ui/react'

const AuthForm: React.FC = () => {

  const formBackground = useColorModeValue('gray.200', 'gray.700');

  return (
      <Flex direction='column' background={formBackground} p={12} rounded={6} >

        <Heading mb={6}>
          Login or create an account
        </Heading>

        <Input placeholder='email@gmail.com' variant='filled' mb={3} type='email' />
        <Input placeholder='******' variant='filled' mb={6} type='password' />
        <Flex justifyContent='center' >
          <Button colorScheme='teal' >Sign in</Button>
          <Button ml={6} colorScheme='red' >Sign Up</Button>
        </Flex>
      </Flex>
  )
}

export default AuthForm;