
function renderProducts(products) {
    const parent = document.querySelector('.card');

    products.forEach(product => {
        const cardChild = document.createElement('div');
        cardChild.classList.add('card__wrapper')

        cardChild.innerHTML = `
                <p class="card__title">${product.title}</p>
                
                <div class="card__media">
                    <img src="${product.image}" alt=""
                        class="card__media-img">
                </div>
                
                <div class="card__inf">
                    <p class="card__inf-price">$${product.price}</p>
                    <p class="card__inf-desc">${product.description}</p>
                </div>

                <div class="card__do">
                    <p class="card__do-rating"><span class="card__do-rating_change">${product.rating.rate}</span>/5</p>
                    <div class="card__do-stock">${product.rating.count} in stock</div>
                </div>
                
                <button class="card__buy" >Add to cart</button>`;

        let btn = cardChild.querySelector('.card__buy')
        btn.addEventListener('click', () => {
            btn.textContent = 'Done';
            btn.classList.add('active');
            btn.disabled = true;

            addQuantityCart(product);
        });

        parent.appendChild(cardChild);
    });
}



