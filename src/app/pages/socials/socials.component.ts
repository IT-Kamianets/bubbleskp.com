import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateDirective } from 'wacom';

@Component({
	imports: [NgOptimizedImage, TranslateDirective],
	templateUrl: './socials.component.html',
	styleUrl: './socials.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialsComponent {}
