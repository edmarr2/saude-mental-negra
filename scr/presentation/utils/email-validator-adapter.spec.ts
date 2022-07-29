import { EmailValidatorAdapter } from './email-validator'

describe('EMailValidatorAdapter', () => {
  test('Should return false if validators returns false', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })
})
