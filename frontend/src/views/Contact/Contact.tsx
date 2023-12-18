import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { faInstagram, faSnapchat } from '@fortawesome/free-brands-svg-icons';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

const SectionHeading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const FlexContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const LeftFlexContainer = styled.div`
  flex: 1;
  padding: 0 10px;
`;

const RightFlexContainer = styled.div`
  flex: 1;
  padding: 0 10px;
`;

const FormControl = styled.label`
  display: block;
  margin-bottom: 10px;

  input,
  textarea {
    width: 100%;
    padding: 8px;
    margin-top: 4px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

const MapContainer = styled.div`
  iframe {
    width: 100%;
    height: 300px;
    border: 0;
    border-radius: 4px;
  }
`;

const ListHoraire = [
	{
		day: "Lundi",
		openHour: "8h00",
		closeHour: "18h00",
		isOpen: true,
	},
	{
		day: "Mardi",
		openHour: "8h00",
		closeHour: "18h00",
		isOpen: true,
	},
	{
		day: "Mercredi",
		openHour: "8h00",
		closeHour: "18h00",
		isOpen: true,
	},
	{
		day: "Jeudi",
		openHour: "8h00",
		closeHour: "18h00",
		isOpen: true,
	},
	{
		day: "Vendredi",
		openHour: "8h00",
		closeHour: "18h00",
		isOpen: true,
	},
	{
		day: "Samedi",
		openHour: "8h00",
		closeHour: "18h00",
		isOpen: true,
	},
	{
		day: "Dimanche",
		openHour: "8h00",
		closeHour: "18h00",
		isOpen: false,
	},

]

const ContactPage: React.FC = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		object: '',
		message: '',
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		console.log('Form Data:', formData);
	
		try {
			// Envoyer les données au backend
			const response = await axios.post(`http://localhost:3333/api/contact/sendEmail`, formData);
	
			alert(response.data)
		} catch (error) {
			// Gérer les erreurs
			console.error('Erreur lors de la soumission du formulaire', error);
		}
	};


	return (
		<PageContainer>
			<SectionHeading>Contact</SectionHeading>
			<FormContainer onSubmit={handleSubmit}>
				<FlexContainer>
					<LeftFlexContainer>
						<FormControl>
							Prénom:
							<input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required/>
						</FormControl>
						<FormControl>
							Mail:
							<input type="text" name="email" value={formData.email} onChange={handleChange} required />
						</FormControl>
						<FormControl>
							Objet:
							<input type="text" name="object" value={formData.object} onChange={handleChange} required/>
						</FormControl>
					</LeftFlexContainer>
					<RightFlexContainer>
						<FormControl>
							Nom:
							<input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
						</FormControl>
						<FormControl>
							Téléphone:
							<input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
						</FormControl>
					</RightFlexContainer>
				</FlexContainer>
				<FormControl>
					Message:
					<textarea name="message" value={formData.message} onChange={handleChange} required/>
				</FormControl>
				<SubmitButton type="submit">Envoyer</SubmitButton>

			</FormContainer>
	
			<FlexContainer>
				<LeftFlexContainer>
					<h3>Adresse</h3>
					<span>20 Rue Jean Lurçat, 76610 Le Havre</span>

					<h3>Horaire d'ouverture</h3>
					<ul>
						{ListHoraire.map((horaire, index) => (
							<li key={index}>
								{horaire.day}: {horaire.isOpen ? `${horaire.openHour} - ${horaire.closeHour}` : 'Fermé'}
							</li>
						))}
					</ul>

					<h3>Nos reseau</h3>
					<p>Téléphone : 02 78 34 10 63</p>
					<span>Reseau sociaux</span>
					<FontAwesomeIcon icon={faInstagram} size='3x' />
					<FontAwesomeIcon icon={faSnapchat} size='3x'/>
				</LeftFlexContainer>
				<RightFlexContainer>
					<MapContainer>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2590.868854669576!2d0.17999057600155718!3d49.50587055492464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e0316a7e8a5bb5%3A0x273ad8ef1798dda8!2sSO&#39;PERMIS!5e0!3m2!1sfr!2sfr!4v1702557955351!5m2!1sfr!2sfr"
							width="600"
							height="450"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</MapContainer>
				</RightFlexContainer>
			</FlexContainer>
		</PageContainer>
	);
};

export default ContactPage;
