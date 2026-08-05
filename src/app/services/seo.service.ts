import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { cleanText, findRawMenuItemBySlug, translateMenuValue } from '../feature/menu/menu.data';

const BASE_URL = 'https://bubbleskp.com';
const SITE_NAME = 'Bubbles';
const DEFAULT_IMAGE = '/gallery/intro.jpg';

interface PageSeo {
	title: string;
	description: string;
	image: string;
	schema: 'Restaurant' | 'LodgingBusiness';
}

const PAGE_SEO: Record<string, PageSeo> = {
	'/': {
		title: 'Меню ресторану Bubbles | Кам’янець-Подільський',
		description: 'Меню ресторану Bubbles: сніданки, закуски, піца, основні страви, десерти, коктейлі та напої біля Кам’янця-Подільського.',
		image: '/gallery/kitchen-01.jpg', schema: 'Restaurant',
	},
	'/rooms': {
		title: 'Номери та ціни | Готель Bubbles Кам’янець-Подільський',
		description: 'Комфортні номери Bubbles біля Кам’янця-Подільського: апартаменти, люкс-студія та сімейні номери з басейнами, сауною і Wi-Fi.',
		image: '/room/apartments-terrace.jpg', schema: 'LodgingBusiness',
	},
	'/navigation': {
		title: 'Послуги та розділи | Bubbles Кам’янець-Подільський',
		description: 'Оберіть потрібний розділ Bubbles: номери, пропозиції, події, відгуки, статті та вакансії.',
		image: DEFAULT_IMAGE, schema: 'LodgingBusiness',
	},
	'/gallery': {
		title: 'Фотогалерея комплексу Bubbles | Кам’янець-Подільський',
		description: 'Фото готелю, ресторану, басейнів, лаунж-зон і території комплексу Bubbles біля Кам’янця-Подільського.',
		image: '/gallery/pools-01.jpg', schema: 'LodgingBusiness',
	},
	'/sales': {
		title: 'Акції та спеціальні пропозиції | Bubbles',
		description: 'Актуальні акції та спеціальні пропозиції готельно-ресторанного комплексу Bubbles.',
		image: '/gallery/lounge-01.jpg', schema: 'LodgingBusiness',
	},
	'/articles': {
		title: 'Статті та новини | Bubbles Кам’янець-Подільський',
		description: 'Новини, корисні матеріали та оновлення готельно-ресторанного комплексу Bubbles.',
		image: '/gallery/intro-01.jpg', schema: 'LodgingBusiness',
	},
	'/reviews': {
		title: 'Відгуки гостей | Bubbles Кам’янець-Подільський',
		description: 'Відгуки гостей про відпочинок, номери, ресторан і сервіс комплексу Bubbles.',
		image: '/gallery/hotel-02.jpg', schema: 'LodgingBusiness',
	},
	'/events': {
		title: 'Події та святкування | Bubbles Кам’янець-Подільський',
		description: 'Організація святкувань, банкетів і приватних подій у комплексі Bubbles біля Кам’янця-Подільського.',
		image: '/gallery/bankomp-01.jpg', schema: 'Restaurant',
	},
	'/jobs': {
		title: 'Вакансії | Bubbles Кам’янець-Подільський',
		description: 'Актуальні вакансії та можливості роботи у готельно-ресторанному комплексі Bubbles.',
		image: '/gallery/kitchen-02.jpg', schema: 'LodgingBusiness',
	},
	'/socials': {
		title: 'Контакти та соцмережі | Bubbles Кам’янець-Подільський',
		description: 'Телефон, адреса, Instagram, Telegram, email і розташування комплексу Bubbles у селі Смотрич.',
		image: '/gallery/intro-02.jpg', schema: 'LodgingBusiness',
	},
	'/favorites': {
		title: 'Збережені страви | Меню Bubbles',
		description: 'Ваш персональний список збережених страв із меню ресторану Bubbles.',
		image: '/gallery/kitchen-03.jpg', schema: 'Restaurant',
	},
};

