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
let taskArr = [' cooking ', ' washing ', ' studying ', ' working ', ' time with fam ', ' traveling ', ' enjoying nature ', ' dating '];
let currentTasks = document.getElementById('tasks').innerHTML = taskArr;

let taskUpdater = () => {
   currentTasks;
}

let taskDeleter = () => {
  let deleter = taskArr.pop();
  document.getElementById('deleted-tasks').innerHTML = deleter;
}














//
