import { getUserInfo } from '../utils.js';
import data from '../data/quest-data.js';
import { setUserChange } from '../home/create-User.js';

export function scoreQuest(choice) {
    let userData = getUserInfo();
    let newHp = userData.hp + data.choices.hp;
    let newGold = userData.gold + data.choices.id.gold;
    let questCompletion = true; 
    setUserChange(newHp, newGold, questCompletion);
}
