/** @format */

import { addSeconds, format } from 'date-fns';
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

export function convertSeconds2Hours(seconds: number) {
	const begin = new Date(0).setHours(0);
	const helperDate = addSeconds(begin, seconds);
	return format(helperDate, 'h:mm:ss');
}
