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

// build simple JS user out of formdata obj:
// makeUser + newMakeUser

// shopping cart?