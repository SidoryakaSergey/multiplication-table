function testStorage() {
  const player = {
    name: 'Eva',
    score: 0,
  };
  localStorage.setItem(player.name, JSON.stringify(player));
  const dataLocalStorage = localStorage.getItem(player.name);
  console.log('>>', JSON.parse(dataLocalStorage));
}

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

function createdQuestion(arrayNumbers) {
  const number_of_questions = 20;
  const len = arrayNumbers.length;
  const arrayQuestions = [];

  return arrayQuestions;
}

buttonStart.addEventListener('click', () => {
  // console.log(numbers);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i].checked) {
      selectedNumbers.push(i + 1);
    }
  }

  console.log(multiplication_table);
  console.log(selectedNumbers);

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
