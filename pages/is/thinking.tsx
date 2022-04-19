import type { NextPage } from 'next'
import Head from 'next/head'

const Thinking: NextPage = () => {
  return (
    <>
      <Head>
        <title>Thinking</title>
        <meta name='description' content='Thinking' />
      </Head>

      <section className='space-y-6'>
        <div className='text-5xl font-bold'>
          <h1>Thinking</h1>
        </div>

        <p className='text-lg'>This is the blog page</p>
      </section>
    </>
  )
}

export default Thinking
