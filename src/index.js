import './style.css';
import getApi from '../modules/api.js';
import update from '../modules/upadte.js';
import refreash from '../modules/refresh.js';

let gameid;
const iniatialize = async () => {
  const existingGameId = localStorage.getItem('gameId');
  if (existingGameId) {
    gameid = existingGameId;
  } else {
    gameid = await getApi();
    localStorage.setItem('gameId', gameid);
  }
};
const submitBtn = document.querySelector('.submit');
const form = document.querySelector('.form');
submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const user = document.querySelector('.name');
  const score = document.querySelector('.score');
  const userInput = user.value;
  const scoreInput = score.value;
  if (userInput === '' || scoreInput === '') {
    return null;
  }
  await update(gameid, userInput, scoreInput);
  return form.reset();
});
const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', async () => {
  refreash(gameid);
});
iniatialize();
window.addEventListener('load', async () => {
  iniatialize();
  refreash(gameid);
});