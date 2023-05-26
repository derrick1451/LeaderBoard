const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const displayBoard = (array) => {
  const listContainer = document.querySelector('.list-items');
  listContainer.innerHTML = '';
  array.forEach((element) => {
    const list = document.createElement('li');
    list.innerHTML = `${element.user}:${element.score}`;
    listContainer.appendChild(list);
  });
};
const refreash = async (gameid) => {
  const response = await fetch(`${api}games/${gameid}/scores/`);
  const getResponse = await response.json();
  const scores = getResponse.result;
  displayBoard(scores);
};


export default refreash;