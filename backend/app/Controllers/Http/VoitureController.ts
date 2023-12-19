import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {prisma} from '@ioc:Adonis/Addons/Prisma'

export default class VoitureController {

    public async store ({request}: HttpContextContract) {
        const voiture = await prisma.voiture.create({
            data: request.only(['nomVoiture','idImage','type','txtVoiture']),
        })

        return voiture
    }

    public async show ({params}: HttpContextContract) {
        const voiture = await prisma.voiture.findUnique({
            where: {
                id: params.id
            }
        })

        return voiture
    }

    public async index () {
        const voitures = await prisma.voiture.findMany()

        return voitures
    }

    public async destroy ({params}: HttpContextContract) {
        const voiture = await prisma.voiture.delete({
            where: {
                id: params.id
            }
        })

        return voiture
    }

    public async update ({request, params}: HttpContextContract) {
        const voiture = await prisma.voiture.update({
            where: {
                id: params.id
            },
            data: request.only(['nomVoiture','idImage','type','txtVoiture'])
        })

        return voiture
    }

}
