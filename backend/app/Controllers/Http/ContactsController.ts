import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Mail from '@ioc:Adonis/Addons/Mail';
import axios from 'axios';

export default class ContactsController {

  async getOpeningHours({ response }) {
    try {
      const placeId = 'ChIJtVuKfmox4EcRqN2YF-_YOic'; // Remplacez par votre place_id
      const apiKey = 'AIzaSyCsSsDcLeaBbdKBAyUU1C4cKS0FDTLmHA8'; // Remplacez par votre clé API
  
      const apiResponse = await axios.get(
        'https://maps.googleapis.com/maps/api/place/details/json',
        {
          params: {
            place_id: placeId,
            language: 'fr',
            fields: 'name,current_opening_hours',
            key: apiKey,
          },
        }
      );
  
      const placeDetails = apiResponse.data.result;
      const name = placeDetails.name;
      const openingHours = placeDetails.current_opening_hours ? placeDetails.current_opening_hours.weekday_text : [];
  
      response.json({ name, openingHours });
    } catch (error) {
      console.error('Erreur:', error.message);
      response.status(500).json({ error: 'Erreur lors de la récupération des détails d\'horaires.' });
    }
  }

  async sendEmail({ request, response }: HttpContextContract) {
    const formData = request.only(['firstName', 'lastName', 'email', 'phone', 'object', 'message']);

    try {
      await Mail.send((message) => {
        message
          .from(formData.email)
          .to("william.lefort76@gmail.com")
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


