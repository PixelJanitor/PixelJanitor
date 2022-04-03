import type { NextPage } from 'next'
import Head from 'next/head'
import Div100vh from 'react-div-100vh'
import SVG from 'react-inlinesvg'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PixelJanitor</title>
        <meta name='description' content='PixelJanitor' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Div100vh>
        <main className='flex h-full items-center justify-center'>
          <SVG src='/images/logo.svg' />
        </main>
      </Div100vh>
    </>
  )
}

export default Home
