import { updateDisplay } from './updateDisplay';
import { getDisplayContent, setDisplayContent } from './displayHandler';
import calculate from './calculate';
import './style.css';
document.getElementById('app').innerHTML = '<p id="mode"></p><div id="display"><p id="value">2137</p></div><div id="keys-wrapper"></div>';
const digit = 'digit';
const operator = 'operator';
const keysWrapper = document.getElementById('keys-wrapper');
const operators = {
    "+": function(a, b) { return a - (-b) },
    "-": function(a, b) { return a - b },
    "*": function(a, b) { return a * b },
    "/": function(a, b) { return a / b },
};
[
    { class: digit, value: 7 },
    { class: digit, value: 8 },
    { class: digit, value: 9 },
    { class: operator, value: '/' },
    { class: digit, value: 4 },
    { class: digit, value: 5 },
    { class: digit, value: 6 },
    { class: operator, value: '*' },
    { class: digit, value: 1 },
    { class: digit, value: 2 },
    { class: digit, value: 3 },
    { class: operator, value: '-' },
    { id: 'reset', value: 'RESET' },
    { class: digit, value: 0 },
    { id: 'calculate', value: '=' },
    { class: operator, value: '+' },
].forEach(buttonData => {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = buttonData.value;
    if (buttonData.id) {
        buttonElement.id = buttonData.id;
    } else {
        buttonElement.className = buttonData.class;
        buttonElement.setAttribute('value', buttonData.value);
    }
    buttonElement.operation = buttonData.operation;
    keysWrapper.appendChild(buttonElement);
});

function resetCalculator() {
    document.getElementById('mode').innerText = '';
    setDisplayContent('0');
}
Array.from(document.getElementsByClassName(digit)).forEach(
    digitButton => digitButton.addEventListener(
        'click', event => updateDisplay(event.target.innerText)
    )
);
document.getElementById('reset').addEventListener('click', resetCalculator);
Array.from(
    document.getElementsByClassName('operator')
).forEach(
    digitButton => digitButton.addEventListener('click', event => {
        document.getElementById('mode').innerText =
            getDisplayContent() + ' ' + event.target.innerText;
        setDisplayContent('0');
    })
);

document.getElementById('calculate').addEventListener('click', () => {
    const [operand1, ...operator] = document.getElementById('mode').innerText.split(' ');
    setDisplayContent(calculate(operand1, operators[operator.join(' ')], getDisplayContent()));
    document.getElementById('mode').innerText = '';
});