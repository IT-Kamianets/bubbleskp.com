import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateDirective } from 'wacom';

@Component({
	imports: [TranslateDirective],
	templateUrl: './jobs.component.html',
	styleUrl: './jobs.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobsComponent {}
