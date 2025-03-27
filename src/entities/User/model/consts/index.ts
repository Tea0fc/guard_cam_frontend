export const ErrorMessages = {
  REQUIRED_FIELD: 'Необходимо заполнить все обязательные поля',
  LAST_NAME_MIN: 'Фамилия не должна содержать меньше 2 символов',
  LAST_NAME_MAX: 'Фамилия не должна содержать больше 50 символов',
  LAST_NAME_INVALID:
    'Фамилия может содержать только буквы русского алфавита, дефис и точку',
  NAME_MIN: 'Имя не должно содержать меньше 2 символов',
  NAME_MAX: 'Имя не должно содержать больше 50 символов',
  NAME_INVALID:
    'Имя может содержать только буквы русского алфавита, дефис и точку',
  SECOND_NAME_MIN: 'Отчество не должно содержать меньше 2 символов',
  SECOND_NAME_MAX: 'Отчество не должно содержать больше 50 символов',
  SECOND_NAME_INVALID:
    'Отчество может содержать только буквы русского алфавита, дефис и точку',
  PASSWORD_MIN: 'Пароль не должен содержать меньше 6 символов',
  PASSWORD_MAX: 'Пароль не должен содержать больше 24 символов',
  PASSWORD_INVALID: 'Допустимые символы: A-Z, a-z, 0-9, . _ * !',
  PASSWORD_REQUIREMENTS:
    'Пароль должен включать: минимум 6 символов, хотя бы одну букву латинского алфавита, хотя бы одну цифру',
  PASSWORDS_DO_NOT_MATCH: 'Пароли не совпадают',
  NEW_PASSWORDS_DO_MATCH: 'Новый пароль должен отличаться от текущего',
  EMAIL_MAX: 'Адрес электронной почты не должен содержать больше 256 символов',
  EMAIL_INVALID: 'Недействительный адрес электронной почты'
}

export const FieldsRange = {
  PASSWORD_MIN: 6,
  PASSWORD_MAX: 24,
  EMAIL_MAX: 256,
  NAME_MIN: 2,
  NAME_MAX: 50
}

export const REGEX_PASSWORD = /^[A-Za-z0-9._*!]*$/
export const REGEX_PASSWORD_HAS_LETTERS = /[A-Za-z]/
export const REGEX_PASSWORD_HAS_NUMBER = /[0-9]/
export const REGEX_NAME = /^[А-яЁё.\- ]*$/
