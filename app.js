"use strict";
let originalStory;
/*
originalStory = It was a day in July 1912. Detective Val O' Farrell is at the Hotel Metropolis in Times Square. A body is on the front steps. He's joined by Sgt. McKeever. The deceased is a man they both recognize - Herman Rosenthal, who ran an illegal casino. They know who the press is going to blame for this. Rosenthal had claimed that Lieutenant Becker was shaking down his business. O' Farrell knows that Becker is involved in many illegal business for money but he wasnot sure whether he would kill for it.He has to find out if it's true.
*/
let userInput = [];
originalStory = `It was a day of ${userInput[0]} in ${userInput[1]}. Detective ${userInput[2]} is at the Hotel ${userInput[3]} in ${userInput[4]}. A body is on the front steps. ${userInput[5]}'s joined by Sgt. ${userInput[6]}. The deceased is a ${userInput[7]} they both recognize - ${userInput[8]}, who ran an illegal casino. They know who the press is going to blame for this. ${userInput[8]} had claimed that Lieutenant ${userInput[10]} was shaking down ${userInput[9]} business. ${userInput[2]} knows that ${userInput[10]} is involved in many illegal business for money but ${userInput[5]} was not sure whether ${userInput[11]} would kill for it.${userInput[5]} has to find out if it's true.`;

let numberOfQuestions = 12;

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
for(let i = numberOfQuestions; i>0; i--){
    //console.log(i);
    console.log(questionArray[questionCounter]);
    questionCounter++;
    //console.log(questionCounter);
}


console.log(`It was a day in July 1912. Detective Val O' Farrell is at the Hotel Metropolis in Times Square. A body is on the front steps. He's joined by Sgt. McKeever. The deceased is a man they both recognize - Herman Rosenthal, who ran an illegal casino. They know who the press is going to blame for this. Rosenthal had claimed that Lieutenant Becker was shaking down his business. O' Farrell knows that Becker is involved in many illegal business for money but he wasnot sure whether he would kill for it.He has to find out if it's true.`);