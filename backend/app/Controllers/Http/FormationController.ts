import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {prisma} from '@ioc:Adonis/Addons/Prisma'

export default class FormationController {

    public async store ({request}: HttpContextContract) {
        const formation = await prisma.formation.create({
            data: request.only(['prix', 'type', 'infos']),
        })

        return formation
    }

    public async show ({params}: HttpContextContract) {
        const formation = await prisma.formation.findUnique({
            where: {
                id: params.id
            }
        })

        return formation
    }

    public async index () {
        const formations = await prisma.formation.findMany()

        return formations
    }
}