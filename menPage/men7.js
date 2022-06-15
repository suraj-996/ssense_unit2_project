let menProduct=[
     {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221389M172006_1/maison-kitsune-black-fox-head-tote.jpg",brand:"MAISON KITSUNE",name:"Black Leather",price:"45"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221389M172015_1/maison-kitsune-black-cafe-tote.jpg",brand:"VYNER ARTICLES",name:"Black Cafe Tote",price:"445"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221286M166000_1/vyner-articles-multicolor-bandana-patchwork-backpack.jpg",brand:"C.P. COMPANY",name:"Black Logo Backpack",price:"200"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221357M166003_1/cp-company-black-logo-backpack.jpg",brand:"LANVIN",name:"Black Classic Clogs",price:"1150"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221254M169000_1/lanvin-black-curb-duffle-bag.jpg",brand:"BOTTEGA VANETA",name:"Black Classic Clogs",price:"1385"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222798M223015_1/bottega-veneta-black-tire-chelsea-boots.jpg",brand:"BOTTEGA VANETA",name:"Black Classic Clogs",price:"405"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222798M234016_1/bottega-veneta-black-slider-sandals.jpg",brand:"JIL SANDER",name:"Black Classic Clogs",price:"680"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221249M234006_1/jil-sander-grey-nabuk-sandals.jpg",brand:"BOTTEGA VANETA",name:"Black Classic Clogs",price:"710"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222807M237000_1/valentino-garavani-black-rockrunner-low-top-sneakers.jpg",brand:"VALENTINO GARAVANI",name:"Black Classic Clogs",price:"630"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222807M237003_1/valentino-garavani-khaki-and-black-rockrunner-low-top-sneakers.jpg",brand:"",name:"Black Classic Clogs",price:"630"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222807M237004_1/valentino-garavani-black-rockrunner-sneakers.jpg",brand:"VALENTINO GARAVANI",name:"Black Classic Clogs",price:"700"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222807M237011_1/valentino-garavani-khaki-and-navy-rockrunner-sneakers.jpg",brand:"VALENTINO GARAVANI",name:"Black Classic Clogs",price:"790"},
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