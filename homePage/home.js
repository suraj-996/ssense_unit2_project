let a=document.getElementById("search").addEventListener("click",check)
function check(event){
    event.preventDefault();
    let box=document.createElement('div')
    box.setAttribute("id",'box')
   
    box.style.height="80px";
    box.style.width="350px";
    box.style.top="500px";
    let aam=document.createElement("input")
    aam.setAttribute("id","searchbox")
    aam.setAttribute("placeholder","search here!")
     let btn=document.createElement("button")
     btn.setAttribute("id","btn")
     btn.innerText="search"
     btn.addEventListener("click",function(){
        let a=aam.value;
        craate(a)
     })
    box.append(aam,btn)
    document.getElementById("jadu").append(box)
}

function craate(a){
    let res=[]
    a=a.toUpperCase()
    // Men data

let arr=[
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222439M145001_1/numbering-silver-8551-necklace.jpg",brand:"NUMBERING",name:"Silver #8551 Necklace",price:"120"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222439M145005_1/numbering-ssense-exclusive-silver-5702-necklace.jpg",brand:"NUMBERING",name:"SSENSE Exclusive Silver #5702 Necklace",price:"225"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222439M145006_1/numbering-ssense-exclusive-gold-5702-necklace.jpg",brand:"NUMBERING",name:"SSENSE Exclusive Gold #5702 Necklace",price:"225"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222798M213000_1/bottega-veneta-green-cotton-t-shirt.jpg",brand:"GIVENCHY",name:"Black Polyester Blazer",price:"1920"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222476M202000_1/valentino-navy-cotton-hoodie.jpg",brand:"LEMAIRE",name:"Brown Cotton Jacket",price:"900"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222476M213002_1/valentino-black-cotton-t-shirt.jpg",brand:"ACNE STUDIOS",name:"Blue Cotton Sweatshirt",price:"240"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222476M193007_1/valentino-black-wool-shorts.jpg",brand:"THOM BROWNE",name:"Navy Wool Skirt",price:"2165"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222476M193009_1/valentino-brown-wool-shorts.jpg",brand:"BOTTEGA VENETA",name:"Green Cotton T-Shirt",price:"485"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222476M213002_1/valentino-black-cotton-t-shirt.jpg",brand:"VALENTINO",name:"Black Cotton T-Shirt",price:"785"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222476M193007_1/valentino-black-wool-shorts.jpg",brand:"VALENTINO",name:"Black Wool Shorts",price:"735"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221404M190020_1/versace-purple-la-greca-lounge-pants.jpg",brand:"VALENTINO",name:"Brown Wool Shorts",price:"735"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221001M192037_1/diesel-blue-westy-shirt.jpg",brand:"VERSACE",name:"Purple La Greca Lounge Pants",price:"990"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221001M202044_1/diesel-blue-cotton-hoodie.jpg",brand:"DIESEL",name:"Blue Westy Shirt",price:"295"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221001M213002_1/diesel-black-t-diegor-t-shirt.jpg",brand:"DIESEL",name:"Blue Cotton Hoodie",price:"500"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221482M192057_1/ami-alexandre-mattiussi-black-organic-cotton-shirt.jpg",brand:"DIESEL",name:"Black T-Diegor T-Shirt",price:"65"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221482M192057_1/ami-alexandre-mattiussi-black-organic-cotton-shirt.jpg",brand:"AMI ALEXANDRE MATTIUSSI",name:"Black Organic Cotton Shirt",price:"265"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222001M192000_1/diesel-beige-s-umbe-ssl-hs-shirt.jpg",brand:"DIESEL",name:"Beige S-UMBE-SSL-HS Shirt",price:"200"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221001M186027_1/diesel-blue-d-mand-jeans.jpg",brand:"DIESEL",name:"Blue D-Mand Jeans",price:"460"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221001M186030_1/diesel-blue-logo-jeans.jpg",brand:"DIESEL",name:"Blue Logo Jeans",price:"450"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222001M186002_1/diesel-blue-d-strukt-jeans.jpg",brand:"DIESEL",name:"Blue D-Strukt Jeans",price:"220"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222001M186004_1/diesel-black-sleenker-jeans.jpg",brand:"DIESEL",name:"Black Sleenker Jeans",price:"315"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221482M186010_1/ami-alexandre-mattiussi-blue-alex-fit-jeans.jpg",brand:"AMI ALEXANDRE MATTIUSSI",name:"Blue Alex Fit Jeans",price:"295"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/221001M193030_1/diesel-brown-cotton-shorts.jpg",brand:"DIESEL",name:"Brown Cotton Shorts",price:"275"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.1/222001M186005_1/diesel-blue-cotton-slim-shorts.jpg",brand:"DIESEL",name:"Blue Cotton Slim Shorts",price:"220"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278M180000_1/givenchy-black-polyester-blazer.jpg", brand:"GIVENCHY", name:"Black Polyester Blazer", price:"1920"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221001M213002_1/diesel-black-t-diegor-t-shirt.jpg",brand:"DIESEL",name:"Black T=Diegor T-Shirt",price:"65"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221482M192057_1/ami-alexandre-mattiussi-black-organic-cotton-shirt.jpg",brand:"AMI ALEXANDRE MATTIUSSI",name:"Black Organic Cotton shirt",price:"265"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222001M186004_1/diesel-black-sleenker-jeans.jpg",brand:"DIESEL",name:"Black Sleenker Jeans",price:"315"},
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
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222088M180001_1/ksubi-black-devil-denim-jacket.jpg",brand:"KSUBI",name:"Black Paste Up shirt",price:"160"},
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
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222807M237045_1/valentino-garavani-black-vl7n-low-top-sneakers.jpg",brand:"VALENTINO GARAVANI",name:"Black Classic Clogs",price:"790"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222807M237056_1/valentino-garavani-black-and-gold-one-stud-low-top-sneakers.jpg",brand:"VALENTINO GARAVANI",name:"Black Classic Clogs",price:"360"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221001M237028_1/diesel-black-s-prototype-sneakers.jpg",brand:"DIESEL",name:"Black Classic Clogs",price:"355"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221138M236004_1/y-3-black-qasa-sneakers.jpg",brand:"Y-3",name:"Black Classic Clogs",price:"160"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221325M144068_1/coperni-black-alan-crocetti-edition-large-swipe-earring.jpg",brand:"COPERNI",name:"Black Classic Clogs",price:"295"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222085M164002_1/boss-hugo-boss-black-leather-bifold-wallet.jpg",brand:"BOSS",name:"Black Classic Clogs",price:"160"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221418M131000_1/saint-laurent-black-leather-monogram-belt.jpg",brand:"SAINT LAURENT",name:"Black Classic Clogs",price:"525"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222085M216005_1/boss-hugo-boss-three-pack-black-logo-boxer-briefs.jpg",brand:"BOSS",name:"Black Classic Clogs",price:"45"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222085M216005_1/boss-hugo-boss-three-pack-black-logo-boxer-briefs.jpg",brand:"CROCS",name:"Black Classic Clogs",price:"65"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221209M234027_1/crocs-black-classic-hemp-leaf-clogs.jpg",brand:"CROCS",name:"Black Classic Clogs",price:"60"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221432F111000_1/1xblue-ssense-exclusive-pink-anime-camisole.jpg",brand:"1XBLUE",name:"SSENSE Exclusive",price:"113"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221188F049063_1/mm6-maison-margiela-ssense-exclusive-black-nano-faux-leather-triangle-tote.jpg",brand:"MM6 MAISON MARGIELA",name:"SSENSE Exclusive",price:"185"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221188F049064_1/mm6-maison-margiela-ssense-exclusive-white-nano-faux-leather-triangle-tote.jpg",brand:"MM6 MAISON MARGIELA",name:"SSENSE Exclusive",price:"185"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221188F049065_1/mm6-maison-margiela-ssense-exclusive-red-triangle-nano-tote.jpg",brand:"MM6 MAISON MARGIELA",name:"SSENSE Exclusive",price:"185"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221188F049067_1/mm6-maison-margiela-ssense-exclusive-red-medium-faux-leather-triangle-tote.jpg",brand:"MM6 MAISON MARGIELA",name:"SSENSE Exclusive",price:"250"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221188F049068_1/mm6-maison-margiela-ssense-exclusive-black-xxl-triangle-tote.jpg",brand:"MM6 MAISON MARGIELA",name:"SSENSE Exclusive",price:"385"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221188F049069_1/mm6-maison-margiela-ssense-exclusive-white-xxl-triangle-tote.jpg",brand:"MM6 MAISON MARGIELA",name:"SSENSE Exclusive",price:"385"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F125035_1/manolo-blahnik-blue-araspemu-heeled-sandals.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"800"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F125003_1/manolo-blahnik-black-scolto-heeled-sandals.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"700"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F122024_1/manolo-blahnik-black-trina-heels.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"1155"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F122004_1/manolo-blahnik-pink-satin-hangisi-heels.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"945"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F125002_1/manolo-blahnik-beige-scolto-heeled-sandals.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"710"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F125034_1/manolo-blahnik-black-araspemu-heeled-sandals.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"800"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F118000_1/manolo-blahnik-black-satin-hangisi-ballerina-flats.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"1020"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F122029_1/manolo-blahnik-brown-maysale-pumps.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"700"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F125037_1/manolo-blahnik-black-caracol-heeled-sandals.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"820"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F125006_1/manolo-blahnik-brown-susa-heeled-sandals.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"880"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F124000_1/manolo-blahnik-black-susa-sandals.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"795"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F122005_1/manolo-blahnik-grey-satin-hangisi-heels.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"780"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F122009_1/manolo-blahnik-black-hangisimu-50-heeled-sandals.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"1020"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F118002_1/manolo-blahnik-white-hangisi-ballerina-flats.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"945"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221140F122002_1/manolo-blahnik-yellow-satin-hangisi-heels.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"905"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F052000_1/givenchy-white-cotton-mini-dress.jpg",brand:"MANOLO BLAHNIK",name:"SSENSE Exclusive",price:"945"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F054001_1/givenchy-black-viscose-midi-dress.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"685"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F054002_1/givenchy-pink-viscose-midi-dress.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"1775"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F054003_1/givenchy-black-viscose-midi-dress.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"1775"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F358001_1/givenchy-pink-nylon-bodysuit.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"1220"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F358000_1/givenchy-black-4g-bodysuit.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"435"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F096003_1/givenchy-pink-viscose-sweater.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"440"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F098000_1/givenchy-black-cotton-sweatshirt.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"790"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F110006_1/givenchy-white-cotton-t-shirt.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"660"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F099001_1/givenchy-black-viscose-turtleneck.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"505"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/222278F099002_1/givenchy-beige-viscose-turtleneck.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"505"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221249F063018_1/jil-sander-green-cotton-blazer.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"770"},
    {img:"https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/221168F054007_1/maison-margiela-blue-cotton-shirt.jpg",brand:"GIVENCHY",name:"SSENSE Exclusive",price:"770"},

   
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
   
    

     
     for(let i=0;i<arr.length;i++){
        let b=arr[i].name
         b=b.toUpperCase()
        
        let c=b.match(a)
         if(c==null){
        
         }
         else {
            res.push(arr[i])
         }
        
     }
     displayProduct(res);

}


function displayProduct(data){
    document.querySelector("#aakash").innerHTML="";
    document.querySelector("#mohit").innerHTML="";
    data.forEach(function(e,i){
        let product = document.querySelector("#mohit");
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