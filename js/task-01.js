const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

const itemsElement = document.querySelectorAll(".item");
itemsElement.forEach((item) => {
    console.log("Category: ", item.firstElementChild.textContent);
    console.log("Elements: ", item.lastElementChild.children.length);
});