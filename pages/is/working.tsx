import type { NextPage } from 'next'
import Head from 'next/head'

const Working: NextPage = () => {
  return (
    <>
      <Head>
        <title>Working</title>
        <meta name='description' content='Working' />
      </Head>

      <section className='space-y-6'>
        <div className='text-5xl font-bold'>
          <h1>Working</h1>
        </div>

        <p className='text-lg'>This is the blog page</p>
      </section>
    </>
  )
}

export default Working
