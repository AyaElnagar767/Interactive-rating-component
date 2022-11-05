const main = document.getElementById('main');
const ratingContainer = document.querySelector('.rating-container');
const allLiEls = document.querySelectorAll('.rating li');
const submit = document.querySelector('.submit');

function selectNumberRating() {
    allLiEls.forEach((liEl) => {
        liEl.addEventListener('click', () => {
            allLiEls.forEach((element) => {
                element.classList.remove('active');
            });
            liEl.classList.add('active');
            submitNumberRating(liEl.innerHTML);
        });
    });
}

selectNumberRating();