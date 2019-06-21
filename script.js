// ЦИКЛЫ

// Цикл for, который обрабатывает только нечетные значения:

for (var i = 0; i < 10; i++) {
	if (i % 2) {
    	alert( i );
  }
};


// Цикл for, который обрабатывает только четные значения:

for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
    	alert(i);
	}
};

// Цикл for, который выводит в консоль пять сообщений "Hello!":

for (var i = 0; i < 5; i++) {
    console.log(i + ": Hello!");
};

// Цикл for, который выводит на страницу строку и числа от 1 до 3:

for (var i = 1; i < 4; i++) {
	alert( "номер " + i + "!" );
};

// Цикл for с for внутри, который выводит на страницу числа от 2 до 10:

for (var i = 2; i <= 10; i++) {
    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue;
    }
    alert(i);
};

// Цикл while, который выводит в консоль четные значения:

var x = 0;

while (x < 10) {
	console.log (x + '<br/>');
	x += 2;
};

// Цикл while, который выводит в консоль сообщение "Цикл сработал", если (y < 1000):

var y = 1000;

do {
	console.log('Цикл сработал');
}	while (y < 999);

// Цикл while, который выводит в консоль числа от 0 до 9:

var i = 0;

while (i<10) {
	console.log(i++);
};

// Цикл while, который выводит на страницу строку и числа от 1 до 3:

var i = 1;

	while (i < 4) {
	alert ('Номер ' + i++ + '!');
};

// // //

// Проверяет введенные данные на число > 100:

var num;

do {
  num = prompt("Введите число больше 100", 0);
} while (num <= 100 && num != null);


// Функция, которая выводит строку в консоль заглавными буквами:

function greet(name) {
	return 'Hello ' + name;
};

console.log(greet('Absurd').toUpperCase());

// Функция, которая выводит строку в консоль заглавными буквами + arguments:

var greet = function(name) {
	console.log(arguments);
	return 'Hello ' + name;
};

console.log(greet('Absurd', 22, 14, 13).toUpperCase());

// Функция, которая вызывает иную функцию, которая выводит в консоль строку + строку иной функции:

var func = function(callback) {
	var name = 'Absurd';
	callback(name);
};

func(function(n){
	console.log('Hello ' + n);
});

// Функция с return, которая выводит строку:

var func = function() {
	return function() {
		console.log('Hi');
	}
};

func() ();

// Функция, которая выводит две строки через вызов этой функции:

function print (text) {
	console.log (text);
}

print('Hello ');
print('world!');

// Функция выводящая в консоль сумму двух чисел, при ее вызове:

let summ;

function count (x, y) {
	summ = x + y;
}

count(summ);

// Пример работы переменных в функции и вне ее:

var global = 12;
var i = 10;

function test () {
	var global = 1;
	var i = 5;
}

test();
console.log('Global - ' + global + ', variable i - ' + i);

// Функция выводящая в консоль строку:

var greeting = (function(name) {
	return 'Hello ' + name;
}('Absurd'));

console.log(greeting);

// Способ понять, какой тип у переменной:

const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean

// Вывод в консоль строки + строки переменной:

let favoriteAnimal = 'Irbis';
console.log('My favorite animal: ' + favoriteAnimal);

// Вывод в консоль двух строк из двух переменных:

let myName = 'absurd';
let myCity = 'Moscow';

console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

// Выводи в консоль сумму/вычетание/умножение/деление:

let w = 4;
w += 1;
console.log(w); // Output: 5

let x = 20;
x -= 5;
console.log(x); // Output: 15

let y = 50;
y *= 2;
console.log(y); // Output: 100

let z = 8;
z /= 2;
console.log(z); // Output: 4

// Вход и проверка пароля:

var identification = prompt('Кто вы?', '...');

if (identification == 'Админ') {
	var password = prompt('Введите пароль', '*****');
		if (password == 'Черный властелин') {
			alert('Добро пожаловать');
		}
		else if (password == null) {
			alert('Вход отменен');
		}
		else if (password != 'Черный властелин') {
			alert('Ошибка');
		}
}
else if (identification == null) {
	alert('Вход отменен');
}
else if (identification != 'Админ') {
	alert('Я не знаю вас');
}

// Вывод сообщений на страницу при вводе:

if(browser == 'IE') {
    alert('О, да у вас IE!');
  } else if (browser == 'Chrome'
          || browser == 'Firefox'
          || browser == 'Safari'
          || browser == 'Opera') {
    alert('Да, и эти браузеры мы поддерживаем');
  } else {
    alert('Мы надеемся, что и в вашем браузере все ок!');
}

// Сообщение на страницу при нажатие на кнопку:

function buttonClick (button) {
	alert('Вы нажали на кнопку. Кнопка имеет имя ' + button.name + ', также value равно ' + button.value + '.');
}

<input type = "button" name = "b" value = "Click me" onclick = "buttonClick (this)" />

// Событие сколько раз наведено на элемент:

var counter = 0;
function onMouseCounter (element) {
	counter++;
	element.innerHTML = 'На этот текст было наведено ' + counter + ' раз';
}

<span onmouseover = "onMouseCounter (this)">На этот текст было наведено 0 раз</span>

// Конструкция switch:

let a = +prompt('Число', 'От 0 до 3');
   
switch (a) {
    case 0:
        alert(0);
    break;
    case 1:
        alert(1);
    break;
    case 2:
    case 3:
        alert('2, 3');
    break;
};

// Конструкция switch с полем для ввода и выводом сообщения а страницу:

