import Div100vh from 'react-div-100vh'

import CommentSidebar from '@/components/CommentSideBar'
import SideNav from '@/components/SideNav'

const AppLayout: React.FC = ({ children }) => {
  return (
    <>
      <Div100vh className='flex'>
        <SideNav />
        <main className='grow pt-10.5'>{children}</main>
        <CommentSidebar />
      </Div100vh>
    </>
  )
}

export default AppLayout
