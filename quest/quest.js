
import { isDead } from '../common/is-dead.js';
import quests from '../data/quest-data.js';
import { findById, getUserInfo, questsComplete, setUserInfo } from '../utils.js';
import { createChoice } from './create-choice.js';

 
const searchParams = new URLSearchParams(window.location.search);


const questID = searchParams.get('id');


const questData = findById(quests, questID);

// if !quest then go to the map
if (!questData){
    window.location = '../map'; 
}

const questTitle = document.getElementById('quest-title');

const descriptionEl = document.getElementById('quest-description');

const choiceForm = document.getElementById('choice-form');
const resultsEl = document.getElementById('results-description');
const questImg = document.getElementById('quest-img');
questImg.src = '../assets/quests/' + questData.image;



questTitle.textContent = questData.title;
descriptionEl.textContent = questData.description;

// loadProfile();
for (let index = 0; index < questData.choices.length; index++) {
    const choice = questData.choices[index];
    // go make a choice dom element
    const choiceDOM = createChoice(choice);
    // and append that choice
    choiceForm.appendChild(choiceDOM);
}

choiceForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const answerData = document.querySelector('input:checked');
    const questAnswer = answerData.value;
    
    const choice = findById(questData.choices, questAnswer);

    const user = getUserInfo();

    user.gold += choice.gold;
    user.hp += choice.hp;
    user.completed[questData.id] = true;
    
    
    if (questsComplete(user) || isDead(user)){
        setTimeout(() => window.location = '../results/index.html', 5005);
    } else {
        setTimeout(() => window.location = '../map/index.html', 3005);
    }

    let resultChoice = choice.result;
    setUserInfo(user);
    choiceForm.style.display = 'none';
    resultsEl.textContent = resultChoice; 
   
});
