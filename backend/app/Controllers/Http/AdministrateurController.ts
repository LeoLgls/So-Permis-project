import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {prisma} from '@ioc:Adonis/Addons/Prisma'

export default class AdministrateursController {

    public async store ({request}: HttpContextContract) {
        const administrateur = await prisma.administrateur.create({
            data: request.only(['nom', 'prenom', 'email', 'password']),
        })

        return administrateur
    }

    public async show ({params}: HttpContextContract) {
        const administrateur = await prisma.administrateur.findUnique({
            where: {
                id: params.id
            }
        })

        return administrateur
    }

    public async index () {
        const administrateurs = await prisma.administrateur.findMany()

        return administrateurs
    }
}
