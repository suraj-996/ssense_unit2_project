let womenProduct=[
    {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F125035_1/manolo-blahnik-blue-araspemu-heeled-sandals.jpg",
        brand: "MANOLO BLAHNIK",
        name: "SSENSE Exclusive",
        price: "800",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F125003_1/manolo-blahnik-black-scolto-heeled-sandals.jpg",
        brand: "MANOLO BLAHNIK",
        name: "SSENSE Exclusive",
        price: "700",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F122024_1/manolo-blahnik-black-trina-heels.jpg",
        brand: "MANOLO BLAHNIK",
        name: "SSENSE Exclusive",
        price: "1155",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F122004_1/manolo-blahnik-pink-satin-hangisi-heels.jpg",
        brand: "MANOLO BLAHNIK",
        name: "SSENSE Exclusive",
        price: "945",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F125002_1/manolo-blahnik-beige-scolto-heeled-sandals.jpg",
        brand: "MANOLO BLAHNIK",
        name: "SSENSE Exclusive",
        price: "710",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F125034_1/manolo-blahnik-black-araspemu-heeled-sandals.jpg",
        brand: "MANOLO BLAHNIK",
        name: "SSENSE Exclusive",
        price: "800",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F118000_1/manolo-blahnik-black-satin-hangisi-ballerina-flats.jpg",
        brand: "MANOLO BLAHNIK",
        name: "SSENSE Exclusive",
        price: "1020",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F122029_1/manolo-blahnik-brown-maysale-pumps.jpg",
        brand: "MANOLO BLAHNIK",
        name: "SSENSE Exclusive",
        price: "700",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F125037_1/manolo-blahnik-black-caracol-heeled-sandals.jpg",
        brand: "MANOLO BLAHNIK",
        name: "SSENSE Exclusive",
        price: "820",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F125006_1/manolo-blahnik-brown-susa-heeled-sandals.jpg",
        brand: "MANOLO BLAHNIK",
        name: "SSENSE Exclusive",
        price: "880",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F124000_1/manolo-blahnik-black-susa-sandals.jpg",
        brand: "MANOLO BLAHNIK",
        name: "SSENSE Exclusive",
        price: "795",
      },
      {
        img: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F122005_1/manolo-blahnik-grey-satin-hangisi-heels.jpg",
        brand: "MANOLO BLAHNIK",
        name: "SSENSE Exclusive",
        price: "780",
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
