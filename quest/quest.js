// import functions:

// loadProfile (); << load user data into header

//URL search params + magic window:
// const searchParams = new URLSearchParams(window.location.search);

// grab quest id from the url >> const questID = searchParams.get('id');

// get quest data w findById (set a var)

// if !quest then go to the map

// set consts: getElementById for title, img, description, choices + form, results + results description

// populate DOM using getElementById consts you just wrote:

// title.textcontent = quest.title;
// img.src = './path/' + quest.image; <<< concatenated strings for URLS
// etc for each const

// for/let index = quest.choices.length 
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
