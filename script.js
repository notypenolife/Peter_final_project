
// Get dropdown boxes
let cpuSelect = document.getElementById("cpuSelect");
let gpuSelect = document.getElementById("gpuSelect");
let mbSelect = document.getElementById("mbSelect");
let ramSelect = document.getElementById("ramSelect");
let ssdSelect = document.getElementById("ssdSelect");
let psuSelect = document.getElementById("psuSelect");
let caseSelect = document.getElementById("caseSelect");


// Get custom price boxes
let cpuCustom = document.getElementById("cpuCustomPrice");
let gpuCustom = document.getElementById("gpuCustomPrice");
let mbCustom = document.getElementById("mbCustomPrice");
let ramCustom = document.getElementById("ramCustomPrice");
let ssdCustom = document.getElementById("ssdCustomPrice");
let psuCustom = document.getElementById("psuCustomPrice");
let caseCustom = document.getElementById("caseCustomPrice");


// Get display areas
let totalPriceDisplay = document.getElementById("totalPriceDisplay");
let partsListContainer = document.getElementById("partsListContainer");
let performanceTip = document.getElementById("performanceTip");
let resetBtn = document.getElementById("resetBtn");

// This gets the price from a dropdown value
function getDropdownPrice(dropdown) {
    let selectedValue = dropdown.value;
    let parts = selectedValue.split("|");
    let price = Number(parts[1]);


    return price;
}
// This gets the name from a dropdown value
function getDropdownName(dropdown) {
    let selectedValue = dropdown.value;
    let parts = selectedValue.split("|");
    let name = parts[0];


    return name;
}
// This checks if the user typed their own price
function getFinalPrice(dropdown, customBox) {
    if (customBox.value !== "") {
        return Number(customBox.value);
    } else {
        return getDropdownPrice(dropdown);
    }
}
// This updates the total price and parts list
function updateTotal() {
    let cpuPrice = getFinalPrice(cpuSelect, cpuCustom);
    let gpuPrice = getFinalPrice(gpuSelect, gpuCustom);
    let mbPrice = getFinalPrice(mbSelect, mbCustom);
    let ramPrice = getFinalPrice(ramSelect, ramCustom);
    let ssdPrice = getFinalPrice(ssdSelect, ssdCustom);
    let psuPrice = getFinalPrice(psuSelect, psuCustom);
    let casePrice = getFinalPrice(caseSelect, caseCustom);


    let total = cpuPrice + gpuPrice + mbPrice + ramPrice + ssdPrice + psuPrice + casePrice;


    totalPriceDisplay.innerHTML = "¥" + total;

    partsListContainer.innerHTML =
        "<div class='part-item'><div class='part-name'>CPU: " + getDropdownName(cpuSelect) + "</div><div class='part-price'>¥" + cpuPrice + "</div></div>" +
        "<div class='part-item'><div class='part-name'>GPU: " + getDropdownName(gpuSelect) + "</div><div class='part-price'>¥" + gpuPrice + "</div></div>" +
        "<div class='part-item'><div class='part-name'>Motherboard: " + getDropdownName(mbSelect) + "</div><div class='part-price'>¥" + mbPrice + "</div></div>" +
        "<div class='part-item'><div class='part-name'>RAM: " + getDropdownName(ramSelect) + "</div><div class='part-price'>¥" + ramPrice + "</div></div>" +
        "<div class='part-item'><div class='part-name'>SSD: " + getDropdownName(ssdSelect) + "</div><div class='part-price'>¥" + ssdPrice + "</div></div>" +
        "<div class='part-item'><div class='part-name'>PSU: " + getDropdownName(psuSelect) + "</div><div class='part-price'>¥" + psuPrice + "</div></div>" +
        "<div class='part-item'><div class='part-name'>Case: " + getDropdownName(caseSelect) + "</div><div class='part-price'>¥" + casePrice + "</div></div>";

if (total < 4500) {
        performanceTip.innerHTML = "Budget friendly configuration";
    } else if (total < 7000) {
        performanceTip.innerHTML = "Gaming and workstation balanced configuration";
    } else {
        performanceTip.innerHTML = "High performance configuration";
    }
 
}

    // code resets everything back to original
function resetConfiguration() {
    cpuSelect.selectedIndex = 0;
    gpuSelect.selectedIndex = 0;
    mbSelect.selectedIndex = 0;
    ramSelect.selectedIndex = 0;
    ssdSelect.selectedIndex = 0;
    psuSelect.selectedIndex = 0;
    caseSelect.selectedIndex = 0;


    cpuCustom.value = "";
    gpuCustom.value = "";
    mbCustom.value = "";
    ramCustom.value = "";
    ssdCustom.value = "";
    psuCustom.value = "";
    caseCustom.value = "";

    updateTotal();
}
// Dropdown changes
cpuSelect.onchange = updateTotal;
gpuSelect.onchange = updateTotal;
mbSelect.onchange = updateTotal;
ramSelect.onchange = updateTotal;
ssdSelect.onchange = updateTotal;
psuSelect.onchange = updateTotal;
caseSelect.onchange = updateTotal;

// Custom box price typing update
cpuCustom.oninput = updateTotal;
gpuCustom.oninput = updateTotal;
mbCustom.oninput = updateTotal;
ramCustom.oninput = updateTotal;
ssdCustom.oninput = updateTotal;
psuCustom.oninput = updateTotal;
caseCustom.oninput = updateTotal;

