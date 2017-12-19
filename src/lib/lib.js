import { dictionary1, dictionary2 } from '../data/dictionary';
export const getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	//  The  min is inclusive  and the max is exclusive
	return Math.floor(Math.random() * (max - min)) + min;
};

export const arrayRandomOrder = (arr000) => {
	const arr = arr000.slice(0);
	const len = arr.length;
	for (let i = 0; i < len - 1; i += 1) {
		const j = getRandomInt(i, len);
		const swap = arr[i];
		arr[i] = arr[j];
		arr[j] = swap;
	}
	return arr;
};

export const filterDeletedOff = (arr) => {
	const result = (arr || []).filter((elem) => {
		const russian = Object.keys(elem || {})[0];
		if (russian) {
			const item = localStorage.getItem(russian);
			return item !== 'd';
		} else {
			return false;
		}
	});
	return result;
};

const DICT = 'DICT';

export const getDictionary = () => {
	const whichDict = localStorage.getItem(DICT);
	return arrayRandomOrder(filterDeletedOff(whichDict ? dictionary2 : dictionary1));
};
