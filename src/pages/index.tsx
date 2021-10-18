import Head from 'next/head';
import React from 'react';

import RocketseatLogo from '../assets/rocketseat.svg'

import { Container } from '../styles/Pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

        <RocketseatLogo />
        <h1>
          hello world
        </h1>
        <p> template typescript with nextjs, eslint and prettier all setup </p>
    </Container>
  )
}

export default Home;