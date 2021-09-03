// import (lots)
// import { isDead } from '../common/is-dead.js';
// import { loadProfile } from '../common/load-profile.js';
// import { getUserInfo } from '../utils.js';
// import { createQuest } from './create-quest-link.js';
// import quests from '../data/quest-data.js';
// loadProfile();
// // const user = getUserInfo();
// //call header info function? hp/gold/name etc

// get user from local
// if(isDead(user) || gameOver(quests, user)) {
//     window.location = '../results/index.html';
// }
// const questLanding = document.getElementById('quests');
// createQuest(quests);
// Not getting quest data from quest data or rendering links on map !!!
//  isdead/iscompleted function, send to results page

//getting quest elem from DOM - Nav ID for each quest, rendering function
//to iterate through data and generate

// for (let quest of quests) {
//     // for every quest
//     let questDisplay = null;
//     // if the user has completed it

//     console.log(quest.id);
//     const theUserHasCompletedThisQuest = user.completed[quest.id];

//     if (theUserHasCompletedThisQuest) {
//         // make a completed quest display (with a checkmark)
//         questDisplay = createCompletedQuest(quest);
//     }
//     else {
//         // otherwiese, make a link to the quest
//         questDisplay = createQuestLink(quest);
//     }
//     nav.appendChild(questDisplay); // add the quest display to the nav
// }