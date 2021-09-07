import { getUserInfo } from '../utils.js';
import data from '../data/quest-data.js';
import { setUserPoints } from '../home/create-User.js';
let choice = data.choice.id;
export function scoreQuest(choice) {
    let userData = getUserInfo();
    let newHp = userData.hp + data.choices.hp;
    let newGold = userData.gold + data.choices.id.gold;
    let questCompletion = true; 
    setUserPoints(newHp, newGold, questCompletion);
}
