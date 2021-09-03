// if dead, return user HP<=0
let user;
export function isDead(user){
    return user.hp <= 0;
}
//a function
//export
export function gameOver() {
    if (isDead(user)) {
        window.location = '../index.html';
    }

}