let p = 0;
let s = 0;
let q = 1;
let quantity = document.getElementById("quantity");
const amount = document.getElementById("cart-amount");





const items = [];
render();

function openCart() {
    switch (p) {
        case p = 0:

            const cart = document.getElementById("cart");
            cart.style.display = "block";
            p = 1;
            break;

        default:
            document.getElementById("cart").style.display = "none";
            p = 0;
            break;
    }
}



function plusOne() {

    q++;
    quantity.value = q;
}
function minusOne() {
    q--;
    quantity.value = q;
}

function addToCart() {

    s++;
    items.push({
        itemname: 'Fall Limited Edition Sneakers',
        itemprice: document.getElementById("itemprice").value,
        itemamount: q,
        itemid: '' + new Date().getTime()


    });
    amount.innerHTML = s;
    render()
}


function render() {
    document.getElementById('item-display').innerHTML = '';

    const all = document.createElement("div");
    items.forEach(function (items) {
        const itemlist = document.getElementById("item-display");
        const element = document.createElement("div");
        const price = document.createElement("p");
        const deletebtn = document.createElement("button");
        const cartimg = document.createElement("img");
        const checkout = document.createElement('button');
        const deleteimg = document.createElement("img");


        const name = items.itemname;
        element.innerText = name;
        price.innerText = "$" + items.itemprice + " * " + items.itemamount;
        checkout.innerText = 'Checkout';
        deletebtn.id = items.itemid;


        element.appendChild(price);
        element.appendChild(deletebtn);
        itemlist.appendChild(all);
        all.appendChild(element);
        element.appendChild(cartimg);
        element.appendChild(checkout);
        deletebtn.appendChild(deleteimg);


        cartimg.setAttribute('src', "images/image-product-1-thumbnail.jpg");
        deleteimg.setAttribute('src', "images/icon-delete.svg");
        cartimg.style = 'height:1cm; border-radius:5px; float:left; margin-left:-50px; margin-top:-30px;';
        element.style = 'width:75%;margin-left: 1.3cm; padding=10px; margin-bottom:20px;font-family:tahoma; color:gray; font-size:13px; margin-right:13px;';
        checkout.style = 'width:200px; font-size:20px; background-color:hsl(26, 100%, 55%); color:white; padding:5px; border:none; margin:15px; border-radius:4px; margin-left:-20px;';
        deletebtn.style = ' border-radius:5px; float:right; margin-left:240px; margin-top:-30px; border: none; background-color:white;';
        deletebtn.onclick = deleteTodo;

    });
}


function deleteTodo() {
    const deletebtn = event.target;
    const idToDelete = deletebtn.id;

    items = items.filter(function (items) {
        if (items.itemid === idToDelete) {
            return false;
        } else {
            return true;
        }
    });
    render();
    saveTodo();
}


var frame = document.getElementsByClassName("mainpic");
const thumbs = document.getElementsByClassName("thumbimg2");
var i = 0;
for (let i = 1; i < frame.length; i++) {
    frame[i].style.display = "none"
}

function myPrevious() {

    frame[i - 1].style.display = "flex";
    i--;
    frame[i + 1].style.display = "none"
    thumbs[i].setAttribute("id", "current");
    thumbs[i + 1].setAttribute("id", " ");

}

function myNext() {
    frame[i + 1].style.display = "flex";
    i++;
    frame[i - 1].style.display = "none"
    thumbs[i].setAttribute("id", "current");
    thumbs[i - 1].setAttribute("id", " ");
}

function closeImages() {
    document.getElementById("pics").style.display = "none";
}

function viewImages() {
    document.getElementById("pics").style.display = "block";
}


function menuOpen() {
    document.getElementById("overlay").style.display = "block";
}

function menuClose() {
    document.getElementById("overlay").style.display = "none";
}