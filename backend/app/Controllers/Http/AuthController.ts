import { prisma } from '@ioc:Adonis/Addons/Prisma'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


export default class AuthController {

	public async login({request,auth,response}:HttpContextContract){
		
		try {
			const token = await auth.attempt(request.input('email'),request.input('password'))

			return token
		} catch (error) {

			return response.unauthorized('dégage')
		}

	}

}
