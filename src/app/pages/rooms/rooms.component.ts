import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

type RoomCard = {
	name: string;
	description: string;
	price: string;
	image: string;
	imageAlt: string;
};

type ContactLink = {
	label: string;
	href: string;
	description: string;
};

const roomBookingDetails =
	' Сніданки проходять з 9:00 по 11:00, оплачуються окремо. Заселення з 14:00. Виселення до 11:00. Додаткове місце (повний додатковий комплект постільної білизни) вартує 400грн/доба.';

@Component({
	imports: [NgOptimizedImage],
	templateUrl: './rooms.component.html',
	styleUrl: './rooms.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsComponent {
	protected readonly amenities = [
		'Комфортні номери',
		'Два басейни',
		'Дитячий басейн',
		'Два оздоровчих джакузі',
		'Сауна',
		'Гідромасажний басейн',
		'Чан',
		'Паркінг',
		'Літній лаунж-бар',
		'Волейбольний майданчик',
		'Альтанки',
		'Безкоштовний Wi-Fi на всій території',
	];

	protected readonly rooms: RoomCard[] = [
		{
			name: 'Апартаменти з терасою',
			description:
				'Просторий двомісний номер з великою кухнею та виходом на власну терасу. У номері є велике двоспальне ліжко, диван, шафа, рушники, халати, власний санвузол з міні-косметикою для душу, фен, холодильник, електрочайник, мікрохвильова піч, електроплита, посуд, кондиціонер, телевізор з цифровим телебаченням та WiFi.' +
				roomBookingDetails,
			price: '2500 грн/доба',
			image: 'room/apartments-terrace.jpg',
			imageAlt: 'Апартаменти з терасою в Bubbles KP',
		},
		{
			name: 'Люкс студія',
			description:
				'Просторий двомісний номер з вітальнею. У номері є велике двоспальне ліжко, диван, шафа, стіл, рушники, халати, власний санвузол з міні-косметикою для душу, фен, міні-холодильник, електрочайник, кондиціонер, телевізор з цифровим телебаченням та WiFi.' +
				roomBookingDetails,
			price: '2000 грн/доба',
			image: 'room/lux-studio.jpg',
			imageAlt: 'Люкс студія в Bubbles KP',
		},
		{
			name: 'Сімейний люкс з ванною',
			description:
				'Просторий 2-кімнатний, 2-поверховий сімейний люкс з ванною у кімнаті. У кожній кімнаті є двоспальне ліжко та диван, а також шафа, стіл, рушники, халати, власний санвузол з міні-косметикою для душу, фен, камін, міні-холодильник, електрочайник, кондиціонер, телевізор з цифровим телебаченням та WiFi.' +
				roomBookingDetails,
			price: '3000 грн/доба',
			image: 'room/family-bath-4p.jpg',
			imageAlt: 'Сімейний номер з ванною для чотирьох гостей',
		},
		{
			name: 'Сімейний 3-кімнатний номер',
			description:
				'Номер складається з трьох окремих кімнат та загального санвузла з міні-косметикою для душу та феном. У кожному номері є велике двоспальне ліжко, шафа, столик, рушники, міні-холодильник, електрочайник, кондиціонер, телевізор з цифровим телебаченням та WiFi.' +
				roomBookingDetails,
			price: '4000 грн/доба',
			image: 'room/family-3room.jpg',
			imageAlt: 'Сімейний трьохкімнатний номер у Bubbles KP',
		},
	];

	protected readonly contactLinks: ContactLink[] = [
		{
			label: 'Зателефонувати',
			href: 'tel:+380968889842',
			description: '+380 (96) 888 98 42',
		},
		{
			label: 'Написати у Viber',
			href: 'viber://add?number=380968889842',
			description: 'Швидке бронювання та уточнення деталей',
		},
		{
			label: 'Написати у Telegram',
			href: 'https://t.me/Bubbles_club',
			description: '@Bubbles_club',
		},
	];
}
