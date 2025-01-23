// Selectors
const hexColor = document.querySelector(".hex-color-container");
const hexColorButton = hexColor.querySelector("button");
const rgbButton = document.querySelector(".rgb-btn");
const copyRGB = document.querySelector(".copy-rgb");
const copyHex = document.querySelector(".copy-hex");
const redRange = document.querySelector("#red");
const greenRange = document.querySelector("#green");
const blueRange = document.querySelector("#blue");
const rgb = document.querySelector(".rgb-color-container h1");
const hexDisplay = document.querySelector(".hex-color-container h1");
const rgbColorContainer = document.querySelector(".rgb-color-container");

// Generate a random hexadecimal color
function generateRandomHexadecimalColor() {
    const characters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * characters.length)];
    }
    return color;
}

// Generate a random RGB color
function generateRandomRGBColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return {
        rgb: `rgb(${red}, ${green}, ${blue})`,
        red,
        green,
        blue
    };
}

// Event listener for Hex color generation
hexColorButton.addEventListener("click", () => {
    const generatedHexColor = generateRandomHexadecimalColor();
    hexColor.style.backgroundColor = generatedHexColor;
    hexDisplay.textContent = generatedHexColor;
});

// Event listener for RGB color generation
rgbButton.addEventListener("click", () => {
    const { rgb, red, green, blue } = generateRandomRGBColor();
    rgbColorContainer.style.backgroundColor = rgb;
    redRange.value = red;
    greenRange.value = green;
    blueRange.value = blue;
    rgb.textContent = rgb.slice(0, -1);  // Remove the trailing parenthesis
});

// Copy RGB to clipboard
copyRGB.addEventListener("click", () => {
    const contentRgb = rgb.textContent;
    navigator.clipboard.writeText(contentRgb).then(() => {
        console.log("RGB content copied to clipboard");
    }).catch(() => {
        console.error("Failed to copy RGB content");
    });
});

// Copy Hex to clipboard
copyHex.addEventListener("click", () => {
    const contentHex = hexDisplay.textContent;
    navigator.clipboard.writeText(contentHex).then(() => {
        console.log("Hex content copied to clipboard");
    }).catch(() => {
        console.error("Failed to copy Hex content");
    });
});