let browser = prompt('Какой у вас браузер?', 'IE, Chrome, Firefox, Safari, Opera');

switch (browser) {
    case 'IE':
        alert( 'О, да у вас IE!' );
    break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert( 'Да, и эти браузеры мы поддерживаем' );
    break;

  default:
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
};

// Конструкия switch, которая выводит на страницу строку:

var num = 2;

switch (num) {
	case 1:
		result = 'зима';
	break;
	case 2:
		result = 'весна';
	break;
	case 3:
		result = 'лето';
	break;
	case 4:
		result = 'осень';
    break;
}

alert(result);

// При вводе данных, выводит сообщение на страницу:

let a = +prompt('Введите число: 0', '0');

if (a == 0) {
  alert('Верно');
}
else {
  alert('Неверно');
}

//

let a = +prompt('Введите число меньше 0', '0');

if (a < 0) {
  alert('Верно');
}
else {
  alert('Неверно');
}

// 

let a = +prompt ('Введите число больше или равное 0', '0');

if (a >= 0) {
  alert('Верно');
}
else {
  alert('Неверно');
}

// 

let a = +prompt('Введите число меньшее или равное 0', '0');

if (a <= 0) {
  alert('Верно');
}
else {
  alert('Неверно');
}

// 

let a = +prompt('Введите число не равное 0', '0');

if (a != 0) {
  alert('Верно');
}
else {
  alert('Неверно');
}

// 

let a = prompt('Введите текст: "test"', 'test');

if (a == 'test') {
  alert('Верно');
}
else {
  alert('Неверно');
}

// // //

let a = 1;

if (a === '1') {
  alert('Верно');
}
else {
  alert('Неверно');
}

// Логические переменные:

let test = true;

if (test) {
  alert('Верно');
}
else {
  alert('Неверно');
}

// 

let test = false;

if (test != true) {
  alert('Верно');
}
else {
  alert('Неверно');
}

// 

let test = false;

if (test != true) {
  alert('Верно');
}
else {
  alert('Неверно');
}

// Работа с && (и) и || (или):

let a = +prompt('Введите число', '0');

if (a > 0 && a < 5) {
  alert('Верно');
}
else {
  alert('Неверно');
}

// 

let a = +prompt('Введите число', '');

if (a == 0 || a ==2) {
  alert(a + 7);
}
else {
  alert(a / 10);
}

// 

let a = 3;
    b = 5;

if (a <= 1 && b >= 3) {
  alert(a + b);
}
else {
  alert(a - b);
}

// 

let a = 3;
    b = 7;

   //((a >2 && a < 11) || (b >= 6 && b <14))

if (a >2 && a < 11 && b >= 6 && b <14) {
  alert('Верно');
}
else {
  alert('Неверно');
}

// // //

let num = +prompt('Введите одно из этих чисел', '1, 2, 3, 4');

switch (num) {
  case 1:
    alert('Зима');
    break;
  case 2:
    alert('Весна');
    break;
  case 3:
    alert('Лето');
    break;
  case 4:
    alert('Осень');
    break;
  default:
    alert('Вы не ввели нужное число!');
}

//

let day = +prompt('Введите день', '1 - 31');

if (day >= 1 && day <= 10) {
  alert('Первая треть месяца');
}
else if (day >= 11 && day <= 20) {
  alert('Вторая треть месяца');
}
else if (day >= 21 && day <= 31) {
  alert('Третья треть месяца');
}
else {
  alert('Введено не то, что нужно');
}

//

let month = +prompt('Какой сейчас по счету месяц?', '1 - 12');

if (month == 12 || month <=2) {
  alert('Зима');
}
else if (month >=3 && month <=5) {
  alert('Весна');
}
else if (month >=6 && month <=8) {
  alert('Лето');
}
else if (month >= 9 && month <=11) {
  alert('Осень');
}
else {
  alert('Вы не ошиблись?');
}

//

let mood = 'sleepy',
    tirednessLevel = 8;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}

// Массивы:

var str = 'abcde';

if (str[0] == 'а') {
  alert('Да');
} 
else {
	alert('Нет');
}

//

let str = '12345';

if (str[0] == '1' || str[0] == '2' || str[0] == '3') {
  alert('Да');
}
else {
  alert('Нет');
}

//

let str = '246';

alert(+str[0] + +str[1] + +str[2]);

//

let str = '523442';

if ((+str[0] + +str[1] + +str[2]) == (+str[3] + +str[4] + +str[5])) {
  alert('Да');
}
else {
  alert('Нет');
}

//

var str = '123456';
var str1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
var str2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
if (str1 == str2) {
	alert('Да');
} else {
	alert('Нет');
}

//

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0];

console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);

// Рандомное число:

function myRandom(from, to) {
	return Math.round ((Math.random() * (to - from + 1)) + from);
}

// // //

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }

function showOk() {
  alert( "Вы согласились." );
}

function showCancel() {
  alert( "Вы отменили выполнение." );
}

//

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
);

//

var sum = new Function('a,b', ' return a+b; ');

var result = sum(1, 2);
alert( result );

// // //

let bobsFollowers = ['Ivan', 'Aleksandr', 'Evgenuy', 'Leonid'];
let tinasFollowers = ['Artur', 'Ivan', 'Evgenuy'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
 for (let j = 0; j < tinasFollowers.length; j++) {
   if (bobsFollowers[i] === tinasFollowers[j]) {
     mutualFollowers = tinasFollowers;
     console.log(mutualFollowers[j]);
   }
 }
};