import { MissingParamError } from '../errors/missing-param-erro'
import { badRequest } from '../helper/http-helper'
import { Controller } from '../protocols/controller'

export class SignUpController implements Controller {
  handle (httpRequest: any): any {
    const requiredFields = ['email', 'password', 'name', 'password_confirmation']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
