const container = document.createElement("div");
container.classList.add("categories-container");

const categories = document.getElementById("categories");
container.appendChild(categories);
document.body.append(container);

const categoriesListOfItems = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesListOfItems.length}`);

categoriesListOfItems.forEach((item) => {
  const title = item.querySelector("h2");
  const list = item.querySelector("ul");
  const items = list.querySelectorAll("li");

  title.classList.add("item-category-title");
  list.classList.add("item-category-list");
  items.forEach((li) => li.classList.add("item-category-options"));

  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${items.length}`);
});
