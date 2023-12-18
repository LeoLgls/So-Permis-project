import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {prisma} from '@ioc:Adonis/Addons/Prisma'

export default class ActualitesController {

    public async store ({request}: HttpContextContract) {
        const actualite = await prisma.actualite.create({
            data: request.only(['titre', 'texte', 'image','date','sources']),
        })

        return actualite
    }

    public async show ({params}: HttpContextContract) {
        const actualite = await prisma.actualite.findUnique({
            where: {
                id: params.id
            }
        })

        return actualite
    }

    public async index () {
        const actualites = await prisma.actualite.findMany()

        return actualites
    }
}
