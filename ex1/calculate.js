export default function calculate(operand1, operation, operand2) {
    if (operation) return operation(operand1, operand2);
    else throw new Error(`Operation not found`);
}