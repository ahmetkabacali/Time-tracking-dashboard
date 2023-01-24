"use strict"
import { data } from "./data.js";

const timeframes = document.querySelector("#timeframes")
const statCard = document.querySelectorAll(".stat__card__body")

timeframes.addEventListener("click", (clickedTag) => {
    let clickedPeriod = clickedTag.target.innerText.toLowerCase(); //daily
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

