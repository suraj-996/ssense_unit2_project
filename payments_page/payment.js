
  // displaying cart items here

  

  let data=JSON.parse(localStorage.getItem("Order"));

  let bagdata=data[0].cart;
  


localStorage.setItem("cart_data",JSON.stringify(bagdata));


bagdata.forEach(function(element){
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
document.querySelector("#cart_product").append(div5);

})

    
    // Subtotal,Shipping Total and Order total section starts
    
    let withcoupan= data[0].Withcoupan;


 let shipch=data[0].Shipincharge;
 let withship=withcoupan+shipch;
 

 document.querySelector("#order_summary").innerText="("+(bagdata.length)+")"+" ITEMS";
document.querySelector("#subtotal1").innerText="$"+withcoupan;

document.querySelector("#total_order").innerText="$"+(shipch+withcoupan);
document.querySelector("#shipping_total").innerText="$"+shipch;

   
    localStorage.setItem("price",withship);
    
//     // Subtotal,Shipping Total and Order total section ends
    
    

    // alert function code 
    document.querySelector("#order_place").addEventListener("click", orderplace);
    function orderplace(){
    
      let exp=document.querySelector("#expiry").value;
    
      if(exp==null || exp.length<4){
        let x=document.querySelector("#pop")
     x.style.color="white"
     x.style.backgroundColor="#a30001 "
     x.innerText="Plese complete the form"
     x.style.visibility='visible';
     function reloadtime(){
      window.location.reload();
     }
    setTimeout(reloadtime,2000)
    }else{
      let x=document.querySelector("#pop")
     x.style.color="white"
     x.style.backgroundColor="green"
     x.innerText="Redirecting to Payment Page ..."
     x.style.visibility='visible';
     function reloadtime(){
      window.location.reload();
     }
    setTimeout(reloadtime,2000)
    
    function delay(){
      window.location.href="/otp_page/otp.html"
    }
    setTimeout(delay,2000)
    }
      }
    
    
    // payment method script starts
    function payment(){
      let value=document.getElementsByName("card");
      let place=document.querySelector("#order_place")
    
     
    if(value[0].checked){
    place.value="Pay With Card"
    place.style.fontSize="13px"
    }else if(value[1].checked){
    place.value="Pay with  Pay Pal"
    place.style.fontSize="13px"
    }else if(value[2].checked){
    place.value="CONTINUE WITH ALIPAY";
    place.style.fontSize="13px"
    }
    
    }