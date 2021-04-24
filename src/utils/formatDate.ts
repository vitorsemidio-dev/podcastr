/** @format */

import { format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

export function formatDate(date: Date): string {
	const dateFormatted = format(date, 'EEEEEE, d MMMM', {
		locale: ptBr,
	});

	return dateFormatted;
}

export function formatDateDayMonthYear(date: Date): string {
	const dateFormatted = format(date, 'd MMM yy', {
		locale: ptBr,
	});

	return dateFormatted;
}

export function convertSeconds2Hours(durationInSeconds: number) {
	const secondsInHour = 3600;
	const hours = Math.floor(durationInSeconds / secondsInHour);
	const minutes = Math.floor((durationInSeconds % secondsInHour) / 60);
	const seconds = Math.floor((durationInSeconds % secondsInHour) % 60);

	return [hours, minutes, seconds]
		.map((time) => time.toString().padStart(2, '0'))
		.join(':');
}
