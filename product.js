
const products = [{
    id:crypto.randomUUID(),
    image:`Images/athletic-cotton-socks-6-pairs.jpg`,
    name:' Black and Gray Athletic athletic cotton socks 6 pairs',
    rating:{
        stars:4.5,
        counts:87
    },
    priceCents:1090
},
{
    id:crypto.randomUUID(),
    image:`Images/6-piece-non-stick-baking-set.webp`,
    name:'6 piece non stick baking set',
    rating:{
        stars:4.5,
        counts:175
    },
    priceCents:3499
}
,
{
    id:crypto.randomUUID(),
    image:`Images/6-piece-white-dinner-plate-set.jpg`,
    name:'6-piece-white-dinner-plate-set',
    rating:{
        stars:4.5,
        counts:37
    },
    priceCents:2067
}
,{
    id:crypto.randomUUID(),
    image:`Images/adults-plain-cotton-tshirt-2-pack-teal.jpg`,
    name:'adults plain cotton tshirt 2 pack teal',
    rating:{
        stars:4.5,
        counts:56
    },
    priceCents:799
}
,{
    id:crypto.randomUUID(),
    image:`Images/black-2-slot-toaster.jpg`,
    name:'black-2-slot-toaster',
    rating:{
        stars:4.5,
        counts:2197
    },
    priceCents:1899
}
,{
    id:crypto.randomUUID(),
    image:`Images/blackout-curtain-set-beige.webp`,
    name:'blackout-curtain-set-beige',
    rating:{
        stars:4.5,
        counts:175
    },
    priceCents:3499
}
,{
    id:crypto.randomUUID(),
    image:`Images/intermediate-composite-basketball.jpg`,
    name:'intermediate Size Basketball',
    rating:{
        stars:4.5,
        counts:127
    },
    priceCents:2095
}
,{
    id:crypto.randomUUID(),
    image:`Images/plain-hooded-fleece-sweatshirt-yellow.jpg`,
    name:'plain Hooded Fleece sweatshirt',
    rating:{
        stars:4.5,
        counts:317
    },
    priceCents:2400
},{
    id:crypto.randomUUID(),
    image:`Images/luxury-tower-set-6-piece.jpg`,
    name:'Luxury Towel set Graphite Gray',
    rating:{
        stars:4.5,
        counts:144
    },
    priceCents:3599
},{
    id:crypto.randomUUID(),
    image:`Images/liquid-laundry-detergent-plain.jpg`,
    name:'Liquid Luandry Detergent 110 laods,82.5FL Oz',
    rating:{
        stars:4.5,
        counts:305
    },
    priceCents:2899
},{
    id:crypto.randomUUID(),
    image:`Images/women-chiffon-beachwear-coverup-black.jpg`,
    name:'Women chiffon beachwear cover up Black',
    rating:{
        stars:4.5,
        counts:235
    },
    priceCents:2070
},{
    id:crypto.randomUUID(),
    image:`Images/round-sunglasses-black.jpg`,
    name:'Round sunglasses',
    rating:{
        stars:4.5,
        counts:30
    },
    priceCents:1560
}
];

let productsHtml=''; 

products.forEach((product) => {
    productsHtml +=`<div>
            <div>
                <img class="product-images" src="${product.image}"alt="shoes">
            </div>
            <div class="paragraph-of-product">
                <p>
                    ${product.name}
                </p>
                <div class="rating-logo-div">
                    <img class="rating-logo" src="logo/rating-${product.rating.stars*10}.png" alt="rating">
                    <div class="users-count">${product.rating.counts}</div>
                </div>
            </div>
            <div>
                <P> $${(product.priceCents/100).toFixed(2)}</P>
            </div>
            <div>
                <select class="option">
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div>
                <button class="add-to-cart js-add-to-cart-count"
                    data-product-id=${product.id}
                    >Add to Cart</button>
            </div>
        </div>
`;
})

document.querySelector('.js-content-body').innerHTML=productsHtml;

const cart=[];

document.querySelectorAll('.js-add-to-cart-count').forEach((button) => {
  button.addEventListener(('click'), () => {
    const productId=button.dataset.productId;

    let matchCart;

    cart.forEach((item) => {
        if(productId===item.productId){
            matchCart=item;
        }
    });

    if(matchCart){
        matchCart.quantity +=1;
    }else{     
    cart.push({
        productId:productId,
        quantity:1
    });
    }
    
    let cartQuantity=0;

    cart.forEach((item) => {
      cartQuantity +=item.quantity;
    })
      
    document.querySelector('.js-count-cart').innerHTML=cartQuantity;

  });
});

