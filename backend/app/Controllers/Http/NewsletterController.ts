import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {prisma} from '@ioc:Adonis/Addons/Prisma'

export default class NewslettersController {

    public async store ({request}: HttpContextContract) {
        const newsletter = await prisma.newsletter.create({
            data: request.only(['email']),
        })

        return newsletter
    }

    public async show ({params}: HttpContextContract) {
        const newsletter = await prisma.newsletter.findUnique({
            where: {
                id: params.id
            }
        })

        return newsletter
    }

    public async index () {
        const newsletters = await prisma.newsletter.findMany()

        return newsletters
    }
}
