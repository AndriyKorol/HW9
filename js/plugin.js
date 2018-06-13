// const timer = (function () {
//
//   let countdown,
//       timerDisplay,
//       endTime,
//       alarmSound;
//
//   // Инициализация модуля
//   function init(settings) {
//     timerDisplay = document.querySelector(settings.timerDisplaySelector);
//     endTime = document.querySelector(settings.endTimeSelector);
//   }
//
//   function start(seconds) {
//     if(typeof seconds !== "number") return new Error('Please provide seconds!');
//
//     const now = Date.now();
//     const then = now + seconds * 1000;
//
//     displayTimeLeft(seconds);
//     displayEndTime(then);
//   }
//
//   function displayTimeLeft(seconds) {
//     const minutes = Math.floor(seconds / 60);
//     const reminderSeconds = seconds % 60;
//
//     const display = `${minutes}:${reminderSeconds < 10 ? '0' : ''}${reminderSeconds}`;
//     timerDisplay.textContent = display;
//     document.title = display;
//   }
//
//   function displayEndTime(timestamp) {
//     const end = new Date(timestamp);
//     const hour = end.getHours();
//     const minutes = end.getMinutes();
//
//     endTime.textContent = `Be back at ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
//   }
//
//   return {
//     init,
//     start
//   }
// })();
//
// const buttons = document.querySelectorAll('[data-time]');
//
// timer.init({
//   timerDisplaySelector: '.display__time-left',
//   endTimeSelector :'.display__end-time'
// });
//
// // Start timer on click
// function startTimer(e) {
//   const seconds = Number(this.dataset.time);
//   timer.start(seconds);
// }
//
// buttons.forEach(btn => btn.addEventListener('click', startTimer));
//
//
// //-------------------------------------------------------------------------------------------
console.log('*************************************************');

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
})();

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
console.log(greet + text); // text is not defined, змінна text невизначена як глобальна змінна

//6
