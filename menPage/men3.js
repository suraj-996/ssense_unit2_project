let menProduct = [
     {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222841M213021_1/dime-black-cotton-t-shirt.jpg",brand:"DIME",name:"Black Cotton T-Shirt",price:"50"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221378M140001_1/ann-demeulemeester-black-sofieke-hat.jpg",brand:"ANN DEMEULEMEESTER",name:"Black Sofieke Hat",price:"610"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221967M185000_1/heron-preston-black-polyester-vest.jpg",brand:"HERON PRESTON",name:"Black Polyester Vest",price:"600"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221967M202001_1/heron-preston-black-cotton-hoodie.jpg",brand:"HERON PRESTON",name:"Black Cotton Hoodie",price:"395"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221967M202012_1/heron-preston-black-strass-hoodie.jpg",brand:"HERON PRESTON",name:"Black Strass Hoodie",price:"435"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221967M213015_1/heron-preston-black-cotton-t-shirt.jpg",brand:"Y-3",name:"Black Cotton T-Shirt",price:"215"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221138M202010_1/y-3-black-cotton-hoodie.jpg",brand:"Y-3",name:"Black Cotton Hoodie",price:"180"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221138M204010_1/y-3-black-cotton-sweatshirt.jpg",brand:"Y-3",name:"Black Cotton Sweatshirt",price:"160"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221138M190008_1/y-3-black-nylon-lounge-pants.jpg",brand:"Y-3",name:"Black Nylon Lounge Pants",price:"355"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221138M193002_1/y-3-black-cotton-short.jpg",brand:"MAISON KITSUNE",name:"Black Cotton Short",price:"180"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221389M200014_1/maison-kitsune-black-baby-fox-cardigan.jpg",brand:"MAISON KITSUNE",name:"Black Baby Fox Cardigan",price:"260"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221389M202024_1/maison-kitsune-black-fox-hoodie.jpg",brand:"MAISON KITSUNE",name:"Black Fox Hoodie",price:"205"},
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