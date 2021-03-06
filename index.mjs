// OPERATORS


//Odd Even Form Exercise: What I wanted to do here was to take the number inputed by the user, and create a function that would tell me if that number was even or odd.
//The first challenge was parsing the returned data which is by default a string, into a number format. I used the Number() function to parse the value I got back.
//The second challenge after that was to figure out if the number was even or odd, so I used the remainder operation and divided the result by 2 Example: % 2. and then I used a conditional to tell it that if the result was 0 (which would make the number even) to send an alert telling the user their number was even
//The next challenge is using form validation to make sure the user doesn't input anything other than a number

let parseNumber = () =>{
  let userValue = document.getElementById('test1')
  let result = Number(userValue.value);
  let operation = result % 2;

  if(operation === 0){
    alert('Your Number Is Even')
  } else if(operation === 1 ) {
    alert('Your Number Is Odd');
  }  else {
    alert('Please type numbers only!');
    return false;
  }

}

let testFunction = () => {
  alert('This is just a test');
}


//EXERCISE 2: Augmented Addition: Make a form that tells the user the total amount of money they spent on purchases, including the sales Tax, for the year, by having them input their total yearly expenses.
let additionFunction = () => {
  let element = Number(document.getElementById('test2').value);
  element = element *= .07;
  let expenses = Number(document.getElementById('test2').value);
  let result = "$" + (expenses + element);
  alert(result);
}

//EXERCISE 3: Validation Based on Character Length: Have the users type in a nickname. and validate the form to take no less than 3 characters, and no more than 10 characters.
let nickname = () => {
  let name = document.getElementById('test3').value;

  if(name.length < 3){
    alert("You must have at least 3 characters");
    return false;
  } else if (name.length > 10){
    alert("You must have no more than 10 characters");
    return false;
  } else {
    alert("Congratulations on your new nickname");
  }
}

//EXERCISE 4: Find out the number of characters a user has in their username, and return it to them.
let characterLength = () => {
  let name = document.getElementById('test4').value;
  let result = `There are ${name.length} characters in your nickname`;

  alert(result);
}

//EXERCISE 5: Psychic spirit animal: Have the user share a small anecdote, and then randomly send them their spirit animal.
// let spiritAnimal = () => {
//   let animalArray = ["Wolf", "Tiger", "Eagle", "Lion", "Dragon", "Monkey", "Gazelle", "Raven", "Phoenix"];
//   let data = document.getElementById('test5').value;
//
//   if(data == ""){
//     alert("Please share anecdote");
//     return false
//   } else if (data < 10){
//     alert("Your anecdote is too short");
//     return false
//   } else {
//     let arrayCount = animalArray.length;
//     for(var i = 0; i < arrayCount; i++ ){
//       return alert(`Your spirit animal is ${Math.floor(Math.random(animalArray[i]))}`);
//     }
//
//   }
//
// }

//EXERCISE 6: Legacy Names; Have the user add their name to the list, and make sure it displays on the list
//Remember that besides push() which appends an item to the end of the array, there's also unshift() which does the same thing but appends the item to the beginning of the array instead.
let legacyNames = () => {
  let names = ["Zed", " Vicious", " Jin"];
  let namesValue = document.getElementById('name').value;
  let currentNames = document.getElementById('current-names').innerHTML += "I'm replacing this line of code";
  names.push(namesValue);

  if(namesValue == ""){
    alert("Please type your name");
  } else {
      return currentNames;
  }
}

//EXERCISE 7: Deleting Tasks: Make a form that has a list of tasks, and make it so that the user can delete them with a button.
//Remember that besides the pop() which removes the last element in an array, there's also the shift() which removes the first element in an array.
let taskArr = [' cooking ', ' washing ', ' studying ', ' working ', ' time with fam ', ' traveling ', ' enjoying nature ', ' dating '];
let taskSection = document.getElementById('tasks');
taskSection.innerHTML = taskArr;

let taskDeleter = (taskArr) => {
  let deleteSection = document.getElementById('deleted-tasks');
  let currentTasks = taskSection.innerHTML = taskArr;
  deleteSection.innerHTML += taskArr.pop([taskArr.length -1]);
}

//EXERCISE 8: Image Slider: Insert a series of imgs w js, and have the button switch them as you onclick
//Use switch and case statements for this one as the conditional of choice
// let imageContainer = document.getElementById('image-container');
// let selector = [0, 1, 2, 3, 4];
// let currentSelection = "";
// imageContainer.innerHTML = currentSelection;
//
// let switcherFunc = (currentSelection, selector) => {
//
//   switch(currentSelection){
//     case selector[0]:
//     return '<img src="./images/img1" style="max-width: 100%; height: 200px; "/>';
//     break;
//
//     case selector[1]:
//     return '<img src="./images/img2" style="max-width: 100%; height: 200px; "/>';
//     break;
//
//     case selector[2]:
//     return '<img src="./images/img3" style="max-width: 100%; height: 200px; "/>';
//     break;
//
//     case selector[2]:
//     return '<img src="./images/img4" style="max-width: 100%; height: 200px; "/>';
//     break;
//
//     case selector[2]:
//     return '<img src="./images/img5" style="max-width: 100%; height: 200px; "/>';
//     break;
//   }
// }
//


