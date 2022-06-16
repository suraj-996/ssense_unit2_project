
let menProduct=[
    {
    img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222088M180001_1/ksubi-black-devil-denim-jacket.jpg",
    brand:"KSUBI",
    name:"Black Paste Up shirt",
    price:"160"
    },
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222088M192000_1/ksubi-black-paste-up-shirt.jpg",brand:"KSUBI",name:"Black Cotton Hoodie",price:"180"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222088M202000_1/ksubi-black-cotton-hoodie.jpg",brand:"KSUBI",name:"Black Cotton Long Sleeve T-Shirt",price:"85"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222088M213004_1/ksubi-black-cotton-long-sleeve-t-shirt.jpg",brand:"KSUBI",name:"Black Cotton T-Shirt",price:"60"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222088M213039_1/ksubi-black-cotton-t-shirt.jpg",brand:"KSUBI",name:"Black Chitch Devil Jeans",price:"195"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222088M186001_1/ksubi-black-chitch-devil-jeans.jpg",brand:"KSUBI",name:"Black Van Winkle Devil Jeans",price:"250"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222088M186002_1/ksubi-black-van-winkle-devil-jeans.jpg",brand:"KSUBI",name:"Black Van Winkle Devil Dynamite Jeans",price:"235"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222088M186055_1/ksubi-black-van-winkle-dynamite-jeans.jpg",brand:"44 LABEL GROUP",name:"Black Van Winkle Rebel Jeans",price:"170"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222088M186066_1/ksubi-black-van-winkle-rebel-jeans.jpg",brand:"BETHANY WILLIAMS",name:"Black Cotton T-Shirt",price:"185"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222248M213000_1/44-label-group-black-cotton-t-shirt.jpg",brand:"NUDIE JEANS",name:"Black The Maggie Project & Making for Change Edition Hoodie",price:"440"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221562M202031_1/bethany-williams-black-the-magpie-project-and-making-for-change-edition-hoodie.jpg",brand:"BETHANY WILLIAMS",name:"Black Slim Adam Trousers",price:"$65"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222078M186041_1/nudie-jeans-black-slim-adam-trousers.jpg",brand:"SOAR RUNNING",name:"Black Dual-Fabric 3.0 Leggings",price:"170"},
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