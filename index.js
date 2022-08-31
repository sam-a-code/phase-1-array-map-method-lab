const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// function titleCased(){
//   let newTutorials = tutorials.map(tutorial => {
//     let splitTutorial = tutorial.split('');
//     let titledWords = splitTutorial.map(word => {
//      return word.charAt(0).toUpperCase() + word.slice(1)
//     }).join('');
//     return titledWords;
//   })
//   return newTutorials;
// }

function titleCased(){
  let newTutorials = tutorials.map(tutorial => {
    let splitTutorial = tutorial.split(" ");
    let titledWords = splitTutorial.map(
     (word) => word.charAt(0).toUpperCase() + word.slice(1)
    ).join(" ");
    return titledWords;
  })
  return newTutorials;
}

// function titleCase(){
//   for(let i: number=0; i<tutorials.length; i++){
//     let tutorial : string = tutorials[i];
//     let splitTutorial : string[] = tutorial.split ('');
//     for (let j: number=0; j<splitTutorial.length; j++)
//   }
// }