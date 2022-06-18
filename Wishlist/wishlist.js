let Arr = JSON.parse(localStorage.getItem("Wishlist")) || [];
let Addtobag = JSON.parse(localStorage.getItem("addToBag")) || [];

// When Cart Was Empaty Than Exacude this part////////////
//
//
//
//
//
////////////////////////////////////////////////////////
if (Arr.length == 0) {
  let maindiv = document.querySelector("#main");

  let div1 = document.createElement("div");
  div1.setAttribute("id", "ifdiv");

  let p1 = document.createElement("p");
  p1.innerText = "Wishlist";
  let p2 = document.createElement("p");
  p2.innerText = "Your Wishlist is empty.";

  let div2 = document.createElement("div");

  let b1 = document.createElement("button");
  b1.innerText = "SHOP MENSWERE";
  b1.addEventListener("click", b1click);

  let b2 = document.createElement("button");
  b2.innerText = "SHOP WOMENSWERE";
  b2.addEventListener("click", b2click);

  let b3 = document.createElement("button");
  b3.innerText = "SHOP EVERYTHING ELSE";
  b3.addEventListener("click", b3click);

  div2.append(b1, b2, b3);
  div1.append(p1, p2, div2);
  maindiv.append(div1);
}
// If Any Item in Cart than Execute This part////////////////////
//
//
//
//
/////////////////////////////////////////////////
else {
  let maindiv = document.querySelector("#main");

  // Shoping bag div /////////////////////
  let div2 = document.createElement("div");
  div2.setAttribute("id", "bag");

  let p11 = document.createElement("p");
  p11.innerText = "Wishlist";

  let HR = document.createElement("hr");

  let divitem = document.createElement("div");
  divitem.setAttribute("id", "divitem");

  let p1divitem = document.createElement("p");
  p1divitem.style.marginLeft = "100px";
  p1divitem.innerText = "ITEM";
  let p2divitem = document.createElement("p");
  p2divitem.innerText = "TOTEL";

  divitem.append(p1divitem, p2divitem);

  // Login div //////////////////////////
  let div1 = document.createElement("div");
  div1.setAttribute("id", "loginas");

  let p21 = document.createElement("p");
  p21.innerText = "LOGGED IN AS";

  let p22 = document.createElement("p");
  p22.innerText = "rk6914128@gmail.com";

  let p23 = document.createElement("button");
  p23.innerText = "PROCEED TO CHECKOUT";
  p23.setAttribute("id", "checkoutbtn");

  //For Each Item Creat Div
  let DivCart = document.createElement("div");
  DivCart.setAttribute("id", "Divcart");

  ////////////////////////////////////////////////////////////////////////////////////////////////
  ////////Total Price
  let Totalprice = 0;
  ////////////// Loop
  for (let i = 0; i < Arr.length; i++) {
    /////////////
    let Pri = +Arr[i].price;
    Totalprice = Totalprice + Pri;

    /////////
    let HR2 = document.createElement("hr");
    //main div
    //
    //
    let DIV = document.createElement("div");
    DIV.setAttribute("id", "itemdiv");
    // DIV.innerText = "Ranjeet";
    //
    //
    ////////////////////////////
    let IMG = document.createElement("img");
    IMG.setAttribute("src", Arr[i].img);

    let DIV1 = document.createElement("div");
    DIV1.setAttribute("id", "itemdiv_1");

    ////
    let DIV2 = document.createElement("div");
    DIV2.setAttribute("id", "itemdiv_2");
    //// Price add
    let price = document.createElement("p");
    price.innerText = Arr[i].price;

    ////////////////////////////////////////////////////////////////////////////////////////
    //////////////Add Event Lisner
    let Remove = document.createElement("p");
    Remove.innerText = "Remove";
    Remove.addEventListener("click", function () {
      Arr.splice(i, 1);
      localStorage.setItem("Wishlist", JSON.stringify(Arr));
      window.location.reload();
    });
    Remove.setAttribute("id", "remove");

    DIV2.append(price, Remove);

    let DIV1_1 = document.createElement("div");
    DIV1_1.setAttribute("id", "itemdiv_1_1");

    let DIV1_1_1 = document.createElement("div");
    DIV1_1_1.setAttribute("id", "itemdiv_1_1");
    // DIV1_1_1.innerText = "Ranjeet";

    let brand = document.createElement("p");
    brand.innerText = Arr[i].brand;
    let name = document.createElement("p");
    name.innerText = Arr[i].name;
    DIV1_1_1.append(brand, name);

    let DIV1_1_2 = document.createElement("div");
    DIV1_1_2.setAttribute("id", "itemdiv_1_1");

    let Move = document.createElement("p");
    Move.setAttribute("id", "Movep");
    Move.innerText = "Move to Cart";
    //Add event Lisner/////////////////////////////////////////////////////////////////////////////////////////////
    Move.addEventListener("click", function () {
      Addtobag.push(Arr[i]);
      Arr.splice(i, 1);
      localStorage.setItem("addToBag", JSON.stringify(Addtobag));
      localStorage.setItem("Wishlist", JSON.stringify(Arr));
      window.location.reload();
    });

    DIV1_1_2.append(Move);

    DIV1_1.append(DIV1_1_1, DIV1_1_2);

    DIV1.append(IMG, DIV1_1);

    //append Here
    //
    //
    ////////////
    DIV.append(DIV1, DIV2);

    DivCart.append(DIV);
  }

  //// Total Part
  let Totaldiv = document.createElement("div");
  Totaldiv.setAttribute("id", "Totaldiv");

  ///////////////
  let Totaldiv1 = document.createElement("div");
  Totaldiv1.setAttribute("id", "Totaldiv1");
  //////////////

  let TotalName = document.createElement("p");
  TotalName.innerText = "Total";
  let TotalShiping = document.createElement("p");
  TotalShiping.innerText = "Shiping estimate";
  let TotalOrder = document.createElement("p");
  TotalOrder.innerText = "Oeder Total";
  //
  Totaldiv1.append(TotalName);
  ///////////////////////

  //
  let Shipingast = Totalprice / 10;
  let ordertotal = Totalprice + Shipingast;
  //
  let Totaldiv2 = document.createElement("div");
  Totaldiv2.setAttribute("id", "Totaldiv2");
  ///
  let Total = document.createElement("p");
  Total.innerText = Totalprice;
  let Shiping = document.createElement("p");
  Shiping.innerText = Shipingast;
  let Order = document.createElement("p");
  Order.innerText = ordertotal;

  //\
  Totaldiv2.append(Total);
  ////////////
  Totaldiv.append(Totaldiv1, Totaldiv2);

  //Here Append All Items
  div2.append(p11, divitem, HR, DivCart, Totaldiv);

  div1.append(p21, p22, p23);

  maindiv.append(div2);
}

// All Function/////////////////////////////////////////
//\
//
//
//
//
///////////////////////////////////////////////////////////

function b1click() {
  // Please add refer link Shop Meanswere
  window.location.href = "../menPage/men1.html";
}
function b2click() {
  // Please add refer link Shop Womenswere
  window.location.href = "../womenPage/women1.html";
}
function b3click() {
  // Please add refer link Shop Everywere
  window.location.href = "../everything/everything1.html";
}
