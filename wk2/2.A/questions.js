const myQuiz = [
    {question: 'Which Wu-Tang Clan Member also goes by the name Tony Starks?', answer: 'Ghostface Killah'},
    {question: 'Which Wu-Tang Clan Member also goes by the name Bobby Digital?', answer: 'RZA'},
    {question: 'Which Wu-Tang Clan Member also goes by the name Johnny Blaze?', answer: 'Method Man'},
    {question: 'Which Wu-Tang Clan Member also goes by the name The Chef?', answer: 'Raekwon'},
    {question: 'Which Wu-Tang Clan Member also goes by the name Baby Huey?', answer: 'U-God'},
    {question: 'Which Wu-Tang Clan Member also goes by the name The Head?', answer: 'GZA'},
    {question: 'Which Wu-Tang Clan Member also goes by the name Rollie Fingers?', answer: 'Inspectah Deck'},
    {question: 'Which Wu-Tang Clan Member also goes by the name Noodles High Chief?', answer: 'Masta Killa'},
    {question: 'Which Wu-Tang Clan Member also goes by the name Big Baby Jesus?', answer: 'Ol Dirth Bastard'},
];

console.log(myQuiz);

const randomIdx = Math.round(Math.random() * (myQuiz.length - 1));
console.log(myQuiz[randomIdx].question);

const randomAnswer = prompt(myQuiz[randomIdx].question);

window.alert ('You answered ' + randomAnswer + '. The correct answer is ' + myQuiz[randomIdx].answer + '.');