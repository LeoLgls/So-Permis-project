import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {prisma} from '@ioc:Adonis/Addons/Prisma'

export default class HistoireController {

    public async store ({request}: HttpContextContract) {
        const histoire = await prisma.histoire.create({
            data: request.only(['txtCourt','txtComplet','idImage']),
        })

        return histoire
    }

    public async show ({params}: HttpContextContract) {
        const histoire = await prisma.histoire.findUnique({
            where: {
                id: params.id
            }
        })

        return histoire
    }

    public async index () {
        const histoires = await prisma.histoire.findMany()

        return histoires
    }

    public async destroy ({params}: HttpContextContract) {
        const histoire = await prisma.histoire.delete({
            where: {
                id: params.id
            }
        })

        return histoire
    }

    public async update ({request, params}: HttpContextContract) {
        const histoire = await prisma.histoire.update({
            where: {
                id: params.id
            },
            data: request.only(['txtCourt','txtComplet','idImage'])
        })

        return histoire
    }

}
