var updatesBtns = document.getElementsByClassName("update-cart");

for (var i = 0; i < updatesBtns.length; i++) {
  updatesBtns[i].addEventListener("click", function () {
    var productId = this.dataset.product;
    var action = this.dataset.action;

    if (user === "AnonymousUser") {
      addCookieItem(productId, action);
    } else {
      updateUserObject(productId, action);
    }
  });
}

// User not logged in
function addCookieItem(productId, action) {
  console.log("User not logged in ");
  if (action === "add") {
    if (cart[productId] === undefined) {
      cart[productId] = { quantity: 1 };
    } else {
      cart[productId]["quantity"] += 1;
    }
  }
  if (action === "remove") {
    cart[productId]["quantity"] -= 1;
    if (cart[productId]["quantity"] <= 0) {
      console.log("Remove Item");
      delete cart[productId];
    }
  }
  console.log("Cart :",cart)
  document.cookie = "cart=" + JSON.stringify(cart) + ";domain=;path=/";
  location.reload()
}

// User Logged in
function updateUserObject(productId, action) {
  console.log("User is logged in, sending data...");
  var url = "/update_item/";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productId,
      action,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("data ", data);
      location.reload();
    });
}
