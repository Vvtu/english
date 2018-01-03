const dictionaries = {
  // dictionary1: [
  // 	{ id:'1', rus:'Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? Ты меня понимаешь? ', eng:'Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? Do you understand me? '},
  // ],
  dictionary1: [
    { rus: 'Ты меня понимаешь?', eng: 'Do you understand me?' },
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

  oldDictionary1: [
    { rus: 'Ты меня понимаешь?', eng: 'Do you understand me?' },
    { rus: 'Дай мне ручку.', eng: 'Give me a pen.' },
    { rus: 'Дай мне ручку.', eng: 'Give me a pen.' },
    { rus: 'Встреть меня в кинотеатре', eng: 'Meet me in the theatre.' },
  ],

  dictionary2: [
    {
      rus:
        'React компоненты могут иметь состояние, устанавливаемое в конструкторе, которое следует считать приватным для компонента',
      eng:
        'React components can have state by setting this.state in the constructor, which should be considered private to the component.',
    },
    {
      rus: 'Всякий раз, когда this.setState вызывается, обновление компонента планируется.',
      eng: 'Whenever this.setState is called, an update to the component is scheduled.',
    },
    {
      rus:
        'React Devtools extension реагируют в  для Chrome и Firefox позволяет проверить компонентное дерево в браузере в инструментах разработчика.',
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
        'Многие компоненты в вашем приложении могут быть написаны как функциональные компоненты.',
      eng: 'Many components in your apps will be able to be written as functional components.',
    },

    {
      rus:
        'Когда вы отображаете список элементов, React всегда сохраняет некоторую информацию о каждом элементе в списке.',
      eng:
        'When you render a list of items, React always stores some info about each item in the list.',
    },
    {
      rus:
        'Если вы отрисовываете компонент, имеющий состояние, это состояние должно быть сохранено - и независимо от того, как вы реализуете свои компоненты, React сохраняет ссылку на предидущие нативные представления.',
      eng:
        'If you render a component that has state, that state needs to be stored – and regardless of how you implement your components, React stores a reference to the backing native views.',
    },
    {
      rus: 'Внимание: каждый ребенок в массиве или итераторе должен иметь уникальный "ключ".',
      eng: 'Warning: Each child in an array or iterator should have a unique "key" prop.',
    },
    {
      rus:
        'Когда вы отображаете список элементов, React всегда сохраняет некоторую информацию о каждом элементе в списке.',
      eng:
        'When you render a list of items, React always stores some info about each item in the list.',
    },
    {
      rus:
        'Если вы отрисовываете компонент, имеющий состояние, это состояние должно быть сохранено-и независимо от того, как вы реализуете свои компоненты, React сохраняет ссылку на резервные собственные представления.',
      eng:
        ' If you render a component that has state, that state needs to be stored – and regardless of how you implement your components, React stores a reference to the backing native views.',
    },
    {
      rus: 'Когда вы обновить этот список, React должен определить, что изменилось.',
      eng: 'When you update that list, React needs to determine what has changed.',
    },
    {
      rus: 'Вы могли бы добавить, удалить, изменить или обновить элементы в списке.',
      eng: 'You could’ve added, removed, rearranged, or updated items in the list.',
    },
    {
      rus:
        'Настоятельно рекомендуется назначать правильные ключи при создании динамических списков. Если у вас нет подходящего ключа, вы можете рассмотреть вопрос о реструктуризации ваших данных так, что он был.',
      eng:
        'It’s strongly recommended that you assign proper keys whenever you build dynamic lists. If you don’t have an appropriate key handy, you may want to consider restructuring your data so that you do.',
    },
    {
      rus:
        'В этом уроке мы затронули ряд концепций React, включая элементы, компоненты, пропсы и состояние.',
      eng:
        'Throughout this tutorial, we have touched on a number of React concepts including elements, components, props, and state.',
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
      eng: 'We call .slice() to copy the data array instead of mutating the existing array.',
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
      eng: 'The first method is to mutate the data by directly changing the values of a variable.',
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
      eng: 'This benefit can help us increase component and overall application performance.',
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
      rus: 'Javascript очень гибкий, как вы знаете. Мы могли бы написать код многими способами.',
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
      eng: 'Those who are unaware they are walking in darkness will never seek the light.',
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
      rus: 'Декларативные вьюшки делают ваш код более предсказуемым и удобным для дебагирования.',
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
      rus: 'React DOM заботиться об обновлении DOM, чтобы он соответствовал React элементам.',
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
      eng: 'To render a React element into a root DOM node, pass both to ReactDOM.render().',
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
      rus: 'На практике, большинство реакт приложений вызывают  ReactDOM.render() только один раз.',
      eng: 'In practice, most React apps only call ReactDOM.render() once.',
    },
    {
      rus: 'В следующей секции мы изучим как такой код изолируется в компонент с состоянием.',
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
      eng: 'We call such components “functional” because they are literally JavaScript functions.',
    },
    {
      rus: 'Вы также можете использовать ES6 класс для определения компонента.',
      eng: 'You can also use an ES6 class to define a component.',
    },
    {
      rus: 'Классы имеют некоторые дополнительные фичи, которые мы обсудим в следующих секциях.',
      eng: 'Classes have some additional features that we will discuss in the next sections.',
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

    // ****************************************************************************************
    // Feedback
    //
    {
      rus: 'Пожалуйста упомяните вещи, которые идут хорошо и вещи, которые нужно исправить.',
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
      rus: 'Также отметьте топики в дополнении к метрикам. Добавьте личные мысли и чувства.',
      eng: 'Also mention topics in addition to the metrics. Add personal thoughts and feelings.',
    },
    {
      rus: 'Предложите топики для ежеквартального обсуждения, и позитивные и требующие улучшения.',
      eng:
        'Suggest topics for the quarterly meeting to discuss: both positive feedback and opportunities for improvements',
    },
    {
      rus:
        'Используйте английский язык или родной язык. Ваш феедбек все равно будут обработан конфиденциально.',
      eng: 'Use English or native language. Your feedback sill be handled confidentially.',
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
      rus: 'Нажмите сюда, если вам нужны некоторые советы о том, как писать осмысленный фидбек.',
      eng: 'Click here if you need some tips how to write meaningful feedback!',
    },
  ],
};

export default dictionaries;
