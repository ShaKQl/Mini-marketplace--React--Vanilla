
const path = 'https://fakestoreapi.com/products';
const loaderImg = document.querySelector('.card__notLoaded');

async function loadProducts() {
    try {
        const response = await fetch(path);
        const data = await response.json();
        renderProducts(data)
    } catch (error) {
        console.log('Error fetching data:', error);
    } finally {
        loaderImg.style.display = 'none';
    }


}


function addQuantityCart(prod) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find(item => item.id === prod.id);

    if (existing) {
        return; 
    }

    cart.push({
        id: prod.id,
        title: prod.title,
        price: prod.price,
        quantity: 1
    });

    localStorage.setItem('cart', JSON.stringify(cart));

    window.dispatchEvent(new Event('cartUpdated'));
}

function handleNavigation() {
    const hash = window.location.hash || '#products';

    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('page--active');
    });

    const active = document.querySelector(hash);
    if (active) active.classList.add('page--active');
}

window.addEventListener('hashchange', handleNavigation);
window.addEventListener('DOMContentLoaded', handleNavigation);

loadProducts()