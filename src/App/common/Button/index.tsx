import { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import cn from 'classnames'

interface ButtonProps {
  onClick?: () => void
  children?: React.ReactNode
  className?: string
  styles?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  theme?: 'light' | 'dark'
}

const DEFAULT_BUTTON_STYLE = 'p-4 border rounded-full w-32 transition-all justify-center align-center'

const BUTTON_STYLES = {
  dark: 'text-spaceLime bg-spaceNavy border-spaceBlue hover:bg-spaceBlue hover:border-spaceNavy',
  light: 'bg-spaceLime hover:bg-white hover:border-spaceLime'
}

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  className = DEFAULT_BUTTON_STYLE,
  styles,
  type,
  disabled,
  theme = 'dark',
}) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(cn(
        className, 
        BUTTON_STYLES[theme],
        styles,
      ))}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
