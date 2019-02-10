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
		{
			rus: 'гид',
			eng: 'guide',
		},
		{
			rus: 'маршрут',
			eng: 'route',
		},

		{
			rus: 'заснеженные',
			eng: 'show-capped',
		},
		{
			rus: 'гора',
			eng: 'mountain',
		},
		{
			rus: 'вулкан',
			eng: 'vocano',
		},
		{
			rus: 'не могу дождаться',
			eng: "can't wait",
		},
		{
			rus: 'тур',
			eng: 'tour',
		},
		{
			rus: 'виды',
			eng: 'sights',
		},
		{
			rus: 'форт',
			eng: 'fort',
		},
		{
			rus: 'жалко',
			eng: "it's a pity",
		},
		{
			rus: 'блошиный рынок',
			eng: 'flea market',
		},
		{
			rus: 'ремесло',
			eng: 'crafts',
		},
		{
			rus: 'перекус',
			eng: 'snack',
		},
		{
			rus: 'искать',
			eng: 'look for',
		},
		{
			rus: 'подарок',
			eng: 'present',
		},
		{
			rus: 'успех',
			eng: 'success',
		},
		{
			rus: 'вместе',
			eng: 'together',
		},
		{
			rus: 'дорогой',
			eng: 'expensive',
		},
		{
			rus: 'гадать',
			eng: 'guess',
		},
		{
			rus: 'верхний',
			eng: 'top',
		},
		{
			rus: 'великолепный',
			eng: 'gorgerous',
		},
		{
			rus: 'полцены',
			eng: 'half price',
		},
		{
			rus: 'соотвествовать',
			eng: 'to match',
		},
		{
			rus: 'конюшни',
			eng: 'stables',
		},
		{
			rus: 'палатки',
			eng: 'stalls',
		},
		{
			rus: 'подержаный',
			eng: 'second-hand',
		},
		{
			rus: 'по выгодным ценам',
			eng: 'at bargain prices',
		},
		{
			rus: 'ресторанные дворики',
			eng: 'food courts',
		},
		{
			rus: 'следовать',
			eng: 'follow',
		},
		{
			rus: 'карта',
			eng: 'map',
		},
		{
			rus: 'заблудиться',
			eng: 'get lost',
		},
		{
			rus: 'деликатес',
			eng: 'delicacy',
		},
		{
			rus: 'жареные насекомые',
			eng: 'fried insects',
		},
		{
			rus: 'вкусный',
			eng: 'delicious',
		},
		{
			rus: 'ананасовый сок',
			eng: 'pineapple juce',
		},
		{
			rus: 'традиционный',
			eng: 'traditional',
		},
		{
			rus: 'включает',
			eng: 'includes',
		},
		{
			rus: 'пропаренный',
			eng: 'steamed',
		},
		{
			rus: 'хорошие манеры',
			eng: 'good manners',
		},
		{
			rus: 'важный',
			eng: 'important',
		},
		{
			rus: 'жареные тосты',
			eng: 'fried toast',
		},
		{
			rus: 'распространеный завтрак',
			eng: 'breakfast spread',
		},
		{
			rus: 'яичница',
			eng: 'scrambled eggs',
		},
		{
			rus: 'доступный',
			eng: 'available',
		},
		{
			rus: 'низкая температура',
			eng: 'low temperature',
		},
		{
			rus: 'охарактеризованный',
			eng: 'characterise',
		},
		{
			rus: 'существует',
			eng: 'exists',
		},
		{
			rus: 'последний',
			eng: 'last',
		},
		{
			rus: 'достичь',
			eng: 'reach',
		},
		{
			rus: 'блестеть',
			eng: 'shine',
		},
		{
			rus: 'полночь',
			eng: 'midnight',
		},
		{
			rus: 'солнце',
			eng: 'sun',
		},
		{
			rus: 'темный',
			eng: 'dark',
		},
		{
			rus: 'падение',
			eng: 'drop',
		},
		{
			rus: 'выжить',
			eng: 'survive',
		},
		{
			rus: 'сухой',
			eng: 'dry',
		},
		{
			rus: 'ниже нуля',
			eng: 'below freesing',
		},
		{
			rus: 'держать',
			eng: 'hold in',
		},
		{
			rus: 'бассейн',
			eng: 'pool',
		},
		{
			rus: 'театр',
			eng: 'theatre',
		},
		{
			rus: 'пляж',
			eng: 'beach',
		},
		{
			rus: 'парк',
			eng: 'park',
		},
		{
			rus: 'зоопарк',
			eng: 'zoo',
		},
		{
			rus: 'гимнастика',
			eng: 'gym',
		},
		{
			rus: 'библиотека',
			eng: 'library',
		},
		{
			rus: 'ресторан быстрого питания',
			eng: 'fast food restaurant',
		},
		{
			rus: 'оперный театр',
			eng: 'opera house',
		},
		{
			rus: 'аквариум',
			eng: 'aquarium',
		},
		{
			rus: 'супермаркет',
			eng: 'supermarket',
		},
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
				'Наша первоочередная задача состоит в том, чтобы удовлетворить потребности клиентов в своевременной и непрерывной поставке ценного программного обеспечения.',
			eng:
				'Our highest priority is to satisfy the customer trough early and continuous delivery of valueable software.',
		},
		{
			rus:
				'Приветствуются изменения требований, даже на поздних стадиях разработки. Гибкие процессы используют изменения для конкурентного преимущества клиента.',
			eng:
				"Welcome changing requirements, even late in development. Agile processes harness change for the customer's competive advantage.",
		},
		{
			rus:
				'Поставляйте рабочее программное обеспечение часто, от нескольких недель до нескольких месяцев, с предпочтением к более коротким временным рамкам.',
			eng:
				'Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.',
		},
		{
			rus:
				'Заказчики и разработчики должны ежедневно работать вместе на протяжении всего проекта.',
			eng:
				'Business people and developers must work together daily throughout the project.',
		},
		{
			rus:
				'Стройте проекты вокруг мотивированных людей. Дайте им окружение и поддержку, в которой они нуждаются, и доверяйте им, чтобы работа была сделана.',
			eng:
				'Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.',
		},
		{
			rus:
				'Наиболее эффективным и действенным способом передачи информации команде разработчиков и внутри нее является личная беседа.',
			eng:
				'The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.',
		},
		{
			rus: 'Рабочая программа-основной критерий прогресса.',
			eng: 'Working software is the primary measure of progress.',
		},
		{
			rus:
				'Гибкие процессы способствуют устойчивому развитию. Спонсоры, разработчики и пользователи должны иметь возможность поддерживать постоянный темп на неопределенный срок.',
			eng:
				'Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.',
		},
		{
			rus:
				'Постоянное внимание к техническому совершенству и хорошему дизайну повышает гибкость.',
			eng:
				'Continuous attention to technical excellence and good design enhances agility.',
		},
		{
			rus:
				'Простота - искусство максимизации объема незавершенной работы - имеет важное значение.',
			eng: 'Simplicity – the art of maximizing the amount of work not done–is essential.',
		},
		{
			rus:
				'Лучшие архитектуры, требования и проекты появляются из самоорганизующихся команд.',
			eng:
				'The best architectures, requirements, and designs emerge from self-organizing teams.',
		},
		{
			rus:
				'Через регулярные промежутки времени, команда размышляет о том, как стать более эффективной, подстраивает и корректирует свое поведение соответствующим образом.',
			eng:
				'At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.',
		},

		{
			rus:
				'Scrum-это framework, в котором люди могут решать сложные адаптивные проблемы, продуктивно и творчески доставляя продукты максимально возможной ценности',
			eng:
				'Scrum is a framework within which people can address complex adaptive problems, while productively and creatively delivering products of the highest possible value.',
		},
		{
			rus:
				'Scrum-это не методология. Scrum реализует научный метод эмпиризма. Scrum заменяет запрограммированный алгоритмический подход эвристическим, с уважением к людям и самоорганизацией для решения непредсказуемости и решения сложных проблем.',
			eng:
				'Scrum is not a methodology. Scrum implements the scientific method of empiricism. Scrum replaces a programmed algorithmic approach with a heuristic one, with respect for people and self-organization to deal with unpredictability and solving complex problems.',
		},
		{
			rus:
				'Scrum не является процессом, техникой или окончательным методом. Скорее, это framework, в которыом вы можете использовать различные процессы и методы.',
			eng:
				'Scrum is not a process, technique, or definitive method. Rather, it is a framework within which you can employ various processes and techniques.',
		},
		{
			rus:
				'Framework Scrum состоит из команд Scrum и связанных с ними ролей, событий, артефактов и правил. Каждый компонент в рамках служит определенной цели и имеет важное значение для успеха и использования Скрама.',
			eng:
				'The Scrum framework consists of Scrum Teams and their associated roles, events, artifacts, and rules. Each component within the framework serves a specific purpose and is essential to Scrum’s success and usage.',
		},
		{
			rus:
				'Правила Scrum связывают вместе роли, события и артефакты, управляя отношениями и взаимодействием между ними. Правила Scrum описаны всюду по телу этого документа.',
			eng:
				'The rules of Scrum bind together the roles, events, and artifacts, governing the relationships and interaction between them. The rules of Scrum are described throughout the body of this document.',
		},

		{
			rus:
				'Мы выявляем лучшие способы разработки программного обеспечения, делая это и помогая другим делать это.',
			eng:
				'We are uncovering better ways of developing software by doing it and helping others do it.',
		},
		{
			rus: 'Через эту работу мы пришли к ценности.',
			eng: 'Through this work we have come to value.',
		},
		{
			rus: 'Люди и взаимодействия выше, чем процессы и инструменты',
			eng: 'Individuals and interactions over processes and tools.',
		},
		{
			rus: 'Работающее software выше, чем всеобъемлющая документация.',
			eng: 'Working software over comprehensive documentation.',
		},
		{
			rus: 'Сотрудничество с заказчиком выше, чем обсуждение условий контракта.',
			eng: 'Customer collaboration over contract negotiation.',
		},

		{
			rus: 'Реагирование на изменения выше, чем следование плану.',
			eng: 'Responding to change over following a plan.',
		},

		{
			rus: '"пятая ценность": мудрость и здравый смысл превыше знаний и опыта.',
			eng: "'The fifth value':  Wisdom and common sense over knowledge and expertise.",
		},
		{
			rus:
				'То есть, в то время как есть ценность в элементах справа, мы ценим элементы слева больше.',
			eng:
				'That is, while there is value in the items on the right, we value the items on the left more.',
		},

		// https://reactjs.org/docs/reconciliation.html
		{
			rus:
				'Компонент более высокого порядка (HOC) - это продвинутая техника в React для повторного использования компонентной логики. Hoc не являются частью React API, как таковые. Это паттерны, которые возникают из композиционной природы React.',
			eng:
				'A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.',
		},
		{
			rus:
				'Конкретно, компонент более высокого порядка является функцией, которая берет компонент и возвращает новый компонент.',
			eng:
				'Concretely, a higher-order component is a function that takes a component and returns a new component.',
		},
		{
			rus:
				'HOCs распространены в сторонних библиотеках React, таких как connect Redux и Relay’s createFragmentContainer.',
			eng:
				'HOCs are common in third-party React libraries, such as Redux’s connect and Relay’s createFragmentContainer.',
		},
		{
			rus:
				'В этом документе мы обсудим, почему компоненты более высокого порядка полезны и как написать свои собственные.',
			eng:
				'In this document, we’ll discuss why higher-order components are useful, and how to write your own.',
		},
		{
			rus:
				'Компоненты-основная единица повторного использования кода в React. Однако, вы обнаружите, что некоторые патерны не подходят для традиционных компонентов.',
			eng:
				'Components are the primary unit of code reuse in React. However, you’ll find that some patterns aren’t a straightforward fit for traditional components.',
		},
		{
			rus:
				'Мы хотим абстракцию, которая позволяет определить эту логику в одном месте и разделить ее между многими компонентами.',
			eng:
				'We want an abstraction that allows us to define this logic in a single place and share it across many components.',
		},
		{
			rus: 'Здесь компоненты более высокого порядка превосходят все.',
			eng: 'This is where higher-order components excel.',
		},
		{
			rus:
				'Обратите внимание, что HOC не изменяет входной компонент и не использует наследование для копирования его поведения.',
			eng:
				'Note that a HOC doesn’t modify the input component, nor does it use inheritance to copy its behavior.',
		},
		{
			rus:
				'Скорее, HOC составляет исходный компонент, заключая его в компонент контейнера.',
			eng:
				'Rather, a HOC composes the original component by wrapping it in a container component.',
		},
		{
			rus: 'HOC-это чистая функция с нулевыми побочными эффектами.',
			eng: 'A HOC is a pure function with zero side-effects.',
		},
		{
			rus:
				'И это все! Обернутый компонент получает все реквизиты контейнера вместе с новым реквизитом, данные, которые он использует для визуализации своих выходных данных.',
			eng:
				'And that’s it! The wrapped component receives all the props of the container, along with a new prop, data, which it uses to render its output.',
		},
		{
			rus:
				'HOC не имеет отношения к тому, как и почему используются данные, и обернутый компонент не связан с тем, откуда пришли данные.',
			eng:
				'The HOC isn’t concerned with how or why the data is used, and the wrapped component isn’t concerned with where the data came from.',
		},
		{
			rus:
				'Как в компонентах, контракт между withSubscription и обернутым компонентом полностью основан на props.',
			eng:
				'Like components, the contract between withSubscription and the wrapped component is entirely props-based.',
		},
		{
			rus:
				'Это упрощает замену одного HOC на другой, если они предоставляют одинаковые props для обернутого компонента. Это может быть полезно, например, при изменении библиотек фетчинга данных.',
			eng:
				'This makes it easy to swap one HOC for a different one, as long as they provide the same props to the wrapped component. This may be useful if you change data-fetching libraries, for example.',
		},
		{
			rus: 'Не изменяйте исходный компонент. Используйте копозицию.',
			eng: 'Don’t Mutate the Original Component. Use Composition.',
		},
		{
			rus:
				'Вместо мутации HOCs следует использовать композицию, заключив входной компонент в компонент-контейнер.',
			eng:
				'Instead of mutation, HOCs should use composition, by wrapping the input component in a container component.',
		},
		{
			rus:
				'Этот HOC имеет ту же функциональность, что и мутирующая версия, избегая при этом возможности столкновений.',
			eng:
				'This HOC has the same functionality as the mutating version while avoiding the potential for clashes.',
		},
		{
			rus: 'Он одинаково хорошо работает с класс и функциональными компонентами.',
			eng: 'It works equally well with class and functional components.',
		},
		{
			rus:
				'И потому, что это чистая функция, он компонуем с другими hoc, или даже с самим собой.',
			eng:
				'And because it’s a pure function, it’s composable with other HOCs, or even with itself.',
		},
		{
			rus:
				'Возможно, вы заметили сходство между HOCs и паттерном, называемым контейнер-компоненты.',
			eng:
				'You may have noticed similarities between HOCs and a pattern called container components.',
		},
		{
			rus:
				'Контейнерные компоненты являются частью стратегии разделения ответственности между задачами высокого и низкого уровня.',
			eng:
				'Container components are part of a strategy of separating responsibility between high-level and low-level concerns.',
		},
		{
			rus:
				'Контейнеры управляют такими вещами, как подписки и состояние, и передают props компонентам, которые обрабатывают такие вещи, как рендеринг UI. HOCs используют контейнеры как часть их реализации.',
			eng:
				'Containers manage things like subscriptions and state, and pass props to components that handle things like rendering UI. HOCs use containers as part of their implementation.',
		},
		{
			rus:
				'HOCs можно рассматривать как параметризованные определения контейнер-компонента.',
			eng: 'You can think of HOCs as parameterized container component definitions.',
		},
		{
			rus: 'Соглашение: Передавать несвязанные props через обернутый компонент.',
			eng: 'Convention: Pass Unrelated Props Through to the Wrapped Component',
		},
		{
			rus: 'HOCs должны пропускать props, которые не связаны с его конкретной работой.',
			eng: 'HOCs should pass through props that are unrelated to its specific concern.',
		},
		{
			rus: 'Конвенция: максимизация Композиционности',
			eng: 'Convention: Maximizing Composability',
		},
		{
			rus:
				'Не все HOCs выглядят одинаково. Иногда они принимают только один аргумент, обернутый компонент. WithRouter.',
			eng:
				'Not all HOCs look the same. Sometimes they accept only a single argument, the wrapped component. WithRouter.',
		},
		{
			rus: 'Соглашение: Оберните отображаемоё имя для упрощения отладки.',
			eng: 'Convention: Wrap the Display Name for Easy Debugging.',
		},
		{
			rus:
				'Предостережения. Компоненты более высокого порядка имеют несколько предостережений, которые не сразу очевидны, если вы новичок в React.',
			eng:
				'Caveats. Higher-order components come with a few caveats that aren’t immediately obvious if you’re new to React.',
		},
		{
			rus:
				'Не используйте HOCs внутри метода рендеринга. Проблема здесь не только в производительности - перемонтирование компонента приводит к потере состояния этого компонента и всех его дочерних элементов.',
			eng:
				'Don’t Use HOCs Inside the render Method. The problem here isn’t just about performance — remounting a component causes the state of that component and all of its children to be lost.',
		},
		{
			rus:
				'Хотя соглашение для HOC - пропустить все props к обернутому компоненту, это не работает для ссылок. Это потому, что ref на самом деле не prop — как и key, он обрабатывается специально React-ом.',
			eng:
				'While the convention for higher-order components is to pass through all props to the wrapped component, this does not work for refs. That’s because ref is not really a prop — like key, it’s handled specially by React.',
		},

		{
			rus:
				'Термин "Render prop" относится к простой технике обмена кодом между компонентами React с использованием prop, значение которого является функцией.',
			eng:
				'The term "render prop" refers to a simple technique for sharing code between React components using a prop whose value is a function.',
		},
		{
			rus:
				'Компонент с Render prop принимает функцию, которая возвращает элемент React и вызывает его вместо реализации собственной логики render.',
			eng:
				'A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.',
		},
		{
			rus:
				'В этом документе мы обсудим, почему рендер props полезны, и как написать свои собственные.',
			eng:
				'In this document, we’ll discuss why render props are useful, and how to write your own.',
		},
		{
			rus: 'Используйте Render Props для Пересекающихся Задач',
			eng: 'Use Render Props for Cross-Cutting Concerns',
		},
		{
			rus:
				'Компоненты являются основной единицей переиспользования кода в React, но не всегда очевидно, как поделиться состоянием или поведением, которое один компонент инкапсулирует, с другими компонентами, которые нуждаются в том же состоянии.',
			eng:
				'Components are the primary unit of code reuse in React, but it’s not always obvious how to share the state or behavior that one component encapsulates to other components that need that same state.',
		},
		{
			rus:
				'Теперь вопрос: Как мы можем переиспользовать это поведение в другом компоненте?',
			eng: 'Now the question is: How can we reuse this behavior in another component?',
		},
		{
			rus:
				'Другими словами, если другой компонент должен знать о положении курсора, можем ли мы инкапсулировать это поведение, чтобы мы могли легко поделиться им с этим компонентом?',
			eng:
				'In other words, if another component needs to know about the cursor position, can we encapsulate that behavior so that we can easily share it with that component?',
		},
		{
			rus:
				'Теперь, вместо того, чтобы эффективно клонировать Mouse компонент и жестко кодировать что-то еще в его Render методе для решения для конкретного случая использования, мы предоставляем Render prop, который Mouse может использовать для динамического определения того, что он отображает.',
			eng:
				'Now, instead of effectively cloning the Mouse component and hard-coding something else in its render method to solve for a specific use case, we provide a render prop that Mouse can use to dynamically determine what it renders.',
		},
		{
			rus:
				'Более конкретно, Render prop-это функция prop, которую компонент использует, чтобы знать, что рендерить.',
			eng:
				'More concretely, a render prop is a function prop that a component uses to know what to render.',
		},
		{
			rus:
				'Этот метод делает поведение, которое нам нужно разделить, чрезвычайно портативным.',
			eng: 'This technique makes the behavior that we need to share extremely portable.',
		},
		{
			rus:
				'Чтобы получить такое поведение, отрисуйте Mouse с помощью Render prop, которая говорит ему, что отрисовать с текущим (x, y) курсора.',
			eng:
				'To get that behavior, render a <Mouse> with a render prop that tells it what to render with the current x, y of the cursor.',
		},
		{
			rus:
				'Одна интересной вещью о Render props, которую следуюет отметить, является то, что вы можете реализовать большинство компонентов более высокого порядка (HOC), используя обычный компонент с Render prop.',
			eng:
				'One interesting thing to note about render props is that you can implement most higher-order components (HOC) using a regular component with a render prop.',
		},
		{
			rus:
				'Таким образом, использование Render prop позволяет использовать любой шаблон.',
			eng: 'So using a render prop makes it possible to use either pattern.',
		},
		// {
		//   rus: '',
		//   eng:
		//     'It’s important to remember that just because the pattern is called "render props" you don’t have to use a prop named render to use this pattern. In fact, any prop that is a function that a component uses to know what to render is technically a "render prop".',
		// },
		// {
		//   rus: '',
		//   eng: 'Although the examples above use render, we could just as easily use the children prop!',
		// },
		// {
		//   rus: '',
		//   eng:
		//     'And remember, the children prop doesn’t actually need to be named in the list of "attributes" in your JSX element. Instead, you can put it directly inside the element!',
		// },
		// {
		//   rus: '',
		//   eng: 'You’ll see this technique used in the react-motion API.',
		// },
		// {
		//   rus: '',
		//   eng: 'Caveats. Be careful when using Render Props with React.PureComponent.',
		// },
		// {
		//   rus: '',
		//   eng:
		//     'Using a render prop can negate the advantage that comes from using React.PureComponent if you create the function inside a render method.',
		// },
		// {
		//   rus: '',
		//   eng:
		//     'This is because the shallow prop comparison will always return false for new props, and each render in this case will generate a new value for the render prop.',
		// },
		// {
		//   rus: '',
		//   eng:
		//     'To get around this problem, you can sometimes define the prop as an instance method, like so:',
		// },
		// {
		//   rus: '',
		//   eng:
		//     'In cases where you cannot define the prop statically (e.g. because you need to close over the component’s props and/or state) <Mouse> should extend React.Component instead.',
		// },

		{
			rus:
				'По умолчанию, при рекурсии на дочерних узлах DOM, React просто перебирает оба списка дочерних узлов одновременно и генерирует мутацию всякий раз, когда есть разница.',
			eng:
				'By default, when recursing on the children of a DOM node, React just iterates over both lists of children at the same time and generates a mutation whenever there’s a difference.',
		},
		{
			rus:
				'Когда у детей есть ключи, React использует ключ для сопоставления детей в исходном дереве с детьми в последующем дереве.',
			eng:
				'When children have keys, React uses the key to match children in the original tree with children in the subsequent tree.',
		},
		{
			rus:
				'На практике найти ключ обычно не сложно. Элемент, который вы собираетесь отобразить, может уже иметь уникальный ID, поэтому ключ может просто прийти из ваших данных.',
			eng:
				'In practice, finding a key is usually not hard. The element you are going to display may already have a unique ID, so the key can just come from your data.',
		},
		{
			rus:
				'Когда это не так, вы можете добавить новое свойство ID в свою модель или хэшировать некоторые части контента для создания ключа.',
			eng:
				'When that’s not the case, you can add a new ID property to your model or hash some parts of the content to generate a key.',
		},
		{
			rus:
				'Ключ должен быть уникальным только среди своих братьев и сестер, а не глобально уникальным.',
			eng: 'The key only has to be unique among its siblings, not globally unique.',
		},
		{
			rus:
				'Переупорядочивание может также вызвать проблемы с состоянием компонента, когда индексы используются в качестве ключей.',
			eng:
				'Reorders can also cause issues with component state when indexes are used as keys.',
		},
		{
			rus: 'Важно помнить, что алгоритм согласования - это деталь реализации.',
			eng:
				'It is important to remember that the reconciliation algorithm is an implementation detail.',
		},
		{
			rus:
				'React может перерендеривать все приложение на каждое действие; конечный результат будет одинаковым.',
			eng:
				'React could rerender the whole app on every action; the end result would be the same.',
		},
		{
			rus:
				'Чтобы быть ясным, rerender в этом контексте означает вызов render для всех компонентов, это не значит, что React размонтирует и перемонтирует их. Он будет применять только различия в соответствии с Правилами, изложенными в предыдущих разделах.',
			eng:
				'Just to be clear, rerender in this context means calling render for all components, it doesn’t mean React will unmount and remount them. It will only apply the differences following the rules stated in the previous sections.',
		},
		{
			rus:
				'Мы регулярно совершенствуем эвристику, чтобы ускорить общие случаи использования.',
			eng:
				'We are regularly refining the heuristics in order to make common use cases faster.',
		},
		{
			rus:
				'В текущей реализации вы можете выразить тот факт, что поддерево было перемещено среди его братьев и сестер, но Вы не можете сказать, что оно переместилось куда-то еще.',
			eng:
				'In the current implementation, you can express the fact that a subtree has been moved amongst its siblings, but you cannot tell that it has moved somewhere else.',
		},
		{
			rus:
				'Поскольку React полагается на эвристики, если допущения, лежащие в их основе, не будут выполнены, производительность пострадает.',
			eng:
				'Because React relies on heuristics, if the assumptions behind them are not met, performance will suffer.',
		},
		{
			rus:
				'Алгоритм не будет пытаться сопоставить поддеревья различных типов компонентов.',
			eng: 'The algorithm will not try to match subtrees of different component types.',
		},
		{
			rus:
				'Если вы видите себя чередующимся между двумя типами компонентов с очень похожими выходными данными, вы можете сделать его тем же типом. На практике мы не обнаружили, что это проблема.',
			eng:
				'If you see yourself alternating between two component types with very similar output, you may want to make it the same type. In practice, we haven’t found this to be an issue.',
		},
		{
			rus:
				'Нестабильные ключи (как те, которые производятся Math.random()) приведет к ненужному воссозданию многих экземпляров компонентов и узлов DOM, что может привести к снижению производительности и потере состояния в дочерних компонентах',
			eng:
				'Unstable keys (like those produced by Math.random()) will cause many component instances and DOM nodes to be unnecessarily recreated, which can cause performance degradation and lost state in child components.',
		},
		// https://reactjs.org/docs/reconciliation.html

		{
			rus:
				'Приведенные ниже примеры были обновлены для использования React.createRef() API, представленый в React 16.3. Если используется более раннюю версию React, мы рекомендуем использовать callback refs.',
			eng:
				'The examples below have been updated to use the React.createRef() API introduced in React 16.3. If you are using an earlier release of React, we recommend using callback refs instead.',
		},
		{
			rus: 'Значение ref отличается в зависимости от типа узла.',
			eng: 'The value of the ref differs depending on the type of the node.',
		},
		{
			rus:
				'Когда атрибут ref используется на HTML-элементе, ref, созданный в конструкторе с React.createRef(), получает Базовый элемент DOM в качестве текущего свойства.',
			eng:
				'When the ref attribute is used on an HTML element, the ref created in the constructor with React.createRef() receives the underlying DOM element as its current property.',
		},
		{
			rus:
				'Когда атрибут ref используется на компоненте пользовательского класса, объект ref получает смонтированный экземпляр компонента в качестве текущего.',
			eng:
				'When the ref attribute is used on a custom class component, the ref object receives the mounted instance of the component as its current.',
		},
		{
			rus:
				'Вы не можете использовать атрибут ref для функциональных компонентов, потому что у них нет экземпляров.',
			eng:
				'You may not use the ref attribute on functional components because they don’t have instances.',
		},
		{
			rus: 'Этот код использует ref для хранения ссылки на узел DOM.',
			eng: 'This code uses a ref to store a reference to a DOM node',
		},
		{
			rus:
				'React присваивает текущему свойству элемент DOM при монтировании компонента и присваивает ему обратно значение null при размонтировании.',
			eng:
				'React will assign the current property with the DOM element when the component mounts, and assign it back to null when it unmounts.',
		},
		{
			rus:
				'Обновления рефов происходят до componentdidmount или componentdidupdate хуков жизненного цикла.',
			eng:
				'"ref" updates happen before componentDidMount or componentDidUpdate lifecycle hooks.',
		},

		{
			rus:
				'Вы должны преобразовать компонент в класс, если вам нужен реф на него, так же, как вы делаете, когда вам нужны методы жизненного цикла или состояние.',
			eng:
				'You should convert the component to a class if you need a ref to it, just like you do when you need lifecycle methods or state.',
		},

		{
			rus:
				'В редких случаях вам может потребоваться доступ к ДОЧЕРНЕМУ узлу DOM из родительского компонента.',
			eng:
				'In rare cases, you might want to have access to a child’s DOM node from a parent component.',
		},
		{
			rus:
				'Обычно это не рекомендуется, поскольку это нарушает инкапсуляцию компонентов, но иногда это может быть полезно для запуска фокуса или измерения размера или положения дочернего узла DOM.',
			eng:
				'This is generally not recommended because it breaks component encapsulation, but it can occasionally be useful for triggering focus or measuring the size or position of a child DOM node.',
		},
		{
			rus:
				'Если Вы используете React 16.3 или выше, мы рекомендуем использовать ref forwarding для этих случаев.',
			eng:
				'If you use React 16.3 or higher, we recommend to use ref forwarding for these cases.',
		},
		{
			rus:
				'Ref forwarding позволяет компонентам выбрать отображение рефа любого дочернего компонента как собственного.',
			eng:
				'Ref forwarding lets components opt into exposing any child component’s ref as their own.',
		},
		{
			rus:
				'Вы можете найти подробный пример того, как предоставить дочерний узел DOM родительскому компоненту в документации ref forwarding.',
			eng:
				'You can find a detailed example of how to expose a child’s DOM node to a parent component in the ref forwarding documentation.',
		},
		// https://reactjs.org/docs/refs-and-the-dom.html

		{
			rus:
				'В типичном потоке данных React props - это единственный способ взаимодействия родительских компонентов со своими дочерними элементами.',
			eng:
				'In the typical React dataflow, props are the only way that parent components interact with their children.',
		},
		{
			rus: 'Чтобы изменить ребенка, вы перерисовываете его с новыми реквизитами.',
			eng: 'To modify a child, you re-render it with new props.',
		},
		{
			rus:
				'Однако, есть несколько случаев, когда вам нужно обязательно изменить дочерний элемент вне обычного потока данных.',
			eng:
				'However, there are a few cases where you need to imperatively modify a child outside of the typical dataflow.',
		},
		{
			rus:
				'Изменяемый дочерний элемент может быть экземпляром компонента React или элементом DOM. В обоих случаях React обеспечивает аварийный люк.',
			eng:
				'The child to be modified could be an instance of a React component, or it could be a DOM element. For both of these cases, React provides an escape hatch.',
		},
		{
			rus:
				'Есть несколько хороших вариантов использования рефов: управление фокусом, выбор текста или воспроизведение мультимедиа. Запуск императивной анимации. Интеграция со сторонними библиотеками дом.',
			eng:
				'There are a few good use cases for refs: Managing focus, text selection, or media playback. Triggering imperative animations. Integrating with third-party DOM libraries.',
		},
		{
			rus:
				'Избегайте использования ссылок для всего, что может быть сделано декларативно.',
			eng: 'Avoid using refs for anything that can be done declaratively.',
		},
		{
			rus:
				'Например, вместо того, чтобы открывать методы open() и close() в компоненте диалога, передайте ему isOpen prop.',
			eng:
				'For example, instead of exposing open() and close() methods on a Dialog component, pass an isOpen prop to it.',
		},
		{
			rus:
				'Ваше первое намерение может быть использовать ref-ы, чтобы "сделать, чтобы что-то произошло" в вашем приложении.',
			eng:
				'Your first inclination may be to use refs to "make things happen" in your app.',
		},
		{
			rus:
				'Если это так, выделите минутку и подумайте более критически о том, кому state должно принадлежать в иерархии компонентов.',
			eng:
				'If this is the case, take a moment and think more critically about where state should be owned in the component hierarchy.',
		},
		{
			rus:
				'Часто становится ясно, что надлежащее место для "владения" этим state находится на более высоком уровне в иерархии. См. руководство по поднятию состояния и примеры.',
			eng:
				'Often, it becomes clear that the proper place to "own" that state is at a higher level in the hierarchy. See the Lifting State Up guide for examples of this.',
		},
		{
			rus:
				'По мере роста вашего приложения, вы можете поймать много ошибок с помощью проверки типов.',
			eng: 'As your app grows, you can catch a lot of bugs with typechecking.',
		},
		{
			rus:
				'Для некоторых приложений можно использовать JavaScript расширения, такие как Flow или TypeScript для проверки всего приложения.',
			eng:
				'For some applications, you can use JavaScript extensions like Flow or TypeScript to typecheck your whole application.',
		},
		{
			rus: 'React имеет некоторые встроенные возможности проверки типов.',
			eng: 'React has some built-in typechecking abilities.',
		},
		{
			rus:
				'Чтобы выполнить проверку типов для props компонента, можно назначить специальное propTypes свойство.',
			eng:
				'To run typechecking on the props for a component, you can assign the special propTypes property.',
		},
		{
			rus:
				'PropTypes содержит ряд валидаторов, которые могут быть использованы, чтобы убедиться, что данные, которые вы получаете, валидны.',
			eng:
				'PropTypes exports a range of validators that can be used to make sure the data you receive is valid.',
		},
		{
			rus:
				'Если для prop указано недопустимое значение, в консоли JavaScript будет показано предупреждение.',
			eng:
				'When an invalid value is provided for a prop, a warning will be shown in the JavaScript console.',
		},
		{
			rus:
				'По соображениям производительности propTypes проверяется только в development режиме.',
			eng: 'For performance reasons, propTypes is only checked in development mode.',
		},
		{
			rus:
				'С PropTypes.element можно указать, что только один дочерний элемент может быть передан компоненту как childred.',
			eng:
				'With PropTypes.element you can specify that only a single child can be passed to a component as children.',
		},
		{
			rus:
				'Можно определить значения по умолчанию для props, присвоив специальное свойство defaultProps.',
			eng:
				'You can define default values for your props by assigning to the special defaultProps property.',
		},
		{
			rus:
				'Если вы используете Babel преобразование, такое как transform-class-properties , вы также можете объявить defaultProps как статическое свойство в классе компонента React.',
			eng:
				'If you are using a Babel transform like transform-class-properties , you can also declare defaultProps as static property within a React component class.',
		},
		{
			rus:
				'Этот static property синтаксис хотя еще не завершен, и потребует шага компиляции для работы в браузере.',
			eng:
				'This static property syntax has not yet been finalized though and will require a compilation step to work within a browser.',
		},
		{
			rus:
				'DefaultProps будет использоваться для обеспечения того, что this.props.name будет иметь значение, если оно не было специфицировано родительским компонентом.',
			eng:
				'The defaultProps will be used to ensure that this.props.name will have a value if it was not specified by the parent component.',
		},
		{
			rus:
				'Проверка типов проптипов происходит после применения defaultProps, поэтому проверка типов также применяется к defaultProps.',
			eng:
				'The propTypes typechecking happens after defaultProps are resolved, so typechecking will also apply to the defaultProps.',
		},
		{
			rus:
				'Статические средства проверки типов, такие как Flow и TypeScript, индетифицируют определенные типы проблем еще до запуска кода.',
			eng:
				'Static type checkers like Flow and TypeScript identify certain types of problems before you even run your code.',
		},
		{
			rus:
				'Статические проверки типов также могут улучшить рабочий процесс разработчика, добавив такие функции, как автозавершение.',
			eng:
				'Static type checkers can also improve developer workflow by adding features like auto-completion.',
		},
		{
			rus:
				'По этой причине мы рекомендуем использовать Flow или TypeScript вместо PropTypes для больших баз кода.',
			eng:
				'For this reason, we recommend using Flow or TypeScript instead of PropTypes for larger code bases.',
		},
		{
			rus:
				'Flow позволяет аннотировать переменные, функции и компоненты с помощью специального синтаксиса типов, а также выявлять ошибки на ранних этапах.',
			eng:
				'Flow lets you annotate the variables, functions, and React components with a special type syntax, and catch mistakes early.',
		},
		{
			rus:
				'До сих пор мы создали приложение, которое корректно рендерится как функция от props и state, стекающих вниз по иерархии.',
			eng:
				"So far, we've built an app that renders correctly as a function of props and state flowing down the hierarchy.",
		},
		{
			rus:
				'Компоненты формы глубоко в иерархии должны обновлять state в другом компоненте.',
			eng:
				'The form components deep in the hierarchy need to update the state in the other component.',
		},
		{
			rus:
				'Теперь пришло время поддерживать поток данных следующих в другом направлении.',
			eng: "Now it's time to support data flowing the other way.",
		},
		{
			rus:
				'Но для этого требуется немного больше ввода, чем при традиционной двусторонней привязке данных.',
			eng:
				'But it does require a little more typing than traditional two-way data binding.',
		},
		{
			rus:
				'React делает этот поток данных явным, чтобы было легко понять, как работает ваша программа.',
			eng:
				'React makes this data flow explicit to make it easy to understand how your program works.',
		},

		{
			rus:
				'Мы хотим убедиться, что всякий раз, когда пользователь изменяет форму, мы обновляем состояние, чтобы отразить пользовательский ввод.',
			eng:
				'We want to make sure that whenever the user changes the form, we update the state to reflect the user input.',
		},
		{
			rus:
				'Поскольку компоненты должны обновлять только свое собственное состояние, FilterableProductTable передаст обратные вызовы в панель поиска, которая будет срабатывать всякий раз, когда состояние должно быть обновлено.',
			eng:
				'Since components should only update their own state, FilterableProductTable will pass callbacks to SearchBar that will fire whenever the state should be updated.',
		},
		{
			rus: 'Хотя это звучит сложно, на самом деле это всего лишь несколько строк кода.',
			eng: "Though this sounds complex, it's really just a few lines of code.",
		},
		{
			rus: 'И это действительно ясно, как ваши данные текут по всему приложению.',
			eng: "And it's really explicit how your data is flowing throughout the app.",
		},
		{
			rus:
				'Надеюсь, это даст вам представление о том, как строить компоненты и приложения с помощью React.',
			eng:
				'Hopefully, this gives you an idea of how to think about building components and applications with React.',
		},
		{
			rus: 'Хотя это может быть немного больше печатания, чем вы привыкли.',
			eng: "While it may be a little more typing than you're used to",
		},
		{
			rus:
				'Помните, что код читается гораздо больше раз, чем пишется, и очень легко читать этот модульный, явный код.',
			eng:
				"Remember that code is read far more than it's written, and it's extremely easy to read this modular, explicit code.",
		},
		{
			rus:
				'Когда вы начнете создавать большие библиотеки компонентов, вы оцените эту эксплицитность и модульность.',
			eng:
				"As you start to build large libraries of components, you'll appreciate this explicitness and modularity.",
		},
		{
			rus: 'И при переиспользовании кода ваши строки кода начнут сжиматься.',
			eng: 'And with code reuse, your lines of code will start to shrink.',
		},

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
	],
};

export default dictionaries;
