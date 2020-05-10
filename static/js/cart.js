var updatesBtns = document.getElementsByClassName("update-cart");

for (var i = 0; i < updatesBtns.length; i++) {
  updatesBtns[i].addEventListener("click", function () {
    var productId = this.dataset.product;
    var action = this.dataset.action;

    if (user === "AnonymousUser") {
      console.log("AnonymousUser");
    } else {
      updateUserObject(productId, action);
    }
  });
}

function updateUserObject(productId, action) {
  console.log("User is logged in, sending data...");
  var url = "/update_item/";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken":csrftoken,
    },
    body: JSON.stringify({
      productId,action,
    }),
  }).then((response)=>{
      return response.json()
  })
  .then((data)=>{
console.log("data ",data)
location.reload()
  })
}
