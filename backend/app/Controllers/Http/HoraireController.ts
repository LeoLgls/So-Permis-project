import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {prisma} from '@ioc:Adonis/Addons/Prisma'

export default class HoraireController {

    public async store ({request}: HttpContextContract) {
        const requestData = request.only(['type','matin','apresMidi']);
    
        const defaultMatin = {
            "Lundi": "08:00-12:00",
            "Mardi": "08:00-12:00",
            "Mercredi": "08:00-12:00",
            "Jeudi": "08:00-12:00",
            "Vendredi": "08:00-12:00",
            "Samedi": "08:00-12:00",
            "Dimanche": "Fermé"
        };

        const defaultApresMidi = {
            "Lundi": "13:00-17:00",
            "Mardi": "13:00-17:00",
            "Mercredi": "13:00-17:00",
            "Jeudi": "13:00-17:00",
            "Vendredi": "13:00-17:00",
            "Samedi": "13:00-17:00",
            "Dimanche": "Fermé"
        };
    
        if (!requestData.matin) {
            requestData.matin = defaultMatin;
        }
    
        if (!requestData.apresMidi) {
            requestData.apresMidi = defaultApresMidi;
        }
    
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

    public async showByType ({params}: HttpContextContract) {
        const horaire = await prisma.horaire.findFirst({
            where: {
                type: params.type
            }
        })

        return horaire
    }
}
