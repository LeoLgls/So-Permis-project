// app/Middleware/AuthMiddleware.ts
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class AuthMiddleware {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>) {
    try {
      // Vérifiez si l'utilisateur est authentifié
      await auth.check();

      // L'utilisateur est authentifié, continuez vers la route suivante
      await next();
    } catch (error) {
      // Une erreur d'authentification s'est produite, redirigez ou renvoyez une réponse non autorisée
      response.unauthorized('Vous n\'êtes pas autorisé à accéder à cette ressource');
    }
  }
}
