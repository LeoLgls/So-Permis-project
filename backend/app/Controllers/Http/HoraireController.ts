import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {prisma} from '@ioc:Adonis/Addons/Prisma'

export default class HoraireController {

    public async store ({request}: HttpContextContract) {
        const requestData = request.only(['type','matin','apresMidi']);
    
        const horaire = await prisma.horaire.create({
            data: requestData,
        })
    
        return horaire
    }

    public async show ({params}: HttpContextContract) {
        const horaire = await prisma.horaire.findUnique({
            where: {
                id: params.id
            }
        })

        return horaire
    }

    public async index () {
        const horaires = await prisma.horaire.findMany()

        return horaires
    }

    public async destroy ({params}: HttpContextContract) {
        const horaire = await prisma.horaire.delete({
            where: {
                id: params.id
            }
        })

        return horaire
    }

    public async update ({request, params}: HttpContextContract) {
        const horaire = await prisma.horaire.update({
            where: {
                id: params.id
            },
            data: request.only([])
        })

        return horaire
    }

    // cette fonction permet de récupérer les forfaits en fonction de leur type ("CONDUITE" ou "CODE")
    public async showByType ({params}: HttpContextContract) {
        const horaire = await prisma.horaire.findFirst({
            where: {
                type: params.type
            }
        })

        return horaire
    }
}
