// import functions:
// import { loadProfile } from '../common/load-profile.js';
import quests from '../data/quest-data.js';
import { findById } from '../utils.js';
import { createChoice } from './create-choice.js';
// loadProfile (); << load user data into header


//URL search params + magic window:
const searchParams = new URLSearchParams(window.location.search);

// grab quest id from the url >> 
const questID = searchParams.get('id');

// get quest data w findById (set a var)
const questData = findById(quests, questID);

// if !quest then go to the map
if (!quests){
    window.location = '../map'; 
}

// set consts: getElementById for title, img, description, choices + form, results + results description
const questTitle = document.getElementById('quest-title');
const image = document.getElementById('quest-img');
const description = document.getElementById('quest-description');
// const choiceForm = document.getElementById('choice-form');
const choicesZone = document.getElementById('choices-zone');
// const resultsDescription = document.getElementById('results-description');

// const questId = searchParams.get('id');


// populate DOM using getElementById consts you just wrote:
questTitle.textContent = quests.title;
image.src = '../assets/quests/' + quests.image; 
description.textContent = quests.description;

// for/let index = quest.choices.length 
// for (let booger of quests){
//     const userOptions = quests.choices;

// for (let index = 0; index < quests.choices.length; index++) {
//     const choice = quests.choices[index];
//     const makeChoice = createChoice(choice);
//     choicesZone.appendChild(makeChoice);    
// }

for (let index = 0; index < questData.choices.length; index++) {
    const choice = quests.choices[index];
    // go make a choice dom element
    const choiceDOM = createChoice(choice);
    // and append that choice
    choicesZone.appendChild(choiceDOM);
}
//const choice = quest.choices[index]
//const create DOM element = function that creates choice
//then append each choice (children)(const we just set^^)

//choiceForm event listener -- submit :

// >prevent default
// >const = new FormData(choiceForm)<<< the name of our choice form
// >const choice ID  = get the choice ID
// >const choice = formData.get >> choice
// >get user
// >generate a score and manipulate user state >> create scoreQuest function
// >save user (set user?)
// >Update UI >> classList.add the hidden stuff
// > loadProfile(); << reload header data
