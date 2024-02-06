const introScreen = document.getElementById("intro-screen")
const topLetters = document.querySelectorAll(".top-logo-letters");
const logoBottom = document.querySelector(".logo-bottom")

document.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {
            topLetters.forEach((letter, index) => {
                setTimeout(() => {
                letter.classList.add("active");
            }, (index + 1) * 150)
        })

        setTimeout(() => {
            logoBottom.classList.add("animate-up")
        }, 1550)

        setTimeout(()=> {
            introScreen.style.top = '-100vh'
        }, 2000)

    }, 1500)
})