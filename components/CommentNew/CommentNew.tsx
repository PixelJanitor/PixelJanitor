import { useState } from 'react'

import cn from 'classnames'
import Image from 'next/image'
useState

const CommentNew: React.FC = () => {
  const [charCount, setCharCount] = useState(0)

  const maxCharCount = 100
  const bgImage = 'https://pbs.twimg.com/profile_images/1435900467729637381/C7lu0Qyz_x96.jpg'

  return (
    <div className='flex space-x-1.5'>
      <div className='h-5.5 w-5.5 shrink-0 overflow-hidden rounded-lg bg-gray-800'>
        <Image src={bgImage} width={88} height={88} />
      </div>
      <div className='grow space-y-1'>
        <textarea
          maxLength={maxCharCount}
          placeholder='Have something nice to say?'
          onChange={(e) => setCharCount(e.target.value.length)}
          className='relative h-11 w-full grow resize-none overflow-hidden rounded-xl rounded-br-xs border-none bg-secondary px-2 py-1.5 align-top text-xs placeholder:text-gray-500 focus:ring-0 dark:bg-tertiary'
        />
        <div className='flex justify-between px-2 text-2xs text-secondary'>
          <div />
          <div
            className={cn(charCount > maxCharCount / 2 && 'text-orange', charCount > maxCharCount / 1.25 && 'text-red')}
          >
            {charCount}/{maxCharCount}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentNew
