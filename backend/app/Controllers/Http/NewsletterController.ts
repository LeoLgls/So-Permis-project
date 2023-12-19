import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {prisma} from '@ioc:Adonis/Addons/Prisma'

export default class NewsletterController {

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

    public async destroy ({params}: HttpContextContract) {
        const newsletter = await prisma.newsletter.delete({
            where: {
                id: params.id
            }
        })

        return newsletter
    }

    public async update ({request, params}: HttpContextContract) {
        const newsletter = await prisma.newsletter.update({
            where: {
                id: params.id
            },
            data: request.only(['email'])
        })

        return newsletter
    }
}
