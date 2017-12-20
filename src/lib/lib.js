import {
	dictionary1,
	dictionary2,
	oldDictionary1,
	oldDictionary2
} from '../data/dictionary';

export const getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	//  The  min is inclusive  and the max is exclusive
	return Math.floor(Math.random() * (max - min)) + min;
};

export const arrayRandomOrder = (arr000, maxLength) => {
	const arr = arr000.slice(0);
	const len = arr.length;

	const numberOfElementsToSort = Math.min(len - 1, maxLength ? maxLength : 10000000000);

	for (let i = 0; i < numberOfElementsToSort; i += 1) {
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
const DICT_NUMBER = '2';

const OLD_LENGTH = 3;

export const getDictionaryWithMix = () => {
	const whichDict = localStorage.getItem(DICT);
	let d;
	let oldD;
	if (whichDict === DICT_NUMBER) {
		d = dictionary2;
		oldD = oldDictionary2;
	} else {
		d = dictionary1;
		oldD = oldDictionary1;
	}
	d = arrayRandomOrder(filterDeletedOff(d, null));
	oldD = arrayRandomOrder(filterDeletedOff(oldD, OLD_LENGTH));

	return d.concat(oldD.slice(0, OLD_LENGTH));
};

export const handleDictClicked = (number) => {
	if (number === 2) {
		localStorage.setItem(DICT, DICT_NUMBER);
	} else {
		localStorage.setItem(DICT, '1');
	}
};
