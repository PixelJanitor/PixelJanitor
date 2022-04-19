import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SVG from 'react-inlinesvg'

const SideNav: React.FC = () => {
  const router = useRouter()

  return (
    <aside className='flex w-35 shrink-0 flex-col justify-between p-6 pt-12'>
      <div className='space-y-6'>
        <Link href={'/'}>
          <a className='inline-flex h-3 align-top'>
            <SVG src='/images/logo.svg' />
          </a>
        </Link>

        <nav className='flex flex-col space-y-2 text-secondary'>
          <Link href={'/is/writing'}>
            <a
              className={cn(
                'transition hover:text-primary',
                router.pathname === '/is/writing' && 'font-semibold text-primary'
              )}
            >
              Writing
            </a>
          </Link>
          <Link href={'/is/coding'}>
            <a className='transition hover:text-primary'>Coding</a>
          </Link>
          <Link href={'/is/crafting'}>
            <a className='transition hover:text-primary'>Crafting</a>
          </Link>
          <Link href={'/is/thinking'}>
            <a className='transition hover:text-primary'>Thinking</a>
          </Link>
          <Link href={'/is/working'}>
            <a className='transition hover:text-primary'>Working</a>
          </Link>
          <Link href={'/is/tooling'}>
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
  )
}

export default SideNav
