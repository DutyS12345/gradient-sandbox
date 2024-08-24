var gradientStyleSheet = new CSSStyleSheet();
var gradientStyleSheetRules = {};
document.adoptedStyleSheets = [...document.adoptedStyleSheets, gradientStyleSheet];

function resetGradientStyles() {
    delete gradientStyleSheetRules;
    gradientStyleSheetRules = {};
}
function updateGradientStyles() {
    var newRules = Object.values(gradientStyleSheetRules).filter((rule) => rule !== undefined).join(' ')
    newRules = newRules.replaceAll(/\n\s*/g, "");
    // console.log(newRules);
    gradientStyleSheet.replaceSync(newRules);
}

let gradientElement = document.getElementById("gradient");

gradientStyleSheetRules["basic background"] = `
    .gradient-rect {
        background: gray;
    }
`

updateGradientStyles();