let womenProduct=[
    {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F054002_1/givenchy-pink-viscose-midi-dress.jpg",
        brand: "GIVENCHY",
        name: "SSENSE Exclusive",
        price: "1775",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F054003_1/givenchy-black-viscose-midi-dress.jpg",
        brand: "GIVENCHY",
        name: "SSENSE Exclusive",
        price: "1775",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F358001_1/givenchy-pink-nylon-bodysuit.jpg",
        brand: "GIVENCHY",
        name: "SSENSE Exclusive",
        price: "1220",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F358000_1/givenchy-black-4g-bodysuit.jpg",
        brand: "GIVENCHY",
        name: "SSENSE Exclusive",
        price: "435",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F096003_1/givenchy-pink-viscose-sweater.jpg",
        brand: "GIVENCHY",
        name: "SSENSE Exclusive",
        price: "440",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F098000_1/givenchy-black-cotton-sweatshirt.jpg",
        brand: "GIVENCHY",
        name: "SSENSE Exclusive",
        price: "790",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F110006_1/givenchy-white-cotton-t-shirt.jpg",
        brand: "GIVENCHY",
        name: "SSENSE Exclusive",
        price: "660",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F099001_1/givenchy-black-viscose-turtleneck.jpg",
        brand: "GIVENCHY",
        name: "SSENSE Exclusive",
        price: "505",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F099002_1/givenchy-beige-viscose-turtleneck.jpg",
        brand: "GIVENCHY",
        name: "SSENSE Exclusive",
        price: "505",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221249F063018_1/jil-sander-green-cotton-blazer.jpg",
        brand: "GIVENCHY",
        name: "SSENSE Exclusive",
        price: "770",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221168F054007_1/maison-margiela-blue-cotton-shirt.jpg",
        brand: "GIVENCHY",
        name: "SSENSE Exclusive",
        price: "770",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221249F063018_1/jil-sander-green-cotton-blazer.jpg",
        brand: "GIVENCHY",
        name: "SSENSE Exclusive",
        price: "770",
      },
]

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
