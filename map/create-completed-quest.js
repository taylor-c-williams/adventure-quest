
// create/ completed quest function
export function createCompletedQuest(quest) {
    const link = document.createElement('a');
    link.classList.add('completed-quest');
    link.textContent = quest.title;
    
    // link.style.top = quest.map.top;
    // link.style.left = quest.map.left;
    return link;
}
// adding class list and styling, placement on the map