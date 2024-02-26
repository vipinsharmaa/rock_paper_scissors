function getComputerChoice() {
    let random = Math.floor((Math.random() * 3) + 1);
    if (random === 1) {
        return 'Rock';
    }
    else if (random === 2) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

