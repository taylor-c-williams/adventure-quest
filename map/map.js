
// import { isDead, gameOver } from '../common/is-dead.js';
import { loadProfile } from '../common/load-profile.js';
import { getUserInfo } from '../utils.js';
import { createQuest } from './create-quest-link.js';
import { createCompletedQuest } from './create-completed-quest.js';
import quests from '../data/quest-data.js';

const user = getUserInfo();
const divEl = document.getElementById('quests-links');

loadProfile();
createQuest(quests);


// if (isDead(user) || gameOver()) {
//     // window.location = '../results/index.html';
// }
// >>>> if isdead/iscompleted , send to results page

for (let quest of quests) {
    // for every quest,
    let questDisplay = null;
    // if the user has completed it:
    const theUserHasCompletedThisQuest = user.completed[quest.id];

    if (theUserHasCompletedThisQuest) {
        // make a completed quest display (with a check-mark)
        questDisplay = createCompletedQuest(quest);
    }
    else {
        // otherwiese, make a link to the quest
        questDisplay = createQuest(quest);
    }
    divEl.appendChild(questDisplay); 
    // add the quest display to the nav
}