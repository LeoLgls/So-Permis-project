import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
import Administrateur from 'App/Models/Administrateur'

export default class AuthController {
  public async login({ request, auth, response }: HttpContextContract) {
    try {
      const { identifier, password } = request.only(['identifier', 'password'])
      const administrateur = await Administrateur.findBy('email', identifier)

      if (!administrateur) {
        // Utilisateur non trouvé
        return response.status(401).json({ message: 'Identifiants invalides' })
      }

      const isPasswordValid = await Hash.verify(administrateur.password, password)

      if (!isPasswordValid) {
        // Mot de passe invalide
        return response.status(401).json({ message: 'Identifiants invalides' })
      }

      // Authentification réussie, générez un jeton
      const token = await auth.use('api').attempt(identifier, password)

      return { token }
    } catch (error) {
      // Gestion des erreurs
      console.error('Erreur lors de l\'authentification', error)
      return response.status(500).json({ message: 'Erreur lors de l\'authentification' })
    }
  }
}
