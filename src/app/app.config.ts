import {
	APP_INITIALIZER,
	ApplicationConfig,
	provideBrowserGlobalErrorListeners,
	provideZonelessChangeDetection,
} from '@angular/core';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideTranslate } from '@wawjs/ngx-translate';
import { routes } from './app.routes';
import { BootstrapService } from './feature/bootstrap/bootstrap.service';
import { LANGUAGES } from './feature/language/language.const';
import { translates } from '../i18n';

const initializeBootstrapData = (bootstrapService: BootstrapService) => () =>
	bootstrapService.initialize();

const availableLanguages = LANGUAGES.filter(
	(language) => language.code in translates,
).map(({ code, label }) => ({
	code,
	name: label,
	nativeName: label,
}));

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideZonelessChangeDetection(),
		provideRouter(routes),
		provideHttpClient(withFetch()),
		provideClientHydration(withEventReplay()),
		provideTranslate({
			defaultLanguage: 'en',
			languages: availableLanguages,
			folder: '/i18n/',
			persistLanguage: true,
		}),
		{
			provide: APP_INITIALIZER,
			useFactory: initializeBootstrapData,
			deps: [BootstrapService],
			multi: true,
		},
	],
};
