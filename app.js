let generateBtn = document.getElementById('generateBtn');
let favOutput = document.getElementById('favOutput');

let col1 = {
    r: 0,
    g: 0,
    b: 0,
    isLocked: false,
    display: document.querySelector('#c1'),
}

let col2 = {
    r: 0,
    g: 0,
    b: 0,
    isLocked: false,
    display: document.querySelector('#c2'),
    lockBtn: document.querySelector('spanLock'),
}
let col3 = {
    r: 0,
    g: 0,
    b: 0,
    isLocked: false,
    display: document.querySelector('#c3'),
}

let col4 = {
    r: 0,
    g: 0,
    b: 0,
    isLocked: false,
    display: document.querySelector('#c4'),
}

let col5 = {
    r: 0,
    g: 0,
    b: 0,
    isLocked: false,
    display: document.querySelector('#c5'),
}

const ColorArray = [col1, col2, col3, col4, col5];

for (arr of ColorArray) {
    const spanFav = document.createElement('span');
    spanFav.classList.add('spanFav');
    const spanHex = document.createElement('span');
    spanHex.classList.add('spanHex');
    const spanRgb = document.createElement('span');
    spanRgb.classList.add('spanRgb');
    const spanLock = document.createElement('span');
    spanLock.classList.add('spanLock');
    arr.display.appendChild(spanFav);
    arr.display.appendChild(spanHex);
    arr.display.appendChild(spanRgb);
    arr.display.appendChild(spanLock);
    spanFav.innerHTML = `<i class="fa fa-regular fa-heart"></i>`;
    spanLock.innerHTML = `<i class="fa fa-solid fa-lock"></i>`;

    generateBtn.addEventListener('click', function () {
        for (arr of ColorArray) {
            if (!arr.display.classList.contains('locked')) {
                generateColor(arr);
                console.log("HEY!")
                arr.display.style.backgroundColor = `rgb(${arr.r}, ${arr.g}, ${arr.b})`;
                spanRgb.innerHTML = arr.display.style.backgroundColor
                spanHex.innerHTML = rgbToHex(arr.r, arr.g, arr.b);
            }
        }
    })

    for (arr of ColorArray) {
        if (!arr.display.classList.contains('locked')) {
            generateColor(arr);
            spanRgb.innerHTML = `rgb(${arr.r}, ${arr.g}, ${arr.b})`;
            spanHex.innerHTML = rgbToHex(arr.r, arr.g, arr.b);
            arr.display.style.backgroundColor = `rgb(${arr.r}, ${arr.g}, ${arr.b})`;
        }
    }

    spanLock.addEventListener('click', () => {
        spanLock.parentElement.classList.toggle('locked');
        console.log(spanLock.parentElement);
        console.log(arr);
        console.log('arr');
    })

    spanFav.addEventListener('click', () => {
        const key = spanFav.nextElementSibling.innerHTML;
        const value = spanFav.nextElementSibling.nextElementSibling.innerHTML;

        const favText = document.createElement('span');
        favText.classList.add('favText');
        favOutput.appendChild(favText);
        const favDisplay = document.createElement('span');
        favDisplay.classList.add('favDisplay');
        favOutput.appendChild(favDisplay);

        favText.innerHTML += `${key}: ${value}<br>`;
    })

}

function generateColor(color) {
    color.r = Math.floor(Math.random() * 255) + 1;
    color.g = Math.floor(Math.random() * 255) + 1;
    color.b = Math.floor(Math.random() * 255) + 1;
    console.log("HEHE");
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
