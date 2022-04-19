import type { NextPage } from 'next'
import Head from 'next/head'

const Coding: NextPage = () => {
  return (
    <>
      <Head>
        <title>Coding</title>
        <meta name='description' content='Coding' />
      </Head>

      <section className='space-y-6'>
        <div className='text-5xl font-bold'>
          <h1>Coding</h1>
        </div>

        <p className='text-lg'>This is the blog page</p>
      </section>
    </>
  )
}

export default Coding
