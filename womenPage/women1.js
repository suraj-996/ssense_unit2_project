// This is array of object for image, brand , name, price

let womenProduct = [
  {
    img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222381F107001_1/thom-browne-white-cotton-blouse.jpg",
    brand:"THOM BROWNE",
    name:"White Cotton Blouse",
    price:"485"
  },
  {
    img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222381F096004_1/thom-browne-navy-4-bar-sweater.jpg",
    brand:"THOM BROWNE",
    name:"White Cotton Blouse",
    price:"810"
  },
  {
    img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222381F110000_1/thom-browne-navy-cotton-t-shirt.jpg",
    brand:"THOM BROWNE",
    name:"White Cotton Blouse",
    price:"260"
  },
  {
    img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222381F110001_1/thom-browne-gray-cotton-t-shirt.jpg",
    brand:"THOM BROWNE",
    name:"White Cotton Blouse",
    price:"260"
  },
  {
    img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222381F014000_1/thom-browne-gray-cashmere-4-bar-beanie.jpg",
    brand:"THOM BROWNE",
    name:"White Cotton Blouse",
    price:"295"
  },
  {
    img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222381F014001_1/thom-browne-gray-cashmere-4-bar-beanie.jpg",
    brand:"THOM BROWNE",
    name:"White Cotton Blouse",
    price:"295"
  },
  {
    img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222381F087000_1/thom-browne-navy-4-bar-trousers.jpg",
    brand:"THOM BROWNE",
    name:"White Cotton Blouse",
    price:"1100"
  },
  {
    img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221342F086008_1/balenciaga-taupe-cotton-lounge-pants.jpg",
    brand:"THOM BROWNE",
    name:"White Cotton Blouse",
    price:"710"
  },
  {
    img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222129F110004_1/acne-studios-black-organic-cotton-t-shirt.jpg",
    brand:"THOM BROWNE",
    name:"White Cotton Blouse",
    price:"115"
  },
  {
    img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222129F108001_1/acne-studios-blue-organic-cotton-polo.jpg",
    brand:"THOM BROWNE",
    name:"White Cotton Blouse",
    price:"225"
  },
  {
    img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222129F110002_1/acne-studios-grey-organic-cotton-t-shirt.jpg",
    brand:"THOM BROWNE",
    name:"White Cotton Blouse",
    price:"115"
  },
  {
    img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222129F110017_1/acne-studios-multicolor-organic-cotton-t-shirt.jpg",
    brand:"THOM BROWNE",
    name:"White Cotton Blouse",
    price:"115"
  },
 
  
];

// sorting price
let arr1 = [...womenProduct];
function sortPrice() {
  let selected = document.querySelector("#price").value;
  console.log(selected);
  if (selected == "all") {
    displayProduct(arr1);
  }

  if (selected == "low") {
    arr1.sort((a, b) => a.price - b.price);
    displayProduct(arr1);
  }
  if (selected == "high") {
    arr1.sort((a, b) => b.price - a.price);
    displayProduct(arr1);
  }
}

displayProduct(womenProduct);

// display all products
function displayProduct(data) {
  document.querySelector("#product").innerHTML = "";
  data.forEach(function (e, i) {
    let product = document.querySelector("#product");
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", e.img);
    let brand = document.createElement("span");
    brand.innerText = e.brand;
    let name = document.createElement("span");
    name.innerText = e.name;
    let price = document.createElement("span");
    price.innerText = `$${e.price}`;
    let btn = document.createElement("button");
    btn.innerText = "Add to bag";
    btn.setAttribute("id", "addtobag");
    btn.addEventListener("click", function () {
      addToBag(e, i);
    });
    div.append(image, brand, name, price, btn);
    product.append(div);
  });
}

// sending data to Local Storage
// key name - addToBag
let productArr = JSON.parse(localStorage.getItem("addToBag")) || [];
function addToBag(e) {
  let obj = {
    img: e.img,
    brand: e.brand,
    name: e.name,
    price: e.price,
    // quantity:1
  };
  productArr.push(obj);
  console.log(productArr);
  localStorage.setItem("addToBag", JSON.stringify(productArr));
}
