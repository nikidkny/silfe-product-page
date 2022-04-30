window.addEventListener("DOMContentLoaded", init);
function init(event) {
  loadBags();
}
async function loadBags() {
  const response = await fetch(
    "https://linedrejer.dk/Silfen/wordpress/wp-json/wp/v2/product?_embed"
  );
  //   console.log("response", response);
  const theData = await response.json();
  //   console.log("theData", theData);
  displayData(theData);
}
function displayData(bags) {
  console.log(bags);
  bags.forEach((bag) => {
    console.log(bag.title.rendered);
    // 1. grab template
    const template = document.querySelector("template").content;
    // 2. Clone template
    const clone = template.cloneNode(true);

    clone.querySelector(".staticstate").src = bag.img1;
    // console.log("toteBag");
    clone.querySelector("h2").textContent = bag.title.rendered;
    clone.querySelector(".price span").textContent = bag.price;
    const parent = document.querySelector("main");
    parent.appendChild(clone);
  });
}
