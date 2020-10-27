import "./gfx.scss"
import anime, { random } from "animejs";

const laptop = document.querySelector("svg #laptop");
const code = document.querySelector("svg #code");


// const showElement = (i) => {
//     setTimeout(() => {
//         const element = elements[i];
//         element.classList.add("show");
//     }, 2000);
// }

// const length = elements.length;
// for (let i = 0; i < length; i++) {
//     showElement(i);
// }


const animateStage = async (i) => {
    let prev = 0;
    await anime({
        targets: `svg #cursor${i}`,
        opacity: 1,
        duration: 500,
        loop: anime.random(1, 8),
        easing: "linear",
        direction: 'alternate',
        complete: () => {
            document.querySelector(`svg #cursor${i}`).style = "";
        }
    }).finished;
    await anime({
        targets: `svg #code${i} path`,
        opacity: 1,
        delay: () => prev += anime.random(300, 600)
    }).finished
}

const clearAll = async () => {
    await anime({
        targets: 'svg #code path',
        opacity: 0
    }).finished
}

const animateAll = async () => {
    await animateStage(1)
    await animateStage(2)
    await animateStage(3)
    await clearAll();

    animateAll();
}

animateAll();
