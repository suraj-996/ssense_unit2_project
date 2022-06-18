let everything_else=[
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221711M620014_1/vitruvi-fresh-air-essential-oil-set.jpg",
        brand:"VITRUVI",
        name:"Fresh Air Essential Oil Set",
        price:"50",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221711M620011_1/vitruvi-signature-scent-kit-4-x-5-ml.jpg",
        brand:"VITRUVI",
        name:"Signature Scent",
        price:"55",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221711M620012_1/vitruvi-rest-scent-kit-4-x-5-ml.jpg",
        brand:"VITRUVI",
        name:"Rest Scent",
        price:"55",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221711M620013_1/vitruvi-refresh-scent-kit-4-x-5-ml.jpg",
        brand:"VITRUVI",
        name:"Refresh Scent Kit",
        price:"55",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221389M645018_1/maison-kitsune-black-anthony-burrill-edition-iphone-12-12-pro-case.jpg",
        brand:"MAISON KITSUNE",
        name:"Black Anthony Buril",
        price:"60",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221389M645019_1/maison-kitsune-white-anthony-burrill-edition-iphone-12-12-pro-case.jpg",
        brand:"MAISON KITSUNE",
        name:"White Anthony",
        price:"60",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221389M645022_1/maison-kitsune-green-camp-logo-strap-iphone-12-12-pro-case.jpg",
        brand:"MAISON KITSUNE",
        name:"Green Camp",
        price:"85",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221389M645021_1/maison-kitsune-pink-stamp-logo-strap-iphone-12-12-pro-case.jpg",
        brand:"MAISON KITSUNE",
        name:"Pink Stamp",
        price:"85",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221737M834017_1/mammut-black-trion-nordwand-15-alpine-backpack.jpg",
        brand:"MAMMUT",
        name:"Black Trion Nordwand ",
        price:"215",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221737M834016_1/mammut-orange-trion-nordwand-alpine-28-backpack.jpg",
        brand:"MAMMUT",
        name:"Orange Trion",
        price:"220",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221404M699004_1/versace-baby-black-and-gold-barocco-bottle-holder.jpg",
        brand:"MAMMUT",
        name:"Baby Black & Gold Barocco",
        price:"160",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221404M699003_1/versace-baby-black-and-gold-barocco-portable-changing-mat.jpg",
        brand:"MAMMUT",
        name:"Baby Black & Gold",
        price:"335",
    },
]

let arr1=[...everything_else]
function sortPrice(){
    let selected = document.querySelector("#price").value;
    console.log(selected)
    if(selected=="all"){
        displayProduct(arr1)
    }
    
    if(selected=="low"){
        arr1.sort((a,b)=>a.price-b.price);
        displayProduct(arr1)
    }
    if(selected=="high"){
        arr1.sort((a,b)=>b.price-a.price)
        displayProduct(arr1)
    }
    
}

// display all product
displayProduct(everything_else);

function displayProduct(data){
    document.querySelector("#product").innerHTML=""
    data.forEach(function(e,i){
        let product = document.querySelector("#product");
        let div=document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute("src", e.img);
        let brand = document.createElement("span");
        brand.innerText=e.brand;
        let name=document.createElement("span");
        name.innerText=e.name;
        let price=document.createElement("span");
        price.innerText=`$${e.price}`;
        let btn=document.createElement("button");
        btn.innerText="Add to bag"
        btn.setAttribute("id", "addtobag")
        btn.addEventListener("click", function(){
            addToBag(e,i)
        });
        div.append(image,brand,name,price,btn);
        product.append(div);
    })
}


// sending data to localStorage
// key name addToBag
let productArr=JSON.parse(localStorage.getItem("addToBag")) || []
function addToBag(e){
    let obj={
        img:e.img,
        brand:e.brand,
        name:e.name,
        price:e.price,
        // quantity:1
    }
    productArr.push(obj)
    // console.log(productArr)
    localStorage.setItem("addToBag", JSON.stringify(productArr))
}