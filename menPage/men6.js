let menProduct=[
      
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222627M190000_1/soar-running-black-dual-fabric-30-leggings.jpg",brand:"STELLA MCCARTNEY",name:"Reversible Black & White Cotton Bucket Hat",price:"290"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221471M140000_1/stella-mccartney-reversible-black-and-white-cotton-bucket-hat.jpg",brand:"VISVIM",name:"Brown Cotton T-Shirt",price:"200"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221487M213003_1/visvim-brown-cotton-t-shirt.jpg",brand:"VISVIM",name:"Navy Cotton Shorts",price:"640"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221487M193002_1/visvim-navy-cotton-shorts.jpg",brand:"WON HUNDRED",name:"Black Vinny Denim Jacket",price:"250"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222636M177000_1/won-hundred-black-vinny-denim-jacket.jpg",brand:"WON HUNDRED",name:"Black Vinny Jacket",price:"560"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222636M181000_1/won-hundred-black-vinny-jacket.jpg",brand:"WON HUNDRED",name:"Black Eddie Polo",price:"175"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222636M212000_1/won-hundred-black-eddie-polo.jpg",brand:"WON HUNDRED",name:"Black Troy T-Shirt",price:"70"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222636M213003_1/won-hundred-black-troy-t-shirt.jpg",brand:"LEVI'S",name:"Black Cotton Shorts",price:"60"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221099M193005_1/levis-black-cotton-shorts.jpg",brand:"VALENTINO GARAVANI",name:"Black VLTN Messenger Bag",price:"1670"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222807M170010_1/valentino-garavani-black-vltn-messenger-bag.jpg",brand:"VALENTINO GARAVANI",name:"Black Leather Messenger Bag",price:"795"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222807M170004_1/valentino-garavani-black-leather-messenger-bag.jpg",brand:"MAISON KITSUNE",name:"Black Leather",price:"60"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221389M172001_1/maison-kitsune-black-palais-royal-tote.jpg",brand:"MAISON KITSUNE",name:"Black Leather",price:"60"},
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