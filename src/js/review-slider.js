let sliderPosition = 0;
const sliderContainer = document.querySelector('.review-slidebar');
const sliderTrack = document.querySelector('.review-slidebar-wrapper');
const sliderItem = document.querySelector('.review-card');
const sliderItemWidth = sliderItem.offsetWidth;
const sliderItemWidthFull = sliderContainer.offsetWidth + 28;
const sliderContainerWidth = sliderContainer.offsetWidth;
const sliderTrackWidth = sliderTrack.offsetWidth - sliderContainerWidth - 28;
const sliderButtonPrev = document.querySelector('.review-prev');
const sliderButtonNext = document.querySelector('.review-next');

const slideBarStatus = document.querySelectorAll(
  'review-slidebar-status-point'
);

const slideBarStatusActive = document.querySelector('.review-ssp-active');

for (var i in slideBarStatus) {
  if ((i = document.querySelector('.review-ssp-active'))) {
    i.classList.remove('review-ssp-active');
  }
}

sliderButtonPrev.addEventListener('click', function () {
  sliderPosition += sliderItemWidthFull;
  if (sliderPosition > 0) {
    sliderPosition = 0;
  }
  let style = 'transform: translateX(' + sliderPosition + 'px)';
  sliderTrack.setAttribute('style', style);

  sliderButtons();
});
sliderButtonNext.addEventListener('click', function () {
  sliderPosition -= sliderItemWidthFull;
  if (sliderPosition < -sliderTrackWidth) {
    sliderPosition = -sliderTrackWidth;
    sliderButtonNext.setAttribute('style', 'display:none');
  }
  let style = 'transform: translateX(' + sliderPosition + 'px)';
  sliderTrack.setAttribute('style', style);
  slideBarStatusActive.classList.remove('review-ssp-active');
  sliderButtons();
});
const sliderButtons = () => {
  if (sliderPosition == 0) {
    sliderButtonPrev.setAttribute('style', 'display:none');
  } else {
    sliderButtonPrev.setAttribute('style', 'display:block');
  }
  if (sliderPosition == -sliderTrackWidth) {
    sliderButtonNext.setAttribute('style', 'display:none');
  } else {
    sliderButtonNext.setAttribute('style', 'display:block');
  }
};
sliderButtons();
