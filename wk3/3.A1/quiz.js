let questionInput;
let currentQuestion;
let response;
let responseColor = 'green';
let heading;
let numRight = Number(0);
let numWrong = Number(0);
let statements = [
    { question: 'Which Wu-Tang Clan Member \n\also goes by the name Bobby Digital?', answer: 'rza'},
    { question: 'Which Wu-Tang Clan Member \n\also goes by the name Tony Starks?', answer: 'ghostface killah'},
    { question: 'Which Wu-Tang Clan Member \n\also goes by the name Johnny Blaze?', answer: 'method man'},
    { question: 'Which Wu-Tang Clan Member \n\also goes by the name The Chef?', answer: 'raekwon'},
    { question: 'Which Wu-Tang Clan Member \n\also goes by the name Baby Huey?', answer: 'u god'},
    { question: 'Which Wu-Tang Clan Member \n\also goes by the name The Head?', answer: 'gza'},
    { question: 'Which Wu-Tang Clan Member \n\also goes by the name Rollie Fingers?', answer: 'inspectah deck'},
    { question: 'Which Wu-Tang Clan Member \n\also goes by the name Noodles High Chief?', answer: 'masta killa'},
    { question: 'Which Wu-Tang Clan Member \n\also goes by the name Big Baby Jesus?', answer: 'ol dirty bastard'},
];

function next() {
    if(statements.length < 1) {
        document.getElementById('winner').play();
        var r = confirm("You Win! \n\Welome to the 36 Chambers\n\nShimmy shimmy ya, shimmy yam, shimmy yay!!!\n\nPlay again?");
    if (r == true) {
    location.reload();
    return false;
    } 
    return;
    }
    

// lose the game after 5 wrong answers  lose the game after 5 wrong answers  lose the game after 5 wrong answers
  if (numWrong > 4) {
    document.getElementById('loser').play();
    let r = confirm("You Lose! \n\Your Tiger Style is no match for the Wu-Tang.\n\n Play again? ");
    if (r == true) {
    location.reload();
    return false;
    } 
    return;
  }
  const randomIndex = Math.ceil(Math.random() * statements.length - 1);
  return statements[randomIndex];
}


function checkQuestion() {
    if (currentQuestion.answer === questionInput.value()) {
        //remove correct answer from array  remove correct answer from array  remove correct answer from array
        statements = statements.filter(statementObj => {
           return currentQuestion.answer !== statementObj.answer; 
        });
        // this is the correct condition  this is the correct condition  this is the correct condition
        response = 'Correct!';
        responseColor = 'green';
        numRight++;

    } else {
        //this is the wrong answer condition  this is the wrong answer condition  this is the wrong answer condition
        response = 'Tearz, you got it wrong. \n\Try Again!';
        responseColor = 'darkred';
        numWrong++;
    }
    currentQuestion = next();
    questionInput.value('');
    if(currentQuestion) {
        message = currentQuestion.question;
    }
    
}

currentQuestion = next();
let message = currentQuestion.question;

//restart the quiz   restart the quiz   restart the quiz   restart the quiz   restart the quiz 
function restartQuiz() {
    // add back array
    location.reload();
    return false;
  }


function setup() {
    createCanvas(1000, 600);
    heading = createElement('h1', ['Wu-Tang Clan Nickname Quiz'])
    heading.position(100,100);
    questionInput = createInput('');
    questionInput.size(250,30);
    questionInput.position(100, 300);
    submitAnswerButton = createButton('Bring da Rukus');
    submitAnswerButton.size(257, 24);
    submitAnswerButton.mousePressed(checkQuestion);
    submitAnswerButton.position(100, 350);
    restartButton = createButton('Reset Quiz');
    restartButton.size(257, 24);
    restartButton.mousePressed(restartQuiz);
    restartButton.position(400, 350);
};

function draw() {
    background('lightgrey');
    fill('black');
    textSize(24);
    text(message, 100, 200);
    fill(responseColor);
    text(response, 100, 500);
    fill('black');
    text(numRight + " / 9 correct", 100, 575);
    text([5 - numWrong] + " chances remaining", 400, 575);
}

