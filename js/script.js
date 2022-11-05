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

function submitNumberRating(value) {
    submit.addEventListener('click', () => {
        ratingContainer.classList.add('hide');
        main.innerHTML = `
        <!-- Thank you state start -->
        <section class="thank-you-container">
          <div class="image"><img src="images/illustration-thank-you.svg" alt="thank you image"></div>
          <p class="user-select">You selected ${value} out of 5</p>
          <h2>Thank you!</h2
          <p>
            We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!
          </p>
        </section>
        <!-- Thank you state end -->
        `;
    })
}

selectNumberRating();