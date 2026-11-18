console.log("this is the fortune teller bot");
let fortune1, fortune2, fortune3, fortune4, fortune5
fortune1 = "Your cat will look very cuddly today."
fortune2 = "The weather will be nice tomorrow."
fortune3 ="It would be wise to avoid the color red today."
fortune4 = "Be cautious of your new neighbors."
fortune5 = "You will find a new hobby soon."

const min = 1;
const max = 5;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

let selectedFortune;

if (randomNumber === 1){
selectedFortune = fortune1;
}
else if(randomNumber === 2){
  selectedFortune = fortune2;
}
else if(randomNumber === 3){
  selectedFortune = fortune3;
}
else if(randomNumber === 4){
  selectedFortune = fortune4;
}
else if(randomNumber === 5){
  selectedFortune = fortune5;
}
console.log(selectedFortune)