var sec =55;
var min = 55;
var hour = 6;
var interval;
function timer(){
    sec--
    document.getElementById('countdown').innerHTML = sec
    document.getElementById('countdown-min').innerHTML = min
    document.getElementById('countdown-hour').innerHTML = hour
    document.getElementById('countdownsmall').innerHTML = sec
    document.getElementById('countdown-minsmall').innerHTML = min
    document.getElementById('countdown-hoursmall').innerHTML = hour
    if(sec==0){
        min--
        document.getElementById('countdown-min').innerHTML = min
        document.getElementById('countdown-minsmall').innerHTML = min
        sec = 60
    }
    else if(min==0){
        hour--
        document.getElementById('countdown-hour').innerHTML = hour
        document.getElementById('countdown-hoursmall').innerHTML = hour
        min=60
    }
}
interval = setInterval(timer, 1000)
var noOfItems=0 
var cart =document.getElementById('cart');
cart.innerHTML= noOfItems
function add_to_cart(){
    noOfItems++
    cart.innerHTML = noOfItems
} 

var items = [
    {
        img:'./img/item/1.jpg',
        heading:'Galaxy S20 Cover',
        price:'$13.99'
    },
    {
        img:'./img/item/2.jpg',
        heading:'Universal Earphone',
        price:'$3.10'
    },
    {
        img:'./img/item/3.jpg',
        heading:'Galaxy Note 10',
        price:'$4.99'
    },
    {
        img:'./img/item/4.jpg',
        heading:'Water Proof Pouch',
        price:'$2.05'
    },
    {
        img:'./img/item/5.jpg',
        heading:'360 Degree Cable',
        price:'$2.99'
    },
    {
        img:'./img/item/6.jpg',
        heading:'DSLR Mobile Lens',
        price:'$10.90'
    },
    {
        img:'./img/item/7.jpg',
        heading:'Infinix S5 Cover',
        price:'$1.50'
    },
    {
        img:'./img/item/8.jpg',
        heading:'Digital Mirror',
        price:'$23.95'
    },
    {
        img:'./img/item/9.jpg',
        heading:'CX3 15.6" Core i3',
        price:'$455.95'
    },
    {
        img:'./img/item/10.jpg',
        heading:'Dell Inspiron 15 3593',
        price:'$1100.00'
    },
]

var div = document.getElementById('setdiv');
var div_flashSales = document.getElementById('flashSale');
var template = '';
var flashSales ='';

for(i=0; i<items.length; i++){
    
    flashSales+=`
    <div class="col col-lg-2 col-md-2 col-5 set-col setelement">
        <div class="item">
          <img class="image" src=${items[i].img} alt="">
          <div class="item-head">${items[i].heading}</div>
          <div class="price">${items[i].price}</div>
        </div>
      </div>
    `
    template += `
    <div class="col col-lg-2 col-md-3 col-5 item-page setelement">
            <img class="item-image" src=${items[i].img} alt="">
            <hr />
            <div class="item-head">${items[i].heading}</div>
            <div class="price">${items[i].price}</div>
            <button class="btn-addtocart" onclick="add_to_cart()">ADD TO CART</button>
          </div>
    `
    // console.log(items[i].heading, items[i].price, items[i].img)
}
console.log(flashSales)
div.innerHTML = template;
div_flashSales.innerHTML = flashSales;