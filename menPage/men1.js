// This is array of object for image, brand , name, price

let menProduct=[
     
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222439M145001_1/numbering-silver-8551-necklace.jpg",brand:"NUMBERING",name:"Silver #8551 Necklace",price:"120"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222439M145005_1/numbering-ssense-exclusive-silver-5702-necklace.jpg",brand:"NUMBERING",name:"SSENSE Exclusive Silver #5702 Necklace",price:"225"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222439M145006_1/numbering-ssense-exclusive-gold-5702-necklace.jpg",brand:"NUMBERING",name:"SSENSE Exclusive Gold #5702 Necklace",price:"225"},
   
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222476M202000_1/valentino-navy-cotton-hoodie.jpg",brand:"LEMAIRE",name:"Brown Cotton Jacket",price:"900"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222476M213002_1/valentino-black-cotton-t-shirt.jpg",brand:"ACNE STUDIOS",name:"Blue Cotton Sweatshirt",price:"240"},
    // {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222476M193007_1/valentino-black-wool-shorts.jpg",brand:"THOM BROWNE",name:"Navy Wool Skirt",price:"2165"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222476M193009_1/valentino-brown-wool-shorts.jpg",brand:"BOTTEGA VENETA",name:"Green Cotton T-Shirt",price:"485"},

    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221404M190020_1/versace-purple-la-greca-lounge-pants.jpg",brand:"VALENTINO",name:"Brown Wool Shorts",price:"735"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221001M192037_1/diesel-blue-westy-shirt.jpg",brand:"VERSACE",name:"Purple La Greca Lounge Pants",price:"990"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221001M202044_1/diesel-blue-cotton-hoodie.jpg",brand:"DIESEL",name:"Blue Westy Shirt",price:"295"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221001M213002_1/diesel-black-t-diegor-t-shirt.jpg",brand:"DIESEL",name:"Blue Cotton Hoodie",price:"500"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221482M192057_1/ami-alexandre-mattiussi-black-organic-cotton-shirt.jpg",brand:"DIESEL",name:"Black T-Diegor T-Shirt",price:"65"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221482M192057_1/ami-alexandre-mattiussi-black-organic-cotton-shirt.jpg",brand:"AMI ALEXANDRE MATTIUSSI",name:"Black Organic Cotton Shirt",price:"265"},
   
   


   
    // {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222807M237045_1/valentino-garavani-black-vl7n-low-top-sneakers.jpg",brand:"VALENTINO GARAVANI",name:"Black Classic Clogs",price:"790"},
    // {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222807M237056_1/valentino-garavani-black-and-gold-one-stud-low-top-sneakers.jpg",brand:"VALENTINO GARAVANI",name:"Black Classic Clogs",price:"360"},
    // {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221001M237028_1/diesel-black-s-prototype-sneakers.jpg",brand:"DIESEL",name:"Black Classic Clogs",price:"355"},
    // {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221138M236004_1/y-3-black-qasa-sneakers.jpg",brand:"Y-3",name:"Black Classic Clogs",price:"160"},
    // {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221325M144068_1/coperni-black-alan-crocetti-edition-large-swipe-earring.jpg",brand:"COPERNI",name:"Black Classic Clogs",price:"295"},
    // {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222085M164002_1/boss-hugo-boss-black-leather-bifold-wallet.jpg",brand:"BOSS",name:"Black Classic Clogs",price:"160"},
    // {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221418M131000_1/saint-laurent-black-leather-monogram-belt.jpg",brand:"SAINT LAURENT",name:"Black Classic Clogs",price:"525"},
    // {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222085M216005_1/boss-hugo-boss-three-pack-black-logo-boxer-briefs.jpg",brand:"BOSS",name:"Black Classic Clogs",price:"45"},
    // {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222085M216005_1/boss-hugo-boss-three-pack-black-logo-boxer-briefs.jpg",brand:"CROCS",name:"Black Classic Clogs",price:"65"},
    // {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221209M234027_1/crocs-black-classic-hemp-leaf-clogs.jpg",brand:"CROCS",name:"Black Classic Clogs",price:"60"},
    // // {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221249M140004_1/jil-sander-green-cotton-bucket-hat.jpg",brand:"JIL SANDER",name:"Green Cotton Bucket Hat",price:"440"},
    // {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222476M213002_1/valentino-black-cotton-t-shirt.jpg",brand:"VALENTINO",name:"Black Cotton T-Shirt",price:"785"},
    // {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222476M193007_1/valentino-black-wool-shorts.jpg",brand:"VALENTINO",name:"Black Wool Shorts",price:"735"},
   
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