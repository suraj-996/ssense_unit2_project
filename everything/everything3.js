let everything_else=[
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221797M831004_1/project-full-pink-natural-canvas-meditation-cushion-set.jpg",
        brand:"PROJECT FULL",
        name:"Pink Natural",
        price:"400",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221413M690004_1/tiny-cottons-baby-blue-and-tan-pima-cotton-bodysuit.jpg",
        brand:"PROJECT FULL",
        name:"Baby Blue ",
        price:"40",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221101M000055_1/charles-jeffrey-loverboy-ssense-exclusive-baby-multicolor-printed-romper.jpg",
        brand:"PROJECT FULL",
        name:"SSENSE Exclusive",
        price:"80",
    },
    
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221797M831001_1/project-full-off-white-natural-canvas-meditation-cushion-set.jpg",
        brand:"PROJECT FULL",
        name:"Off-White Natural",
        price:"375",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221413M713001_1/tiny-cottons-kids-yellow-oleander-cap.jpg",
        brand:"VERSACE",
        name:"Kid Yellow",
        price:"40",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221413M690004_1/tiny-cottons-baby-blue-and-tan-pima-cotton-bodysuit.jpg",
        brand:"VERSACE",
        name:"Baby Blue & Tan Pima Cotton Bodysuit",
        price:"40",
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
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221413M703023_1/tiny-cottons-kids-beige-oranges-tank-top.jpg",
        brand:"MADE FOR MINI",
        name:"Kids Beige Orange",
        price:"70",
    },
    {
        img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221413M703003_1/tiny-cottons-kids-beige-and-blue-medium-stripes-t-shirt.jpg",
        brand:"MADE FOR MINI",
        name:"Kids beige",
        price:"35",
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
    localStorage.setItem("addToBag", JSON.stringify(everything_else))
}