// quests[0].choices[0].description; ==> 'negotiate with them'


const monsters = {
    id: 'monsters',
    title: 'A Den of Monsters',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'monsters.jpg',
    description: `
        You enter the quest chamber only to be confronted by a hoard of
        monsters. And they look hungry. What do you do?
    `,
    choices: [{
        id: 'negotiate',
        description: 'Negotiate with them',
        result: `
            Knowing the monsters are not too bright, you offer to go buy them all
            turkey dinners from the village pub. They give you 35 gold for meals
            that will never be delivered. I hope you can live with yourself. 
        `,
        hp: 0,
        gold: 35
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            Brandishing your sword you let out a warrior's cry and charge into the monsters
            hacking and slashing. Before long you stand panting gazing across the bodies of
            your vanquished foes. The bad news is you take 30 hp damage. The good news is you
            find 50 gold.
        `,
        hp: -30,
        gold: 50
    }, {
        id: 'run',
        description: 'Run away like good Sir Robin',
        result: `
            As you make a dash for the door a giant spider descends and take a bite of flesh,
            causing 50 hp damage.
        `,
        hp: -50,
        gold: 0
    }]
};

const dragon = {
    id: 'dragon',
    title: 'Out on a Plumbing call',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'superMB.jpg',
    action: 'dragon-growl.aiff',
    description: `
       You are on your way to a late night emergency call and as you arrive to the address you notice your brother has just arrived as well
       The plumbing issue looks much worse than you expected and as you are investigating this strange humuan-sized pipe you see a weird red and white mushroom.
       What do you do next?
    `,
    choices: [{
        id: 'eat',
        description: 'You Eat the Mushroom',
        result: `
            You suddenly grow twice your normal size and start hallucinating about peaches. But you do such a great job that the customer gives you a bonus for your work
        `,
        hp: 25,
        gold: 50
    }, {
        id: 'walk',
        description: 'You abandon the call--too weird',
        result: `
            You find yourself back at home getting a goods night rest but you miss out on the invoice and lose money in future calls do to your wonton abandonement of customers in need
        `,
        hp: 50,
        gold: -25
    }, {
        id: 'switch',
        description: 'You switch places with your brother',
        result: `
            While Luigi isn't quite as good as you, He still gets the job done. Due to your business agreement he will receive 70% of the funds from the call since he did the work and you simply assisted. You still spend the hours awake and working though.
        `,
        hp: -15,
        gold: 15
    }]
};

const treasure = {
    id: 'treasure',
    title: 'A Golden Treasure',
    map: {
        top: '31%',
        left: '5%'
    },
    prerequisites: ['dragon', 'monsters'],
    image: 'treasure-chests.png',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 gold pieces!',
        hp: 0,
        gold: 40
    }, {
        id: 'golden',
        description: 'A Golden Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
        hp: -50,
        gold: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 hp',
        hp: 35,
        gold: 0
    }]
};

const quests = [
    monsters, 
    treasure,
    dragon,
];

export default quests;