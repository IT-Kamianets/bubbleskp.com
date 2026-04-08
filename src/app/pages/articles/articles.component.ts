import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateDirective } from 'wacom';

@Component({
	imports: [TranslateDirective],
	templateUrl: './articles.component.html',
	styleUrl: './articles.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesComponent {}
