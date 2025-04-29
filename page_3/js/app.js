function changeImage(event, button, direction) {
    const images = button.parentNode.querySelectorAll('.product-image');
    let currentImageIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    images[currentImageIndex].classList.add('active');
}
document.addEventListener('click', function() {
    closeAllMenus();
});

function setActive(element) {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.classList.remove('active');
        item.querySelector('.submenu').style.display = 'none';
    });
    element.classList.add('active');
    element.querySelector('.submenu').style.display = 'block';

    // Изменяем цвет и ширину линии над меню
    const itemRect = element.getBoundingClientRect();
    const menuRect = document.querySelector('.menu').getBoundingClientRect();
    

    // Устанавливаем ширину подменю равной ширине вкладки
    const submenu = element.querySelector('.submenu');
    submenu.style.width = `${itemRect.width}px`;
}

function closeAllMenus() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.classList.remove('active');
        item.querySelector('.submenu').style.display = 'none';
    });
}
let openTovarInfo = document.querySelectorAll('.basketButton');
let tovarInfo = document.querySelector('.pop-up-card-All');
let closeTovarInfo = document.querySelector('.closeInfoButton');
let overlay = document.querySelector('.overlay');

function tovarInfoOpen() {
    openTovarInfo.forEach(button => {
        button.addEventListener('click', () => {
            tovarInfo.style.display = 'flex';
            overlay.style.display = 'block'; // Показываем затемнение
        });
    });

    if (closeTovarInfo) {
        closeTovarInfo.addEventListener('click', () => {
            tovarInfo.style.display = 'none';
            overlay.style.display = 'none'; // Скрываем затемнение
        });
    }
}

tovarInfoOpen();

let openZakaz = document.querySelector('.zakazbutton')
let zakazInfo = document.querySelector('.oformlenieAll')
let closeZakazInfo = document.querySelector('.closeZakazButton')

function zakazOpen(){
    openZakaz.addEventListener('click', () =>{
        zakazInfo.style.display = 'flex'
        tovarInfo.style.display = 'none'
    })
    closeZakazInfo.addEventListener('click', ()=>{
         zakazInfo.style.display = 'none'
         tovarInfo.style.display = 'flex'
    })
}
zakazOpen()