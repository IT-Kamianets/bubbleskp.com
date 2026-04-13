import { Translate } from '@wawjs/ngx-translate';

export const cs = {
	'Go to homepage': 'Přejít na domovskou stránku',
	'Switch to dark mode': 'Přepnout do tmavého režimu',
	'Switch to light mode': 'Přepnout do světlého režimu',
	'Open language menu': 'Otevřít nabídku jazyků',
	'Switch language to': 'Přepnout jazyk na',
	Socials: 'Sociální sítě',
	'Stay connected with Bubbles KP': 'Zůstaňte ve spojení s Bubbles KP',
	'Find us on Instagram and open our location in Google Maps.':
		'Najděte nás na Instagramu a otevřete naši polohu v Google Maps.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Sledujte naše nejnovější novinky',
	'See new photos, announcements, and stories from the restaurant.':
		'Podívejte se na nové fotky, oznámení a příběhy z restaurace.',
	'Open Instagram': 'Otevřít Instagram',
	Maps: 'Mapy',
	'Get directions to the restaurant': 'Zobrazit trasu do restaurace',
	'Open the map, check the route, and share the location with friends.':
		'Otevřete mapu, zkontrolujte trasu a sdílejte polohu s přáteli.',
	'Open Google Maps': 'Otevřít Google Maps',
	'Open Bubbles KP Instagram page': 'Otevřít instagramovou stránku Bubbles KP',
	'Open Bubbles KP location in Google Maps': 'Otevřít polohu Bubbles KP v Google Maps',
	Quests: 'Quests',
	'There are currently no quests': 'There are currently no quests',
	'Check back later for new activities and special offers.':
		'Check back later for new activities and special offers.',
	Gallery: 'Galerie',
	'The gallery is currently empty': 'Galerie je momentálně prázdná',
	'Check back later to see photos from Bubbles KP.':
		'Vraťte se později a podívejte se na fotografie z Bubbles KP.',
	Navigation: 'Navigace',
	'Quick links': 'Rychlé odkazy',
	'Open the main sections of the website from one place.':
		'Otevřete hlavní sekce webu z jednoho místa.',
	Sales: 'Akce',
	Articles: 'Články',
	Reviews: 'Recenze',
	Events: 'Události',
	Jobs: 'Práce',
	'No articles yet': 'Zatím žádné články',
	'New posts are on the way': 'Nové příspěvky jsou na cestě',
	'No events at the moment': 'Momentálně nejsou žádné události',
	'New events are on the way': 'Nové události se chystají',
	'No active promotions at the moment': 'Momentálně nejsou žádné aktivní akce',
	Favorites: 'Oblíbené',
	'No saved dishes': 'Žádná uložená jídla',
	'Add items from the menu to favorites, and they will appear here.':
		'Přidejte položky z menu do oblíbených a zobrazí se zde.',
	'Remove from favorites': 'Odebrat z oblíbených',
	'Add to favorites': 'Přidat do oblíbených',
	'Chef picks': 'Výběr šéfkuchaře',
	'Ask restaurant staff': 'Zeptejte se personálu restaurace',
	'Cooking time': 'Doba přípravy',
	'Pairs well with': 'Hodí se k',
	'Dish details': 'Detaily jídla',
	'Ask restaurant staff for portion details':
		'Zeptejte se personálu restaurace na podrobnosti o porci',
	'No allergen information available': 'Informace o alergenech nejsou k dispozici',
	'Ask for price': 'Zeptejte se na cenu',
	Calories: 'Kalorie',
	'About dish': 'O jídle',
	'Menu section': 'Sekce menu',
	Portion: 'Porce',
	Allergens: 'Alergeny',
	'Browse full menu': 'Prohlédnout celé menu',
	Unavailable: 'Není',
} as const;

export type CsTranslationKey = keyof typeof cs;

export const csTranslates: Translate[] = Object.entries(cs).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
