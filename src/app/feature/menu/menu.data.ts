import categoriesData from '../../../data/categories.json';
import categoryTranslationsData from '../../../data/categories.translations.json';
import groupData from '../../../data/group.json';
import itemsData from '../../../data/items.json';
import itemTranslationsData from '../../../data/items.translations.json';
import type { LanguageCode } from '../language/language.type';

export type LocalizedValue = Partial<Record<LanguageCode, string | null>>;

interface RawCategory {
	name: string;
	description: string;
	section: string;
	slug: string;
}

interface RawCategoryTranslation {
	slug: string;
	data: {
		name: LocalizedValue;
		description: LocalizedValue;
	};
}

interface RawItemRecord {
	slug: string;
	categorySlug: string;
	title: string;
	price: number | null;
	description: string;
	labels: string[];
	fullDescription: string;
	suggested: string[] | number | null;
	cookTimeMinutes: number | null;
	caloriesKcal: number | string[] | null;
	portion: string | null;
	allergens: string[];
}

interface RawItemTranslation {
	slug: string;
	data: {
		title: LocalizedValue;
		description: LocalizedValue;
		labels: LocalizedValue[];
		fullDescription?: LocalizedValue;
	};
}

interface RawGroupDefinition {
	id: string;
	names: LocalizedValue;
}

export interface RawMenuItem {
	slug: string;
	title: LocalizedValue;
	price: number | null;
	description: LocalizedValue;
	labels: LocalizedValue[];
	image: string;
	fullDescription: LocalizedValue;
	suggested: string[];
	cookTimeMinutes: number | null;
	caloriesKcal: number | null;
	portion: string | null;
	allergens: string[];
}

export interface RawMenuSection {
	name: LocalizedValue;
	description: LocalizedValue;
	items: RawMenuItem[];
	slug: string;
	section: string;
}

export interface MenuItem {
	id: string;
	slug: string;
	title: string;
	price: number | null;
	description: string | null;
	labels: string[];
	image: string;
	imageAlt: string;
	soldOut: boolean;
}

export interface MenuSection {
	id: string;
	name: string;
	description: string | null;
	items: MenuItem[];
}

export interface MenuGroup {
	id: string;
	name: string;
	sections: MenuSection[];
}

const _categories = categoriesData as RawCategory[];
const _categoryTranslations = new Map(
	(categoryTranslationsData as RawCategoryTranslation[]).map(
		(category) => [category.slug, category.data] as const,
	),
);
const _itemTranslations = new Map(
	(itemTranslationsData as RawItemTranslation[]).map((item) => [item.slug, item.data] as const),
);
const _itemsByCategorySlug = new Map<string, RawItemRecord[]>();

for (const item of itemsData as RawItemRecord[]) {
	const categoryItems = _itemsByCategorySlug.get(item.categorySlug);

	if (categoryItems) {
		categoryItems.push(item);
		continue;
	}

	_itemsByCategorySlug.set(item.categorySlug, [item]);
}

const _menuSections = _categories.map((category) => _toRawMenuSection(category));

const _groupDefinitions = groupData as RawGroupDefinition[];

export const rawMenuSections = _menuSections;
export const dishSlugs = _menuSections.flatMap((section) => section.items.map((item) => item.slug));

export const menuSections = buildMenuSections('ua');

export const menuGroups = buildMenuGroups('ua');

export const navigationSection =
	menuSections.find((section) => section.id === 'burgers-croissants') ?? menuSections[0];

export function buildMenuSections(language: LanguageCode) {
	return _menuSections.map((section) => _toMenuSection(section, language));
}

export function buildMenuGroups(language: LanguageCode) {
	return _groupDefinitions.map((group) => ({
		id: group.id,
		name: _resolveGroupName(group.names, language),
		sections: _menuSections
			.filter((section) => section.section === group.id)
			.map((section) => _toMenuSection(section, language)),
	}));
}

export function findRawMenuItemBySlug(slug: string) {
	for (const section of _menuSections) {
		const item = section.items.find((entry) => entry.slug === slug);

		if (item) {
			return { section, item };
		}
	}

	return null;
}

function _toRawMenuSection(category: RawCategory): RawMenuSection {
	const categoryTranslations = _categoryTranslations.get(category.slug);
	const items = (_itemsByCategorySlug.get(category.slug) ?? []).map((item) =>
		_toRawMenuItem(item),
	);

	return {
		slug: category.slug,
		section: category.section,
		name: {
			ua: categoryTranslations?.name.ua ?? category.name,
			en: categoryTranslations?.name.en ?? category.name,
			...categoryTranslations?.name,
		},
		description: {
			ua: categoryTranslations?.description.ua ?? category.description,
			en: categoryTranslations?.description.en ?? category.description,
			...categoryTranslations?.description,
		},
		items,
	};
}

