import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TranslateDirective } from '@wawjs/ngx-translate';

interface GalleryPhoto {
	src: string;
	alt: string;
}

@Component({
	imports: [TranslateDirective],
	templateUrl: './gallery.component.html',
	styleUrl: './gallery.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {
	protected readonly photos: GalleryPhoto[] = [
		{ src: 'gallery/activity-01.jpg', alt: 'Активний відпочинок на території Bubbles' },
		{ src: 'gallery/activity-02.jpg', alt: 'Зона активного відпочинку в Bubbles' },
		{ src: 'gallery/bankomp-01.jpg', alt: 'Святково сервірований банкетний зал Bubbles' },
		{ src: 'gallery/bankomp-02.jpg', alt: 'Банкетна зала для приватних подій у Bubbles' },
		{ src: 'gallery/bankomp-03.jpg', alt: 'Оформлення столів для святкування у Bubbles' },
		{ src: 'gallery/hotel-02.jpg', alt: 'Готельний комплекс Bubbles та прилегла територія' },
		{ src: 'gallery/hotel-03.jpg', alt: 'Зовнішній вигляд готелю Bubbles' },
		{ src: 'gallery/intro-01.jpg', alt: 'Зона відпочинку на території комплексу Bubbles' },
		{ src: 'gallery/intro-02.jpg', alt: 'Літній простір комплексу Bubbles' },
		{ src: 'gallery/intro-03.jpg', alt: 'Територія Bubbles біля Кам’янця-Подільського' },
		{ src: 'gallery/intro.jpg', alt: 'Панорамний вигляд комплексу відпочинку Bubbles' },
		{ src: 'gallery/kitchen-01.jpg', alt: 'Страва європейської кухні ресторану Bubbles' },
		{ src: 'gallery/kitchen-02.jpg', alt: 'Подача страви у ресторані Bubbles' },
		{ src: 'gallery/kitchen-03.jpg', alt: 'Страва від кухні ресторану Bubbles' },
		{ src: 'gallery/kitchen-04.jpg', alt: 'Ресторанна подача у Bubbles' },
		{ src: 'gallery/kitchen-05.jpg', alt: 'Закуска з меню ресторану Bubbles' },
		{ src: 'gallery/kitchen-06.jpg', alt: 'Основна страва з меню Bubbles' },
		{ src: 'gallery/kitchen-07.jpg', alt: 'Авторська подача кухні Bubbles' },
		{ src: 'gallery/kitchen-08.jpg', alt: 'Свіжоприготована страва ресторану Bubbles' },
		{ src: 'gallery/kitchen-09.jpg', alt: 'Фірмова страва ресторану Bubbles' },
		{ src: 'gallery/kitchen-10.jpg', alt: 'Сервірування страви в ресторані Bubbles' },
		{ src: 'gallery/lounge-01.jpg', alt: 'Літня лаунж-зона комплексу Bubbles' },
		{ src: 'gallery/lounge-02.jpg', alt: 'Місця для відпочинку в лаунж-зоні Bubbles' },
		{ src: 'gallery/pools-01.jpg', alt: 'Відкритий басейн комплексу Bubbles' },
		{ src: 'gallery/pools-02.jpg', alt: 'Зона басейнів для гостей Bubbles' },
		{ src: 'gallery/pools-03.jpg', alt: 'Відпочинок біля басейну в Bubbles' },
	];

	protected readonly selectedPhoto = signal<GalleryPhoto | null>(null);

	protected openPhoto(photo: GalleryPhoto) {
		this.selectedPhoto.set(photo);
	}

	protected closePhoto() {
		this.selectedPhoto.set(null);
	}
}
