function testStorage() {
  const player = {
    name: 'Eva',
    score: 0,
  };

  localStorage.setItem(player.name, JSON.stringify(player));

  const dataLocalStorage = localStorage.getItem(player.name);
  console.log('>>', JSON.parse(dataLocalStorage));
}
