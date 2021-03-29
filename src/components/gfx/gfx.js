const elements = document.getElementById("code").children;
const length = elements.length;

// Return number between a and b
function randomInRange(a, b) {
    return Math.abs(Math.round(a + Math.random() * (b - a)));
}


let timeoutId;
let i = 0;
let delay = false;
function play_animation(i) {
    if (i < length) {
        const element = elements[i];
        timeoutId = setTimeout(() => {
            element.classList.add("visable")

            play_animation(i + 1)
        }, randomInRange(300, 1000));
    } else {
        setTimeout(() => {
            for (let j = 0; j < length; j++) {
                const element = elements[j];
                element.classList.remove("visable")
            }

            play_animation(0)
        }, randomInRange(2000, 5000))
    }
}

play_animation(0)