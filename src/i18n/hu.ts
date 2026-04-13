import { Translate } from '@wawjs/ngx-translate';

export const hu = {
	'Go to homepage': 'Ugrás a kezdőlapra',
	'Switch to dark mode': 'Váltás sötét módra',
	'Switch to light mode': 'Váltás világos módra',
	'Open language menu': 'Nyelvi menü megnyitása',
	'Switch language to': 'Nyelv váltása erre',
	Socials: 'Közösségi oldalak',
	'Stay connected with Bubbles KP': 'Maradjon kapcsolatban a Bubbles KP-val',
	'Find us on Instagram and open our location in Google Maps.':
		'Találjon meg minket Instagramon, és nyissa meg a helyünket a Google Mapsben.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Kövesse legújabb híreinket',
	'See new photos, announcements, and stories from the restaurant.':
		'Nézzen meg új fotókat, bejelentéseket és történeteket az étteremből.',
	'Open Instagram': 'Instagram megnyitása',
	Maps: 'Térképek',
	'Get directions to the restaurant': 'Útvonalterv az étteremhez',
	'Open the map, check the route, and share the location with friends.':
		'Nyissa meg a térképet, ellenőrizze az útvonalat, és ossza meg a helyet barátaival.',
	'Open Google Maps': 'Google Maps megnyitása',
	'Open Bubbles KP Instagram page': 'A Bubbles KP Instagram-oldalának megnyitása',
	'Open Bubbles KP location in Google Maps': 'A Bubbles KP helyének megnyitása a Google Mapsben',
	Quests: 'Quests',
	'There are currently no quests': 'There are currently no quests',
	'Check back later for new activities and special offers.':
		'Check back later for new activities and special offers.',
	Gallery: 'Galéria',
	'The gallery is currently empty': 'A galéria jelenleg üres',
	'Check back later to see photos from Bubbles KP.':
		'Nézzen vissza később, hogy megtekintse a Bubbles KP fotóit.',
	Navigation: 'Navigáció',
	'Quick links': 'Gyorshivatkozások',
	'Open the main sections of the website from one place.':
		'Nyissa meg a weboldal fő részeit egy helyről.',
	Sales: 'Akciók',
	Articles: 'Cikkek',
	Reviews: 'Vélemények',
	Events: 'Események',
	Jobs: 'Állások',
	'No articles yet': 'Még nincsenek cikkek',
	'New posts are on the way': 'Új bejegyzések hamarosan érkeznek',
	'No events at the moment': 'Jelenleg nincsenek események',
	'New events are on the way': 'Új események érkeznek hamarosan',
	'No active promotions at the moment': 'Jelenleg nincsenek aktív akciók',
	Favorites: 'Kedvencek',
	'No saved dishes': 'Nincsenek mentett ételek',
	'Add items from the menu to favorites, and they will appear here.':
		'Adjon ételeket a menüből a kedvencekhez, és itt jelennek meg.',
	'Remove from favorites': 'Eltávolítás a kedvencekből',
	'Add to favorites': 'Hozzáadás a kedvencekhez',
	'Chef picks': 'A séf ajánlata',
	'Ask restaurant staff': 'Kérdezze meg az étterem személyzetét',
	'Cooking time': 'Elkészítési idő',
	'Pairs well with': 'Jól illik hozzá',
	'Dish details': 'Az étel részletei',
	'Ask restaurant staff for portion details':
		'Kérdezze meg az étterem személyzetét az adag részleteiről',
	'No allergen information available': 'Nincs elérhető allergéninformáció',
	'Ask for price': 'Érdeklődjön az ár felől',
	Calories: 'Kalória',
	'About dish': 'Az ételről',
	'Menu section': 'Menüszekció',
	Portion: 'Adag',
	Allergens: 'Allergének',
	'Browse full menu': 'Teljes étlap megtekintése',
	Unavailable: 'Nincs',
} as const;

export type HuTranslationKey = keyof typeof hu;

export const huTranslates: Translate[] = Object.entries(hu).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
