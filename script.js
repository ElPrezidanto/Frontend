function promptUser() {

    var userInput = prompt("Желаете пройти регистрацию на сайте? (Да/Нет)").toLowerCase();
    if (userInput === "да") {
        alert("Круто!");
        registration();
    } else {
        alert("Попробуйте ещё раз.");
    }
}

// promptUser();

function registration() {
    var login = prompt("Введите логин:", "").toLowerCase();

    if (login === "админ") {
        var password = prompt("Введите пароль:", "").toLowerCase();

        if (password === "я главный") {
            alert("Здравствуйте!");
        } else if (password === null || password === "") {
            alert("Отменено");
        } else {
            alert("Неверный пароль");
        }

    } else if (login === null || login === "") {
        alert("Отменено");
    } else {
        alert("Я вас не знаю");
    }
}

const likeButton = document.getElementById('likeButton');
const likeCount = document.querySelector('.like-count');
const drawingContainer = document.querySelector('.drawing-container');

let count = 0;
let isLiked = false;
let isDrawing = false;

likeButton.addEventListener('click', function () {
    if (isLiked) {
        count--;
        drawingContainer.innerHTML = '';
    } else {
        count++;
    }

    isLiked = !isLiked;

    likeCount.textContent = count;
    this.classList.toggle('clicked');
});

document.addEventListener('mousedown', function () {
    if (isLiked) {
        isDrawing = true;
    } else if (!isLiked) {
        isDrawing = false;
    }
});

document.addEventListener('mouseup', function () {
    isDrawing = false;
});

document.addEventListener('mousemove', function (event) {
    if (isDrawing) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.style.left = event.pageX + 'px';
        dot.style.top = event.pageY + 'px';
        drawingContainer.appendChild(dot);
    }
});


