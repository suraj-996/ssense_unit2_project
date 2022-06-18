let everything_else=[
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222168M645003_1/maison-margiela-beige-neck-phone-pouch.jpg",
        brand:"MAISON MARGIELA",
        name:"Beige Neck Phone Pouch",
        price:"350",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221389M645020_1/maison-kitsune-brown-stamp-logo-strap-iphone-12-12-pro-case.jpg",
        brand:"MAISON MARGIELA",
        name:"Brown Stamp Logo",
        price:"85",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221885M784000_1/reyal-layer-002-select-day-serum-30-ml.jpg",
        brand:"REYAL",
        name:"Layer 002 Select Day Serum",
        price:"45",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221885M659000_1/reyal-layer-003-super-day-moisturizer-spf-20-100-ml.jpg",
        brand:"REYAL",
        name:"Layer 003 Super Day",
        price:"30",
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
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221404M717000_1/versace-kids-pink-medusa-bag.jpg",
        brand:"VERSACE",
        name:"Kids Pink Medusa Bag",
        price:"535",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221404M702013_1/versace-kids-white-barocco-goddess-dress.jpg",
        brand:"VERSACE",
        name:"Kid White Barocco",
        price:"270",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221975M713006_1/maed-for-mini-kids-orange-luxurious-leopard-bucket-hat.jpg",
        brand:"MADE FOR MINI",
        name:"Kids Orange Luxurious",
        price:"50",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221404M721010_1/versace-kids-blue-royal-rebellion-denim-shorts.jpg",
        brand:"MADE FOR MINI",
        name:"Kids Blue",
        price:"330",
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