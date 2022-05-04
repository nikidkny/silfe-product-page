const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

const url =
  "https://linedrejer.dk/Silfen/wordpress/wp-json/wp/v2/product?_embed" + id;
