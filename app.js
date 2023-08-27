"use strict";
let originalStory;
/*
originalStory = It was a day in July 1912. Detective Val O' Farrell is at the Hotel Metropolis in Times Square. A body is on the front steps. He's joined by Sgt. McKeever. The deceased is a man they both recognize - Herman Rosenthal, who ran an illegal casino. They know who the press is going to blame for this. Rosenthal had claimed that Lieutenant Becker was shaking down his business. O' Farrell knows that Becker is involved in many illegal business for money but he wasnot sure whether he would kill for it.He has to find out if it's true.
*/
let userInputs = [];

let questionTotal = 12;

let questionArray =[
    "Enter a month, for example, July",
    "Enter a year, such as 1912",
    "Enter a person's name for example, Val O' Farrel",
    "Enter the name of a hotel such as Metropolis",
    "Enter the name of a city such as New York",
    "Enter a pronoun such as He, She or They",
    "Enter a second person's name",
    "Enter a noun such as man, woman or person",
    "Enter a third person's name",
    "Enter a pronoun such as his, her or their",
    "Enter a fourth person's name",
    "Enter a pronoun such as he, she or they"
];

let questionCounter = 0;
for(let i = questionTotal; i>0; i--){
    //console.log(i);
    userInputs.push(prompt(questionArray[questionCounter]+`; (${questionTotal} questions left)`));
    questionCounter++;
    //console.log(questionCounter);
    questionTotal--;
}

//console.log(userInputs);

originalStory = `<h2>It was a day of ${userInputs[0]} in ${userInputs[1]}. Detective ${userInputs[2]} is at the Hotel ${userInputs[3]} in ${userInputs[4]}. A body is on the front steps. ${userInputs[5]}'s joined by Sgt. ${userInputs[6]}. The deceased is a ${userInputs[7]} they both recognize - ${userInputs[8]}, who ran an illegal casino. They know who the press is going to blame for this. ${userInputs[8]} had claimed that Lieutenant ${userInputs[10]} was shaking down ${userInputs[9]} business. ${userInputs[2]} knows that ${userInputs[10]} is involved in many illegal business for money but ${userInputs[5]} was not sure whether ${userInputs[11]} would kill for it.${userInputs[5]} has to find out if it's true.<h2>`;

alert('All done! Ready for your totally-accurate, not-at-all confusing history of tech??');
//outputs
console.log(originalStory);
document.write(originalStory);
/*
console.log(`It was a day in July 1912. Detective Val O' Farrell is at the Hotel Metropolis in Times Square. A body is on the front steps. He's joined by Sgt. McKeever. The deceased is a man they both recognize - Herman Rosenthal, who ran an illegal casino. They know who the press is going to blame for this. Rosenthal had claimed that Lieutenant Becker was shaking down his business. O' Farrell knows that Becker is involved in many illegal business for money but he wasnot sure whether he would kill for it.He has to find out if it's true.`);
*/