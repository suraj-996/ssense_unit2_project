document.querySelector("#submit").addEventListener("click", orderplace);

function orderplace() {
  let value = document.querySelector("#input").value;
  if (value.length !== 4) {
    let x = document.querySelector("#pop");
    x.style.color = "white";
    x.style.backgroundColor = "#a30001 ";
    x.innerText = "Plese enter valid OTP";
    x.style.visibility = "visible";
    function reloadtime() {
      window.location.reload();
    }
    setTimeout(reloadtime, 2000);
  } else if (value.length == 4) {
    let x = document.querySelector("#pop");
    x.style.color = "white";
    x.style.backgroundColor = "green";
    x.innerText = "OTP  Verification  Successful !";
    x.style.visibility = "visible";
    function reloadtime() {
      window.location.reload();
    }
    setTimeout(reloadtime, 2000);
    function delay() {
      window.location.href = "/confirmation_page/placedorder.html";
    }
    setTimeout(delay, 2000);
  }
}
