// import classNames from 'classnames'

import Image from 'next/image'

type Props = {
  comment: string
}

const Comment: React.FC<Props> = ({ comment }) => {
  const bgImage = 'https://pbs.twimg.com/profile_images/1435900467729637381/C7lu0Qyz_x96.jpg'

  return (
    <div className='flex space-x-1.5'>
      <div className='h-5.5 w-5.5 shrink-0 transform-gpu overflow-hidden rounded-lg bg-gray-800'>
        <Image
          src={'https://pbs.twimg.com/profile_images/1435900467729637381/C7lu0Qyz_x96.jpg'}
          width={88}
          height={88}
        />
      </div>
      <div className='grow space-y-1'>
        <div className='relative grow transform-gpu overflow-hidden rounded-xl rounded-br-xs shadow-xl shadow-black/25'>
          <div className='relative z-10 bg-gray-900/80 px-2 py-1.5 text-xs text-light'>{comment}</div>
          <div
            style={{
              backgroundImage: `url(${bgImage})`
            }}
            className='absolute inset-0 bg-cover bg-center blur-sm'
          ></div>
        </div>
        <div className='flex justify-between px-2 text-2xs text-secondary'>
          <div className='font-medium'>Name Lastname</div>
          <div className=''>27/7/2022</div>
        </div>
      </div>
    </div>
  )
}

export default Comment
