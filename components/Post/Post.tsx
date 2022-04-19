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
      <div className='text-5x grow overflow-auto pt-10.5 pr-12'>
        asdfa lkajs dflkajs dflkasj flaskdjf ;laskdfj ;laskdfj l;askd fjl;askdjf l;askdj fl;askdfj l;skadjf lsdkjf
        sakdjfh adsklfh lkjfh sdfkjh sflkjsflkjahsf kjasfh lkajsfh alksjfh salkfjh askfljhs flkjashf kljashf lskaj
        hasdfa lkajs dflkajs dflkasj flaskdjf ;laskdfj ;laskdfj l;askd fjl;askdjf l;askdj fl;askdfj l;skadjf lsdkjf
        sakdjfh adsklfh lkjfh sdfkjh sflkjsflkjahsf kjasfh lkajsfh alksjfh salkfjh askfljhs flkjashf kljashf lskaj
        hasdfa lkajs dflkajs dflkasj flaskdjf ;laskdfj ;laskdfj l;askd fjl;askdjf l;askdj fl;askdfj l;skadjf lsdkjf
        sakdjfh adsklfh lkjfh sdfkjh sflkjsflkjahsf kjasfh lkajsfh alksjfh salkfjh askfljhs flkjashf kljashf lskaj
        hasdfa lkajs dflkajs dflkasj flaskdjf ;laskdfj ;laskdfj l;askd fjl;askdjf l;askdj fl;askdfj l;skadjf lsdkjf
        sakdjfh adsklfh lkjfh sdfkjh sflkjsflkjahsf kjasfh lkajsfh alksjfh salkfjh askfljhs flkjashf kljashf lskaj
        hasdfa lkajs dflkajs dflkasj flaskdjf ;laskdfj ;laskdfj l;askd fjl;askdjf l;askdj fl;askdfj l;skadjf lsdkjf
        sakdjfh adsklfh lkjfh sdfkjh sflkjsflkjahsf kjasfh lkajsfh alksjfh salkfjh askfljhs flkjashf kljashf lskaj
        hasdfa lkajs dflkajs dflkasj flaskdjf ;laskdfj ;laskdfj l;askd fjl;askdjf l;askdj fl;askdfj l;skadjf lsdkjf
        sakdjfh adsklfh lkjfh sdfkjh sflkjsflkjahsf kjasfh lkajsfh alksjfh salkfjh askfljhs flkjashf kljashf lskaj h
      </div>
      <CommentSideBar />
    </div>
  )
}

export default Post
