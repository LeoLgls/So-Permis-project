// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
'use strict';
import Mail from '@ioc:Adonis/Addons/Mail';

export default class ContactsController {
	async sendEmail({ request }) {
        try {
            //const { firstName, lastName, email, message } = request.all();

			await Mail.send((message) => {
				message
				  .from('info@example.com')
				  .to('virk@adonisjs.com')
				  .subject('Welcome Onboard!')
				  .htmlView('emails/welcome', { name: 'Virk' })
			  })

            return 'Email envoyé avec succès';
        } catch (error) {
            // Gérer les erreurs
            console.error('Erreur lors de l\'envoi de l\'email', error);
            return 'Erreur lors de l\'envoi de l\'email';
        }
    }
}
