import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateDirective } from 'wacom';

@Component({
	imports: [TranslateDirective],
	templateUrl: './sales.component.html',
	styleUrl: './sales.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalesComponent {}
