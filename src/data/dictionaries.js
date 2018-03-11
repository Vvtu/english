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
	//  { id:'1', rus:'Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? ', eng:'Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? '},
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
		{ rus: 'знать', eng: 'know, knew, known' }, //////////////////////////////////////
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
				'React имеет мощную модель композиции, и мы рекомендуем использовать композицию вместо наследования для  переиспользования кода между компонентами.',
			eng:
				'React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.',
		},
		{
			rus:
				'В этом разделе мы рассмотрим несколько проблем, где разработчики (новички в Реакте) часто используют наследование, и показать, как мы можем решить эти проблеммы композицией.',
			eng:
				'In this section, we will consider a few problems where developers new to React often reach for inheritance, and show how we can solve them with composition.',
		},
		{
			rus:
				'Мы рекомендуем, чтобы такие компоненты использовали специальный проп children, чтобы передать элементы детей непосредственно в их вывод.',
			eng:
				'We recommend that such components use the special children prop to pass children elements directly into their output.',
		},

		{
			rus:
				'Иногда мы думаем о компонентах, как об “особых случаях” других компонентов. Например, можно сказать, что WelcomeDialog - это особый случай диалога.',
			eng:
				'Sometimes we think about components as being “special cases” of other components. For example, we might say that a WelcomeDialog is a special case of Dialog.',
		},
		{
			rus:
				'На Facebook, мы используем Реакт в тысячях компонентов, и мы не нашли каких-либо полезных случаев, где мы бы рекомендовали создание компонентной иерархии наследования.',
			eng:
				'At Facebook, we use React in thousands of components, and we haven’t found any use cases where we would recommend creating component inheritance hierarchies.',
		},
		{
			rus:
				'Пропс и композиция дают вам всю гибкость, необходимую для настройки внешнего вида и поведения компонента явным и безопасным способом.',
			eng:
				'Props and composition give you all the flexibility you need to customize a component’s look and behavior in an explicit and safe way.',
		},
		{
			rus:
				'Помните, что компоненты могут принимать произвольные элементы, включая примитивные значения, Реакт элементы или функции.',
			eng:
				'Remember that components may accept arbitrary props, including primitive values, React elements, or functions.',
		},
		{
			rus:
				'В Реакте это также достигается за счет композиции, где более “специфический” компонент рендерит более “универсальный” и настраивает его с помощью пропс.',
			eng:
				'In React, this is also achieved by composition, where a more “specific” component renders a more “generic” one and configures it with props.',
		},
		{
			rus:
				'Одна из многих замечательных частей Реакта это, как он заставляет думать о приложениях, как вы строите их.',
			eng:
				'One of the many great parts of React is how it makes you think about apps as you build them. ',
		},
		{
			rus:
				'В этом документе мы проведем вас через мыслительный процесс построения таблицы данных продукта с возможностью поиска с помощью React.',
			eng:
				'In this document, we’ll walk you through the thought process of building a searchable product data table using React.',
		},
		{
			rus:
				'Первое, что вы хотите сделать, это нарисовать коробки вокруг каждого компонента (и субкомпонента) в моке и дать им всем имена.',
			eng:
				'The first thing you’ll want to do is to draw boxes around every component (and subcomponent) in the mock and give them all names.',
		},
		{
			rus:
				'Если вы работаете с дизайнером, они, возможно, уже это сделали, так что поговорите с ними.',
			eng:
				'If you’re working with a designer, they may have already done this, so go talk to them.',
		},
		{
			rus: 'Их имена слоев в Photoshop могут стать именами ваших Реакт компонентов.',
			eng:
				'Their Photoshop layer names may end up being the names of your React components.',
		},
		{
			rus:
				'Но откуда узнать, что должно быть отдельным компонентом? Просто используйте те же методы для определения, как если вы должны создать новую функцию или объект.',
			eng:
				'But how do you know what should be its own component? Just use the same techniques for deciding if you should create a new function or object.',
		},
		{
			rus:
				'Одна из таких техник - принцип единой ответственности, то есть компонент должен в идеале делать только одну вещь.',
			eng:
				'One such technique is the single responsibility principle, that is, a component should ideally only do one thing.',
		},
		{
			rus:
				'Если он продолжает расти, он должен быть декомпозирован на более мелкие компоненты.',
			eng: 'If it ends up growing, it should be decomposed into smaller subcomponents.',
		},
	],

	oldDictionary2: [
		{
			rus:
				'Часто несколько компонентов должны отражать одни и те же изменяющиеся данные.',
			eng: 'Often, several components need to reflect the same changing data.',
		},
		{
			rus: 'мы рекомендуем поднятие общего состояния до их ближайшего общего предка.',
			eng: 'We recommend lifting the shared state up to their closest common ancestor.',
		},
		{
			rus:
				'В этом разделе мы создадим температурный калькулятор, который вычислит, будет ли вода кипеть при заданной температуре.',
			eng:
				'In this section, we will create a temperature calculator that calculates whether the water would boil at a given temperature.',
		},
		{
			rus:
				'"BoilingVerdict" компонент принимает температуру по Цельсию в качестве prop, и печатает, является ли это достаточно, чтобы вскипятить воду.',
			eng:
				'"BoilingVerdict" component accepts the celsius temperature as a prop, and prints whether it is enough to boil the water.',
		},
		{
			rus:
				'Далее мы создадим компонент под названием калькулятор. Он рендерит <input>, который позволяет ввести температуру и сохраняет ее значение в this.state.temperature.',
			eng:
				'Next, we will create a component called Calculator. It renders an <input> that lets you enter the temperature, and keeps its value in this.state.temperature.',
		},
		{
			rus:
				'Наше новое требование, что помимо ввода по Цельсию, мы предоставляем ввод по Фаренгейту, и они синхронизируются.',
			eng:
				'Our new requirement is that, in addition to a Celsius input, we provide a Fahrenheit input, and they are kept in sync.',
		},
		{
			rus:
				'У нас есть два инпута, но когда вы вводите температуру в одном из них, другой не обновляется.',
			eng:
				'We have two inputs now, but when you enter the temperature in one of them, the other doesn’t update.',
		},
		{
			rus: 'Это противоречит нашему требованию: мы хотим держать их в синхронизации.',
			eng: 'This contradicts our requirement: we want to keep them in sync.',
		},
		{
			rus:
				'Когда мы обновляем инпут по Цельсию, по инпут по Фаренгейту должен отражать сконвертированную температуру, и наоборот.',
			eng:
				'When we update the Celsius input, the Fahrenheit input should reflect the converted temperature, and vice versa.',
		},
		{
			rus:
				'В React шеринг состояние достигается путем перемещения его к ближайшему общему предку компонентов, которые в нем нуждаются. Это называется "подъем состояния вверх".',
			eng:
				'In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called "lifting state up".',
		},
		{
			rus: 'Мы знаем, что props доступны только для чтения.',
			eng: 'We know that props are read-only.',
		},
		{
			rus:
				'Когда температура была в локальном стейте, TemperatureInput мог бы просто вызвать this.setstate (), чтобы изменить ее.',
			eng:
				'When the temperature was in the local state, the TemperatureInput could just call this.setState() to change it.',
		},
		{
			rus: 'Мы могли бы сохранить значение обоих входов, но это оказывается ненужным.',
			eng:
				'We could have stored the value of both inputs but it turns out to be unnecessary.',
		},
		{
			rus:
				'Достаточно хранить значение самого последнего измененого инпута, и шкалу, которую он представляет.',
			eng:
				'It is enough to store the value of the most recently changed input, and the scale that it represents.',
		},
		{
			rus:
				'Входные данные остаются синхронизированными, так как их значения вычисляются из одного состояния.',
			eng:
				'The inputs stay in sync because their values are computed from the same state.',
		},
		{
			rus:
				'Должен быть единый "источник истины" для любых данных, которые изменяются в приложении React.',
			eng:
				'There should be a single "source of truth" for any data that changes in a React application.',
		},
		//  https://reactjs.org/docs/lifting-state-up.html

		{
			rus:
				'В приведенном ниже коде  мы используем JavaScript map функцию, чтобы сделать массив чисел и удвоить их значения.',
			eng:
				'Given the code below, we use the "map" function to take an array of numbers and double their values.',
		},
		{
			rus: 'Ниже, мы проходим циклом по массиву чисел, используя JavaScript map функцию.',
			eng: 'Below, we loop through the numbers array using the JavaScript "map" function',
		},
		{
			rus:
				'При выполнении этого кода будет выдано предупреждение о том, что должен быть предоставлен ключ для элементов списка.',
			eng:
				'When you run this code, you’ll be given a warning that a key should be provided for list items.',
		},
		{
			rus:
				'Key - спецальный строковый атрибут, который вам нужно включать при создании списков элементов.',
			eng:
				'A "key" is a special string attribute you need to include when creating lists of elements.',
		},
		{
			rus:
				'Ключи помогают идентифицировать, какие элементы были изменены, добавлены или удалены.',
			eng:
				'Keys help React identify which items have changed, are added, or are removed.',
		},
		{
			rus:
				'Ключи должны быть заданы элементам внутри массива, чтобы дать элементам стабильную идентификацию.',
			eng:
				'Keys should be given to the elements inside the array to give the elements a stable identity.',
		},
		{
			rus:
				'Лучший способ выбрать key - использовать строку, которая однозначно идентифицирует элемент списка среди своих собратьев.',
			eng:
				'The best way to pick a key is to use a string that uniquely identifies a list item among its siblings.',
		},
		{
			rus: 'Чаще всего вы будете использовать IDs из ваших данных в качестве ключей.',
			eng: 'Most often you would use IDs from your data as keys.',
		},
		{
			rus:
				'Мы не рекомендуем использовать индексы для ключей, если порядок элементов может измениться.',
			eng: 'We don’t recommend using indexes for keys if the order of items may change.',
		},
		{
			rus:
				'Если вы решите не назначать явный ключ элементам списка, то React будет по умолчанию использовать индексы в качестве ключей.',
			eng:
				'If you choose not to assign an explicit key to list items then React will default to using indexes as keys.',
		},
		{
			rus:
				'Ключи, используемые в массивах, должны быть уникальными среди своих собратьев.',
			eng: 'Keys used within arrays should be unique among their siblings.',
		},
		{
			rus: 'Однако ключи не должны быть глобально уникальными.',
			eng: 'However keys don’t need to be globally unique.',
		},
		{
			rus: 'Ключи служат подсказками для React, но они не передаются вашим компонентам.',
			eng: 'Keys serve as a hint to React but they don’t get passed to your components.',
		},
		{
			rus:
				'Элементы HTML form работают немного иначе, чем другие DOM элементы в Ракте, потому что элементы формы, естественно, держат некоторое внутренние состояние.',
			eng:
				'HTML form elements work a little bit differently from other DOM elements in React, because form elements naturally keep some internal state.',
		},
		{
			rus:
				'В большинстве случаев удобно иметь функцию JavaScript, которая обрабатывает submit формы и имеет доступ к данным, которые пользователь ввел в форму.',
			eng:
				'In most cases, it’s convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form.',
		},
		{
			rus:
				'Стандартный способ достижения этого является техника, называемая "контролируемые компоненты".',
			eng:
				'The standard way to achieve this is with a technique called "controlled components".',
		},
		{
			rus:
				'Form элементы, такие как <ввод>, блок <textarea> и <Select> обычно поддерживают свой собственный state и обновляют его на основе пользовательского ввода.',
			eng:
				'Form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input.',
		},
		{
			rus:
				'В React изменяемое состояние обычно хранится в state property компонентов, и обновляется только при выполнении функции setstate().',
			eng:
				'In React, mutable state is typically kept in the state property of components, and only updated with setState().',
		},
		{
			rus:
				'Мы можем объединить два способа, делая React state "единым источником правды".',
			eng:
				'We can combine the two by making the React state be the "single source of truth".',
		},
		{
			rus:
				'Элемент формы input, значение которого контролируется React, таким способом называется "контролируемый компонентом".',
			eng:
				'An input form element whose value is controlled by React in this way is called a "controlled component".',
		},
	],
};

export default dictionaries;
