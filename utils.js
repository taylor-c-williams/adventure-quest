import quests from './data/quest-data.js';
export function getUserInfo() {
    const stringyUser = localStorage.getItem('USER');
    if (!stringyUser) return [];  
    const UserStat = JSON.parse(stringyUser);
    return UserStat;
}

export function setUserInfo(newUser) {
    const stringyUser = JSON.stringify(newUser);
    localStorage.setItem('USER', stringyUser);
}

export function findById(quests, id) {
    // loop through the array
    for (let item of quests) {
        // if this item's id matches the id we were passed as an argument . . .
        if (item.id === id) {
          // . . . return that item
            return item;
        }
    }
}

export function questsComplete(user) {
    for (let quest of quests) {
        const isTrue = user.completed[quest.id];
        if (!isTrue) {
            return false;
        }
    }
    return true;
}