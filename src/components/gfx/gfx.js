import anime, { random } from "animejs";

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
