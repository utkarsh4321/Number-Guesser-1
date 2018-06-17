let min = 1,
max = 10,
winning2 = winningNO(max,min);
guessLeft = 3;

//UI element
const game = document.querySelector('#game'),
minNum = document.querySelector('.min-num'),
maxNum = document.querySelector('.max-num'),
guess = document.querySelector('#Guess'),
btn = document.querySelector('#btn'),
mess = document.querySelector('.message');
minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown',tie)
function tie(e){
if(e.target.classList.contains('ram')){
window.location.reload();

}


}
//add Eventlistener
btn.addEventListener('click',add)
function add(){
let input = parseInt(guess.value);
if(isNaN(input) || input < min || input > max){
    
  // mess.textContent = `Please enter the no between ${min} and ${max}`;
  // mess.style.color = 'red';
  // guess.style.borderColor = 'red'
console.log(ranga(`Please enter the no between ${min} and ${max}`,'red'));
}
function ranga(msg,color){
  mess.textContent = msg;
  mess.style.color = color;
  guess.style.borderColor = color;
  }
//Checking for winning no
if(input == winning2){

gameover(true,`${winning2} is correct,you win`);
btn.value = 'PLAY AGAIN';
btn.classList.add('ram');
// set1(`${winning2} is correct,you win`,'#07f74f')
  //Disabled the input field
// guess.disabled = 'disabled';
// guess.style.borderColor = '#07f74f';
// #07f74f

}
else if((isNaN(input) || input < min || input > max) === false){

if(guessLeft === 0){
  gameover(false,`Game over, you lost.The correct number was ${winning2}`);
// guess.disabled = true;
// set1(`Game over, you lost.The correct number was ${winning2}`,'red');

// guess.style.borderColor = 'red'
btn.value = 'Play again';
btn.classList.add('ram');
}
else if(guessLeft !== 0 && (isNaN(input) || input < min || input > max) === false){ 
  guessLeft -= 1;
  // set1(`${input} is not correct,${guessLeft} guesses left`,'red');
  // guess.style.borderColor = 'red'
  if(guessLeft !== 0){
  gameover(false,`${input} is not correct,${guessLeft} guesses left`);
  guess.value = '';
  guess.disabled = false;
  }
}
 
}

}

//Message function

function gameover(won,msg){
  let color;
won === true ? color = '#07f74f':color = 'red';

set1(msg);
  //Disabled the input field
guess.disabled = 'disabled';
guess.style.borderColor = color;
mess.style.color = color;

// console.log(btn)
}
 function set1(msg){
 mess.textContent = msg;


 }
function winningNO(max,min){
return Math.floor(Math.random() * (max-min+1) + min);

}



//making message function














