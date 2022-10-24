function testStorage() {
  const player = {
    name: 'Eva',
    score: 0,
  };
  localStorage.setItem(player.name, JSON.stringify(player));
  const dataLocalStorage = localStorage.getItem(player.name);
  console.log('>>', JSON.parse(dataLocalStorage));
}

const multiplication_table = {
  1: [[]],
};

const loginButton = document.getElementById('loginButton');
const login = document.getElementById('login');
const loginName = document.getElementById('loginName');
const namePlayer = document.getElementById('namePlayer');

loginButton.addEventListener('click', () => {
  const value = loginName.value;
  if (value.length < 1) {
    loginName.placeholder = "Треба ввести ім'я";
  } else {
    login.style.display = 'none';
    namePlayer.innerHTML = 'Гравець - ' + value;
  }
});

// loginButton.addEventListener('focus', () => {
//   loginName.style.backgroundColor = '#FFF';
//   loginName.value = '';
//   console.log('focus');
// });
