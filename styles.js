const slider = document.querySelector("#loss-slider");
const lossValue = document.querySelector(".amount-of-loss");
const returnToBreakEvenValue = document.querySelector(".return-to-break-even");
const yearsToBreakEvenValue = document.querySelector(".years-to-break-even");

const lossPercentages = ["10%", "15%", "20%", "25%", "30%", "35%", "40%", "45%", "50%"];
const returnPercentages = ["11.1%", "17.7%", "25%", "33.3%", "42.9%", "53.9%", "66.7%", "81.8%", "100%"];
const years = ["1.1", "1.7", "2.3", "3.0", "3.7", "4.5", "5.4", "6.3", "7.3"];

slider.addEventListener("input", function() {
    const index = slider.value;

    lossValue.textContent = lossPercentages[index];
    returnToBreakEvenValue.textContent = returnPercentages[index];
    yearsToBreakEvenValue.textContent = years[index] + " years";
});

