import type { NextPage } from 'next'
import Head from 'next/head'

const Writing: NextPage = () => {
  return (
    <>
      <Head>
        <title>Writing</title>
        <meta name='description' content='Writing' />
      </Head>

      <section className='space-y-6'>
        <div className='text-5xl font-bold'>
          <h1>Writing</h1>
        </div>

        <p className='text-lg'>This is the blog page</p>
      </section>
    </>
  )
}

export default Writing
