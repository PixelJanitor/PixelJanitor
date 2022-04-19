import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import AnimatedAnimationText from '@/components/AnimatedAnimationText'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PixelJanitor</title>
        <meta name='description' content='PixelJanitor' />
      </Head>

      <section className='space-y-6'>
        <div className='text-5xl font-bold'>
          <h1>Product design</h1>
          <h2>
            Interface <span className='bg-spectrum bg-clip-text text-transparent'>design</span>
          </h2>
          <h2>
            Web <AnimatedAnimationText />
          </h2>
          <h2>Design systems</h2>
          <h2>Frontend engineering</h2>
        </div>

        <h3 className='text-2xl'>
          There&apos;s more, but that&apos;s just <br />
          what my day to day looks like.{' '}
        </h3>

        <p className='text-lg'>
          I don&apos;t just make digital things, but tangible stuff too. <br />
          If you want me to make something for you -{' '}
          <Link href={'/'}>
            <a className='text-blue'>reach out</a>
          </Link>
          .
        </p>
      </section>
    </>
  )
}

export default Home
