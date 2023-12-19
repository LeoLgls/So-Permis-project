import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {prisma} from '@ioc:Adonis/Addons/Prisma'

export default class AvisController {

    public async store ({request}: HttpContextContract) {
        const avis = await prisma.avis.create({
            data: request.only(['nom', 'note','commentaire']),
        })

        return avis
    }

    public async show ({params}: HttpContextContract) {
        const avis = await prisma.avis.findUnique({
            where: {
                id: params.id
            }
        })

        return avis
    }

    public async index () {
        const avisAuPluriel = await prisma.avis.findMany()

        return avisAuPluriel
    }

    public async destroy ({params}: HttpContextContract) {
        const avis = await prisma.avis.delete({
            where: {
                id: params.id
            }
        })

        return avis
    }

    public async update ({request, params}: HttpContextContract) {
        const avis = await prisma.avis.update({
            where: {
                id: params.id
            },
            data: request.only(['nom', 'note','commentaire'])
        })

        return avis
    }
}
