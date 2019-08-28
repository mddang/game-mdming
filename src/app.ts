import { getRandomInt } from './random';
let squares: NodeList;

export function runApp() {
    // we need a random number 1-6
    const secretNumber = getRandomInt(1, 6);

    // find all the squares. Pick the one that is the secret numbe, and 'bless'
    squares = document.querySelectorAll('.square');
    let currentSquare = 1;

    squares.forEach(function (square: HTMLDivElement) {
        if (currentSquare === secretNumber) {
            square.dataset.secret = 'true';
        }
        square.addEventListener('click', handleclick);
        currentSquare++;

    });

    // Make is that when the user clicks on the square, somthing happens.

    function handleclick() {
        const clickedSquare = this as HTMLDivElement;
        const isSpecial = clickedSquare.dataset.secret === 'true';

        if (isSpecial) {
            clickedSquare.classList.add('winner');
            squares.forEach((sq: HTMLDivElement) => {
                if (sq !== clickedSquare) {
                    sq.classList.add('loser');
                    sq.removeEventListener('click', handleclick);
                }
            });
        } else {
            clickedSquare.classList.add('loser');
        }
    }

}

