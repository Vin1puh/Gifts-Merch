let currentIndex = 0;
const slidesToShow = 5;
const totalSlides = document.querySelectorAll('.slide').length;

function moveSlide(direction) {
    currentIndex += direction;
    
    // Убедитесь, что индекс не выходит за границы
    if (currentIndex < 0) {
        currentIndex = totalSlides - slidesToShow;
    } else if (currentIndex > totalSlides - slidesToShow) {
        currentIndex = 0;
    }

    document.querySelector('.slide-track').style.transform = `translateX(-${(currentIndex * 20)}vw)`;
}


// 2 слайдер

let currentSlideIndex_sec4 = 0;

function navigateSlides_sec4(step) {
    const slideElements_sec4 = document.querySelectorAll('.slide_sec4');
    const totalSlidesCount_sec4 = slideElements_sec4.length;

    // Удалить активный класс у текущего слайда
    slideElements_sec4[currentSlideIndex_sec4].classList.remove('active');

    // Изменить текущий индекс
    currentSlideIndex_sec4 += step;

    // Оборачиваем индекс, если он выходит за пределы
    if (currentSlideIndex_sec4 < 0) {
        currentSlideIndex_sec4 = totalSlidesCount_sec4 - 4; // Переход к последнему набору из 4 слайдов
    } else if (currentSlideIndex_sec4 >= totalSlidesCount_sec4 - 3) {
        currentSlideIndex_sec4 = 0; // Возвращаемся к первому набору
    }

    // Добавить активный класс к новому текущему слайду
    slideElements_sec4[currentSlideIndex_sec4].classList.add('active');

    // Сдвиг слайдов в зависимости от текущего индекса

    document.querySelector('.slider_sec4').style.transform = `translateX(-${(currentSlideIndex_sec4 / 4) * 100}%)`;
}
