import { useState } from 'react'

import { Dialog } from '@reach/dialog'
import Div100vh from 'react-div-100vh'

import CommentSidebar from '@/components/CommentSideBar'
import Post from '@/components/Post'
import SideNav from '@/components/SideNav'

const AppLayout: React.FC = ({ children }) => {
  const [isArticleVisible, setIsArticleVisible] = useState(false)
  const open = () => setIsArticleVisible(true)
  const close = () => setIsArticleVisible(false)

  return (
    <>
      <Div100vh className='relative flex'>
        <SideNav />
        <main className='grow pt-10.5'>
          {children} <button onClick={open}>Open</button>
        </main>
        <CommentSidebar />
      </Div100vh>

      {isArticleVisible && (
        <div className='fixed inset-0 flex flex-col space-y-1 bg-black/50 p-1 backdrop-blur'>
          <div className='flex justify-between'>
            <div className='flex space-x-2'>
              <button className='focus:outline-none'>Previous article</button>
              <button>Next article</button>
            </div>
            <button onClick={close}>Close</button>
          </div>

          <div className='relative grow rounded bg-primary'>
            <Post close={close} />
          </div>
        </div>
      )}
    </>
  )
}

export default AppLayout
