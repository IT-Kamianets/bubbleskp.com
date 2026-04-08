import { Translate } from 'wacom';

export const sv = {
	'Go to homepage': 'Gå till startsidan',
	'Switch to dark mode': 'Byt till mörkt läge',
	'Switch to light mode': 'Byt till ljust läge',
	'Open language menu': 'Öppna språkmenyn',
	'Switch language to': 'Byt språk till',
	Socials: 'Sociala medier',
	'Stay connected with Bubbles KP': 'Håll kontakten med Bubbles KP',
	'Find us on Instagram and open our location in Google Maps.':
		'Hitta oss på Instagram och öppna vår plats i Google Maps.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Följ våra senaste uppdateringar',
	'See new photos, announcements, and stories from the restaurant.':
		'Se nya bilder, nyheter och berättelser från restaurangen.',
	'Open Instagram': 'Öppna Instagram',
	Maps: 'Kartor',
	'Get directions to the restaurant': 'Vägbeskrivning till restaurangen',
	'Open the map, check the route, and share the location with friends.':
		'Öppna kartan, kontrollera rutten och dela platsen med vänner.',
	'Open Google Maps': 'Öppna Google Maps',
	'Open Bubbles KP Instagram page': 'Öppna Bubbles KPs Instagram-sida',
	'Open Bubbles KP location in Google Maps': 'Öppna Bubbles KPs plats i Google Maps',
	Quests: 'Quests',
	'There are currently no quests': 'There are currently no quests',
	'Check back later for new activities and special offers.':
		'Check back later for new activities and special offers.',
	Gallery: 'Galleri',
	'The gallery is currently empty': 'Galleriet är tomt just nu',
	'Check back later to see photos from Bubbles KP.':
		'Kom tillbaka senare för att se bilder från Bubbles KP.',
	Navigation: 'Navigering',
	'Quick links': 'Snabblänkar',
	'Open the main sections of the website from one place.':
		'Öppna webbplatsens huvudsektioner från ett ställe.',
	Sales: 'Erbjudanden',
	Articles: 'Artiklar',
	Reviews: 'Recensioner',
	Events: 'Evenemang',
	Jobs: 'Jobb',
	'No articles yet': 'Inga artiklar än',
	'New posts are on the way': 'Nya inlägg är på väg',
	'No events at the moment': 'Det finns inga evenemang just nu',
	'New events are on the way': 'Nya evenemang är på väg',
	'No active promotions at the moment': 'Det finns inga aktiva erbjudanden just nu',
	Favorites: 'Favoriter',
	'No saved dishes': 'Inga sparade rätter',
	'Add items from the menu to favorites, and they will appear here.':
		'Lägg till rätter från menyn i favoriter så visas de här.',
	'Remove from favorites': 'Ta bort från favoriter',
	'Add to favorites': 'Lägg till i favoriter',
	'Chef picks': 'Kockens val',
	'Ask restaurant staff': 'Fråga restaurangpersonalen',
	'Cooking time': 'Tillagningstid',
	'Pairs well with': 'Passar bra med',
	'Dish details': 'Detaljer om rätten',
	'Ask restaurant staff for portion details': 'Fråga restaurangpersonalen om portionsdetaljer',
	'No allergen information available': 'Ingen allergeninformation tillgänglig',
	'Ask for price': 'Fråga om priset',
	'Calories': 'Kalorier',
	'About dish': 'Om rätten',
	'Menu section': 'Menysektion',
	'Portion': 'Portion',
	'Allergens': 'Allergener',
	'Browse full menu': 'Se hela menyn',
	Unavailable: 'Ej tillgänglig',
} as const;

export type SvTranslationKey = keyof typeof sv;

export const svTranslates: Translate[] = Object.entries(sv).map(([sourceText, text]) => ({
	sourceText,
	text,
}));


