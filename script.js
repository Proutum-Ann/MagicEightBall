let userQuestion = prompt(`Ask a question. Don't worry, the eightball won't bite!`)

console.log(`You asked: ${userQuestion}`)

document.getElementById('question').innerHTML = `<h4>You asked: ${userQuestion}</h4>`

randomNumber = Math.floor(Math.random() * 8)

let eightBall = ''
let resImage = ''

if (randomNumber === 0) {
  eightBall = 'Do it.';
  resImage = '<img src="imgs/mafudare.png" style="height: 200px">';
} else if (randomNumber === 1) {
  eightBall = 'It is certain';
  resImage = '<img src="imgs/airibest.webp" style="height: 200px">';
} else if (randomNumber === 2) {
  eightBall = 'It is decidedly so';
  resImage = '<img src="imgs/wonderhoy.webp" style="height: 200px">';
} else if (randomNumber === 3) {
  eightBall = 'Reply hazy, try again';
  resImage = '<img src="imgs/ichibwomp.png" style="height: 200px">';
} else if (randomNumber === 4) {
  eightBall = 'Cannot predict now';
  resImage = '<img src="imgs/rinmood.webp" style="height: 200px">';
} else if (randomNumber === 5) {
  eightBall = 'Do not count on it';
  resImage = '<img src="imgs/mizusigh.webp" style="height: 200px">';
} else if (randomNumber === 6) {
  eightBall = 'My sources say no';
  resImage = '<img src="imgs/akitodoesntgetit.webp" style="height: 200px">';
} else if (randomNumber === 7) {
  eightBall = 'Outlook not so good';
  resImage = '<img id="bell" src="imgs/ominousbell.jpg" style="height: 200px">';
} else if (randomNumber === 8) {
  eightBall = 'Signs point to yes';
  resImage = '<img src="imgs/shihotrust.webp" style="height: 200px">';
}

console.log(eightBall)

document.getElementById('answer').innerHTML = `<h2>${eightBall}</h2>`

console.log(resImage)

document.getElementById('image').innerHTML = resImage