let answer = prompt('What is your name?');

if(typeof(answer) === 'string') {
    var h1 = document.createElement('h1');
    h1.innerHTML = answer;
    document.body.innerText = '';
    document.body.appendChild(h1);
}

var h1 = document.createElement('h1');
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input');
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);