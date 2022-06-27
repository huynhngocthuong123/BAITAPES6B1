const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];
let buttonColor = () => {
  let button = "";
  colorList.map((color, index) => {
    if (index == 0) {
      button += `
        <button onclick="changeColor('${color}')" class="color-button ${color} active"></button>`;
    } else {
      button += `
        <button onclick="changeColor('${color}')" class="color-button ${color}"></button>`;
    }
  });
  document.querySelector("#colorContainer").innerHTML = button;
};
buttonColor();
let changeColor = (color) => {
  // thêm class color vào house
  document.querySelector("#house").className = `house ${color}`;
  // B2: remove tất cả active có class active trước khi thêm lại class active
  document.querySelector(".active").classList.remove("active");
  //B3: thêm class active vào button click
  // nối chuổi : ".color-button" + `.${color}`
  document.querySelector(".color-button" + `.${color}`).classList.add("active");
};
