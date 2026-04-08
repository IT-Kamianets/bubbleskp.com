import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateDirective } from 'wacom';

@Component({
	imports: [TranslateDirective],
	templateUrl: './reviews.component.html',
	styleUrl: './reviews.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsComponent {}
