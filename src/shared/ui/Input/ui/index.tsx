import classNames from 'classnames'
import type { InputHTMLAttributes, FC, ReactNode, ForwardedRef } from 'react'
import React, { useCallback, forwardRef, useState } from 'react'
import InputMask from 'react-input-mask'

import { CloseIcon, Visibility, VisibilityOff } from 'shared/assets/icons'

import module from './Input.module.scss'

export type InputHelperTextType = 'default' | 'error' | 'success' | 'warning'
export type InputSize = 'lg' | 'md' | 'sm' | 'xs'

interface IProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'size'> {
  id: string | number
  label?: string | ReactNode
  type?: string
  value?: string
  className?: string
  size?: InputSize
  helpText?: string | undefined
  helpTextType?: InputHelperTextType
  disabled?: boolean
  icon?: ReactNode
  borderRound?: boolean
  showReset?: boolean
  isPassword?: boolean
  mask?: string
  maskChar?: string
  onResetValue?: () => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<IProps> = forwardRef<HTMLInputElement, IProps>(
  (props: IProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      className,
      id,
      label,
      value,
      type = 'text',
      disabled = false,
      helpText,
      helpTextType = 'default',
      icon,
      size = 'xs',
      borderRound = false,
      showReset = false,
      isPassword = false,
      mask = '',
      maskChar = '',
      onChange,
      onResetValue,
      placeholder,
      ...rest
    } = props

    const [hidePassword, setHidePassword] = useState(isPassword)

    const showEndIcon = (showReset && value && value.length > 0) || isPassword

    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>): void => {
        onChange(event)
        if (isPassword)
          setHidePassword(!!event.target.value.length || !!value?.length)
      },
      [onChange, isPassword, value?.length]
    )

    const handleResetValue = useCallback((): void => {
      if (onResetValue) {
        onResetValue()
      }
    }, [onResetValue])

    const handleToogleHidePassword = () => {
      setHidePassword(prev => !prev)
    }

    const inputClasses = classNames(
      module.wrapper,
      {
        [module[size]]: true,
        [module.disabled]: disabled,
        [module[helpTextType]]: helpTextType,
        [module.round]: borderRound,
        [module.noReset]: !showReset,
        [module.showHelpText]: helpText ? helpText.length > 0 : false
      },
      className
    )

    return (
      <div className={inputClasses}>
        {label && (
          <label htmlFor={String(id)} className={module.label}>
            {label}
          </label>
        )}
        <div className={module.row}>
          {icon && <span className={module.icon}>{icon}</span>}
          {mask ? (
            <InputMask
              mask={mask}
              maskChar={maskChar}
              value={value}
              onChange={handleChange}
              disabled={disabled}
              placeholder={placeholder}
            >
              {(
                inputProps: React.JSX.IntrinsicAttributes &
                  React.ClassAttributes<HTMLInputElement> &
                  InputHTMLAttributes<HTMLInputElement>
              ) => (
                <input
                  className={module.input}
                  id={String(id)}
                  type={type}
                  ref={ref}
                  {...inputProps}
                />
              )}
            </InputMask>
          ) : (
            <input
              className={module.input}
              id={String(id)}
              type={hidePassword ? 'password' : type}
              ref={ref}
              value={value}
              onChange={handleChange}
              disabled={disabled}
              placeholder={placeholder}
              {...rest}
            />
          )}
          {showEndIcon && (
            <button
              type="button"
              className={module.reset}
              onClick={isPassword ? handleToogleHidePassword : handleResetValue}
            >
              {hidePassword && <Visibility />}
              {!hidePassword && isPassword && <VisibilityOff />}
              {!isPassword && <CloseIcon />}
            </button>
          )}
        </div>
        <p className={module.helpText}>{helpText && <span>{helpText}</span>}</p>
      </div>
    )
  }
)
