console.log('BEGIN');
const dataLocalStorage = [];

const choiceNumbers = document.getElementById('choiceNumbers');
const numbers = document.querySelectorAll('[type="checkbox"]');
const buttonStart = document.getElementById('buttonStart');
const gameBoard = document.getElementById('gameBoard');
const question = document.getElementById('question');
const answers = document.getElementById('answers');
const cat = document.getElementById('cat');
const loginForm = document.getElementById('login__form');
const listUsers = document.getElementById('list_Users');

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

  console.log(loadUserNames);
  if (loadUserNames.length > 0) {
    createLoginMenu(loadUserNames);
  } else {
    listUsers.loginForm.innerHTML += `
    <p>Enter Name</p>
    <input type = 'text'>
      <button type='button'>Ok</button> 
    `;
  }
});

loginForm.addEventListener('click', (target) => {
  const targetID = target.target.id;
  if (targetID === 'create_player') {
    console.log('create new');
    const newName = window.prompt('Inpit Name');
    createUserInDataStorage(newName);
    loadUserNames.push(newName);
    createLoginMenu(loadUserNames);
  }
  if (targetID === 'button_ok') {
    console.log('ok');
  }
  if (targetID === 'button_del') {
    const buttonDelele = target.target;
    console.log(buttonDelele.dataset.name);
    deleteUserInDataStorage(buttonDelele.dataset.name);
    loadUserNames.splice(loadUserNames.indexOf(buttonDelele.dataset.name), 1);
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
    console.log(elem);
  }
}

function createUserInDataStorage(nameUser) {
  const player = {
    name: nameUser,
    score: 0,
  };
  player.multiplication_table = multiplication_table;
  localStorage.setItem(
    'multiplicationTable_' + player.name,
    JSON.stringify(player)
  );
}

function deleteUserInDataStorage(nameUser) {
  localStorage.removeItem('multiplicationTable_' + nameUser);
}

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

const selectedNumbers = [];
//  >>> Start game\
buttonStart.addEventListener('click', () => {
  cat.classList.toggle('cat__wrong');
  gameBoard.style.display = 'flex';
  choiceNumbers.style.display = 'none';
});

answers.addEventListener('click', (target) => {
  // console.log(target.path[1]);
  const el = target.path[1];

  if (el.classList.contains('ansver')) {
    question.innerHTML = '5x6=30';
    // console.log(el.innerHTML);
    answers.style.display = 'none';
  }
});
