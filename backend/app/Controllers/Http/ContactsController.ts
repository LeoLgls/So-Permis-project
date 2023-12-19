import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Mail from '@ioc:Adonis/Addons/Mail';
export default class ContactsController {
  async sendEmail({ request, response }: HttpContextContract) {
    const formData = request.only(['firstName', 'lastName', 'email', 'phone', 'object', 'message']);

    try {
      await Mail.send((message) => {
        message
          .from(formData.email) // Update with the sender's email address
          .to("comptepoubellewalla@gmail.com")
          .subject(`Contacte depuis le site - ${formData.object}`)
          .htmlView('emails/contact', { formData });
      });

      return response.send('Email envoyé avec succès');
    } catch (error) {
      console.error(error);
      return response.send("Erreur lors de l'envoi de l'email");
    }
  }
}
