// header/user score thingy

import { getUserInfo } from '../home/create-User.js';
import { isDead } from './is-dead.js';
 
// get elements by id
const icon = document.getElementById('icon');
const userHeaderName = document.getElementById('userHeaderName');
const hpHeader = document.getElementById('hpHeader');
const goldHeader = document.getElementById('goldHeader');
// get user from local

export function loadProfile(){
    const user = getUserInfo();
    icon.src = `../assets/avatars/${user.class}.png`;
    userHeaderName.textContent = user.name;
    hpHeader.textContent = user.hp;
    goldHeader.textContent = user.gold;

    if (!user){
        window.location = '../index.html'; 
    
        if (isDead(user)){
            hpHeader.textContent = 'YOU DED';
        }
    } return user;
}