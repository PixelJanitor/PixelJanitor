import type { NextPage } from 'next'
import Head from 'next/head'

const Tooling: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tooling</title>
        <meta name='description' content='Tooling' />
      </Head>

      <section className='space-y-6'>
        <div className='text-5xl font-bold'>
          <h1>Tooling</h1>
        </div>

        <p className='text-lg'>This is the blog page</p>
      </section>
    </>
  )
}

export default Tooling
