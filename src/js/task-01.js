const items = document.querySelectorAll('#categories .item')
console.log("Number of categories:", items.length)

for(let item of items) {
    console.log("Category:", item.querySelector('h2').textContent)
    console.log("Elements:", item.querySelector('ul').children.length)
}





// const categories = document.querySelector("#categories");
// const quantityCategories = categories.children.length;
// console.log("Number of categories:", quantityCategories);

// const quantityItem1 =
//   categories.firstElementChild.querySelector("ul").children.length;
// const titelItem1 = categories.firstElementChild.querySelector("h2").textContent;

// console.log("Category:", titelItem1);
// console.log("Elements:", quantityItem1);

// const quantityItem2 =
//   categories.children[1].querySelector("ul").children.length;
// const titelItem2 = categories.children[1].querySelector("h2").textContent;

// console.log("Category:", titelItem2);
// console.log("Elements:", quantityItem2);

// const quantityItem3 =
//   categories.lastElementChild.lastElementChild.children.length;
// const titelItem3 = categories.lastElementChild.querySelector("h2").textContent;
// console.log("Category:", titelItem3);
// console.log("Elements:", quantityItem3);


