import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {prisma} from '@ioc:Adonis/Addons/Prisma'

export default class ForfaitController {

    public async store ({request}: HttpContextContract) {
        const forfait = await prisma.forfait.create({
            data: request.only(['type','titre','sousTitre','titreBtn','lien','duree','theorique','pratique','horaireLecon','tarif','annulation']),
        })

        return forfait
    }

    public async show ({params}: HttpContextContract) {
        const forfait = await prisma.forfait.findUnique({
            where: {
                id: params.id
            }
        })

        return forfait
    }

    public async index () {
        const forfaits = await prisma.forfait.findMany()

        return forfaits
    }

    public async destroy ({params}: HttpContextContract) {
        const forfait = await prisma.forfait.delete({
            where: {
                id: params.id
            }
        })

        return forfait
    }

    public async update ({request, params}: HttpContextContract) {
        const forfait = await prisma.forfait.update({
            where: {
                id: params.id
            },
            data: request.only(['type','titre','sousTitre','titreBtn','lien','duree','theorique','pratique','horaireLecon','tarif','annulation'])
        })

        return forfait
    }
}
