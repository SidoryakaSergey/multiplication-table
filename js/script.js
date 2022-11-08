function testStorage() {
  const player = {
    name: 'Eva',
    score: 0,
  };
  localStorage.setItem(player.name, JSON.stringify(player));
  const dataLocalStorage = localStorage.getItem(player.name);
  console.log('>>', JSON.parse(dataLocalStorage));
}

let timeNow = new Date();
let hours = timeNow.getHours();
let minuts = timeNow.getMinutes();
let secs = timeNow.getSeconds();

const deg = 6;
const hours_arrow = document.getElementById('hours_arrow');
const minuts_arrow = document.getElementById('minuts_arrow');
const seconds_arrow = document.getElementById('seconds__arrow');

// console.log(hours);

const clock_timer = setInterval(() => {
  let timeNow = new Date();
  let hours = timeNow.getHours() * 30;
  let minuts = timeNow.getMinutes() * deg;
  let seconds = timeNow.getSeconds() * deg;

  hours_arrow.style.transform = `rotateZ(${hours + minuts / 12}deg)`;
  minuts_arrow.style.transform = `rotateZ(${minuts}deg)`;
  seconds_arrow.style.transform = `rotateZ(${seconds}deg)`;
}, 500);

const loginButton = document.getElementById('loginButton');
const login = document.getElementById('login');
const loginName = document.getElementById('loginName');
const namePlayer = document.getElementById('namePlayer');
const loginForm = document.getElementById('loginForm');
const choiceNumbers = document.getElementById('choiceNumbers');
const numbers = document.querySelectorAll('[type="checkbox"]');
const buttonStart = document.getElementById('buttonStart');
const gameBoard = document.getElementById('gameBoard');
const question = document.getElementById('question');
const answers = document.getElementById('answers');
const cat = document.getElementById('cat');

const selectedNumbers = [];

loginButton.addEventListener('click', () => {
  const value = loginName.value;
  if (value.length < 1) {
    loginName.placeholder = "Треба ввести ім'я";
  } else {
    loginForm.style.display = 'none';
    namePlayer.innerHTML = 'Гравець - ' + value;
  }
});

//  >>> Start game\

buttonStart.addEventListener('click', () => {
  cat.classList.toggle('cat__wrong');
});

answers.addEventListener('click', (target) => {
  console.log(target.path[1]);
  const el = target.path[1];

  if (el.classList.contains('ansver')) {
    question.innerHTML = '5x6=30';
    console.log(el.innerHTML);
    answers.style.display = 'none';
  }
});

// const animCat = setTimeout(() => {
//   cat.classList.toggle('cat_correct');
// }, 500);
