import classNames from 'classnames'
import type {
  TextareaHTMLAttributes,
  ForwardedRef,
  ForwardRefExoticComponent
} from 'react'
import React, { useCallback, forwardRef } from 'react'

import module from './Textarea.module.scss'

export type TextareaHelperTextType = 'default' | 'error' | 'success' | 'warning'
export type TextareaSize = 'lg' | 'md' | 'sm' | 'xs'

interface IProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id' | 'size'> {
  id: string | number
  label?: string
  value?: string
  className?: string
  size?: TextareaSize
  helpText?: string | undefined
  helpTextType?: TextareaHelperTextType
  disabled?: boolean
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const Textarea: ForwardRefExoticComponent<
  IProps & React.RefAttributes<HTMLTextAreaElement>
> = forwardRef((props: IProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
  const {
    className,
    id,
    label,
    value,
    disabled = false,
    helpText,
    helpTextType = 'default',
    size = 'lg',
    onChange,
    ...rest
  } = props

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
      onChange(event)
    },
    [onChange]
  )

  const textareaClasses = classNames(
    module.Textarea,
    {
      [module.disabled]: disabled,
      [module.showHelpText]: helpText ? helpText.length > 0 : false
    },
    [module[size], module[helpTextType], className]
  )

  return (
    <div className={textareaClasses}>
      {label && (
        <label htmlFor={String(id)} className={module.label}>
          {label}
        </label>
      )}
      <textarea
        className={module.input}
        id={String(id)}
        ref={ref}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        {...rest}
      />
      <p className={module.helpText}>{helpText && <span>{helpText}</span>}</p>
    </div>
  )
})
