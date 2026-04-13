import { Translate } from '@wawjs/ngx-translate';

export const fi = {
	'Go to homepage': 'Siirry etusivulle',
	'Switch to dark mode': 'Vaihda tummaan tilaan',
	'Switch to light mode': 'Vaihda vaaleaan tilaan',
	'Open language menu': 'Avaa kielivalikko',
	'Switch language to': 'Vaihda kieleksi',
	Socials: 'Sosiaalinen media',
	'Stay connected with Bubbles KP': 'Pysy yhteydessä Bubbles KPan',
	'Find us on Instagram and open our location in Google Maps.':
		'Löydät meidät Instagramista ja voit avata sijaintimme Google Mapsissa.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Seuraa uusimpia päivityksiämme',
	'See new photos, announcements, and stories from the restaurant.':
		'Katso uusia kuvia, ilmoituksia ja tarinoita ravintolasta.',
	'Open Instagram': 'Avaa Instagram',
	Maps: 'Kartat',
	'Get directions to the restaurant': 'Reittiohjeet ravintolaan',
	'Open the map, check the route, and share the location with friends.':
		'Avaa kartta, tarkista reitti ja jaa sijainti ystävien kanssa.',
	'Open Google Maps': 'Avaa Google Maps',
	'Open Bubbles KP Instagram page': 'Avaa Bubbles KPn Instagram-sivu',
	'Open Bubbles KP location in Google Maps': 'Avaa Bubbles KPn sijainti Google Mapsissa',
	Quests: 'Quests',
	'There are currently no quests': 'There are currently no quests',
	'Check back later for new activities and special offers.':
		'Check back later for new activities and special offers.',
	Gallery: 'Galleria',
	'The gallery is currently empty': 'Galleria on tällä hetkellä tyhjä',
	'Check back later to see photos from Bubbles KP.':
		'Tule myöhemmin takaisin katsomaan kuvia Bubbles KPsta.',
	Navigation: 'Navigointi',
	'Quick links': 'Pikalinkit',
	'Open the main sections of the website from one place.':
		'Avaa sivuston pääosiot yhdestä paikasta.',
	Sales: 'Tarjoukset',
	Articles: 'Artikkelit',
	Reviews: 'Arvostelut',
	Events: 'Tapahtumat',
	Jobs: 'Työpaikat',
	'No articles yet': 'Ei vielä artikkeleita',
	'New posts are on the way': 'Uusia julkaisuja on tulossa',
	'No events at the moment': 'Tällä hetkellä ei ole tapahtumia',
	'New events are on the way': 'Uusia tapahtumia on tulossa',
	'No active promotions at the moment': 'Tällä hetkellä ei ole aktiivisia tarjouksia',
	Favorites: 'Suosikit',
	'No saved dishes': 'Ei tallennettuja annoksia',
	'Add items from the menu to favorites, and they will appear here.':
		'Lisää annoksia valikosta suosikkeihin, niin ne näkyvät täällä.',
	'Remove from favorites': 'Poista suosikeista',
	'Add to favorites': 'Lisää suosikkeihin',
	'Chef picks': 'Keittiömestarin valinnat',
	'Ask restaurant staff': 'Kysy ravintolan henkilökunnalta',
	'Cooking time': 'Valmistusaika',
	'Pairs well with': 'Sopii hyvin yhteen',
	'Dish details': 'Annoksen tiedot',
	'Ask restaurant staff for portion details': 'Kysy annoskoosta ravintolan henkilökunnalta',
	'No allergen information available': 'Allergeenitietoja ei ole saatavilla',
	'Ask for price': 'Kysy hintaa',
	Calories: 'Kalorit',
	'About dish': 'Annoksesta',
	'Menu section': 'Menun osio',
	Portion: 'Annos',
	Allergens: 'Allergeenit',
	'Browse full menu': 'Selaa koko menu',
	Unavailable: 'Ei saatavilla',
} as const;

export type FiTranslationKey = keyof typeof fi;

export const fiTranslates: Translate[] = Object.entries(fi).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