//EXERCISE 9: Dragon Persona: Use variables to call aspects of the dragon object. Make some buttons that represent a different attribute each, and have the message change on the screen.
let dragon = {
  legend: "It is said that the first dragon was born when merlin's elixir was accidentally combined with a dinosaur's frozen heart",
  values: "Dragons believe in one thing, and only one thing. Survival of the fittest!",
  powers: [" Breath of fire", " Flying", " Stomp stun"]
}

let dragonLegend = "legend";
let dragonValues = "values";
let dragonPowers = "powers";

let dragonDisplay = document.getElementById('dragon-display');

let legend = () => {

  dragonDisplay.innerHTML = '<h1 style="text-align: center; color: red;">Legend</h1>' + dragon[dragonLegend];
}

let values = () => {
  dragonDisplay.innerHTML = '<h1 style="text-align: center; color: orange;">Values</h1>' + dragon[dragonValues];
}

let powers = () => {
  dragonDisplay.innerHTML = '<h1 style="text-align: center; color: purple;">Powers</h1>' + dragon[dragonPowers];
}


let deleteButton = () => {
  // dragonDisplay.innerHTML = delete dragonDisplay.value;
  dragonDisplay.innerHTML = "Find Out More About The Dragon";
}


//Have the user make profiles and then dynamically display them below
// let newData = document.querySelector('input.profile');
//
// let samle = () => {
//   let whereStuffGoes = []
//   whereStuffGoes.push(newData.value);
//   let whereStuff = document.getElementById('profile-results');
//
//   whereStuff.innerHTML = whereStuffGoes;
//
//
// }


//EXERCISE 10: Return profile results: Iterating through an object, and having the results display at the bottom of container
let dataConverter = () => {
  let profileResults = document.getElementById('profile-results');
  let myResults = [];
  let sampleObject = [
    {
      "profile": {
        "name": "John",
        "profession": "lawyer",
        "hobbies": ["biking", "hiking", "fishing"]
      },
      "extra info":{
        "Admitted": false,
        "candidate status": "pending"
      }
    }
  ]

  for(let results in sampleObject){
    myResults.push(sampleObject[results]);
  }

  profileResults.innerHTML = myResults;

}

//EXERCISE 11: Lotto Machine: Have the machine randomize the digits every time user spins it (clicks), and then use one of the following ways of checking to see if the number inputted by user match the given number
let testNumbers = "12345";


let numberChecker = () => {
  let numbersValue = document.getElementById('numbers-value');
  let resultsOutput = document.getElementById('results-output');
  if(testNumbers === numbersValue.value){
    resultsOutput.innerHTML = "CONGRATULATIONS!!!! YOU ARE THE LUCKY WINNER!!!!!";
  } else {
    resultsOutput.innerHTML = "Sorry. Better luck next time.";
  }
}


//EXERCISE 12: Math Equations: Make a series of different math equations that use the Math method
let output = document.getElementById('output');

let pi = () => {
  output.innerHTML = Math.PI;
  return output.value;
}

let round = () => {
  let userInput = document.getElementById('user-input').value;
  Number(userInput);
  let result = Math.round(userInput);
  output.innerHTML = result;
}

let roundUp = () => {
  let userInput = document.getElementById('user-input2').value;
  let result = Math.ceil(userInput);

  output.innerHTML = result;
}

let roundDown = () => {
  let userInput = document.getElementById('user-input3').value;
  let result = Math.floor(userInput);

  output.innerHTML = result;
}

let randomize = (min, max) => {
  output.innerHTML =  Math.floor(Math.random() * (max - min)) + min;
}



let storyFunc = (result) => {
  let name = [document.getElementById('story-name').value];
  let output = document.getElementById('story-results');
  name = name.map((nameRes) => {
    return `It all began when ${nameRes} arrived to the city of Magnolia. It is there that he encountered the terrible beast that had plagued the land. ${nameRes} fought valiantly, and it nearly cost him his life, but none-theless, his fierce might won the day. Upon delivering the final blow ${nameRes} noticed a familiarity in the monster's eyes. It was there that he discovered that the monster was none other than his supposedly dead brother! He had been cursed to torment people. It took ${nameRes} 3 years to find the cure, but nonetheless, he did find the cure, and was reunited with his long lost brother. ${nameRes} in his infinite wisdom reminds us that love conquers all`
  })
  return output.innerHTML = name;

}






//
