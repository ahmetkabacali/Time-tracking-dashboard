"use strict"

const timeframes = document.querySelector("#timeframes")
const currentHour = document.querySelectorAll(".card-hour")
const statCard = document.querySelectorAll(".stat__card__body")

saveToLocalStorage()


function saveToLocalStorage() {
    fetch("../../data.json")
        .then(function (timeframesLocal) {
            // console.log(response)
            return timeframesLocal.json();
        })
        .then(function (data) {
            localStorage.setItem("timeframesLocal", JSON.stringify(data))
        })

}


timeframes.addEventListener("click", (clickedTag) => {
    let clickedPeriod = clickedTag.target.innerText.toLowerCase();
    if (!clickedTag.target.classList.contains("active")) {
        for (let timePeriod = 0; timePeriod < timeframes.children.length; timePeriod++) {
            const element = timeframes.children[timePeriod];
            element.classList.remove("active")
        }
        clickedTag.target.classList.add("active")
        writeInnerText(clickedPeriod)
    }
})

function writeInnerText(clickedPeriod) {
    const data = JSON.parse(localStorage.getItem("timeframesLocal"));
    for (let index = 0; index < statCard.length; index++) {
        let currentTimeSite = statCard[index].querySelector("p span");
        let previousTimeSite = statCard[index].querySelector("small span");
        if (data[index].timeframes[clickedPeriod]) {
            let currentTimeJson = (data[index].timeframes[clickedPeriod].current);
            let previousTimeJson = (data[index].timeframes[clickedPeriod].previous);
            currentTimeSite.innerText = currentTimeJson
            previousTimeSite.innerText = previousTimeJson
        }
    }
}