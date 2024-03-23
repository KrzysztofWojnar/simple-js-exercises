import { getDisplayContent, setDisplayContent } from './displayHandler';

export function updateDisplay(digit) {
    setDisplayContent(+(getDisplayContent() + digit));
    // console.log('Digit digit ' + digit + '  !');
}
