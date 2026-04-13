import { Translate } from '@wawjs/ngx-translate';

export const ro = {
	'Go to homepage': 'Mergi la pagina principală',
	'Switch to dark mode': 'Comută la modul întunecat',
	'Switch to light mode': 'Comută la modul luminos',
	'Open language menu': 'Deschide meniul de limbi',
	'Switch language to': 'Schimbă limba în',
	Socials: 'Rețele sociale',
	'Stay connected with Bubbles KP': 'Rămâneți conectați cu Bubbles KP',
	'Find us on Instagram and open our location in Google Maps.':
		'Găsiți-ne pe Instagram și deschideți locația noastră în Google Maps.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Urmăriți cele mai noi actualizări',
	'See new photos, announcements, and stories from the restaurant.':
		'Vedeți fotografii noi, anunțuri și povești din restaurant.',
	'Open Instagram': 'Deschide Instagram',
	Maps: 'Hărți',
	'Get directions to the restaurant': 'Indicații către restaurant',
	'Open the map, check the route, and share the location with friends.':
		'Deschideți harta, verificați traseul și partajați locația cu prietenii.',
	'Open Google Maps': 'Deschide Google Maps',
	'Open Bubbles KP Instagram page': 'Deschide pagina de Instagram Bubbles KP',
	'Open Bubbles KP location in Google Maps': 'Deschide locația Bubbles KP în Google Maps',
	Quests: 'Quests',
	'There are currently no quests': 'There are currently no quests',
	'Check back later for new activities and special offers.':
		'Check back later for new activities and special offers.',
	Gallery: 'Galerie',
	'The gallery is currently empty': 'Galeria este momentan goală',
	'Check back later to see photos from Bubbles KP.':
		'Reveniți mai târziu pentru a vedea fotografii de la Bubbles KP.',
	Navigation: 'Navigare',
	'Quick links': 'Linkuri rapide',
	'Open the main sections of the website from one place.':
		'Deschideți principalele secțiuni ale site-ului dintr-un singur loc.',
	Sales: 'Promoții',
	Articles: 'Articole',
	Reviews: 'Recenzii',
	Events: 'Evenimente',
	Jobs: 'Locuri de muncă',
	'No articles yet': 'Nu există încă articole',
	'New posts are on the way': 'Postări noi sunt pe drum',
	'No events at the moment': 'Nu există evenimente în acest moment',
	'New events are on the way': 'Evenimente noi sunt pe drum',
	'No active promotions at the moment': 'Nu există promoții active în acest moment',
	Favorites: 'Favorite',
	'No saved dishes': 'Nu există preparate salvate',
	'Add items from the menu to favorites, and they will appear here.':
		'Adăugați preparate din meniu la favorite și vor apărea aici.',
	'Remove from favorites': 'Elimină din favorite',
	'Add to favorites': 'Adaugă la favorite',
	'Chef picks': 'Alegerile chef-ului',
	'Ask restaurant staff': 'Întrebați personalul restaurantului',
	'Cooking time': 'Timp de preparare',
	'Pairs well with': 'Se potrivește bine cu',
	'Dish details': 'Detalii despre preparat',
	'Ask restaurant staff for portion details':
		'Întrebați personalul restaurantului despre detaliile porției',
	'No allergen information available': 'Nu sunt disponibile informații despre alergeni',
	'Ask for price': 'Întrebați prețul',
	Calories: 'Calorii',
	'About dish': 'Despre preparat',
	'Menu section': 'Secțiunea meniului',
	Portion: 'Porție',
	Allergens: 'Alergeni',
	'Browse full menu': 'Vezi întregul meniu',
	Unavailable: 'Indisponibil',
} as const;

export type RoTranslationKey = keyof typeof ro;

export const roTranslates: Translate[] = Object.entries(ro).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
