

let menProduct=[
        {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221389M202032_1/maison-kitsune-black-organic-cotton-hoodie.jpg",brand:"MAISON KITSUNE",name:"Black Organic Cotton Hoodie",price:"250"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221389M202039_1/maison-kitsune-black-cafe-kitsune-hoodie.jpg",brand:"MAISON KITSUNE",name:"Black 'Cafe' Kitsune Hoodie",price:"190"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221389M213085_1/maison-kitsune-black-tricolor-fox-long-sleeve-t-shirt.jpg",brand:"MAISON KITSUNE",name:"Black Tricolor Fox Long Sleeve T-shirt",price:"150"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221389M213064_1/maison-kitsune-black-fox-head-t-shirt.jpg",brand:"MAISON KITSUNE",name:"Black Fox Head T-Shirt",price:"90"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221389M213069_1/maison-kitsune-black-fox-t-shirt.jpg",brand:"MAISON KITSUNE",name:"Black Fox T-Shirt",price:"90"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221389M213071_1/maison-kitsune-black-fox-t-shirt.jpg",brand:"MAISON KITSUNE",name:"Black Fox T-Shirt",price:"90"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221389M213075_1/maison-kitsune-blackfox-t-shirt.jpg",brand:"MAISON KITSUNE",name:"Black Fox T-Shirt",price:"90"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221389M139006_1/maison-kitsune-navy-fox-cap.jpg",brand:"MAISON KITSUNE",name:"Navy Fox Cap",price:"110"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221389M139014_1/maison-kitsune-black-cafe-kitsune-cap.jpg",brand:"MAISON KITSUNE",name:"Black Cafe Kitsune Cap",price:"80"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221389M190003_1/maison-kitsune-black-chillax-fox-lounge-pants.jpg",brand:"JOHNLAWRENCESULLIVAN",name:"Black Chillax Fox Lounge Pants",price:"185"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221389M190005_1/maison-kitsune-black-tricolor-fox-lounge-pants.jpg",brand:"KSUBI",name:"Black wool 2Button Blazer",price:"1160"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221623M195000_1/johnlawrencesullivan-black-wool-2button-blazer.jpg",brand:"KSUBI",name:"Black Devil Denim Jacket",price:"265"},
]


// Sorting price
let arr1=[...menProduct]
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
displayProduct(menProduct);

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