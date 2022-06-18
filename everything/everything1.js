let everything_else=[
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222168M645002_1/maison-margiela-black-phone-pouch.jpg",
        brand:"MAISON MARGIELA",
        name:"Black Phone Pounch",
        price:"400",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222168M645004_1/maison-margiela-black-neck-phone-pouch.jpg",
        brand:"MAISON MARGIELA",
        name:"Black Neck Phone pouch",
        price:"350",
    },
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
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221885M659001_1/reyal-layer-003-super-night-moisturizer-100-ml.jpg",
        brand:"REYAL",
        name:"Layer 003",
        price:"30",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221885M650000_1/reyal-supreme-body-wash-1-l.jpg",
        brand:"REYAL",
        name:"Supreme Body Wash",
        price:"45",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221087M796000_1/baina-ssense-exclusive-green-and-off-white-checkered-towel.jpg",
        brand:"BAINA",
        name:"SSENSE Exclusive Green",
        price:"75",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221087M796001_1/baina-ssense-exclusive-green-and-off-white-checkered-hand-towel.jpg",
        brand:"BAINA",
        name:"SSENSE Exclusive Green",
        price:"45",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/212334M642000_1/denon-brown-ah-d9200-headphones.jpg",
        brand:"BAINA",
        name:"Brown AH",
        price:"1995",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221948M618001_1/wacko-maria-red-maria-candle.jpg",
        brand:"BAINA",
        name:"Red Maria",
        price:"105",
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
    console.log(productArr)
    localStorage.setItem("addToBag", JSON.stringify(productArr))
}