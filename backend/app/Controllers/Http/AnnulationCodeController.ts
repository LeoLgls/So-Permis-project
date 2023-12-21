import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {prisma} from '@ioc:Adonis/Addons/Prisma'

export default class AnnulationCodeController {

    public async store ({request}: HttpContextContract) {
        const annulationCode = await prisma.annulationCode.create({
            data: request.only(['intitule','prix']),
        })

        return annulationCode
    }

    public async show ({params}: HttpContextContract) {
        const annulationCode = await prisma.annulationCode.findUnique({
            where: {
                id: params.id
            }
        })

        return annulationCode
    }

    public async index () {
        const annulationCodes = await prisma.annulationCode.findMany()

        return annulationCodes
    }

    public async destroy ({params}: HttpContextContract) {
        const annulationCode = await prisma.annulationCode.delete({
            where: {
                id: params.id
            }
        })

        return annulationCode
    }

    public async update ({request, params}: HttpContextContract) {
        const annulationCode = await prisma.annulationCode.update({
            where: {
                id: params.id
            },
            data: request.only(['intitule','prix'])
        })

        return annulationCode
    }
}
