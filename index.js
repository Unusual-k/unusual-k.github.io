$(document).ready(function () {
  function imgchange() {
    let taste = document.querySelector('[name="taste"]:checked').value,
      size = document.querySelector('[name="size"]:checked').value;
    count = document.querySelector('[name="count"]').value;

    if (size === 'small') {
      document.getElementById('price').innerHTML = 69.6 * count;
    }

    if (size === 'big') {
      document.getElementById('price').innerHTML = 1375 * count;
    }

    if (taste === 'choko') {
      if (size === 'small') {
        document.getElementById('imageProduct').src =
          'img/whey/100WheyChoc33g.png';
      }
      if (size === 'big') {
        document.getElementById('imageProduct').src =
          'img/whey/100-whey-chocolate-render-nuevo.png';
      }
    }

    if (taste === 'vanilla') {
      if (size === 'small') {
        document.getElementById('imageProduct').src =
          'img/whey/100WheyVainilla33g-1.png';
      }
      if (size === 'big') {
        document.getElementById('imageProduct').src =
          'img/whey/100-whey-vainilla-render-nuevo.png';
      }
    }

    console.log(size, taste);
  }

  const getCartData = () => {
    return JSON.parse(localStorage.getItem('cart'));
  };

  let cart = getCartData() || [];

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

  const removeProduct = () => {

  }

  document.onclick = (event) => {
    if (event.target.classList.contains('addProduct')) {
      addToCard(event.target.dataset.name);
    }
  };

});
