const dictionaries = {
	dictionary1: [
		{ 'Ты меня понимаешь?': 'Do you understand me?' },
		{ начинать: 'begin, began, begun' },
		{ ломать: 'break, broke, broken' },
		{ приносить: 'bring, brought, brought' },
		{ покупать: 'buy, bought, bought' },
		{ выбирать: 'choose, chose, chosen' },
		{ 'приходить, приезжать': 'come, came, come' },
		{ резать: 'cut, cut, cut' },
		{ делать: 'do, did, done' },
		{ рисовать: 'draw, drew, drawn' },
		{ пить: 'drink, drank, drunk' },
		{ 'есть, кушать': 'eat, ate, eaten' },
		{ падать: 'fall, fell, fallen' },
		{ кормить: 'feed, fed, fed' },
		{ находить: 'find, found, found' },
		{ летать: 'fly, flew, flown' },
		{ забывать: 'forget, forgot, forgotten' },
		{ получать: 'get, got, got' },
		{ давать: 'give, gave, given' },
		{ 'идти, ходить': 'go, went, gone' },
		{ иметь: 'have, had, had' },
		{ слышать: 'hear, heard, heard' },
		{ ушибить: 'hurt, hurt, hurt' },
		{ знать: 'know, knew, known' },
		//////////////////////////////////////
		{
			'учить (что-то), узнавать (новое)':
				'learn, learned, or, learnt, learned, or, learnt',
		},
		{ 'делать, заставлять': 'make, made, made' },
		{ встречать: 'meet, met, met' },
		{ платить: 'pay, paid, paid' },
		{ 'класть, положить': 'put, put, put' },
		{ читать: 'read, red, [read], red, [read]' },
		{ бежать: 'run, ran, run' },
		{ говорить: 'say, said, said' },
		{ видеть: 'see, saw, seen' },
		{ посылать: 'send, sent, sent' },
		{ показывать: 'show, showed, shown' },
		{ петь: 'sing, sang, sung' },
		{ сидеть: 'sit, sat, sat' },
		{ спать: 'sleep, slept, slept' },
		{ 'нюхать, пахнуть': 'smell, smelt, smelt' },
		{ говорить: 'speak, spoke, spoken' },
		{ стоять: 'stand, stood, stood' },
		{ плавать: 'swim, swam, swum' },
		{ брать: 'take, took, taken' },
		{ 'учить (кого-то)': 'teach, taught, taught' },
		{ 'сказать (кому-то), рассказать': 'tell, told, told' },
		{ думать: 'think, thought, thought' },
		{ понимать: 'understand, understood, understood' },
		{ 'носить (одежду)': 'wear, wore, worn' },
		{ писать: 'write, wrote, written' },
	],

	oldDictionary1: [
		{ 'Ты меня понимаешь?': 'Do you understand me?' },
		{ 'Дай мне ручку.': 'Give me a pen.' },
		{ 'Дай мне ручку.': 'Give me a pen.' },
		{ 'Встреть меня в кинотеатре': 'Meet me in the theatre.' },
	],

	dictionary2: [
		{
			'Если вы хотите объединить данные из нескольких дочерних элементов или установить связь между двумя дочерними компонентами, переместите состояние вверх, чтобы оно жило в родительском компоненте.':
				'When you want to aggregate data from multiple children or to have two child components communicate with each other, move the state upwards so that it lives in the parent component.',
		},
		{
			'Родитель может затем передать состояние дочерним элементам через пропсы, чтобы дочерние компоненты всегда были синхронизированы друг с другом и с родителем.':
				'The parent can then pass the state back down to the children via props, so that the child components are always in sync with each other and with the parent.',
		},
		{
			'Вытягивание состояния вверх, как здесь, это общепринятая практика при рефакторинге, так что давайте воспользоваться этой возможностью, чтобы попробовать его.':
				'Pulling state upwards like this is common when refactoring React components, so let’s take this opportunity to try it out.',
		},
		{
			'Поскольку состояние компонента считается закрытым, мы не можем обновить его непосредственно из другого компонента.':
				'Since component state is considered private, we can’t update it directly from another component.',
		},
		{
			'Обычным паттерном здесь является передача функции из родительского компонента дочернему компоненту, которая вызывается при нажатии кнопки.':
				'The usual pattern here is pass down a function from parent component to child component that gets called when the button is clicked.',
		},
		{
			'Мы вызываем .slice () для клонирования массива данных вместо изменения существующего массива.':
				'We call .slice() to copy the data array instead of mutating the existing array.',
		},
		{
			'Перескочите вперед через раздел, чтобы узнать, почему неизменяемость имеет важное значение.':
				'Jump ahead a section to learn why immutability is important.',
		},
		{
			'Этот компонент больше не сохраняет свое собственное состояние; он получает свое значение от родительского компонента и сообщает своему родителю о клике.':
				'This component no longer keeps its own state; it receives its value from its parent component and informs its parent when it’s clicked.',
		},
		{
			'Мы называем такие как эти компоненты, контролируемыми компонентами.':
				'We call components like this controlled components.',
		},
		{
			'В предыдущем примере кода мы рекомендуем использовать .slice() оператор, чтобы скопировать массив, до внесения изменений и предотвратить изменения существующего массива.':
				'In the previous code example, we suggest using the .slice() operator to copy the array prior to making changes and to prevent mutating the existing array.',
		},
		{
			'Давайте поговорим о том, что это значит (неизменность) и почему это важная концепция, чтобы изучить ее.':
				'Let’s talk about what this means (immutability) and why it is an important concept to learn.',
		},
		{
			'Как правило, существует два способа изменения данных.':
				'There are generally two ways for changing data.',
		},
		{
			'Первый метод заключается в изменении данных путем прямого изменения значений переменной.':
				'The first method is to mutate the data by directly changing the values of a variable.',
		},
		{
			'Второй метод состоит в замене данных новой копией объекта, которая также включает необходимые изменения.':
				'The second method is to replace the data with a new copy of the object that also includes desired changes.',
		},
		{
			'Конечный результат тот же.': 'The end result is the same.',
		},
		{
			'Не мутируя (или не изменяя базовые данные) непосредственно, мы теперь имеем дополнительное преимущество.':
				'By not mutating (or changing the underlying data) directly we now have an added benefit.',
		},
		{
			'Это преимущество может помочь нам увеличить производительность компонентов и приложений в целом.':
				'This benefit can help us increase component and overall application performance.',
		},
		{
			'Иммутабельность также приводит к тому, что некоторые сложные функции гораздо проще реализовать.':
				'Immutability also makes some complex features much easier to implement.',
		},
		{
			'Например, далее в этом учебнике мы реализуем путешествие во времени между различными этапами игры.':
				'For example, further in this tutorial we will implement time travel between different stages of the game.',
		},
		{
			'Определение того, изменился ли измененный объект, является сложным, поскольку изменения вносятся непосредственно в объект.':
				'Determining if a mutated object has changed is complex because changes are made directly to the object.',
		},
		{
			'Это требует сравнения текущего объекта с предыдущей копией, обхода всего дерева объектов и сравнения каждой переменной и значения.':
				'This then requires comparing the current object to a previous copy, traversing the entire object tree, and comparing each variable and value.',
		},
		{
			'Этот процесс может стать всё возрастающе сложным.':
				'This process can become increasingly complex.',
		},
		{
			'Определить, как изменялся неизменяемый объект, значительно проще.':
				'Determining how an immutable object has changed is considerably easier.',
		},
		{
			'Если ссылка изменилась, то объект был изменен. Вот и все.':
				'If the object being referenced is different from before, then the object has changed. That’s it.',
		},
		{
			'Определить, когда делать повторный рендеринг в React.':
				'Determining When to Re-render in React.',
		},
		// https://reactjs.org/tutorial/tutorial.html#an-interactive-component
	],

	oldDictionary2: [
		// ****************************************************************************************
		// Dmitry Baranovskiy: Zen of JavaScript | JSConf EU 2015 - YouTube
		// Видео по запросу javascript zen▶ 26:22
		// https://www.youtube.com/watch?v=QHs55-5FzgA
		// 10 нояб. 2015 г. - Добавлено пользователем JSConf
		{
			'Прошло много времени с тех пор как джаваскрипт стал мейнстримом.':
				'Long time passed since JavaScript became mainstream.',
		},
		{
			'Не смотря на многочисленные попытки, до сих пор нет единственного правильного пути написания кода в этом языке.':
				'Despite multiple attempts, there is still no right single way to write code in this language.',
		},
		{
			'Каждый использует его своим специальным способом и многие люди все еще думают, что они не смогли укротить этот язык.':
				'Everybody is using it in their own special way and most people still fill that they are failing to tame the language.',
		},
		{
			'Посмотри на этот код. Ты не знал этого. Я знаю, поэтому я умнее тебя.':
				"Look at that code. You didn't know that. I know so I am smarter then you.",
		},
		{
			'Все эти разговоры немного скучные потому, что бесполезные.':
				'All this talks are kinda boring, because they are not very useful.',
		},
		{
			'Моя речь будет такой же но я хочу принести вам весть.':
				'My talk will be sort of similar but I want to bring a message to you.',
		},
		{
			'Я расскажу вам, как я придумал идею говорить о языке Javascript.':
				"I'll tell you how I came up with idea to talk about javascript language.",
		},
		{
			'Я знаю много языков. Паскаль, С++ и наконец перешел к javascript.':
				'I know many languages. Pascal, C++ and finally jumped to javascript.',
		},
		{
			'У меня было очень хорошее понимание того, как JavaScript-код должен быть написан. И я был совершенно неправ.':
				'I had very good understanding of how the javascript code should be written. And I was completely wrong.',
		},
		{
			'Javascript ударил меня в спину много много раз, прежде чем я наконец понял':
				'Javascript hit me in back many many times before I finally understood.',
		},
		{
			'Но даже теперь я не уверен, что понял даваскипт полностью.':
				'But even now I am not sure that I understood javascript completely.',
		},
		{
			'Кто здесь думает, что знает Javascript очень хорошо?':
				'Who is there thinking he knows javascript very well?',
		},
		{
			'OK. Пара заблуждающихся человек. Но большинство людей не так уверенно.':
				'Ok. The couple misguided people. But most people are not so confident.',
		},
		{
			'Я хочу, чтобы вы подумали... Остановитесь на минутку. Забудьте о react и angular. Подумайте о чистом JavaScript.':
				'What I want you to think... Stop for a moment. Forget about react and angular. Think about pure javascript.',
		},
		{
			'Каким он должен быть? Что такое правильный способ написания JavaScript.':
				'What it should be like? What is the proper way of javascript?',
		},
		{
			'Javascript очень гибкий, как вы знаете. Мы могли бы написать код многими способами.':
				'Javascript is very flexible as you all know. We could write code in many different ways.',
		},
		{
			'И я здесь не для того, чтобы научить вас правильно писать Javascript. Нет правильного пути.':
				'And I am not here to teach you how to write javascript the right way. There is no right way. ',
		},
		{
			'Те, кто не знает, что они ходят во тьме, никогда не будут искать света.':
				'Those who are unaware they are walking in darkness will never seek the light.',
		},
		{
			'Я бы хотел сказать, что JavaScript-это Брюс Ли из языков программирования. Потому что он гибкий, он мощный и он изменил всю картину.':
				"I'd like to say that javascript is Bruce Lee of programming languages. Because it's flexible, it's powerful and it changed the hole picture.",
		},
		{
			'Я хочу (своего рода) указать вам на некоторые вещи, которые вы, возможно, не видели раньше или, может быть, не думали о них.':
				"I want to (sort of) point you to some of the things that you may be haven't seen before or maybe didn't think about them",
		},
		// ****************************************************************************************
		// https://reactjs.org
		//
		{
			'Реакт делает безболезненным создание интерактивных интерфейсов':
				'React makes it painless to create interactive UIs.',
		},
		{
			'Конструируйте простые вью для каждого состояния в вашем приложении и Реакт эффективно обновит и отрендерит именно те компоненты, где состояние изменилось.':
				'Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
		},
		{
			'Декларативные вьюшки делают ваш код более предсказуемым и удобным для дебагирования.':
				'Declarative views make your code more predictable and easier to debug.',
		},
		{
			'Создавайте встроенные компоненты, которые управляеют своим собственным состоянием. Затем компонуйте их для делания сложного UI.':
				'Build encapsulated components that manage their own state, then compose them to make complex UIs.',
		},
		{
			'Когда логика компонента написана на Javascript вместо шаблонов, вы легко можете прогнать много данных через ваше приложении и держать состояние вне DOM.':
				'Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.',
		},
		{
			'Мы не делаем предположений о других выших технологиях, поэтому вы можете разрабатывать новые фичи в Реакт не переписывая ваш старый код.':
				'We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.',
		},
		{
			'Реакт так же может сервеный рендеринг с использованием Node и мобильный с использованием Реакт нейтив.':
				'React can also render on the server using Node and power mobile apps using React Native.',
		},

		{
			'У компонентов Реакта имплементирован render() метод, который получает входные данные и возвращает то, что нужно отобразить.':
				'React components implement a render() method that takes input data and returns what to display.',
		},
		{
			'Этот пример использует XML подобный синтаксис, называемый JSX.':
				'This example uses an XML-like syntax called JSX.',
		},
		{
			'Входные данные, попавшие в компонент, могут быть доступные функции рендер через пропсы.':
				'Input data that is passed into the component can be accessed by render() via this.props.',
		},
		{
			'JSX является необязательным и не требуется для использования в Реакте.':
				'JSX is optional and not required to use React.',
		},
		{
			'Попробуйте Babel REPL, чтобы посмотреть чистый JavaScript код, произведенный после шага компиляции  JSX.':
				'Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.',
		},
		{
			'В дополнении к получению входных данных (через пропсы), компонент может поддерживать внутреннее состояние (доступное через this.state).':
				'In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state).',
		},
		{
			'Когда состояние компонента изменится, рендерированная разметка будет обновлена через вызов render().':
				'When a component’s state data changes, the rendered markup will be updated by re-invoking render().',
		},

		{
			'Реакт это JavaScript библиотека, и поэтому подразумевается, что у вас есть базовое понимание JavaScript.':
				'React is a JavaScript library, and so it assumes you have a basic understanding of the JavaScript language.',
		},
		{
			'Если вы не чувствуете себя очень уверенно, мы рекомендуем освежить ваши знания JavaScript, чтобы вы могли следовать дальше более легко.':
				'If you don’t feel very confident, we recommend refreshing your JavaScript knowledge so you can follow along more easily.',
		},
		{
			'Мы также используем некоторый  синтаксис из ES6 в наших примерах':
				'We also use some of the ES6 syntax in the examples. ',
		},
		{
			'Мы пытаемся использовать его умеренно, потому что от относительно новый  ':
				'We try to use it sparingly because it’s still relatively new',
		},
		{
			'Но мы поддерживаем вас познакомиться с новыми стрелочными функциями, классами, шаблонами, литералами, let  и const утверждениями.':
				'But we encourage you to get familiar with arrow functions, classes, template literals, let, and const statements',
		},
		{
			'Вы можете использовать Babel REPL для проверки во что ES6 код компилируется.':
				'You can use the Babel REPL to check what ES6 code compiles to.',
		},
		{
			'В отличии от браузерных DOM элементов, реакт элементы являются простыми объектами, которые легко создавать.':
				'Unlike browser DOM elements, React elements are plain objects, and are cheap to create.',
		},
		{
			'React DOM заботиться об обновлении DOM, чтобы он соответствовал React элементам.':
				'React DOM takes care of updating the DOM to match the React elements.',
		},
		{
			'Можно перепутать элементы с более широко известной концепцией "компонентов".':
				'One might confuse elements with a more widely known concept of “components”.',
		},
		{
			'Элементы это то из чего сделаны компоненты, и мы поощряем прочтение этой секции перед тем как идти вперед.':
				'Elements are what components are “made of”, and we encourage you to read this section before jumping ahead.',
		},

		{
			'Элемент описывает то, что вы хотите увидеть на экране.':
				'An element describes what you want to see on the screen.',
		},
		{
			'Для того, чтобы отобразить элемент в корневом узле DOM, передайте их обоих в ReactDOM.render().':
				'To render a React element into a root DOM node, pass both to ReactDOM.render().',
		},
		{
			'Реактовские элементы иммутабельны. Как только вы создали элемент, вы не можете изменить его детей или атрибуты.':
				'React elements are immutable. Once you create an element, you can’t change its children or attributes.',
		},
		{
			'Элемент - как единичный фрагмент фильма: он представляет UI в определенный момент времени.':
				'An element is like a single frame in a movie: it represents the UI at a certain point in time.',
		},
		{
			'В соотвествии с нашими знаниями, единственный путь обновить UI это создавать новый элемент и отправить его в ReactDOM.render().':
				'With our knowledge so far, the only way to update the UI is to create a new element, and pass it to ReactDOM.render().',
		},
		{
			'На практике, большинство реакт приложений вызывают  ReactDOM.render() только один раз.':
				'In practice, most React apps only call ReactDOM.render() once.',
		},
		{
			'В следующей секции мы изучим как такой код изолируется в компонент с состоянием.':
				'In the next sections we will learn how such code gets encapsulated into stateful components.',
		},
		{
			'Реакт сравнивает элемент и его детей с предыдущими  и  применяет к DOM только необходимые изменения, чтобы DOM соответствовал желаемому состоянию.':
				'React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.',
		},
		{
			'Даже если мы создаем элемент описывающий целое UI дерево на каждый тик, только следующий узел чей контент изменился обновится by React DOM.':
				'Even though we create an element describing the whole UI tree on every tick, only the text node whose contents has changed gets updated by React DOM.',
		},
		{
			'Согласно нашему опыту, думать о том, как UI должен выглядеть в данный момент времени в противовес как изменять его со временем устраняет целый класс ошибок.':
				'In our experience, thinking about how the UI should look at any given moment rather than how to change it over time eliminates a whole class of bugs.',
		},

		{
			'Концептуально, компоненты это как джаваскрипт  функции':
				'Conceptually, components are like JavaScript functions.',
		},
		{
			'Компоненты получают произвольные входные данные (называемые пропсы) и возвращают реакт-элементы, описывающие, что должно появиться на экране.':
				'Components accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.',
		},
		{
			'Самый простой способ определить компонент это написать дважваскрипт функцию.':
				'The simplest way to define a component is to write a JavaScript function.',
		},
		{
			'Эта функция является валидным реакт-компонентом, потому что она принимает один  “пропс” (что означает пропертис) - объект-аргумент с данными, называемый пропс, и возвращает реакт-элемент.':
				'This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element.',
		},
		{
			'Мы называем такие компоненты функциональными потому, что это буквально джаваскрипт функции.':
				'We call such components “functional” because they are literally JavaScript functions.',
		},
		{
			'Вы также можете использовать ES6 класс для определения компонента.':
				'You can also use an ES6 class to define a component.',
		},
		{
			'Классы имеют некоторые дополнительные фичи, которые мы обсудим в следующих секциях.':
				'Classes have some additional features that we will discuss in the next sections.',
		},
		{
			'Пока мы будем использовать функциональные компоненты из-за их краткости.':
				'Until then, we will use functional components for their conciseness.',
		},
		{
			'Когда реакт видит элемент, представляющий определенный пользователем компонент, он пропускает JSX атрибуты в этот компонент как один объект.':
				'When React sees an element representing a user-defined component, it passes JSX attributes to this component as a single object.',
		},
		{
			'Всегда начинайте имена компонентов с большой буквы.':
				'Always start component names with a capital letter.',
		},
		{
			'Компоненты могут ссылаться на другие компоненты в своем выводе.':
				'Components can refer to other components in their output.',
		},
		{
			'Это позволяет нам использовать ту же самую компонентную абстракцию на любом уровне детализации.':
				'This lets us use the same component abstraction for any level of detail.',
		},

		// ****************************************************************************************
		// Feedback
		//
		{
			'Пожалуйста упомяните вещи, которые идут хорошо и вещи, которые нужно исправить.':
				'Please mention things that went well and things to improve.',
		},
		{
			'Дайте примеры, по возможности': 'Give examples if possible.',
		},
		{
			"Обоснуйте свои выборы метрик (даже если вы выбрали 'Соответсвует ожиданиям', что указывает на хорошую производительность.":
				"Justify your choiches for metrics (even if you selected 'Meets expectations' which denotes a good performance).",
		},
		{
			'Также отметьте топики в дополнении к метрикам. Добавьте личные мысли и чувства.':
				'Also mention topics in addition to the metrics. Add personal thoughts and feelings.',
		},
		{
			'Предложите топики для ежеквартального обсуждения, и позитивные и требующие улучшения.':
				'Suggest topics for the quarterly meeting to discuss: both positive feedback and opportunities for improvements',
		},
		{
			'Используйте английский язык или родной язык. Ваш феедбек все равно будут обработан конфиденциально.':
				'Use English or native language. Your feedback sill be handled confidentially.',
		},

		{
			'Иван и я не работали вместе в одном проекте, но мы часто обсуждали профессиональные темы.':
				'Ivan and I didn’t work  together in the same project, but we often discussed professional matters.',
		},
		{
			'По моему мнению, Иван является высоко квалифицированным фронтенд разработчиком со значительным опытом.':
				'In my opinion, Ivan is a highly qualified frontend developer with considerable experience.',
		},
		{
			'Два или три раза я спрашивал его о помощи по использованию некоторых технологий и библиотек и он дал мне квалифицированные ответы. Эти ответы очень помогли в решении проблем.':
				'Two or three times I asked him for a help on using some technologies and libraries and he gave qualified answers to me. This advices were of great help  to solve the problems.',
		},
		{
			'Как человек Иван очень общительный и интересный человек для обсуждения любых вещей. Он активный и увлечённый колега':
				'As a man, Ivan is sociable and interesting person to discuss any of the things with. He is an active and dedicated colleague.',
		},

		{
			'Обратная связь с коллегами является важным вкладом для их руководителей в оценке их недавней деятельности, а также предоставление им значимой информациии об выдающихся и требующих улучшения областях.':
				'Feedback on your colleagues is important input for their managers in evaluating their recent performance, as well as providing them with meaningful sum-up on their outstanding and to-be-improved areas.',
		},
		{
			'Нажмите сюда, если вам нужны некоторые советы о том, как писать осмысленный фидбек.':
				'Click here if you need some tips how to write meaningful feedback!',
		},
	],
};

export default dictionaries;
