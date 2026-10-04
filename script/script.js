const containerParent = document.querySelector("#container-grid");
function createDivs() {
  for (let i = 0; i < 256; i++) {
    const divs = document.createElement("div");
    divs.classList = "grid";
    containerParent.appendChild(divs);
  }
}
createDivs();
