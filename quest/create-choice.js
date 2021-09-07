// build create choice function, render 3 radio inputs
export function createChoice(choice){
    // const form = document.getElementById('choice-form');
    const label = document.createElement('label');
    label.classList.add('new-choice');
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.value = choice.id;
    radio.required = true;
    radio.name = 'selection';

    label.appendChild(radio);

    const questDescription = document.createElement('span');
    questDescription.textContent = choice.description;
    label.appendChild(questDescription);
    
    return label;
}

//render a label/classlist add choice
//appendchild -- description
//return label
//export default