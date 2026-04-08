import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TranslateDirective } from 'wacom';

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
		{ src: 'gallery/activity-01.jpg', alt: 'Bubbles KP activity photo 1' },
		{ src: 'gallery/activity-02.jpg', alt: 'Bubbles KP activity photo 2' },
		{ src: 'gallery/bankomp-01.jpg', alt: 'Bubbles KP banquet photo 1' },
		{ src: 'gallery/bankomp-02.jpg', alt: 'Bubbles KP banquet photo 2' },
		{ src: 'gallery/bankomp-03.jpg', alt: 'Bubbles KP banquet photo 3' },
		{ src: 'gallery/hotel-02.jpg', alt: 'Bubbles KP hotel photo 2' },
		{ src: 'gallery/hotel-03.jpg', alt: 'Bubbles KP hotel photo 3' },
		{ src: 'gallery/intro-01.jpg', alt: 'Bubbles KP intro photo 1' },
		{ src: 'gallery/intro-02.jpg', alt: 'Bubbles KP intro photo 2' },
		{ src: 'gallery/intro-03.jpg', alt: 'Bubbles KP intro photo 3' },
		{ src: 'gallery/intro.jpg', alt: 'Bubbles KP intro photo' },
		{ src: 'gallery/kitchen-01.jpg', alt: 'Bubbles KP kitchen photo 1' },
		{ src: 'gallery/kitchen-02.jpg', alt: 'Bubbles KP kitchen photo 2' },
		{ src: 'gallery/kitchen-03.jpg', alt: 'Bubbles KP kitchen photo 3' },
		{ src: 'gallery/kitchen-04.jpg', alt: 'Bubbles KP kitchen photo 4' },
		{ src: 'gallery/kitchen-05.jpg', alt: 'Bubbles KP kitchen photo 5' },
		{ src: 'gallery/kitchen-06.jpg', alt: 'Bubbles KP kitchen photo 6' },
		{ src: 'gallery/kitchen-07.jpg', alt: 'Bubbles KP kitchen photo 7' },
		{ src: 'gallery/kitchen-08.jpg', alt: 'Bubbles KP kitchen photo 8' },
		{ src: 'gallery/kitchen-09.jpg', alt: 'Bubbles KP kitchen photo 9' },
		{ src: 'gallery/kitchen-10.jpg', alt: 'Bubbles KP kitchen photo 10' },
		{ src: 'gallery/lounge-01.jpg', alt: 'Bubbles KP lounge photo 1' },
		{ src: 'gallery/lounge-02.jpg', alt: 'Bubbles KP lounge photo 2' },
		{ src: 'gallery/pools-01.jpg', alt: 'Bubbles KP pool photo 1' },
		{ src: 'gallery/pools-02.jpg', alt: 'Bubbles KP pool photo 2' },
		{ src: 'gallery/pools-03.jpg', alt: 'Bubbles KP pool photo 3' },
	];

	protected readonly selectedPhoto = signal<GalleryPhoto | null>(null);

	protected openPhoto(photo: GalleryPhoto) {
		this.selectedPhoto.set(photo);
	}

	protected closePhoto() {
		this.selectedPhoto.set(null);
	}
}
