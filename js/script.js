function testStorage() {
  const player = {
    name: 'Eva',
    score: 0,
  };
  localStorage.setItem(player.name, JSON.stringify(player));
  const dataLocalStorage = localStorage.getItem(player.name);
  console.log('>>', JSON.parse(dataLocalStorage));
}

const multiplication_table = [];

const loginButton = document.getElementById('loginButton');
const login = document.getElementById('login');
const loginName = document.getElementById('loginName');
const namePlayer = document.getElementById('namePlayer');
const loginForm = document.getElementById('loginForm');
const choiceNumbers = document.getElementById('choiceNumbers');
const buttonStart = document.getElementById('buttonStart');
const gameBoard = document.getElementById('gameBoard');
const question = document.getElementById('question');
const answers = document.getElementById('answers');

loginButton.addEventListener('click', () => {
  const value = loginName.value;
  if (value.length < 1) {
    loginName.placeholder = "Треба ввести ім'я";
  } else {
    loginForm.style.display = 'none';
    namePlayer.innerHTML = 'Гравець - ' + value;
  }
});

buttonStart.addEventListener('click', () => {
  choiceNumbers.style.display = 'none';
  gameBoard.style.display = 'flex';
  question.innerHTML = '5x6=?';
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

// loginButton.addEventListener('focus', () => {
//   loginName.style.backgroundColor = '#FFF';
//   loginName.value = '';
//   console.log('focus');
// });
