console.log('BEGIN');
const dataLocalStorage = [];
const player = {};
const PREFIX = 'multiplicationTable_';

const choiceNumbers = document.getElementById('choiceNumbers');
const numbers = document.querySelectorAll('[type="checkbox"]');
const buttonStart = document.getElementById('buttonStart');
const gameBoard = document.getElementById('gameBoard');
const question = document.getElementById('question');
const answers = document.getElementById('answers');
const cat = document.getElementById('cat');
const loginFormWrapper = document.getElementById('login__form-wrapper');
const loginForm = document.getElementById('login__form');
const listUsers = document.getElementById('list_Users');
const namePlayer = document.getElementById('name-player');
const scorePlayer = document.getElementById('score-player');

function createListLoadUserNames() {
  const listUserNames = [];
  for (let key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) {
      continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
    }
    if (key.split('_')[0] === 'multiplicationTable') {
      dataLocalStorage.push(key);
      listUserNames.push(key.split('_')[1]);
    }
  }
  return listUserNames;
}

const loadUserNames = createListLoadUserNames();

window.addEventListener('load', () => {
  console.log('LOAD');

  createLoginMenu(loadUserNames);
});

loginForm.addEventListener('click', (target) => {
  const targetID = target.target.id;
  const targetButton = target.target;
  if (targetID === 'create_player') {
    const newName = window.prompt('Inpit Name');
    createUserInDataStorage(newName);
    loadUserNames.push(newName);
    createLoginMenu(loadUserNames);
  }
  if (targetID === 'button_ok') {
    loginFormWrapper.style.display = 'none';
    namePlayer.innerHTML = targetButton.dataset.name;

    const objectLocalStor = JSON.parse(
      localStorage.getItem(PREFIX + targetButton.dataset.name)
    );

    // for (let el in objectLocalStor) {
    //   player[el] = objectLocalStor[el];
    // }
    Object.assign(player, objectLocalStor);
    console.log('player ->', player);
  }
  if (targetID === 'button_del') {
    deleteUserInDataStorage(targetButton.dataset.name);
    loadUserNames.splice(loadUserNames.indexOf(targetButton.dataset.name), 1);
    createLoginMenu(loadUserNames);
  }
});

function addPlayerforMenu(name) {
  return `
     <p data-${name}='${name}'>${name} 
     <button id='button_ok' data-name=${name} type='button'>Ok</button>
     <button id='button_del' data-name=${name} type='button'>Del</button>
      </p> 
    `;
}
function createLoginMenu(listNames) {
  listUsers.innerHTML = '';
  for (let elem of listNames) {
    listUsers.innerHTML += addPlayerforMenu(elem);
  }
}

function createUserInDataStorage(nameUser) {
  player.name = nameUser;
  player.score = 0;
  player.multiplication_table = multiplication_table;
  localStorage.setItem(PREFIX + player.name, JSON.stringify(player));
}

function deleteUserInDataStorage(nameUser) {
  localStorage.removeItem(PREFIX + nameUser);
}

const selectedNumbers = [];
let playerBasketQuestions = [];
//  >>> Start game\
buttonStart.addEventListener('click', () => {
  cat.classList.toggle('cat__wrong');
  gameBoard.style.display = 'flex';
  choiceNumbers.style.display = 'none';

  for (let number of numbers) {
    if (number.checked) {
      selectedNumbers.push(number.dataset.number);
    }
  }
  playerBasketQuestions = createplayerBasketQuestions();

  console.log('playerBasketQuestions=>', playerBasketQuestions);
});

function createplayerBasketQuestions() {
  const { multiplication_table: table } = player;
  console.log('table=>', table);
  console.log('selectedNumbers=>', selectedNumbers);
  const playerTable = table.filter((elem) => {
    return selectedNumbers.includes(elem.mult1.toString());
  });
  // console.log('playerTable=>', playerTable);
  return playerTable;
}

answers.addEventListener('click', (target) => {
  // console.log(target.path[1]);
  const el = target.path[1];

  if (el.classList.contains('ansver')) {
    question.innerHTML = '5x6=30';
    // console.log(el.innerHTML);
    answers.style.display = 'none';
  }
});

// ********** ANALOG CLOCK *******
let timeNow = new Date();
let hours = timeNow.getHours();
let minuts = timeNow.getMinutes();
let secs = timeNow.getSeconds();

const deg = 6;
const hours_arrow = document.getElementById('hours_arrow');
const minuts_arrow = document.getElementById('minuts_arrow');
const seconds_arrow = document.getElementById('seconds__arrow');

const clock_timer = setInterval(() => {
  let timeNow = new Date();
  let hours = timeNow.getHours() * 30;
  let minuts = timeNow.getMinutes() * deg;
  let seconds = timeNow.getSeconds() * deg;

  hours_arrow.style.transform = `rotateZ(${hours + minuts / 12}deg)`;
  minuts_arrow.style.transform = `rotateZ(${minuts}deg)`;
  seconds_arrow.style.transform = `rotateZ(${seconds}deg)`;
}, 1000);
