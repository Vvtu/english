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
			rus: 'ОК, мы определили, что такое минимальный набор состояния приложения.',
			eng: "OK, so we've identified what the minimal set of app state is.",
		},
		{
			rus:
				'Далее нам нужно определить, какой компонент мутирует или владеет этим состоянием.',
			eng: 'Next, we need to identify which component mutates, or owns, this state.',
		},
		{
			rus: 'Запомните: React это односторонний поток данных по иерархии компонентов.',
			eng: 'Remember: React is all about one-way data flow down the component hierarchy.',
		},
		{
			rus: 'Может быть, не сразу ясно, какой компонент должен владеть каким состоянием.',
			eng: 'It may not be immediately clear which component should own what state.',
		},
		{
			rus:
				'Это часто самая сложная часть для понимания новичками, поэтому следуйте этим шагам, чтобы понять это.',
			eng:
				'This is often the most challenging part for newcomers to understand, so follow these steps to figure it out.',
		},
		{
			rus:
				'Определите каждый компонент, который отображает что-то на основе этого состояния.',
			eng: 'Identify every component that renders something based on that state.',
		},
		{
			rus:
				'Найти общий компонент владельца (один компонент выше всех компонентов, которым нужно состояние в иерархии).',
			eng:
				'Find a common owner component (a single component above all the components that need the state in the hierarchy).',
		},
		{
			rus:
				'Стейт должен принадлежать либо общему владельцу, либо другому компоненту, находящемуся выше в иерархии.',
			eng:
				'Either the common owner or another component higher up in the hierarchy should own the state.',
		},
		{
			rus:
				'Если Вы не можете найти компонент, где имеет смысл владеть состоянием, создайте новый компонент просто для удержания состояния и добавьте его где-то в иерархии над компонентом общего владельца.',
			eng:
				"If you can't find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.",
		},
		{
			rus: 'Добавить обратный поток данных.',
			eng: 'Add inverse data flow.',
		},
		// {
		// 	rus: 'До сих пор мы создали приложение, которое корректно рендерится как функция от props и state, стекающих вниз по иерархии.',
		// 	eng: 'So far, we\'ve built an app that renders correctly as a function of props and state flowing down the hierarchy.'
		// },
		// {
		// 	rus: 'Теперь пришло время поддерживать поток данных следующих в другом направлении: компоненты формы глубоко в иерархии должны обновлять state в другом компоненте.',
		// 	eng: 'Now it\'s time to support data flowing the other way: the form components deep in the hierarchy need to update the state in the other component.'
		// },
		// {
		// 	rus: '',
		// 	eng: 'React makes this data flow explicit to make it easy to understand how your program works, but it does require a little more typing than traditional two-way data binding.'
		// },

		// {
		// 	rus: '',
		// 	eng: 'We want to make sure that whenever the user changes the form, we update the state to reflect the user input.'
		// },
		// {
		// 	rus: '',
		// 	eng: 'Since components should only update their own state, FilterableProductTable will pass callbacks to SearchBar that will fire whenever the state should be updated.'
		// },
		// {
		// 	rus: '',
		// 	eng: 'Though this sounds complex, it\'s really just a few lines of code.'
		// },
		// {
		// 	rus: '',
		// 	eng: 'And it\'s really explicit how your data is flowing throughout the app.'
		// },
		// {
		// 	rus: '',
		// 	eng: 'Hopefully, this gives you an idea of how to think about building components and applications with React.'
		// },
		// {
		// 	rus: '',
		// 	eng: 'While it may be a little more typing than you\'re used to'
		// },
		// {
		// 	rus: '',
		// 	eng: 'Remember that code is read far more than it\'s written, and it\'s extremely easy to read this modular, explicit code.'
		// },
		// {
		// 	rus: '',
		// 	eng: 'As you start to build large libraries of components, you\'ll appreciate this explicitness and modularity.'
		// },
		// {
		// 	rus: '',
		// 	eng: 'And with code reuse, your lines of code will start to shrink.'
		// },
	],

	oldDictionary2: [
		{
			rus:
				'Поскольку вы часто отображаете JSON модель данных пользователю, вы обнаружите...',
			eng:
				'Since you’re often displaying a JSON data model to a user, you’ll find that...',
		},
		{
			rus:
				'Если ваша модель была построена правильно, ваш  UI (и, следовательно, ваша структура компонентов) будет хорошо отображаться.',
			eng:
				'If your model was built correctly, your UI (and therefore your component structure) will map nicely.',
		},
		{
			rus:
				'Это потому, что модели пользовательского интерфейса и данных, как правило, придерживаются одной и той же информационной архитектуры.',
			eng:
				'That’s because UI and data models tend to adhere to the same information architecture.',
		},
		{
			rus:
				'Работа разделения пользовательского интерфейса на компоненты часто тривиальна.',
			eng: 'The work of separating your UI into components is often trivial.',
		},
		{
			rus:
				'Просто разбейте его на компоненты, которые представляют собой ровно одну часть вашей модели данных.',
			eng:
				'Just break it up into components that represent exactly one piece of your data model.',
		},
		{
			rus:
				'Теперь, когда мы определили компоненты в нашем макете, давайте организуем их в иерархию.',
			eng:
				'Now that we’ve identified the components in our mock, let’s arrange them into a hierarchy.',
		},
		{
			rus:
				'Компоненты, которые появляются в другом компоненте макета, должны отображаться как дочерние в иерархии.',
			eng:
				'Components that appear within another component in the mock should appear as a child in the hierarchy.',
		},
		{
			rus:
				'Самый простой способ - создать версию, которая принимает вашу модель данных и отображает UI, но не имеет интерактивности.',
			eng:
				'The easiest way is to build a version that takes your data model and renders the UI but has no interactivity.',
		},
		{
			rus:
				'Лучше всего отделить эти процессы, потому что построение статической версии требует много набора текста и никакого мышления, а добавление интерактивности требует много мышления и не много набора текста.',
			eng:
				'It’s best to decouple these processes because building a static version requires a lot of typing and no thinking, and adding interactivity requires a lot of thinking and not a lot of typing.',
		},
		{
			rus:
				'Чтобы создать статическую версию приложения, которая отображает модель данных, вы захотите создать компоненты, которые повторно используют другие компоненты и передают данные с помощью props.',
			eng:
				'To build a static version of your app that renders your data model, you’ll want to build components that reuse other components and pass data using props.',
		},
		{
			rus: 'Props - это способ передачи данных от родителя ребенку.',
			eng: 'props are a way of passing data from parent to child.',
		},
		{
			rus:
				'Если вы знакомы с концепцией состояния, не используйте state для создания этой статической версии.',
			eng:
				'If you’re familiar with the concept of state, don’t use state at all to build this static version.',
		},
		{
			rus:
				'Состояние зарезервировано только для интерактивности, то есть данных, которые меняются с течением времени.',
			eng:
				'State is reserved only for interactivity, that is, data that changes over time.',
		},
		{
			rus:
				'В более простых примерах обычно легче идти сверху вниз, а в более крупных проектах легче идти снизу вверх и писать тесты по мере сборки.',
			eng:
				'In simpler examples, it’s usually easier to go top-down, and on larger projects, it’s easier to go bottom-up and write tests as you build.',
		},
		{
			rus:
				'у компонентов будут только методы render(), так как это статическая версия вашего приложения',
			eng:
				'The components will only have render methods since this is a static version of your app.',
		},
		{
			rus:
				'Если внести изменения в базовую модель данных и вызвать ReactDOM.render снова, пользовательский интерфейс будет обновлен.',
			eng:
				' If you make a change to your underlying data model and call ReactDOM.render again, the UI will be updated.',
		},

		{
			rus:
				'Односторонний поток данных React (также называемый односторонней привязкой) сохраняет все модульным и быстрым',
			eng:
				'React’s one-way data flow (also called one-way binding) keeps everything modular and fast.',
		},
		{
			rus: "Существует два типа 'модельных' данных в React: props и state.",
			eng: "There are two types of 'model' data in React: props and state.",
		},
		{
			rus:
				'Чтобы сделать пользовательский интерфейс интерактивным, необходимо иметь возможность инициировать изменения в базовой модели данных. Реакт делает это легко со стейтом.',
			eng:
				'To make your UI interactive, you need to be able to trigger changes to your underlying data model. React makes this easy with state.',
		},
		{
			rus:
				'Чтобы правильно построить приложение, сначала нужно подумать о минимальном наборе изменяемых состояний, необходимых вашему приложению.',
			eng:
				'To build your app correctly, you first need to think of the minimal set of mutable state that your app needs.',
		},
		{
			rus: 'Ключ здесь DRY: не повторяй себя.',
			eng: 'The key here is DRY: Don’t Repeat Yourself.',
		},
		{
			rus:
				'Выясните абсолютное минимальное представление состояния, в котором нуждается ваше приложение, и вычисляйте все остальное, что вам будет нужно, по требованию.',
			eng:
				'Figure out the absolute minimal representation of the state your application needs and compute everything else you need on-demand.',
		},
		{
			rus: 'Просто задайте три вопроса о каждом фрагменте данных',
			eng: 'Simply ask three questions about each piece of data:',
		},
		{
			rus: 'Это передается от родителя через props? Если да, то это, вероятно, не state.',
			eng: 'Is it passed in from a parent via props? If so, it probably isn’t state.',
		},
		{
			rus:
				'Остается ли это неизменным с течением времени? Если да, то это, вероятно, не state.',
			eng: 'Does it remain unchanged over time? If so, it probably isn’t state.',
		},
		{
			rus:
				'Можете ли вы вычислить его на основе любого другого state или props в вашем компоненте? Если да, то это не state.',
			eng:
				'Can you compute it based on any other state or props in your component? If so, it isn’t state.',
		},
		{
			rus: 'Шаг 4: Определите, где должен быть Ваш state.',
			eng: 'Step 4: Identify Where Your State Should Live.',
		},
	],
};

export default dictionaries;
