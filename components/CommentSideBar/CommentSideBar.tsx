import Comment from '@/components/Comment'
import CommentNew from '@/components/CommentNew'

const CommentSideBar: React.FC = () => {
  return (
    <aside className='flex w-45 shrink-0 flex-col-reverse overflow-auto'>
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
        <CommentNew />
      </div>
    </aside>
  )
}

export default CommentSideBar
