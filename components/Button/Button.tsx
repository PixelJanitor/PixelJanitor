import cn from 'classnames'

type Props = {
  handleClick: () => void
  transparent?: boolean
}

const Button: React.FC<Props> = ({ children, handleClick, transparent }) => {
  return (
    <button
      onClick={handleClick}
      className={cn(
        'h-4 rounded bg-secondary px-2 text-sm font-semibold text-primary',
        transparent ? 'bg-white/5 backdrop-blur' : 'bg-primary'
      )}
    >
      {children}
    </button>
  )
}

export default Button
