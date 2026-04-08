import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateDirective } from 'wacom';

@Component({
	imports: [TranslateDirective],
	templateUrl: './quests.component.html',
	styleUrl: './quests.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestsComponent {}
