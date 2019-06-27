console.log('hello world');

let element = document.getElementById('counter');

let count = 0;

function increase() {
    count++;
    element.innerText = count;
}

function decrease() {
    count--;
    element.innerText = count;
}

function reset() {
    count = 0;
    element.innerHTML = "<mark>" + count + "<mark>";
}

function selectTheme(theme) {
    let body = document.getElementsByTagName("body");
    body[0].className = theme;
    let main = document.getElementsByTagName("main");
    main[0].className = theme;

    let buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = theme;
    }
}