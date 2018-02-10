export type WordPair = {
	rus: string,
	eng: string,
};

export type dictSet = {
	dictionary1: WordPair[],
	oldDictionary1: WordPair[],
	dictionary2: WordPair[],
	oldDictionary2: WordPair[],
};

const dictionaries: dictSet = {
	// dictionary1: [
	// 	{ id:'1', rus:'Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? ', eng:'Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? '},
	// ],
	dictionary1: [
		{ rus: 'тушить огонь', eng: 'to put out a fire' },
		{ rus: 'бросать мусор', eng: 'to drop a litter' },
		{ rus: 'овощи', eng: 'vegetables' },
		{ rus: 'сладости', eng: 'sweets' },
		{ rus: 'в хорошей форме', eng: 'fit' },
		{ rus: 'сильный', eng: 'strong' },
		{ rus: 'упражнение', eng: 'exercise' },
		{ rus: 'богатый', eng: 'rich' },
		{ rus: 'бедный', eng: 'poor' },
		{ rus: 'здоровый', eng: 'healthy' },
		{
			rus: 'Как вы должны содержать своё тело сильным и в хорошей форме?',
			eng: 'How can you keep your body strong and fit?',
		},
		{ rus: 'Что вы должны есть каждый день?', eng: 'What should you eat every day?' },
		{ rus: 'Что вы должны пить каждый день?', eng: 'What should you drink every day?' },
		{
			rus: 'Упражнение это хорошо потому, что позволяет поддерживать ваше тело здоровым.',
			eng: 'Exercise is good beacause it keeps you healthy.',
		},
		{ rus: 'загородная местность', eng: 'countyside' },
		{ rus: 'простуда', eng: 'a cold' },
		{ rus: 'сыпь', eng: 'a rash' },
		{ rus: 'крем для кожи', eng: 'a skin cream' },
		{ rus: 'боль в животе', eng: 'a stomachache' },
		{ rus: 'головная боль', eng: 'a headache' },
		{ rus: 'зубная боль', eng: 'a toothache' },
		{ rus: 'шуметь', eng: 'to make a noise' },
		{ rus: 'трава', eng: 'grass' },
		{ rus: 'В чем дело?', eng: "What's the matter?" },
		{ rus: 'У меня зубная боль.', eng: "I've got a toothache." },
		{ rus: 'Тебе следует пойти к дантисту.', eng: "You should go to the dentist's." },
		{ rus: 'Мы не должны мусорить.', eng: "We mustn't drop litter." },
		{ rus: 'Мы должны держаться вне травы.', eng: 'We must keep off the grass.' },
		{
			rus: 'Мы должны держать наших собак на поводке.',
			eng: 'We must keep our dogs on a lead.',
		},
		{ rus: 'Мы не должны рвать цветы.', eng: 'We must not pick flowers.' },
	],

	oldDictionary1: [
		{ rus: 'Ты меня понимаешь?', eng: 'Do you understand me?' },
		{ rus: 'Дай мне ручку.', eng: 'Give me a pen.' },
		{ rus: 'Дай мне ручку.', eng: 'Give me a pen.' },
		{ rus: 'Встреть меня в кинотеатре', eng: 'Meet me in the theatre.' },
		{ rus: 'начинать', eng: 'begin, began, begun' },
		{ rus: 'ломать', eng: 'break, broke, broken' },
		{ rus: 'приносить', eng: 'bring, brought, brought' },
		{ rus: 'покупать', eng: 'buy, bought, bought' },
		{ rus: 'выбирать', eng: 'choose, chose, chosen' },
		{ rus: 'приходить, приезжать', eng: 'come, came, come' },
		{ rus: 'резать', eng: 'cut, cut, cut' },
		{ rus: 'делать', eng: 'do, did, done' },
		{ rus: 'рисовать', eng: 'draw, drew, drawn' },
		{ rus: 'пить', eng: 'drink, drank, drunk' },
		{ rus: 'есть, кушать', eng: 'eat, ate, eaten' },
		{ rus: 'падать', eng: 'fall, fell, fallen' },
		{ rus: 'кормить', eng: 'feed, fed, fed' },
		{ rus: 'находить', eng: 'find, found, found' },
		{ rus: 'летать', eng: 'fly, flew, flown' },
		{ rus: 'забывать', eng: 'forget, forgot, forgotten' },
		{ rus: 'получать', eng: 'get, got, got' },
		{ rus: 'давать', eng: 'give, gave, given' },
		{ rus: 'идти, ходить', eng: 'go, went, gone' },
		{ rus: 'иметь', eng: 'have, had, had' },
		{ rus: 'слышать', eng: 'hear, heard, heard' },
		{ rus: 'ушибить', eng: 'hurt, hurt, hurt' },
		{ rus: 'знать', eng: 'know, knew, known' },
		//////////////////////////////////////
		{
			rus: 'учить (что-то), узнавать (новое)',
			eng: 'learn, learned, or, learnt, learned, or, learnt',
		},
		{ rus: 'делать, заставлять', eng: 'make, made, made' },
		{ rus: 'встречать', eng: 'meet, met, met' },
		{ rus: 'платить', eng: 'pay, paid, paid' },
		{ rus: 'класть, положить', eng: 'put, put, put' },
		{ rus: 'читать', eng: 'read, red, [read], red, [read]' },
		{ rus: 'бежать', eng: 'run, ran, run' },
		{ rus: 'говорить', eng: 'say, said, said' },
		{ rus: 'видеть', eng: 'see, saw, seen' },
		{ rus: 'посылать', eng: 'send, sent, sent' },
		{ rus: 'показывать', eng: 'show, showed, shown' },
		{ rus: 'петь', eng: 'sing, sang, sung' },
		{ rus: 'сидеть', eng: 'sit, sat, sat' },
		{ rus: 'спать', eng: 'sleep, slept, slept' },
		{ rus: 'нюхать, пахнуть', eng: 'smell, smelt, smelt' },
		{ rus: 'говорить', eng: 'speak, spoke, spoken' },
		{ rus: 'стоять', eng: 'stand, stood, stood' },
		{ rus: 'плавать', eng: 'swim, swam, swum' },
		{ rus: 'брать', eng: 'take, took, taken' },
		{ rus: 'учить (кого-то)', eng: 'teach, taught, taught' },
		{ rus: 'сказать (кому-то), рассказать', eng: 'tell, told, told' },
		{ rus: 'думать', eng: 'think, thought, thought' },
		{ rus: 'понимать', eng: 'understand, understood, understood' },
		{ rus: 'носить (одежду)', eng: 'wear, wore, worn' },
		{ rus: 'писать', eng: 'write, wrote, written' },
	],

	dictionary2: [
		{
			rus:
				'В приведенном ниже коде  мы используем JavaScript map функцию, чтобв сделать массив чисел и удвоить их значения.',
			end:
				'Given the code below, we use the "map" function to take an array of numbers and double their values.',
		},
		{
			rus: 'Ниже, мы проходим циклом по массиву чисел, используя JavaScript map функцию.',
			end: 'Below, we loop through the numbers array using the JavaScript "map" function',
		},
		{
			rus:
				'При выполнении этого кода будет выдано предупреждение о том, что должен быть предоставлен ключ для элементов списка.',
			end:
				'When you run this code, you’ll be given a warning that a key should be provided for list items.',
		},
		{
			rus:
				'Key - спецальный стринг атрибут, который вам нужно включать при создании списков элементов.',
			end:
				'A "key" is a special string attribute you need to include when creating lists of elements.',
		},
		{
			rus:
				'Ключи помогают идентифицировать, какие элементы были изменены, добавлены или удалены.',
			end:
				'Keys help React identify which items have changed, are added, or are removed.',
		},
		{
			rus:
				'Ключи должны быть заданы элементам внутри массива, чтобы дать элементам стабильную идентификацию.',
			end:
				'Keys should be given to the elements inside the array to give the elements a stable identity.',
		},
		{
			rus:
				'Лучший способ выбрать key - использовать строку, которая однозначно идентифицирует элемент списка среди своих собратьев.',
			end:
				'The best way to pick a key is to use a string that uniquely identifies a list item among its siblings.',
		},
		{
			rus: 'Чаще всего вы будете использовать IDs из ваших данных в качестве ключей.',
			end: 'Most often you would use IDs from your data as keys.',
		},
		{
			rus:
				'Мы не рекомендуем использовать индексы для ключей, если порядок элементов может измениться.',
			end: 'We don’t recommend using indexes for keys if the order of items may change.',
		},
		{
			rus:
				'Если вы решите не назначать явный ключ элементам списка, то React будет по умолчанию использовать индексы в качестве ключей.',
			end:
				'If you choose not to assign an explicit key to list items then React will default to using indexes as keys.',
		},
		{
			rus:
				'Ключи, используемые в массивах, должны быть уникальными среди своих собратьев.',
			end: 'Keys used within arrays should be unique among their siblings.',
		},
		{
			rus: 'Однако ключи не должны быть глобально уникальными.',
			end: 'However keys don’t need to be globally unique.',
		},
		{
			rus: 'Ключи служат подсказками для React, но они не передаются вашим компонентам.',
			end: 'Keys serve as a hint to React but they don’t get passed to your components.',
		},
		{
			rus:
				'Элементы HTML-формы работают немного иначе, чем другие DOM элементы в Ракте, потому что элементы формы, естественно, держат некоторое внутренние состояние.',
			end:
				'HTML form elements work a little bit differently from other DOM elements in React, because form elements naturally keep some internal state.',
		},
		{
			rus:
				'В большинстве случаев удобно иметь функцию JavaScript, которая обрабатывает submit формы и имеет доступ к данным, которые пользователь ввел в форму.',
			end:
				'In most cases, it’s convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form.',
		},
		{
			rus:
				'Cтандартный способ достижения этого является техника, называемая "контролируемые компоненты',
			end:
				'The standard way to achieve this is with a technique called "controlled components".',
		},
		{
			rus:
				'Form элементы, такие как <ввод>, блок <textarea> и <Select> обычно поддерживают свой собственный state и обновляют его на основе пользовательского ввода.',
			end:
				'Form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input.',
		},
		{
			rus:
				'В React изменяемое состояние обычно хранится в state property компонентов, и обновляется только при выполнении функция setstate().',
			end:
				'In React, mutable state is typically kept in the state property of components, and only updated with setState().',
		},
		{
			rus:
				'Мы можем объединить два способа, делая React state "единым источником правды".',
			end:
				'We can combine the two by making the React state be the "single source of truth".',
		},
		{
			rus:
				'Элемент формы input, значение которого контролируется React таким способом называется "контролируемый компонентом".',
			end:
				'An input form element whose value is controlled by React in this way is called a "controlled component".',
		},
	],
	oldDictionary2: [ { rus: '', end: '' } ],
};

export default dictionaries;
