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

export function createUser(formData) {
    const newUser = { name:formData.get('name'), 
        class:formData.get('class'), 
        hp:100,
        gold: 0,
        completed:{} };
    console.log(formData);
    return newUser;}


// shopping cart?