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
		// https://reactjs.org/docs/state-and-lifecycle.html

		{
			rus:
				'Обработка событий с помощью React элементов очень похожа на обработку событий на dom элементах.',
			eng:
				'Handling events with React elements is very similar to handling events on DOM elements',
		},
		{
			rus: 'Есть некоторые синтаксические различия.',
			eng: 'There are some syntactic differences',
		},
		{
			rus: 'React элементы именуются с использоанием camelCase, а не lowercase.',
			eng: 'React events are named using camelCase, rather than lowercase.',
		},
		{
			rus: 'C JSX вы передаете функцию в качестве обработчика событий, а не строку.',
			eng: 'With JSX you pass a function as the event handler, rather than a string.',
		},
		{
			rus:
				'Другое отличие заключается в том, что Вы не можете вернуть false, чтобы предотвратить поведение по умолчанию в React. Необходимо вызвать preventDefault явно.',
			eng:
				'Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly.',
		},
		{
			rus:
				'React определяет эти synthetic события в соответствии со спецификацией W3C, поэтому вам не нужно беспокоиться о кросбраузерной совместимости.',
			eng:
				'React defines these synthetic events according to the W3C spec, so you don’t need to worry about cross-browser compatibility.',
		},
		{
			rus:
				'При использовании React обычно не нужно вызывать addEventListener для добавления listeners в элемент DOM после его создания. Вместо этого просто предосталяте listeners, когда элемент отображается первоначально.',
			eng:
				'When using React you should generally not need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.',
		},
		{
			rus:
				'При определении компонента с помощью класса ES6, общим паттерном является, что обработчик событий это метод класса.',
			eng:
				'When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class.',
		},
		{
			rus:
				'Вы должны быть осторожны, о смысле этого в JSX колбэках. В JavaScript методы класса не привязаны по умолчанию.',
			eng:
				'You have to be careful about the meaning of this in JSX callbacks. In JavaScript, class methods are not bound by default.',
		},
		{
			rus:
				'Если вы забыли связать this.handleClick и передать его onClick, то this будет undefined, когда функция фактически вызовется.',
			eng:
				'If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.',
		},
		{
			rus:
				'Это не React-специфическое поведение; это частью того, как функции работают в JavaScript.',
			eng:
				'This is not React-specific behavior; it is a part of how functions work in JavaScript.',
		},
		{
			rus: 'Если вызов bind раздражает вас, есть два способа обойти это.',
			eng: 'If calling bind annoys you, there are two ways you can get around this.',
		},
		{
			rus:
				'Если вы используете экспериментальный public class fields синтаксис, можно использовать поля класса, чтобы правильно привязать обратные вызововы.',
			eng:
				'If you are using the experimental public class fields syntax, you can use class fields to correctly bind callbacks.',
		},
		{
			rus:
				'Проблема с этим синтаксисом в том, что новый колбэк создается каждый раз, когда LoggingButton рендерится.',
			eng:
				'The problem with this syntax is that a different callback is created each time the LoggingButton renders.',
		},
		{
			rus:
				'В большинстве случаев это нормально. Однако, если этот колбэк передается как элемент prop для нижестоящих компонентов, эти компоненты могут делать лишний рендеринг.',
			eng:
				'In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering.',
		},
		{
			rus:
				'Мы обычно рекомендуем binding в конструкторе или использование синтаксиса полей класса, чтобы избежать такого рода проблем с производительностью.',
			eng:
				'We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem.',
		},
		{
			rus:
				'Внутри цикла обычно требуется передать дополнительный параметр обработчику событий.',
			eng:
				'Inside a loop it is common to want to pass an extra parameter to an event handler.',
		},

		{
			rus:
				'С помощью стрелочной функции мы должны передать параметр явно, а с помощью bind любые последующие аргументы автоматически присоединяются.',
			eng:
				'With an arrow function, we have to pass parametr explicitly, but with bind any further arguments are automatically forwarded.',
		},
		{
			rus:
				'В react, вы можете создать отдельные компоненты, которые инкапсулируют нужное вам поведение. Затем можно отобразить только некоторые из них в зависимости от состояния приложения.',
			eng:
				'In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.',
		},
		{
			rus:
				'Вы можете использовать переменные для хранения элементов. Это может помочь вам по условию отобразить часть компонента, в то время как остальной вывод не изменяется.',
			eng:
				'You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn’t change.',
		},
		{
			rus:
				'При объявлении переменной и использовании оператора if - хороший способ для отображения компонента по условию, иногда может потребоваться использовать более короткий синтаксис.',
			eng:
				'While declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a shorter syntax.',
		},
		{
			rus: 'Есть несколько способов вставить условия в JSX, описаных ниже.',
			eng: 'There are a few ways to inline conditions in JSX, explained below.',
		},
		{
			rus:
				'Вы можете встраивать любые выражения в JSX путем заключения их в фигурные скобки.',
			eng: 'You may embed any expressions in JSX by wrapping them in curly braces.',
		},
		{
			rus:
				'Включая логический оператор JavaScript &&. Он может быть удобен для условного включения элемента.',
			eng:
				'This includes the JavaScript logical && operator. It can be handy for conditionally including an element.',
		},
		{
			rus:
				'Таким образом, если условие имеет значение True, то элемент идущий сразу после && появится в выходе. Если оно ложно, React проигнорирует и пропустит его.',
			eng:
				'Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.',
		},
		{
			rus:
				'Как и в JavaScript, это на ваше усмотрение выбрать подходящий стиль, основанный на том, что вы и ваша команда считаете более читабельным.',
			eng:
				'Just like in JavaScript, it is up to you to choose an appropriate style based on what you and your team consider more readable.',
		},
		{
			rus:
				'Также помните, что всякий раз, когда условия становятся слишком сложными, самое время, чтобы выделить все в компонент компонент.',
			eng:
				'Also remember that whenever conditions become too complex, it might be a good time to extract a component.',
		},
	],

	oldDictionary2: [
		{
			rus:
				'Если вы хотите объединить данные из нескольких дочерних элементов или установить связь между двумя дочерними компонентами, переместите состояние вверх, чтобы оно жило в родительском компоненте.',
			eng:
				'When you want to aggregate data from multiple children or to have two child components communicate with each other, move the state upwards so that it lives in the parent component.',
		},
		{
			rus:
				'Родитель может затем передать состояние дочерним элементам через пропсы, чтобы дочерние компоненты всегда были синхронизированы друг с другом и с родителем.',
			eng:
				'The parent can then pass the state back down to the children via props, so that the child components are always in sync with each other and with the parent.',
		},
		{
			rus:
				'Вытягивание состояния вверх, как здесь, это общепринятая практика при рефакторинге, так что давайте воспользоваться этой возможностью, чтобы попробовать его.',
			eng:
				'Pulling state upwards like this is common when refactoring React components, so let’s take this opportunity to try it out.',
		},
		{
			rus:
				'Поскольку состояние компонента считается закрытым, мы не можем обновить его непосредственно из другого компонента.',
			eng:
				'Since component state is considered private, we can’t update it directly from another component.',
		},
		{
			rus:
				'Обычным паттерном здесь является передача функции из родительского компонента дочернему компоненту, которая вызывается при нажатии кнопки.',
			eng:
				'The usual pattern here is pass down a function from parent component to child component that gets called when the button is clicked.',
		},
		{
			rus:
				'Мы вызываем .slice () для клонирования массива данных вместо изменения существующего массива.',
			eng:
				'We call .slice() to copy the data array instead of mutating the existing array.',
		},
		{
			rus:
				'Перескочите вперед через раздел, чтобы узнать, почему неизменяемость имеет важное значение.',
			eng: 'Jump ahead a section to learn why immutability is important.',
		},
		{
			rus:
				'Этот компонент больше не сохраняет свое собственное состояние; он получает свое значение от родительского компонента и сообщает своему родителю о клике.',
			eng:
				'This component no longer keeps its own state; it receives its value from its parent component and informs its parent when it’s clicked.',
		},
		{
			rus: 'Мы называем такие как эти компоненты, контролируемыми компонентами.',
			eng: 'We call components like this controlled components.',
		},
		{
			rus:
				'В предыдущем примере кода мы рекомендуем использовать .slice() оператор, чтобы скопировать массив, до внесения изменений и предотвратить изменения существующего массива.',
			eng:
				'In the previous code example, we suggest using the .slice() operator to copy the array prior to making changes and to prevent mutating the existing array.',
		},
		{
			rus:
				'Давайте поговорим о том, что это значит (неизменность) и почему это важная концепция, чтобы изучить ее.',
			eng:
				'Let’s talk about what this means (immutability) and why it is an important concept to learn.',
		},
		{
			rus: 'Как правило, существует два способа изменения данных.',
			eng: 'There are generally two ways for changing data.',
		},
		{
			rus:
				'Первый метод заключается в изменении данных путем прямого изменения значений переменной.',
			eng:
				'The first method is to mutate the data by directly changing the values of a variable.',
		},
		{
			rus:
				'Второй метод состоит в замене данных новой копией объекта, которая также включает необходимые изменения.',
			eng:
				'The second method is to replace the data with a new copy of the object that also includes desired changes.',
		},
		{
			rus: 'Конечный результат тот же.',
			eng: 'The end result is the same.',
		},
		{
			rus:
				'Не мутируя (или не изменяя базовые данные) непосредственно, мы теперь имеем дополнительное преимущество.',
			eng:
				'By not mutating (or changing the underlying data) directly we now have an added benefit.',
		},
		{
			rus:
				'Это преимущество может помочь нам увеличить производительность компонентов и приложений в целом.',
			eng:
				'This benefit can help us increase component and overall application performance.',
		},
		{
			rus:
				'Иммутабельность также приводит к тому, что некоторые сложные функции гораздо проще реализовать.',
			eng: 'Immutability also makes some complex features much easier to implement.',
		},
		{
			rus:
				'Например, далее в этом учебнике мы реализуем путешествие во времени между различными этапами игры.',
			eng:
				'For example, further in this tutorial we will implement time travel between different stages of the game.',
		},
		{
			rus:
				'Определение того, изменился ли измененный объект, является сложным, поскольку изменения вносятся непосредственно в объект.',
			eng:
				'Determining if a mutated object has changed is complex because changes are made directly to the object.',
		},
		{
			rus:
				'Это требует сравнения текущего объекта с предыдущей копией, обхода всего дерева объектов и сравнения каждой переменной и значения.',
			eng:
				'This then requires comparing the current object to a previous copy, traversing the entire object tree, and comparing each variable and value.',
		},
		{
			rus: 'Этот процесс может стать всё возрастающе сложным.',
			eng: 'This process can become increasingly complex.',
		},
		{
			rus: 'Определить, как изменялся неизменяемый объект, значительно проще.',
			eng: 'Determining how an immutable object has changed is considerably easier.',
		},
		{
			rus: 'Если ссылка изменилась, то объект был изменен. Вот и все.',
			eng:
				'If the object being referenced is different from before, then the object has changed. That’s it.',
		},
		{
			rus: 'Определить, когда делать повторный рендеринг в React.',
			eng: 'Determining When to Re-render in React.',
		},
		// https://reactjs.org/tutorial/tutorial.html#an-interactive-component

		// ****************************************************************************************
		// Dmitry Baranovskiy: Zen of JavaScript | JSConf EU 2015 - YouTube
		// Видео по запросу javascript zen▶ 26:22
		// https://www.youtube.com/watch?v=QHs55-5FzgA
		// 10 нояб. 2015 г. - Добавлено пользователем JSConf
		{
			rus: 'Прошло много времени с тех пор как джаваскрипт стал мейнстримом.',
			eng: 'Long time passed since JavaScript became mainstream.',
		},
		{
			rus:
				'Не смотря на многочисленные попытки, до сих пор нет единственного правильного пути написания кода в этом языке.',
			eng:
				'Despite multiple attempts, there is still no right single way to write code in this language.',
		},
		{
			rus:
				'Каждый использует его своим специальным способом и многие люди все еще думают, что они не смогли укротить этот язык.',
			eng:
				'Everybody is using it in their own special way and most people still fill that they are failing to tame the language.',
		},
		{
			rus: 'Посмотри на этот код. Ты не знал этого. Я знаю, поэтому я умнее тебя.',
			eng: "Look at that code. You didn't know that. I know so I am smarter then you.",
		},
		{
			rus: 'Все эти разговоры немного скучные потому, что бесполезные.',
			eng: 'All this talks are kinda boring, because they are not very useful.',
		},
		{
			rus: 'Моя речь будет такой же но я хочу принести вам весть.',
			eng: 'My talk will be sort of similar but I want to bring a message to you.',
		},
		{
			rus: 'Я расскажу вам, как я придумал идею говорить о языке Javascript.',
			eng: "I'll tell you how I came up with idea to talk about javascript language.",
		},
		{
			rus: 'Я знаю много языков. Паскаль, С++ и наконец перешел к javascript.',
			eng: 'I know many languages. Pascal, C++ and finally jumped to javascript.',
		},
		{
			rus:
				'У меня было очень хорошее понимание того, как JavaScript-код должен быть написан. И я был совершенно неправ.',
			eng:
				'I had very good understanding of how the javascript code should be written. And I was completely wrong.',
		},
		{
			rus: 'Javascript ударил меня в спину много много раз, прежде чем я наконец понял',
			eng: 'Javascript hit me in back many many times before I finally understood.',
		},
		{
			rus: 'Но даже теперь я не уверен, что понял даваскипт полностью.',
			eng: 'But even now I am not sure that I understood javascript completely.',
		},
		{
			rus: 'Кто здесь думает, что знает Javascript очень хорошо?',
			eng: 'Who is there thinking he knows javascript very well?',
		},
		{
			rus: 'OK. Пара заблуждающихся человек. Но большинство людей не так уверенно.',
			eng: 'Ok. The couple misguided people. But most people are not so confident.',
		},
		{
			rus:
				'Я хочу, чтобы вы подумали... Остановитесь на минутку. Забудьте о react и angular. Подумайте о чистом JavaScript.',
			eng:
				'What I want you to think... Stop for a moment. Forget about react and angular. Think about pure javascript.',
		},
		{
			rus: 'Каким он должен быть? Что такое правильный способ написания JavaScript.',
			eng: 'What it should be like? What is the proper way of javascript?',
		},
		{
			rus:
				'Javascript очень гибкий, как вы знаете. Мы могли бы написать код многими способами.',
			eng:
				'Javascript is very flexible as you all know. We could write code in many different ways.',
		},
		{
			rus:
				'И я здесь не для того, чтобы научить вас правильно писать Javascript. Нет правильного пути.',
			eng:
				'And I am not here to teach you how to write javascript the right way. There is no right way. ',
		},
		{
			rus: 'Те, кто не знает, что они ходят во тьме, никогда не будут искать света.',
			eng:
				'Those who are unaware they are walking in darkness will never seek the light.',
		},
		{
			rus:
				'Я бы хотел сказать, что JavaScript-это Брюс Ли из языков программирования. Потому что он гибкий, он мощный и он изменил всю картину.',
			eng:
				"I'd like to say that javascript is Bruce Lee of programming languages. Because it's flexible, it's powerful and it changed the hole picture.",
		},
		{
			rus:
				'Я хочу (своего рода) указать вам на некоторые вещи, которые вы, возможно, не видели раньше или, может быть, не думали о них.',
			eng:
				"I want to (sort of) point you to some of the things that you may be haven't seen before or maybe didn't think about them",
		},
		// ****************************************************************************************
		// https://reactjs.org
		//
		{
			rus: 'Реакт делает безболезненным создание интерактивных интерфейсов',
			eng: 'React makes it painless to create interactive UIs.',
		},
		{
			rus:
				'Конструируйте простые вью для каждого состояния в вашем приложении и Реакт эффективно обновит и отрендерит именно те компоненты, где состояние изменилось.',
			eng:
				'Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
		},
		{
			rus:
				'Декларативные вьюшки делают ваш код более предсказуемым и удобным для дебагирования.',
			eng: 'Declarative views make your code more predictable and easier to debug.',
		},
		{
			rus:
				'Создавайте встроенные компоненты, которые управляеют своим собственным состоянием. Затем компонуйте их для делания сложного UI.',
			eng:
				'Build encapsulated components that manage their own state, then compose them to make complex UIs.',
		},
		{
			rus:
				'Когда логика компонента написана на Javascript вместо шаблонов, вы легко можете прогнать много данных через ваше приложении и держать состояние вне DOM.',
			eng:
				'Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.',
		},
		{
			rus:
				'Мы не делаем предположений о других выших технологиях, поэтому вы можете разрабатывать новые фичи в Реакт не переписывая ваш старый код.',
			eng:
				'We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.',
		},
		{
			rus:
				'Реакт так же может сервеный рендеринг с использованием Node и мобильный с использованием Реакт нейтив.',
			eng:
				'React can also render on the server using Node and power mobile apps using React Native.',
		},

		{
			rus:
				'У компонентов Реакта имплементирован render() метод, который получает входные данные и возвращает то, что нужно отобразить.',
			eng:
				'React components implement a render() method that takes input data and returns what to display.',
		},
		{
			rus: 'Этот пример использует XML подобный синтаксис, называемый JSX.',
			eng: 'This example uses an XML-like syntax called JSX.',
		},
		{
			rus:
				'Входные данные, попавшие в компонент, могут быть доступные функции рендер через пропсы.',
			eng:
				'Input data that is passed into the component can be accessed by render() via this.props.',
		},
		{
			rus: 'JSX является необязательным и не требуется для использования в Реакте.',
			eng: 'JSX is optional and not required to use React.',
		},
		{
			rus:
				'Попробуйте Babel REPL, чтобы посмотреть чистый JavaScript код, произведенный после шага компиляции  JSX.',
			eng:
				'Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.',
		},
		{
			rus:
				'В дополнении к получению входных данных (через пропсы), компонент может поддерживать внутреннее состояние (доступное через this.state).',
			eng:
				'In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state).',
		},
		{
			rus:
				'Когда состояние компонента изменится, рендерированная разметка будет обновлена через вызов render().',
			eng:
				'When a component’s state data changes, the rendered markup will be updated by re-invoking render().',
		},

		{
			rus:
				'Реакт это JavaScript библиотека, и поэтому подразумевается, что у вас есть базовое понимание JavaScript.',
			eng:
				'React is a JavaScript library, and so it assumes you have a basic understanding of the JavaScript language.',
		},
		{
			rus:
				'Если вы не чувствуете себя очень уверенно, мы рекомендуем освежить ваши знания JavaScript, чтобы вы могли следовать дальше более легко.',
			eng:
				'If you don’t feel very confident, we recommend refreshing your JavaScript knowledge so you can follow along more easily.',
		},
		{
			rus: 'Мы также используем некоторый  синтаксис из ES6 в наших примерах',
			eng: 'We also use some of the ES6 syntax in the examples. ',
		},
		{
			rus: 'Мы пытаемся использовать его умеренно, потому что от относительно новый  ',
			eng: 'We try to use it sparingly because it’s still relatively new',
		},
		{
			rus:
				'Но мы поддерживаем вас познакомиться с новыми стрелочными функциями, классами, шаблонами, литералами, let  и const утверждениями.',
			eng:
				'But we encourage you to get familiar with arrow functions, classes, template literals, let, and const statements',
		},
		{
			rus: 'Вы можете использовать Babel REPL для проверки во что ES6 код компилируется.',
			eng: 'You can use the Babel REPL to check what ES6 code compiles to.',
		},
		{
			rus:
				'В отличии от браузерных DOM элементов, реакт элементы являются простыми объектами, которые легко создавать.',
			eng:
				'Unlike browser DOM elements, React elements are plain objects, and are cheap to create.',
		},
		{
			rus:
				'React DOM заботиться об обновлении DOM, чтобы он соответствовал React элементам.',
			eng: 'React DOM takes care of updating the DOM to match the React elements.',
		},
		{
			rus: 'Можно перепутать элементы с более широко известной концепцией "компонентов".',
			eng: 'One might confuse elements with a more widely known concept of “components”.',
		},
		{
			rus:
				'Элементы это то из чего сделаны компоненты, и мы поощряем прочтение этой секции перед тем как идти вперед.',
			eng:
				'Elements are what components are “made of”, and we encourage you to read this section before jumping ahead.',
		},

		{
			rus: 'Элемент описывает то, что вы хотите увидеть на экране.',
			eng: 'An element describes what you want to see on the screen.',
		},
		{
			rus:
				'Для того, чтобы отобразить элемент в корневом узле DOM, передайте их обоих в ReactDOM.render().',
			eng:
				'To render a React element into a root DOM node, pass both to ReactDOM.render().',
		},
		{
			rus:
				'Реактовские элементы иммутабельны. Как только вы создали элемент, вы не можете изменить его детей или атрибуты.',
			eng:
				'React elements are immutable. Once you create an element, you can’t change its children or attributes.',
		},
		{
			rus:
				'Элемент - как единичный фрагмент фильма: он представляет UI в определенный момент времени.',
			eng:
				'An element is like a single frame in a movie: it represents the UI at a certain point in time.',
		},
		{
			rus:
				'В соотвествии с нашими знаниями, единственный путь обновить UI это создавать новый элемент и отправить его в ReactDOM.render().',
			eng:
				'With our knowledge so far, the only way to update the UI is to create a new element, and pass it to ReactDOM.render().',
		},
		{
			rus:
				'На практике, большинство реакт приложений вызывают  ReactDOM.render() только один раз.',
			eng: 'In practice, most React apps only call ReactDOM.render() once.',
		},
		{
			rus:
				'В следующей секции мы изучим как такой код изолируется в компонент с состоянием.',
			eng:
				'In the next sections we will learn how such code gets encapsulated into stateful components.',
		},
		{
			rus:
				'Реакт сравнивает элемент и его детей с предыдущими  и  применяет к DOM только необходимые изменения, чтобы DOM соответствовал желаемому состоянию.',
			eng:
				'React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.',
		},
		{
			rus:
				'Даже если мы создаем элемент описывающий целое UI дерево на каждый тик, только следующий узел чей контент изменился обновится by React DOM.',
			eng:
				'Even though we create an element describing the whole UI tree on every tick, only the text node whose contents has changed gets updated by React DOM.',
		},
		{
			rus:
				'Согласно нашему опыту, думать о том, как UI должен выглядеть в данный момент времени в противовес как изменять его со временем устраняет целый класс ошибок.',
			eng:
				'In our experience, thinking about how the UI should look at any given moment rather than how to change it over time eliminates a whole class of bugs.',
		},

		{
			rus: 'Концептуально, компоненты это как джаваскрипт  функции',
			eng: 'Conceptually, components are like JavaScript functions.',
		},
		{
			rus:
				'Компоненты получают произвольные входные данные (называемые пропсы) и возвращают реакт-элементы, описывающие, что должно появиться на экране.',
			eng:
				'Components accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.',
		},
		{
			rus: 'Самый простой способ определить компонент это написать дважваскрипт функцию.',
			eng: 'The simplest way to define a component is to write a JavaScript function.',
		},
		{
			rus:
				'Эта функция является валидным реакт-компонентом, потому что она принимает один  “пропс” (что означает пропертис) - объект-аргумент с данными, называемый пропс, и возвращает реакт-элемент.',
			eng:
				'This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element.',
		},
		{
			rus:
				'Мы называем такие компоненты функциональными потому, что это буквально джаваскрипт функции.',
			eng:
				'We call such components “functional” because they are literally JavaScript functions.',
		},
		{
			rus: 'Вы также можете использовать ES6 класс для определения компонента.',
			eng: 'You can also use an ES6 class to define a component.',
		},
		{
			rus:
				'Классы имеют некоторые дополнительные фичи, которые мы обсудим в следующих секциях.',
			eng:
				'Classes have some additional features that we will discuss in the next sections.',
		},
		{
			rus: 'Пока мы будем использовать функциональные компоненты из-за их краткости.',
			eng: 'Until then, we will use functional components for their conciseness.',
		},
		{
			rus:
				'Когда реакт видит элемент, представляющий определенный пользователем компонент, он пропускает JSX атрибуты в этот компонент как один объект.',
			eng:
				'When React sees an element representing a user-defined component, it passes JSX attributes to this component as a single object.',
		},
		{
			rus: 'Всегда начинайте имена компонентов с большой буквы.',
			eng: 'Always start component names with a capital letter.',
		},
		{
			rus: 'Компоненты могут ссылаться на другие компоненты в своем выводе.',
			eng: 'Components can refer to other components in their output.',
		},
		{
			rus:
				'Это позволяет нам использовать ту же самую компонентную абстракцию на любом уровне детализации.',
			eng: 'This lets us use the same component abstraction for any level of detail.',
		},
		{
			rus:
				'React компоненты могут иметь состояние, устанавливаемое в конструкторе, которое следует считать приватным для компонента',
			eng:
				'React components can have state by setting this.state in the constructor, which should be considered private to the component.',
		},
		{
			rus:
				'Всякий раз, когда this.setState вызывается, обновление компонента планируется.',
			eng: 'Whenever this.setState is called, an update to the component is scheduled.',
		},
		{
			rus:
				'React Devtools extension для Chrome и Firefox позволяет инспектировать компонентное дерево в браузерном devtools.',
			eng:
				'The React Devtools extension for Chrome and Firefox lets you inspect a React component tree in your browser devtools.',
		},
		{
			rus:
				'Самое большое преимущество неизменности в React приходит когда вы строите простые чистые компоненты.',
			eng:
				'The biggest benefit of immutability in React comes when you build simple pure components.',
		},
		{
			rus:
				'Поскольку для неизменяемые данных легче определить, были ли внесены изменения, это также помогает определить, когда компонент требует повторного отображения.',
			eng:
				'Since immutable data can more easily determine if changes have been made, it also helps to determine when a component requires being re-rendered.',
		},
		{
			rus:
				'Многие компоненты в ваших приложениях могут быть написаны как функциональные компоненты.',
			eng:
				'Many components in your apps will be able to be written as functional components.',
		},
		{
			rus:
				'Если вы рендерите компонент, имеющий состояние, это состояние должно быть сохранено - и независимо от того, как вы реализуете свои компоненты, React сохраняет ссылку на предидущие нативные представления.',
			eng:
				'If you render a component that has state, that state needs to be stored – and regardless of how you implement your components, React stores a reference to the backing native views.',
		},
		{
			rus:
				'Внимание: каждый ребенок в массиве или итераторе должен иметь уникальный "key" проп.',
			eng: 'Warning: Each child in an array or iterator should have a unique "key" prop.',
		},
		{
			rus:
				'Когда вы отображаете список элементов, React всегда сохраняет некоторую информацию о каждом элементе в списке.',
			eng:
				'When you render a list of items, React always stores some info about each item in the list.',
		},
		{
			rus: 'Когда вы обновляете этот список, React должен определить, что изменилось.',
			eng: 'When you update that list, React needs to determine what has changed.',
		},
		{
			rus:
				'Вы могли бы добавить, удалить, реорганизовать или обновить элементы в списке.',
			eng: 'You could’ve added, removed, rearranged, or updated items in the list.',
		},
		{
			rus:
				'Настоятельно рекомендуется назначать правильные ключи всякий раз когда вы создаете динамические списки.',
			eng:
				'It’s strongly recommended that you assign proper keys whenever you build dynamic lists.',
		},
		{
			rus:
				'Если у вас нет подходящего ключа, вы можете захотеть подумать о реструктуризации ваших данных так, что он был.',
			eng:
				'If you don’t have an appropriate key handy, you may want to consider restructuring your data so that you do.',
		},
		{
			rus:
				'В этом уроке мы затронули ряд концепций React, включая элементы, компоненты, пропсы и состояние.',
			eng:
				'Throughout this tutorial, we have touched on a number of React concepts including elements, components, props, and state.',
		},
		// ****************************************************************************************
		// Feedback
		//
		{
			rus:
				'Пожалуйста упомяните вещи, которые идут хорошо и вещи, которые нужно исправить.',
			eng: 'Please mention things that went well and things to improve.',
		},
		{
			rus: 'Дайте примеры, по возможности',
			eng: 'Give examples if possible.',
		},
		{
			rus:
				"Обоснуйте свои выборы метрик (даже если вы выбрали 'Соответсвует ожиданиям', что указывает на хорошую произодительность.",
			eng:
				"Justify your choices for metrics (even if you selected 'Meets expectations' which denotes a good performance).",
		},
		{
			rus:
				'Также отметьте топики в дополнении к метрикам. Добавьте личные мысли и чувства.',
			eng:
				'Also mention topics in addition to the metrics. Add personal thoughts and feelings.',
		},
		{
			rus:
				'Предложите топики для ежеквартального обсуждения, и позитивные и требующие улучшения.',
			eng:
				'Suggest topics for the quarterly meeting to discuss: both positive feedback and opportunities for improvements',
		},
		{
			rus:
				'Используйте английский язык или родной язык. Ваш феедбек все равно будут обработан конфиденциально.',
			eng:
				'Use English or native language. Your feedback sill be handled confidentially.',
		},

		{
			rus:
				'Иван и я не работали вместе в одном проекте, но мы часто обсуждали профессиональные темы.',
			eng:
				'Ivan and I didn’t work  together in the same project, but we often discussed professional matters.',
		},
		{
			rus:
				'По моему мнению, Иван является высоко квалифицированным фронтенд разработчиком со значительным опытом.',
			eng:
				'In my opinion, Ivan is a highly qualified frontend developer with considerable experience.',
		},
		{
			rus:
				'Два или три раза я спрашивал его о помощи по использованию некоторых технологий и библиотек и он дал мне квалифицированные ответы. Эти ответы очень помогли в решении проблем.',
			eng:
				'Two or three times I asked him for a help on using some technologies and libraries and he gave qualified answers to me. This advices were of great help  to solve the problems.',
		},
		{
			rus:
				'Как человек Иван очень общительный и интересный человек для обсуждения любых вещей. Он активный и увлечённый колега',
			eng:
				'As a man, Ivan is sociable and interesting person to discuss any of the things with. He is an active and dedicated colleague.',
		},

		{
			rus:
				'Обратная связь с коллегами является важным вкладом для их руководителей в оценке их недавней деятельности, а также предоставление им значимой информациии об выдающихся и требующих улучшения областях.',
			eng:
				'Feedback on your colleagues is important input for their managers in evaluating their recent performance, as well as providing them with meaningful sum-up on their outstanding and to-be-improved areas.',
		},
		{
			rus:
				'Нажмите сюда, если вам нужны некоторые советы о том, как писать осмысленный фидбек.',
			eng: 'Click here if you need some tips how to write meaningful feedback!',
		},

		{
			rus: 'Добавление методов жизненного цикла к классу.',
			eng: 'Adding Lifecycle Methods to a Class.',
		},
		{
			rus:
				'В приложениях с большим количеством компонентов, очень важно  ресурсы, высвободить взятые компонентом, когда они уничтожаются.',
			eng:
				'In applications with many components, it’s very important to free up resources taken by the components when they are destroyed.',
		},
		{
			rus:
				'Мы хотим создавать Таймер каждый раз, когда "Часы" рендерится в дом впервые. Это называется "монтирование" в React.',
			eng:
				'We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React.',
		},
		{
			rus:
				'Мы  также хотим вычищать этот Таймер каждый раз, когда DOM производенный "Часы" убирается. Это называется “размонтирование” в React.',
			eng:
				'We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called “unmounting” in React.',
		},
		{
			rus:
				'Мы можем объявить специальные методы класса компонента, чтобы выполнять некоторый код, когда компонент монтирует и размонтирует.',
			eng:
				'We can declare special methods on the component class to run some code when a component mounts and unmounts.',
		},
		{
			rus: 'Эти методы называются "хуками жизненного цикла".',
			eng: 'These methods are called “lifecycle hooks”.',
		},
		{
			rus: 'componentDidMount() хук выполняется после вывода был отрендерен в DOM.',
			eng:
				'The componentDidMount hook runs after the component output has been rendered to the DOM.',
		},
		{
			rus: 'Обратите внимание, мы сохраняем идентификатор таймера прямо в this.',
			eng: 'Note how we save the timer ID right on this.',
		},
		{
			rus:
				'Когда this.props устанавливается самим Реактом и this.state имеет особое значение, вы свободны добавлять дополнительные поля к классу вручную, если вам нужно сохранить что-то, что не используется для визуального вывода.',
			eng:
				'While this.props is set up by React itself and this.state has a special meaning, you are free to add additional fields to the class manually if you need to store something that is not used for the visual output.',
		},
		{
			rus: 'Если Вы не используете что-то в render (), это не должно быть в state.',
			eng: 'If you don’t use something in render(), it shouldn’t be in the state.',
		},
		{
			rus:
				'Мы будем демонтировать таймер в componentWillUnmount() хуке жизненного цикла.',
			eng: 'We will tear down the timer in the componentWillUnmount lifecycle hook.',
		},
		{
			rus: 'Есть три вещи, которые вы должны знать о setstate().',
			eng: 'There are three things you should know about setState().',
		},
		{
			rus:
				'Не изменяйте состояние напрямую. Вместо этого используйте setState(), иначе не будет ререндера.',
			eng:
				'Do Not Modify State Directly. Instead, use setState otherwise there will be no rerender.',
		},
		{
			rus: 'Единственное место, где можно присвоить this.state это конструктор.',
			eng: 'The only place where you can assign this.state is the constructor.',
		},
		{
			rus: 'Обновления state могут быть Асинхронными.',
			eng: 'State Updates May Be Asynchronous.',
		},
		{
			rus:
				'React может реагировать пакетировать множественные setstate() вызовы в один update для производительности.',
			eng:
				'React may batch multiple setState calls into a single update for performance.',
		},
		{
			rus:
				'Чтобы исправить это, используйте вторую форму setstate (), которая принимает функцию, а не объект.',
			eng:
				'To fix it, use a second form of setState that accepts a function rather than an object.',
		},
		{
			rus:
				'Эта функция будет получать прежнее состояние в качестве первого аргумента, и props на момент применения обновления в качестве второго аргумента.',
			eng:
				'That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument.',
		},
		{
			rus:
				'Обновления state сливаются. При вы вызываете setstate(), React сливает объект, обеспечить в текущем состоянии.',
			eng:
				'State Updates are Merged. When you call setState(), React merges the object you provide into the current state.',
		},
		{
			rus:
				'Это слияние неглубокое, так setstate({комментарии}) оставляет this.state.posts целым, но полностью заменяет this.state.comments.',
			eng:
				'The merging is shallow, so this.setState({comments}) leaves this.state.posts intact, but completely replaces this.state.comments.',
		},
		{
			rus:
				'Ни родительский, ни дочерний компоненты не могут знать, является ли определенный компонент с состоянием или без состояния, и им все равно, определен ли он как функция или класс.',
			eng:
				'Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class.',
		},
		{
			rus: 'Поэтому state часто называют локальным или инкапсулированным.',
			eng: 'This is why state is often called local or encapsulated.',
		},
		{
			rus:
				'State не доступен никакому компоненту, кроме того, который владеет и устанавливает его.',
			eng:
				'State is not accessible to any component other than the one that owns and sets it.',
		},
		{
			rus:
				'Компонент может передать свое состояние в качестве пропс своим дочерним компонентам.',
			eng:
				'A component may choose to pass its state down as props to its child components.',
		},
		{
			rus: 'Обычно это называется потоком данных “сверху вниз” или "однонаправленным".',
			eng: 'This is commonly called a “top-down” or “unidirectional” data flow.',
		},
		{
			rus:
				'Любое состояние всегда принадлежит какому-то конкретному компоненту, и любые данные или UI, полученный из этого состояния, могут влиять только на компоненты "ниже" их в дереве.',
			eng:
				'Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree.',
		},
		{
			rus:
				'Если представить компонентное дерево как водопад пропс, то состояние каждого компонента похоже на дополнительный источник воды, который присоединяется к нему в произвольной точке, но также стекает вниз.',
			eng:
				'If you imagine a component tree as a waterfall of props, each component’s state is like an additional water source that joins it at an arbitrary point but also flows down.',
		},
		{
			rus:
				'В React приложениях, является ли компонент c состоянием или без состояния является деталью реализации компонента, которая может меняться с течением времени.',
			eng:
				'In React apps, whether a component is stateful or stateless is considered an implementation detail of the component that may change over time.',
		},
		{
			rus:
				'Вы можете использовать компоненты без состояния  внутри компонентов с состояния, и наоборот.',
			eng: 'You can use stateless components inside stateful components, and vice versa.',
		},

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
				'The first thing you’ll want to do is to draw boxes around every component and subcomponent in the mock and give them all names.',
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
