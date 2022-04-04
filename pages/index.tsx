import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Div100vh from 'react-div-100vh'
import SVG from 'react-inlinesvg'

import Comment from '@/components/Comment'
import CommentNew from '@/components/CommentNew'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PixelJanitor</title>
        <meta name='description' content='PixelJanitor' />
      </Head>

      <Div100vh className='flex'>
        <aside className='flex w-35 shrink-0 flex-col justify-between p-6 pt-12'>
          <div className='space-y-6'>
            <Link href={'/'}>
              <a>
                <SVG src='/images/logo.svg' />
              </a>
            </Link>

            <nav className='flex flex-col space-y-2 text-secondary'>
              <Link href={'/'}>
                <a className='transition hover:text-primary'>Writing</a>
              </Link>
              <Link href={'/'}>
                <a className='transition hover:text-primary'>Coding</a>
              </Link>
              <Link href={'/'}>
                <a className='transition hover:text-primary'>Crafting</a>
              </Link>
              <Link href={'/'}>
                <a className='transition hover:text-primary'>Thinking</a>
              </Link>
              <Link href={'/'}>
                <a className='transition hover:text-primary'>Working</a>
              </Link>
              <Link href={'/'}>
                <a className='transition hover:text-primary'>Tooling</a>
              </Link>
            </nav>
          </div>
          <footer className='flex items-center space-x-2'>
            <a href='http://twitter.com/pixeljanitor'>
              <SVG src='/images/twitter-icon.svg' />
            </a>
            <a href='http://github.com/pixeljanitor'>
              <SVG src='/images/github-icon.svg' />
            </a>
          </footer>
        </aside>
        <main className='grow space-y-6 pt-10.5'>
          <section className='text-5xl font-bold'>
            <h1 className=''>Product design</h1>
            <h2 className=''>Interface design</h2>
            <h2 className=''>Web animation</h2>
            <h2 className=''>Design systems</h2>
            <h2 className=''>Frontend engineering</h2>
          </section>

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
        </main>

        <aside className='flex w-45 flex-col-reverse overflow-auto'>
          <div className='space-y-3 p-3 pl-0'>
            <Comment comment='Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet1' />
            <Comment comment='Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet2' />
            <Comment comment='Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet3' />
            <Comment comment='Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet4' />
            <Comment comment='Velit officia consequat 5' />
            <Comment comment='Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet6' />
            <Comment comment='Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet7' />
            <Comment comment='Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet8' />
            <Comment comment='Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet9' />
            <Comment comment='Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet10' />
            <Comment comment='Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet11' />
            <Comment comment='Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet12' />
            <Comment comment='Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet13' />
            <CommentNew comment='Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet13' />
          </div>
        </aside>
      </Div100vh>
    </>
  )
}

export default Home
