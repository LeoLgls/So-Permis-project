import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {prisma} from '@ioc:Adonis/Addons/Prisma'

export default class ArticleController {

    public async store ({request}: HttpContextContract) {
        const article = await prisma.article.create({
            data: request.only(['titre', 'texte', 'idImage','date','sources']),
        })

        return article
    }

    public async show ({params}: HttpContextContract) {
        const article = await prisma.article.findUnique({
            where: {
                id: params.id
            }
        })

        return article
    }

    public async index () {
        const articles = await prisma.article.findMany()

        return articles
    }

    public async destroy ({params}: HttpContextContract) {
        const article = await prisma.article.delete({
            where: {
                id: params.id
            }
        })

        return article
    }

    public async update ({request, params}: HttpContextContract) {
        const article = await prisma.article.update({
            where: {
                id: params.id
            },
            data: request.only(['titre', 'texte', 'image','date','sources'])
        })

        return article
    }
}
