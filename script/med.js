let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active')
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
    shoppingCart.classList.toggle('active')
}

let uploadForm = document.querySelector('.upload-form');
let defaultBtn = document.querySelector('.default-btn');
let custonBtn = document.querySelector('.custon-btn');
let fileName = document.querySelector('.file-name');

let regexp = /[0-9a-zA-Z\&\'\@\{\}\[\]\,$\=\!\-\#\(\)\%\+\~\_]+$/;

function active(){
    defaultBtn.click();
}
defaultBtn.addEventListener("chance",function(){
    if(this.value){
        let nameValue = this.value.match(regexp);
        fileName.textContent = nameValue
    }
});
document.querySelector("#up-btn").onclick = () => 
{
    uploadForm.classList.toggle('active');
}
