export default function calculate(operand1, operator, operand2) {
    if (operator === '+') return operand1 - (-operand2);
    else if (operator === '-') return operand1 - operand2;
    else if (operator === '*') return operand1 * operand2;
    else if (operator === '/') return operand1 / operand2;
    else throw new Error(`Operator ${operator} not supproted`);
}