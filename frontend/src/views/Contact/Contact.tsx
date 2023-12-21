import { Link } from 'react-router-dom';
import { useState, useEffect, ChangeEvent } from 'react';



import axios from 'axios';
import styled from 'styled-components';
import SnapBlack from '../../assets/img/Snap-black.png';
import InstaBlack from '../../assets/img/Insta-black.png';
import colors from '../../utils/style/colors'
import fonts from '../../utils/style/font-size'


const MainContainerContact = styled.main`
	padding-left: 15vw;
	padding-right: 15vw;
	padding-top: 180px;
	background-color: ${colors.backgroundBlanc};

	@media (max-width: 1090px) {
		padding-left: 5vw;
		padding-right: 5vw;
	}
`
const TitleContact = styled.h2`
  font-size: ${fonts.titre}px;
  margin-bottom: 20px;
`

const FlexContainer = styled.div`
  display: flex;
  padding-bottom: 5vw;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

const LeftFlexContainer = styled.div`
  flex: 1;
`

const RightFlexContainer = styled.div`
  flex: 1;
  display: flex;
`

const ReseauContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${colors.backgroundBlanc};

  a{
    width: 10%;
	margin-right: 5%;
  }
`


const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

const FormControl = styled.div`
  padding: 2% 0;
  width: 45%;

  &:last-of-type{
	width: 100%;
	height: 200px;
  }

  label{
	font-size: ${fonts.p}px;
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

  @media screen and (max-width: 800px) {
	padding: 4%;
	width: 90% !important;
  }
`

const SubmitButton = styled.span`
	width: 100%;
	padding: 3rem 1rem 1rem;
	text-align: right;

	input {
		border: solid 2px ${colors.vert};
		outline: none;
		cursor: pointer;
		font-size: 25px;
		background: ${colors.vert};
		font-weight: 800;
		border-radius: 45px;
		transition: all ease 0.5s;
	}


	@media screen and (max-width: 800px) {
		padding-right: 0;
		padding-top: 15%;
		justify-content: end;
		display: flex;
		padding-left: 0;

		input {
			padding: 2%;
			font-size: 4vw;
			width: 25%;
		}
	}
`


const InformationsContainer = styled.div`
  padding-bottom: 5vw;
`

const PetitLogo = styled.img`
	height: auto;
	width: 100%;

`

const MapContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border: solid 1px ${colors.noir};

  iframe {
    width: 100%;
	height: 100%;
	border-radius: 4px;
  }

  @media screen and (max-width: 800px) {
	iframe {
		height: revert-layer;
	  }
  }
`

const FormContainerNewsletter = styled.form`
	width: 90%;
	display: flex;
	flex-direction: column;
`

const FormControlNewsletter = styled.div`
  	padding-bottom: 5vw;
		display: flex;
		flex-direction: column;
		align-items: end;


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
`

const SubmitButtonNewsletter = styled.span`
	width: fit-content;
	display: flex;
	padding-top: 1rem;


	input{
		border: solid 2px ${colors.vert};
		outline: none;
		cursor: pointer;
		font-size: 16px;
		background: ${colors.vert};
		font-weight: 700;
		border-radius: 45px;
		transition: all ease 0.5s;
		width: 100%;
	}
`

const InputInscrire = styled.input`
	padding: 1rem;
`

export const ListHoraire = [
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


function ContactPage()  {

interface OpeningHour {
	day: string;
	openHour: string;
	closeHour: string;
}

	const [openingHours, setOpeningHours] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);


	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('http://localhost:3333/api/contact/opening-hours');
				const data = response.data;

				// Suppose that your API response has a structure like { openingHours: [...] }
				setOpeningHours(data.openingHours);
				setLoading(false);
			} catch (error) {
				setError(true)
				setLoading(false)
			}
		};

		fetchData();
		}, []); // La dépendance vide signifie que cela ne s'exécute qu'une fois lors du montage initial



	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		object: '',
		message: '',
	});

	const[newsLetter, setNewsletter] = useState('')

	function handleChange (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	}

	async function handleSubmit (e: { preventDefault: () => void; }) {
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
	}

	function handleChangeNewsletter (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		const  value: string = e.target.value;
		setNewsletter(value)

	}

	async function handleSubmitNewsletter(e: {preventDefault: () => void;}) {
		e.preventDefault();

		const emailData = {
			email: newsLetter
		  };

		await axios.post(`http://localhost:3333/newsletter/add`,emailData)
		console.log(newsLetter)

	}





	return (
		<MainContainerContact>
			<TitleContact>Contact</TitleContact>
			<FormContainer onSubmit={handleSubmit}>
				<FormControl>
					<label htmlFor="prenom">Prénom :</label>
					<input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
				</FormControl>

				<FormControl>
					<label htmlFor="nom">Nom :</label>
					<input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
				</FormControl>

				<FormControl>
					<label htmlFor="mail">Mail :</label>
					<input type="email" name="email" value={formData.email} onChange={handleChange} required />
				</FormControl>

				<FormControl>
					<label htmlFor="telephone">Téléphone :</label>
					<input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
				</FormControl>

				<FormControl>
					<label htmlFor="objet">Objet :</label>
					<input type="text" name="object" value={formData.object} onChange={handleChange} required />
				</FormControl>


				<FormControl>
					<label htmlFor="message">Message:</label>
					<textarea name="message" value={formData.message} onChange={handleChange} required />
				</FormControl>

				<SubmitButton>
					<InputInscrire type="submit" name="submit" value="Valider" />
				</SubmitButton>

			</FormContainer>

			<FlexContainer>
				<LeftFlexContainer>
					<InformationsContainer>
						<h3>Adresse</h3>
						<p>20 Rue Jean Lurçat, 76610 Le Havre</p>
					</InformationsContainer>

					<InformationsContainer>

						
						{loading && <p>Chargement en cours...</p>}
						{error && <p>Erreur : {error}</p>}
						{openingHours.length > 0 && (
							<div>
							<h2>Horaires d'ouverture :</h2>
							<ul>
								{openingHours.map((item, index) => (
								<li key={index}>{item}</li>
								))}
							</ul>
							</div>
						)}
					</InformationsContainer>


					<InformationsContainer>

						<h3>Nos réseaux</h3>

						<p>Téléphone : <a href='tel:02 78 34 10 63'>02 78 34 10 63</a></p>

						<br />
						<p>Reseaux sociaux</p>
						<ReseauContainer>
							
							<Link to="https://t.snapchat.com/JWqJbzVO" target="_blank" rel="noopener noreferrer">
								<PetitLogo src={SnapBlack} alt={'Logo Snap'} />
							</Link>

							<Link to="https://www.instagram.com/sopermis76/" target="_blank" rel="noopener noreferrer">
								<PetitLogo src={InstaBlack} alt={'Logo Insta'}/>
							</Link>

						</ReseauContainer>


					</InformationsContainer>

					<FormContainerNewsletter  onSubmit={handleSubmitNewsletter}>
						<h3>Inscrivez-vous à notre Newsletter</h3>
						<FormControlNewsletter>
							<input type='email' value={newsLetter} placeholder='Entrez votre adresse mail' onChange={handleChangeNewsletter}/>

							<SubmitButtonNewsletter>
								<InputInscrire type="submit" name="submit" value="S'inscrire"  />
							</SubmitButtonNewsletter>

						</FormControlNewsletter>
					</FormContainerNewsletter>

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
}


export default ContactPage;