@Injectable({ providedIn: 'root' })
export class SeoService {
	private readonly title = inject(Title);
	private readonly meta = inject(Meta);
	private readonly router = inject(Router);
	private readonly document = inject(DOCUMENT);

	initialize() {
		this.update(this.router.url);
		this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
			.subscribe((event) => this.update(event.urlAfterRedirects));
	}

	private update(rawUrl: string) {
		const path = rawUrl.split(/[?#]/)[0] || '/';
		const seo = path.startsWith('/dish/') ? this.dishSeo(decodeURIComponent(path.slice(6))) : PAGE_SEO[path] ?? PAGE_SEO['/'];
		const canonicalPath = path === '/' ? '/' : path.replace(/\/$/, '');
		const url = `${BASE_URL}${canonicalPath}`;
		const image = `${BASE_URL}${seo.image}`;

		this.title.setTitle(seo.title);
		this.setMeta('name', 'description', seo.description);
		this.setMeta('property', 'og:title', seo.title);
		this.setMeta('property', 'og:description', seo.description);
		this.setMeta('property', 'og:url', url);
		this.setMeta('property', 'og:image', image);
		this.setMeta('property', 'og:type', 'website');
		this.setMeta('property', 'og:locale', 'uk_UA');
		this.setMeta('property', 'og:site_name', SITE_NAME);
		this.setMeta('name', 'twitter:card', 'summary_large_image');
		this.setMeta('name', 'twitter:title', seo.title);
		this.setMeta('name', 'twitter:description', seo.description);
		this.setMeta('name', 'twitter:image', image);
		this.setCanonical(url);
		this.setStructuredData(seo, url, image);
	}

	private dishSeo(slug: string): PageSeo {
		const entry = findRawMenuItemBySlug(slug);
		if (!entry) return PAGE_SEO['/'];
		const name = translateMenuValue(entry.item.title, 'ua') ?? slug;
		const description = cleanText(translateMenuValue(entry.item.description, 'ua'))
			?? `${name} у меню ресторану Bubbles. Перегляньте опис страви та актуальну ціну.`;
		return { title: `${name} | Меню ресторану Bubbles`, description, image: entry.item.image, schema: 'Restaurant' };
	}

	private setMeta(attribute: 'name' | 'property', key: string, content: string) {
		this.meta.updateTag({ [attribute]: key, content }, `${attribute}='${key}'`);
	}

	private setCanonical(href: string) {
		let link = this.document.head.querySelector<HTMLLinkElement>("link[rel='canonical']");
		if (!link) {
			link = this.document.createElement('link');
			link.rel = 'canonical';
			this.document.head.appendChild(link);
		}
		link.href = href;
	}

	private setStructuredData(seo: PageSeo, url: string, image: string) {
		this.document.getElementById('business-structured-data')?.remove();
		const script = this.document.createElement('script');
		script.id = 'business-structured-data';
		script.type = 'application/ld+json';
		const common = {
			'@context': 'https://schema.org', '@type': seo.schema, name: 'Bubbles', url, image,
			telephone: '+380968889842',
			address: { '@type': 'PostalAddress', streetAddress: 'вул. Молодіжна, 1', addressLocality: 'с. Смотрич', addressRegion: 'Хмельницька область', addressCountry: 'UA' },
			geo: { '@type': 'GeoCoordinates', latitude: 48.655589502761586, longitude: 26.56411705413232 },
			amenityFeature: [
				{ '@type': 'LocationFeatureSpecification', name: 'Безкоштовний Wi-Fi', value: true },
				{ '@type': 'LocationFeatureSpecification', name: 'Паркінг', value: true },
				{ '@type': 'LocationFeatureSpecification', name: seo.schema === 'Restaurant' ? 'Літній лаунж-бар' : 'Басейни, сауна, чан і джакузі', value: true },
			],
		};
		const schema = seo.schema === 'Restaurant'
			? { ...common, servesCuisine: ['Українська', 'Європейська'], acceptsReservations: true }
			: { ...common, checkinTime: '14:00', checkoutTime: '11:00' };
		script.text = JSON.stringify(schema);
		this.document.head.appendChild(script);
	}
}
