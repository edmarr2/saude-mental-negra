import { MissingParamError } from '../errors/missing-param-erro'
import { badRequest } from '../helper/http-helper'

export class SignUpController {
  handle (httpRequest: any): any {
    const requiredFields = ['email', 'password', 'name']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
