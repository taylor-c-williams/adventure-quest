import { loadProfile } from '../common/load-profile.js';
import { getUserInfo } from '../utils.js';
import { getUserHealth, getUserWealth, aliveGoldMessages, deadGoldMessages, hpMessages } from './utils.js';
loadProfile();
const resultsMsg = document.getElementById('result-message');
const resultImg = document.getElementById('img-result');

let user = getUserInfo();
const userHealth = getUserHealth(user);
const userWealth = getUserWealth(user);
const hpMessage = hpMessages[userHealth];
const wealthMessage = userHealth === 'dead' 
    ? deadGoldMessages[userWealth] 
    : aliveGoldMessages[userWealth];

resultsMsg.textContent = `Hello ${user.name} the ${user.class}! ${hpMessage} and ${wealthMessage}`;
resultImg.src = '../assets/results/GameOver.jfif';

