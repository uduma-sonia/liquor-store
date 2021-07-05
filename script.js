const product = [
  {
    id: 1,
    title: "Moet",
    price: 2000,
    category: "wine",
    img: "img/moet.png",
    inCart: 0,
  },
  {
    id: 1,
    title: "Hennessy",
    price: 7500,
    category: "spirit",
    img: "img/hennessy.png",
    inCart: 0,
  },
  {
    id: 1,
    title: "Corona extra",
    price: 7500,
    category: "beer",
    img: "img/corona.png",
    inCart: 0,
  },
];

const productContainer = document.querySelector(".products-container");
const tabsContainer = document.querySelector(".tabs-container");

window.addEventListener("DOMContentLoaded", function () {
  displayProductsItem(product);
  displayTabs();
});

// FUNCTION TO DISPLAY PRODUCTS
function displayProductsItem(productItem) {
  let productDisplay = productItem.map((item) => {
    return `
        <article class="product-item">
          <img src="${item.img}" alt="${item.title}" />
          <div class="product-price mt-4">
            <p class="font-weight-bold text-capitalize">${item.title}</p>
            <p>&#8358;${item.price}.00</p>
          </div>
        </article>
    `;
  });

  productDisplay = productDisplay.join("");
  productContainer.innerHTML = productDisplay;
}

// FUNCTION FOR TABS
function displayTabs() {
  const categories = product.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  const categoryTabs = categories
    .map(function (category) {
      return `
    <button class="tabs btn" data-id="${category}">${category}</button>
    `;
    })
    .join("");

  tabsContainer.innerHTML = categoryTabs;
  const filterTabs = document.querySelectorAll(".tabs");

  // FUNCTION TO FILTER PRODUCTS
  filterTabs.forEach(function (tab) {
    tab.addEventListener("click", function (e) {
      console.log(e.currentTarget.dataset.id);

      const category = e.currentTarget.dataset.id;
      const productCategory = product.filter(function (productItem) {
        if (productItem.category === category) {
          return productItem;
        }
      });

      if (category === "all") {
        displayProductsItem(product);
      } else {
        displayProductsItem(productCategory);
      }
    });
  });
}

document.querySelector(".hamburger").addEventListener("click", (e) => {
  e.preventDefault();

  document.querySelector(".nav-links").classList.toggle("active");
});
