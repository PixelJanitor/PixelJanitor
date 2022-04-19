import type { NextPage } from 'next'
import Head from 'next/head'

const Crafting: NextPage = () => {
  return (
    <>
      <Head>
        <title>Crafting</title>
        <meta name='description' content='Crafting' />
      </Head>

      <section className='space-y-6'>
        <div className='text-5xl font-bold'>
          <h1>Crafting</h1>
        </div>

        <p className='text-lg'>This is the blog page</p>
      </section>
    </>
  )
}

export default Crafting
