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
			rus:
				'React предоставляет декларативный API, так что вам не придется беспокоиться о том, что именно изменяется в каждом обновлении.',
			eng:
				'React provides a declarative API so that you don’t have to worry about exactly what changes on every update.',
		},
		{
			rus:
				'Это делает написание приложений намного проще, но может быть не очевидно, как это реализуется в React.',
			eng:
				'This makes writing applications a lot easier, but it might not be obvious how this is implemented within React.',
		},
		{
			rus:
				'Эта статья объясняет выбор, который мы сделали в алгоритме react "diffing", так что обновления компонентов предсказуемы, будучи достаточно быстрыми для высокопроизводительных приложений.',
			eng:
				'This article explains the choices we made in React’s "diffing" algorithm so that component updates are predictable while being fast enough for high-performance apps.',
		},
		{
			rus:
				'Когда вы используете React, в каждый момент времени вы можете думать о функции render() как создающий дерево элементов React.',
			eng:
				'When you use React, at a single point in time you can think of the render function as creating a tree of React elements.',
		},
		{
			rus:
				'При следующем обновлении state или props эта функция render вернет другое дерево элементов React.',
			eng:
				'On the next state or props update, that render() function will return a different tree of React elements.',
		},
		{
			rus:
				'React-у затем необходимо выяснить, как эффективно обновить пользовательский интерфейс, чтобы соотвествовать последниму дереву.',
			eng:
				'React then needs to figure out how to efficiently update the UI to match the most recent tree.',
		},
		{
			rus:
				'Есть несколько общих решений этой алгоритмической задачи генерации минимального числа операций для преобразования одного дерева в другое.',
			eng:
				'There are some generic solutions to this algorithmic problem of generating the minimum number of operations to transform one tree into another.',
		},
		{
			rus:
				'Однако исскуство алгоритмов - имеет сложность в порядке O (n3), где n-количество элементов в дереве.',
			eng:
				'However, the state of the art algorithms have a complexity in the order of O(n3) where n is the number of elements in the tree.',
		},
		{
			rus:
				'Если бы мы использовали это в React, отображение 1000 элементов потребовало бы порядка миллиарда сравнений.',
			eng:
				'If we used this in React, displaying 1000 elements would require in the order of one billion comparisons.',
		},
		{
			rus:
				'Это слишком дорого. Вместо этого React реализует эвристический алгоритм O(n), основанный на двух предположениях.',
			eng:
				'This is far too expensive. Instead, React implements a heuristic O(n) algorithm based on two assumptions.',
		},
		{
			rus: 'Два элемента разных типов будут производить разные деревья.',
			eng: 'Two elements of different types will produce different trees.',
		},
		{
			rus:
				'Разработчик может намекнуть на то, какие дочерние элементы могут быть стабильными в разных рендерах с помощью пропса key.',
			eng:
				'The developer can hint at which child elements may be stable across different renders with a key prop.',
		},
		{
			rus:
				'На практике эти предположения справедливы почти для всех практических случаев использования.',
			eng: 'In practice, these assumptions are valid for almost all practical use cases.',
		},
		{
			rus:
				'При вычитании двух деревьев React сначала сравнивает два корневых элемента. Поведение отличается в зависимости от типов корневых элементов.',
			eng:
				'When diffing two trees, React first compares the two root elements. The behavior is different depending on the types of the root elements.',
		},
		{
			rus:
				'Всякий раз, когда корневые элементы имеют разные типы, React снесет старое дерево и построит новое дерево с нуля.',
			eng:
				'Whenever the root elements have different types, React will tear down the old tree and build the new tree from scratch.',
		},
		// https://reactjs.org/docs/reconciliation.html
	],

	oldDictionary2: [
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
				'Your first inclination may be to use refs to “make things happen” in your app.',
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
				'Often, it becomes clear that the proper place to “own” that state is at a higher level in the hierarchy. See the Lifting State Up guide for examples of this.',
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
