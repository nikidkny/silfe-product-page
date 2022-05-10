const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

const url =
  "https://linedrejer.dk/Silfen/wordpress/wp-json/wp/v2/product?_embed" + id;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throwError(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    showProwduct(data);
  })
  .catch((e) => {
    "Error", e.message;
  });

function showProwduct(bag) {
  console.log(bag);
}
