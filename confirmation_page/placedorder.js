
    let summarydata=JSON.parse(localStorage.getItem("cart_data"));
     console.log(summarydata)

         summarydata.forEach(function(element){
  let div1=document.createElement("div");
let div2=document.createElement("div");
let div3=document.createElement("div");
let div4=document.createElement("div");
let div5=document.createElement("div5")
div5.setAttribute("id","outermostdiv");
div4.setAttribute("id","left_part_of_bag")
let img=document.createElement("img");
img.setAttribute("src",element.img);
let brand=document.createElement("p");
   brand.innerText=element.name;
let name=document.createElement("p");
name.innerText=element.color;

let price=document.createElement("p");
price.innerText="$"+element.price;

div3.append(img);
div2.append(brand,name);
div4.append(div3,div2);
div1.append(price);
div5.append(div4,div1);
document.querySelector("#summary").append(div5);




})

let items=document.querySelector("#items");
  items.innerText="Total Number of Items Ordered : "+(summarydata.length);
  let total=document.querySelector("#total");

  let sum=0;
for(let i=0;i<summarydata.length;i++){
    sum=sum+Number((summarydata[i].price))
}

  total.innerText="Total Billing Amount $ : "+(Number(40)+sum)


 document.querySelector("#button").addEventListener("click", homepage);

 function homepage(){
window.location.assign("https://www.ssense.com")
 }