function _toRawMenuItem(item: RawItemRecord): RawMenuItem {
	const itemTranslations = _itemTranslations.get(item.slug);
	const normalized = _normalizeItemRecord(item);

	return {
		slug: normalized.slug,
		title: {
			ua: itemTranslations?.title.ua ?? normalized.title,
			en: itemTranslations?.title.en ?? normalized.title,
			...itemTranslations?.title,
		},
		price: normalized.price,
		description: {
			ua: itemTranslations?.description.ua ?? normalized.description,
			en: itemTranslations?.description.en ?? normalized.description,
			...itemTranslations?.description,
		},
		labels: _buildLocalizedLabels(normalized.labels, itemTranslations?.labels),
		image: `/item/${normalized.slug}.webp`,
		fullDescription: {
			ua: itemTranslations?.fullDescription?.ua ?? normalized.fullDescription,
			en: itemTranslations?.fullDescription?.en ?? normalized.fullDescription,
			...itemTranslations?.fullDescription,
		},
		suggested: normalized.suggested,
		cookTimeMinutes: normalized.cookTimeMinutes,
		caloriesKcal: normalized.caloriesKcal,
		portion: normalized.portion,
		allergens: normalized.allergens,
	};
}

interface NormalizedItemRecord {
	slug: string;
	categorySlug: string;
	title: string;
	price: number | null;
	description: string;
	labels: string[];
	fullDescription: string;
	suggested: string[];
	cookTimeMinutes: number | null;
	caloriesKcal: number | null;
	portion: string | null;
	allergens: string[];
}

function _buildLocalizedLabels(
	labels: string[],
	translatedLabels: LocalizedValue[] | undefined,
) {
	const count = Math.max(labels.length, translatedLabels?.length ?? 0);

	return Array.from({ length: count }, (_, index) => {
		const label = labels[index] ?? translatedLabels?.[index]?.en ?? translatedLabels?.[index]?.ua ?? '';
		const translatedLabel = translatedLabels?.[index];

		return {
			ua: translatedLabel?.ua ?? label,
			en: translatedLabel?.en ?? label,
			...translatedLabel,
		};
	});
}

function _normalizeItemRecord(item: RawItemRecord): NormalizedItemRecord {
	const hasShiftedFacts = typeof item.suggested === 'number' && Array.isArray(item.caloriesKcal);

	if (!hasShiftedFacts) {
		return {
			slug: item.slug,
			categorySlug: item.categorySlug,
			title: item.title,
			price: item.price,
			description: item.description,
			labels: item.labels,
			fullDescription: item.fullDescription,
			suggested: Array.isArray(item.suggested) ? item.suggested : [],
			cookTimeMinutes: item.cookTimeMinutes,
			caloriesKcal: typeof item.caloriesKcal === 'number' ? item.caloriesKcal : null,
			allergens: item.allergens,
			portion: item.portion || null,
		};
	}

	const shiftedCookTimeMinutes = typeof item.suggested === 'number' ? item.suggested : null;
	const shiftedAllergens = Array.isArray(item.caloriesKcal) ? item.caloriesKcal : [];

	return {
		slug: item.slug,
		categorySlug: item.categorySlug,
		title: item.title,
		price: item.price,
		description: item.description,
		labels: item.labels,
		fullDescription: item.fullDescription,
		suggested: [],
		cookTimeMinutes: shiftedCookTimeMinutes,
		caloriesKcal: item.cookTimeMinutes,
		allergens: shiftedAllergens,
		portion: item.portion || null,
	};
}

function _toMenuSection(section: RawMenuSection, language: LanguageCode): MenuSection {
	const sectionName = _translateValue(section.name, language) ?? '';

	return {
		id: section.slug,
		name: sectionName,
		description: cleanText(_translateValue(section.description, language)),
		items: section.items.map((item) => ({
			id: `${section.slug}-${item.slug}`,
			slug: item.slug,
			title: _translateValue(item.title, language) ?? item.slug,
			price: item.price,
			description: cleanText(_translateValue(item.description, language)),
			labels: item.labels
				.map((label) => cleanText(_translateValue(label, language)))
				.filter((label): label is string => Boolean(label)),
			image: item.image,
			imageAlt: _translateValue(item.title, language) ?? item.slug,
			soldOut: false,
		})),
	};
}

function _resolveGroupName(names: LocalizedValue, language: LanguageCode) {
	return _translateValue(names, language) ?? '';
}

function _translateValue(value: LocalizedValue | null | undefined, language: LanguageCode) {
	if (!value) {
		return null;
	}

	const localized = value[language];

	if (localized) {
		return localized;
	}

	const english = value.en;

	if (english) {
		return english;
	}

	const ukrainian = value.ua;

	if (ukrainian) {
		return ukrainian;
	}

	return Object.values(value).find((entry): entry is string => Boolean(entry)) ?? null;
}

export function translateMenuValue(
	value: LocalizedValue | null | undefined,
	language: LanguageCode,
) {
	return _translateValue(value, language);
}

export function cleanText(value: string | null) {
	if (!value) {
		return null;
	}

	return value
		.replace(/показати$/i, '')
		.replace(/\s+/g, ' ')
		.replace(/\s([,.!?:;])/g, '$1')
		.trim();
}

export function createId(value: string) {
	return value
		.toLowerCase()
		.normalize('NFKD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-zа-яіїєґ0-9]+/gi, '-')
		.replace(/^-+|-+$/g, '');
}
