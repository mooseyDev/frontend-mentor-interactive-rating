console.log("Testing... 1, 2.")

let isRated = false;
let rating = 0;
const ratingView = document.querySelector('#ratingView');
const submitView = document.querySelector('#submitView');

const rate = (num) => {
    rating = num;
    isRated = true

    const ratingButtons = document.querySelectorAll('.ratingbutton');
    ratingButtons.forEach(button => {
        button.classList.remove('active');
    });
    const activeButton = document.querySelector(`button[value="${rating}"]`);
    activeButton.classList.add('active');
};

const submitRating = () => {
    console.log(isRated);
    if (isRated) {
        console.log(`You rated ${rating} out of 5`);
        // paragraph text //
        const submitParagraph = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
        const paragraphText = document.querySelector('p');
        const dynamicRatingText = document.querySelector('.dynamicRatingText');
        dynamicRatingText.innerHTML = `You rated ${rating} out of 5`
        ratingView.style.display = 'none';
        submitView.style.display = 'flex';

    }
    else {
        console.log('no rating selected');
        const paragraphText = document.querySelector('p');
        paragraphText.innerHTML = "Don't forget to select a rating!"
        paragraphText.style.color = "#F47174"
        paragraphText.style.fontweight = "bold"
    }
}