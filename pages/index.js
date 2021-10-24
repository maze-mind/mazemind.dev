import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Scene from './Scene';

import LoadingPage from './LoadingPage';

export default function Home() {
  const [Loading, toggleLoading] = useState(true);

  const closeLoading = () => toggleLoading(false);

  return (
    <div>
      <Head>
        <title>The Maze</title>
        <meta name="description" content="Welcome to the Maze" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {Loading ? <LoadingPage closeLoading={closeLoading}/> : <Scene />}
      </main>

    </div>
  )
}
