const elements = document.getElementById("code").children;
const length = elements.length;

// Return number between a and b
function randomInRange(a, b) {
    return Math.abs(Math.round(a + Math.random() * (b - a)));
}

function play_animation(i, delay) {
    if (i < length) {
        const element = elements[i];
        const isCursor = element.dataset.fliker === "true";
        setTimeout(() => {

            if (isCursor) {
                element.classList.add("flikering")
            } else {
                element.classList.add("visable")
            }

            play_animation(i + 1, isCursor ? 4400 : randomInRange(300, 600))
        }, delay);

    } else {
        for (let j = 0; j < length; j++) {
            const element = elements[j];
            const isCursor = element.dataset.fliker === "true";
            if (isCursor) {
                element.classList.remove("flikering")
            } else {
                element.classList.remove("visable")
            }
        }
        
        play_animation(0, 1000)
    }
}

play_animation(0, 1000);