// random
const CHARACTERS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

// inclined word
const hundredDivider = 100
const decimalDivider = 10
const minRange = 4
const maxRange = 20
const usualIndex = 2
const lastIndex = 5
const subRange = 5
const randomLength = 10
const indexArr = [usualIndex, 0, 1, 1, 1, usualIndex]

export const generateRandomString = (length: number): string => {
  let result = ''

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * CHARACTERS.length)
    result += CHARACTERS[randomIndex]
  }

  return result
}

export const generateRandomNumber = (length: number): number => {
  let result = ''

  for (let i = 0; i < length; i++) {
    const randomDigit = Math.floor(Math.random() * randomLength)
    result += randomDigit.toString()
  }

  return parseInt(result, randomLength)
}

export const getInclinedWord = (number: number, words: string[]): string => {
  return words[
    number % hundredDivider > minRange && number % hundredDivider < maxRange
      ? usualIndex
      : indexArr[
          number % decimalDivider < subRange
            ? Math.abs(number) % decimalDivider
            : lastIndex
        ]
  ]
}
