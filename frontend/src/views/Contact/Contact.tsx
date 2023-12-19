import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SnapBlack from '../../assets/img/Snap-black.png';
import InstaBlack from '../../assets/img/Insta-black.png';
import colors from '../../utils/style/colors'


const MainContainerContact = styled.main`
	padding-left: 15vw;
	padding-right: 15vw;
	padding-top: 150px;
	background-color: ${colors.backgroundBlanc};

	@media (max-width: 1090px) {
		padding-left: 5vw;
		padding-right: 5vw;
	}
`
const TitleContact = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`



const FlexContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`

const LeftFlexContainer = styled.div`
  flex: 1;
  padding: 0 10px;
`

const RightFlexContainer = styled.div`
  flex: 1;
  padding: 0 10px;
`



const FormContainer = styled.form`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-between;
`

const FormControl = styled.div`
  padding: 2% 0%;
  width: 45%;

  &:last-of-type{
	width: 100%;
	height: 200px;
  }

  input{
	margin-top: 3%;

	font-size: 16px;
    width: 100%;
    color: ${colors.noir};

    background: 0 0;
    border: none;
    outline: none;

    border-bottom: solid 1px ${colors.noir};
  }

  textarea {
    font-size: 16px;
    width: 99.5%;
	height: 100%;
	margin-top: 3%;
  }
`

const SubmitButton = styled.span`
	width: 20%;
	padding-right: 2%;
	padding-left: 72%;
	padding-bottom: 10%;
	padding-top: 5%;

  input{
	border: solid 2px white;
	outline: none;
	cursor: pointer;
	padding: 10%;
	font-size: 25px;
	background: ${colors.vert};
	font-weight: 800;
	border-radius: 45px;
	transition: all ease 0.5s;
  
`;

const MapContainer = styled.div`
  iframe {
    width: 100%;
    height: 300px;
    border: 0;
    border-radius: 4px;
  }
`

const PetitLogo = styled.img`
  height: auto;
  width: 14%;
`

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
		<MainContainerContact>
			<TitleContact>Contact</TitleContact>
			<FormContainer onSubmit={handleSubmit}>					
				<FormControl>
					<label htmlFor="prenom">Prénom :</label>
					<input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required/>
				</FormControl>

				<FormControl>
					<label htmlFor="nom">Nom :</label>
					<input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
				</FormControl>

				<FormControl>
					<label htmlFor="mail">Mail :</label>
					<input type="text" name="email" value={formData.email} onChange={handleChange} required />
				</FormControl>

				<FormControl>
					<label htmlFor="telephone">Téléphone :</label>
					<input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
				</FormControl>

				<FormControl>
					<label htmlFor="objet">Objet :</label>
					<input type="text" name="object" value={formData.object} onChange={handleChange} required/>
				</FormControl>


				<FormControl>
					<label htmlFor="message">Message:</label>
					<textarea name="message" value={formData.message} onChange={handleChange} required/>
				</FormControl>
				
				<SubmitButton>
					<input type="submit" name="submit" value="Valider"/>
				</SubmitButton>

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
					<PetitLogo src={SnapBlack} />
                 	 <PetitLogo src={InstaBlack} />
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
		</MainContainerContact>
	);
};

export default ContactPage;
