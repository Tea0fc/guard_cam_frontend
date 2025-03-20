import classNames from 'classnames'
import Link from 'next/link'
import type {
  ButtonHTMLAttributes,
  FC,
  ReactNode,
  HTMLAttributeAnchorTarget
} from 'react'
import React from 'react'
import { memo, useMemo } from 'react'

import module from './Button.module.scss'

export type ButtonMode = 'primary' | 'secondary' | 'clear'
export type ButtonSize = 'lg' | 'md' | 'sm' | 'xs'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: ButtonMode
  size?: ButtonSize
  link?: string
  target?: HTMLAttributeAnchorTarget
  label?: ReactNode
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  borderRadius?: number
  isCenter?: boolean
  isGrow?: boolean
}

export const Button: FC<IProps> = memo(
  ({
    mode = 'primary',
    size = 'xs',
    label,
    link = '',
    target = '_blank',
    type = 'button',
    isCenter = false,
    leftIcon,
    rightIcon,
    isGrow = false,
    borderRadius,
    className,
    ...rest
  }) => {
    const buttonClasses = useMemo(
      () =>
        classNames(
          module.wrapper,
          {
            [module.center]: isCenter,
            [module.grow]: isGrow,
            [module.icon]: !!label === false
          },
          [module[mode], module[size], className]
        ),
      [mode, size, className, isCenter, isGrow, label]
    )

    const borderRadiusStyle: React.CSSProperties = borderRadius
      ? {
          borderRadius: `${borderRadius}px`
        }
      : {}

    if (link.length) {
      return (
        <Link
          className={buttonClasses}
          href={link}
          target={target}
          style={borderRadiusStyle}
        >
          {leftIcon}
          {label && <span>{label}</span>}
          {rightIcon}
        </Link>
      )
    }

    return (
      <button
        type={type}
        className={buttonClasses}
        style={borderRadiusStyle}
        {...rest}
      >
        {leftIcon}
        {label && <span>{label}</span>}
        {rightIcon}
      </button>
    )
  }
)
