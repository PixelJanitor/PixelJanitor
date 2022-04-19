import Link from 'next/link'
import SVG from 'react-inlinesvg'

import CommentSideBar from '@/components/CommentSideBar'
type Props = {
  close: () => void
}

const Post: React.FC<Props> = ({ close }) => {
  return (
    <div className='absolute inset-0 flex items-stretch'>
      <aside className='flex w-35 shrink-0 flex-col justify-between p-6 pt-12'>
        <div className='space-y-6'>
          <Link href='/'>
            <a>
              <SVG src='/images/logo.svg' onClick={close} />
            </a>
          </Link>

          <div className='flex flex-col space-y-2 text-secondary'>
            <div>Extra details here</div>
          </div>
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
      <div className='grow overflow-auto pt-10.5 pr-12'>
        <h1 className='text-5xl font-bold'>Storytelling with react Framer motion</h1>
        <p className='mt-6'>
          I’m Derek, and making things is what gets me out of bed (and keeps me up at night). I don’t just make digital
          things, but tangible stuff too. If you want me to make something for you - reach out. I’m currently at
          PlanetScale designing and building the best database product ever.
        </p>
      </div>
      <CommentSideBar />
    </div>
  )
}

export default Post
