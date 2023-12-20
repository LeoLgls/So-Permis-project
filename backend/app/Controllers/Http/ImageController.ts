import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {prisma} from '@ioc:Adonis/Addons/Prisma'

export default class ImageController {

    public async store ({request}: HttpContextContract) {
        const image = await prisma.image.create({
            data: request.only(['src','alt']),
        })

        return image
    }

    public async show ({params}: HttpContextContract) {
        const image = await prisma.image.findUnique({
            where: {
                id: params.id
            }
        })

        return image
    }

    public async index () {
        const images = await prisma.image.findMany()

        return images
    }

    public async destroy ({params}: HttpContextContract) {
        const image = await prisma.image.delete({
            where: {
                id: params.id
            }
        })

        return image
    }

    public async update ({request, params}: HttpContextContract) {
        const image = await prisma.image.update({
            where: {
                id: params.id
            },
            data: request.only(['src','alt'])
        })

        return image
    }
}
