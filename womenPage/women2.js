let womenProduct=[
    {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221432F111000_1/1xblue-ssense-exclusive-pink-anime-camisole.jpg",
        brand: "1XBLUE",
        name: "SSENSE Exclusive",
        price: "113",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221188F049063_1/mm6-maison-margiela-ssense-exclusive-black-nano-faux-leather-triangle-tote.jpg",
        brand: "MM6 MAISON MARGIELA",
        name: "SSENSE Exclusive",
        price: "185",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221188F049064_1/mm6-maison-margiela-ssense-exclusive-white-nano-faux-leather-triangle-tote.jpg",
        brand: "MM6 MAISON MARGIELA",
        name: "SSENSE Exclusive",
        price: "185",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221188F049065_1/mm6-maison-margiela-ssense-exclusive-red-triangle-nano-tote.jpg",
        brand: "MM6 MAISON MARGIELA",
        name: "SSENSE Exclusive",
        price: "185",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221188F049067_1/mm6-maison-margiela-ssense-exclusive-red-medium-faux-leather-triangle-tote.jpg",
        brand: "MM6 MAISON MARGIELA",
        name: "SSENSE Exclusive",
        price: "250",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221188F049068_1/mm6-maison-margiela-ssense-exclusive-black-xxl-triangle-tote.jpg",
        brand: "MM6 MAISON MARGIELA",
        name: "SSENSE Exclusive",
        price: "385",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221188F049069_1/mm6-maison-margiela-ssense-exclusive-white-xxl-triangle-tote.jpg",
        brand: "MM6 MAISON MARGIELA",
        name: "SSENSE Exclusive",
        price: "385",
      },
     
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F122009_1/manolo-blahnik-black-hangisimu-50-heeled-sandals.jpg",
        brand: "MANOLO BLAHNIK",
        name: "SSENSE Exclusive",
        price: "1020",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F118002_1/manolo-blahnik-white-hangisi-ballerina-flats.jpg",
        brand: "MANOLO BLAHNIK",
        name: "SSENSE Exclusive",
        price: "945",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F122002_1/manolo-blahnik-yellow-satin-hangisi-heels.jpg",
        brand: "MANOLO BLAHNIK",
        name: "SSENSE Exclusive",
        price: "905",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F052000_1/givenchy-white-cotton-mini-dress.jpg",
        brand: "MANOLO BLAHNIK",
        name: "SSENSE Exclusive",
        price: "945",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F054001_1/givenchy-black-viscose-midi-dress.jpg",
        brand: "GIVENCHY",
        name: "SSENSE Exclusive",
        price: "685",
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
