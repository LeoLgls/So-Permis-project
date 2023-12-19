import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {prisma} from '@ioc:Adonis/Addons/Prisma'

export default class CategorieController {

    public async store ({request}: HttpContextContract) {
        const categorie = await prisma.categorie.create({
            data: request.only(['prix', 'type', 'infos']),
        })

        return categorie
    }

    public async show ({params}: HttpContextContract) {
        const categorie = await prisma.categorie.findUnique({
            where: {
                id: params.id
            }
        })

        return categorie
    }

    public async index () {
        const categories = await prisma.categorie.findMany()

        return categories
    }

    public async destroy ({params}: HttpContextContract) {
        const categorie = await prisma.categorie.delete({
            where: {
                id: params.id
            }
        })

        return categorie
    }

    public async update ({request, params}: HttpContextContract) {
        const categorie = await prisma.categorie.update({
            where: {
                id: params.id
            },
            data: request.only(['prix', 'type', 'infos'])
        })

        return categorie
    }
}