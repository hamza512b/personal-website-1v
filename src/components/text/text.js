const myLink = document.querySelector(".text #mail-clipboard");

myLink.addEventListener("click", ev => {
    ev.preventDefault();
    const email = myLink.href.replace("mailto:", "");
    clip(email);
    myLink.classList.add("active");
    setTimeout(() => {
        myLink.classList.remove("active");
    }, 2000)
});

const clip = (text) => {
    const dummyElement = document.createElement("input");
    document.body.appendChild(dummyElement);
    dummyElement.setAttribute("value", text);
    dummyElement.select();
    document.execCommand("copy");
    document.body.removeChild(dummyElement);
}