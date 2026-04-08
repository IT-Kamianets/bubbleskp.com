import { Translate } from 'wacom';

export const bg = {
	'Go to homepage': 'Към началната страница',
	'Switch to dark mode': 'Превключване към тъмен режим',
	'Switch to light mode': 'Превключване към светъл режим',
	'Open language menu': 'Отваряне на менюто за езици',
	'Switch language to': 'Превключване на езика на',
	Socials: 'Социални мрежи',
	'Stay connected with Bubbles KP': 'Останете свързани с Bubbles KP',
	'Find us on Instagram and open our location in Google Maps.':
		'Намерете ни в Instagram и отворете нашата локация в Google Maps.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Следете най-новите ни новини',
	'See new photos, announcements, and stories from the restaurant.':
		'Вижте нови снимки, съобщения и истории от ресторанта.',
	'Open Instagram': 'Отвори Instagram',
	Maps: 'Карти',
	'Get directions to the restaurant': 'Упътване до ресторанта',
	'Open the map, check the route, and share the location with friends.':
		'Отворете картата, проверете маршрута и споделете локацията с приятели.',
	'Open Google Maps': 'Отвори Google Maps',
	'Open Bubbles KP Instagram page': 'Отвори Instagram страницата на Bubbles KP',
	'Open Bubbles KP location in Google Maps': 'Отвори локацията на Bubbles KP в Google Maps',
	Quests: 'Quests',
	'There are currently no quests': 'There are currently no quests',
	'Check back later for new activities and special offers.':
		'Check back later for new activities and special offers.',
	Gallery: 'Галерия',
	'The gallery is currently empty': 'Галерията в момента е празна',
	'Check back later to see photos from Bubbles KP.':
		'Проверете отново по-късно, за да видите снимки от Bubbles KP.',
	Navigation: 'Навигация',
	'Quick links': 'Бързи връзки',
	'Open the main sections of the website from one place.':
		'Отворете основните секции на уебсайта от едно място.',
	Sales: 'Промоции',
	Articles: 'Статии',
	Reviews: 'Отзиви',
	Events: 'Събития',
	Jobs: 'Работа',
	'No articles yet': 'Все още няма статии',
	'New posts are on the way': 'Новите публикации са на път',
	'No events at the moment': 'В момента няма събития',
	'New events are on the way': 'Нови събития предстоят',
	'No active promotions at the moment': 'В момента няма активни промоции',
	Favorites: 'Любими',
	'No saved dishes': 'Няма запазени ястия',
	'Add items from the menu to favorites, and they will appear here.':
		'Добавете ястия от менюто в любими и те ще се появят тук.',
	'Remove from favorites': 'Премахни от любими',
	'Add to favorites': 'Добави в любими',
	'Chef picks': 'Избор на шефа',
	'Ask restaurant staff': 'Попитайте персонала на ресторанта',
	'Cooking time': 'Време за приготвяне',
	'Pairs well with': 'Подхожда си с',
	'Dish details': 'Детайли за ястието',
	'Ask restaurant staff for portion details': 'Попитайте персонала на ресторанта за подробности за порцията',
	'No allergen information available': 'Няма налична информация за алергени',
	'Ask for price': 'Попитайте за цена',
	'Calories': 'Калории',
	'About dish': 'За ястието',
	'Menu section': 'Раздел от менюто',
	'Portion': 'Порция',
	'Allergens': 'Алергени',
	'Browse full menu': 'Преглед на цялото меню',
	Unavailable: 'Няма',
} as const;

export type BgTranslationKey = keyof typeof bg;

export const bgTranslates: Translate[] = Object.entries(bg).map(([sourceText, text]) => ({
	sourceText,
	text,
}));


