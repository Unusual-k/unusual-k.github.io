

$(document).ready(function () {
  const getCartData = () => {
    return JSON.parse(localStorage.getItem('cart'));
  };
  let cart = getCartData() || [];

  let countItems = cart.reduce((a, b) => a + b.count, 0);
  const itemsList = document.querySelectorAll('.countCart');
  
  for(let i = 0; i < itemsList.length; i++) {
    itemsList[i].innerHTML = countItems;
  }
  

  document.onclick = (event) => {
    if (event.target.classList.contains('addProduct')) {
      addToCard(event.target.dataset.name);
    }
    if (event.target.classList.contains('removeProduct')) {
      deleteProduct()
    }
  };

  const onChangeCount = (key) => {
    console.log('changed', key);
  };

  deleteProduct = (cart, key) => {
    delete cart[key];
    console.log(cart, key);
      // delete cart[key];
    // localStorage.setItem('cart', JSON.stringify(cart));
  };

 


  // let out = '<div class="wrap-cart">';

  // for (let key in cart) {
  //   out += `<div class="cart-pruduct"><button class="removeProduct onclick=${deleteProduct(cart, key)}>X</button></div>`;

  //   // out += `<div class="cart-pruduct"><input onchange=${onChangeCount(key)} type="number" value=${cart[key]['count']} ></div>`;
  // }

  // out += `</div>`;



  // document.getElementById('cart_cont').innerHTML = out;

  const addToCard = (product) => {
    let taste = document.querySelector('[name="taste"]:checked').value,
      size = document.querySelector('[name="size"]:checked').value;
    count = Number(document.querySelector('[name="count"]').value);

    const item = cart.filter(
      (item) => item.size === size && item.taste === taste
    );

    if (item.length === 0) {
      cart = [...cart, { product, taste, size, count }];
    }

    if (item.length > 0) {
      cart.forEach((item) => {
        if (item.size === size && item.taste === taste) {
          item.count = Number(item.count) + count;
        }
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  };

  // document.onclick = (event) => {
  //   if (event.target.classList.contains('addProduct')) {
  //     addToCard(event.target.dataset.name);
  //   }
  // };



});
