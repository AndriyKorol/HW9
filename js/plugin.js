//1
getBigName(userName);
function getBigName(name) {
    name = name + '';
    return name.toUpperCase();
}
var userName = 'Ivan';
console.log(getBigName(userName)); // IVAN - тому, що у викликану ф-ю передається userName, оскільки якої нема в цій ф-ї,
                                // скрита властивість [[Scope]] ссилається на лексичне середовище вищого обєкта
                                // (в даний момент - window), в якому є визначенна змінна var userName = 'cucumber';

//2
function test(){
    var name = "Vasiliy";
    return getBigName1(userName1);
}
function getBigName1(name){
    name = name + '';
    return name.toUpperCase();
}
var userName1 = 'Ivan';
console.log(test()); // IVAN - тому, що в ф-ї test()є не визначений метод getBigName1(),
                    // якого скрита властивість [[Scope]] ссилається на лексичне середовище вищого обєкта (в даний момент - window),
                    // в якому є визначенна змінна var food = 'cucumber';

//3
var food = 'cucumber';

(function () {
    var food = 'bread';
    getFood();
}());

function getFood() {
    console.log(food);
}
//Result: cucumber, викликається самовикликаюча безіменна ф-я, в ній викликається метод getFood(),
// якого скрита властивість [[Scope]] ссилається на лексичне середовище вищого обєкта (в даний момент - window),
// в якому є визначенна змінна var food = 'cucumber';

//4
var dollar,
    getDollar;

(function () {
    var dollar = 0;
    getDollar = function () {
        return dollar;
    }
}());

dollar = 30;
getDollar();
//Result: пустота, викликається самовикликаюча безіменна ф-я, яка нічого не повертає

//5
console.log('----5----');
var greet = 'hello';
(function () {
    var text = 'Worid';
    console.log(greet + text); // helloWorid, при замиканні інтерпритатор використовується змінні яка є в зовнішньому обєкті
}());
//console.log(greet + text); // text is not defined, змінна text невизначена як глобальна змінна

//6
function minus(x){
    x = typeof x === 'number' ? x : 0;
    return function(y){
        y = typeof y === 'number' ? y : 0;
        return x - y;
    };
}

console.log('minus(10)(6); = ' + minus(10)(6));
console.log('minus(5)(6); = ' + minus(5)(6));
console.log('minus(10)(); = ' + minus(10)());
console.log('minus()(6); = ' + minus()(6));
console.log('minus()(); = ' + minus()());

//7
function MultiplyMaker (x) {
    x = typeof x === 'number' ? x : 0;
    return function(y) {
        y = typeof y === 'number' ? y : 0;
        return x *=  y;
    }
}

const multiply = MultiplyMaker(2);
console.log('x*2 = ' + multiply(2));
console.log('x*1 = ' + multiply(1));
console.log('x*3 = ' + multiply(3));
console.log('x*10 = ' + multiply(10));

//8
const stringModul = (function () {
let str;
return {
    setString:  function setString(value) {
        if(typeof value !== 'string') return console.log(`${value} is not a string`);
        str = value;
        console.log(str);
    },
    getString: function getString() {
        return str + ' is a ' + typeof str;
    },
    stringLength: function stringLength() {
        return str.length;
    },
    stringRevers: function stringRevers() {
        return str.split('').reverse().join('');
    }
}
}());

console.log(stringModul.setString(23534));
console.log(stringModul.getString());
console.log(stringModul.stringRevers());
console.log(stringModul.stringLength());

//9
const calculator = (function () {
    let char;
    return{
        setValue: function setValue(value){
            if( typeof value !== 'number' ) return  console.log(`${value} is not a number`);
            char = value;            
        },
        addition: function addition(value){
            return char += value;            
        },
        subtraction: function subtraction(value){
            return char -= value;            
        },
        multiplication: function multiplication(value){
            return char *= value;            
        },
        division: function division(value){
            return char /= value;            
        },
        pow: function pow(value){
            return char *= char;            
        },
        getValue: function getValue() {
            return 'char = ' + char.toFixed(2);
        }
    }
}());
