import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {prisma} from '@ioc:Adonis/Addons/Prisma'

export default class FormationController {

    public async store ({request}: HttpContextContract) {
        const formation = await prisma.Formation.create({
            data: request.only(['prix', 'type', 'infos']),
        })

        return formation
    }

    public async show ({params}: HttpContextContract) {
        const formation = await prisma.Formation.findUnique({
            where: {
                id: params.id
            }
        })
        console.log(formation)

        return formation
    }

    public async index () {
        const formations = await prisma.Formation.findMany()

        return formations
    }
}