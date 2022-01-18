let popup = document.createElement('div');
let time = 0;

const takeInput = () => {
    time = prompt('Enter usage time (in minutes)');
    if (time < 0 || isNaN(time))
        alert('Enter a valid time. Refresh page to activate!')
};

const createPopup = (time, color) => {
    if (time == 0) {
        popup.innerHTML = `
        <p>
            Time Over! 
            <br>
            Close The App >.<
        </p>
        `;
    }
    else if (time == -1) {
        popup.innerHTML = `
        <p>
            Timer Started!
            <br>
            Have fun! ^_^
        </p>
        `;
    }
    else {
        popup.innerHTML = `
        <p>
            Usage Time Left 
            <br>
            ${time} minute
        </p>
        `;
    }

    popup.classList.add('stylish');

    popup.style.backgroundColor = color;

    let bodyElem = document.getElementsByTagName('body')[0];
    bodyElem.prepend(popup);
};

takeInput();

let timems = time * 60 * 1000;

if (time > 0) {
    // show app is working
    setTimeout(() => {
        createPopup(-1, 'green');
    }, 1000);

    // delete the notification
    setTimeout(() => {
        popup.remove();
    }, (1000 * 10));
}

if (time >= 10) {
    // create 5 minute warning
    setTimeout(() => {
        createPopup(5, 'yellow');
    }, timems - (1000 * 60 * 5));

    // delete warning after 10 seconds
    setTimeout(() => {
        popup.remove();
    }, timems - (1000 * 60 * 5) + (1000 * 10));
}

if (time >= 5) {
    // create 2 minute warning
    setTimeout(() => {
        createPopup(2, 'orange');
    }, timems - (1000 * 60 * 2));

    // delete warning after 10 seconds
    setTimeout(() => {
        popup.remove();
    }, timems - (1000 * 60 * 2) + (1000 * 10));
}

if (time > 0) {
    // create 0 minute warning
    setTimeout(() => {
        createPopup(0, 'red');
    }, timems - (1000 * 11));

    // delete warning after 10 seconds
    setTimeout(() => {
        popup.remove();
    }, timems - (1000 * 1));
}