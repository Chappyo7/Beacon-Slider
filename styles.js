const slider = document.getElementById("lossSlider");
const result = document.getElementById("result");

slider.addEventListener("input", () => {
    const lossValue = parseInt(slider.value);
    const gainValue = calculateGain(lossValue);
    result.textContent = `${lossValue}% Loss requires ${gainValue}% Gain to break even.`;
});

function calculateGain(loss) {
    return Math.round((100 / (100 - loss)) * 100) - 100;