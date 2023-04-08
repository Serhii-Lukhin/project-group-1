let sliderPosition = 0;
const PREV_BUTTON = 'review-prev';
const NEXT_BUTTON = 'review-next';
const SLIDER_CONTAINER = 'review-slidebar';
const SLIDER_TRACK = 'review-slidebar-wrapper';
const SLIDE_BAR_STATUS = 'review-slidebar-status-point';
const SLIDE_BAR_STATUS_ACTIVE = 'review-ssp-active';
//
const sliderButtonPrev = document.querySelector('.' + PREV_BUTTON);
const sliderButtonNext = document.querySelector('.' + NEXT_BUTTON);
const sliderContainer = document.querySelector('.' + SLIDER_CONTAINER);
const sliderTrack = document.querySelector('.' + SLIDER_TRACK);
const slideBarStatus = document.querySelectorAll('.' + SLIDE_BAR_STATUS);
//кнопка назад
sliderButtonPrev.addEventListener('click', function () {
  let myButtonClick = 'prev';
  SlideRun(myButtonClick);
  sliderStatus(-1);
});
//кнопка вперед
sliderButtonNext.addEventListener('click', function () {
  let myButtonClick = 'next';
  SlideRun(myButtonClick);
  sliderStatus(1);
});
const sliderButtons = sliderTrackWidth => {
  if (sliderPosition == 0) {
    sliderButtonPrev.setAttribute('style', 'display:none');
  } else {
    sliderButtonPrev.removeAttribute('style');
  }
  if (sliderPosition == -sliderTrackWidth) {
    sliderButtonNext.setAttribute('style', 'display:none');
  } else {
    sliderButtonNext.removeAttribute('style');
  }
};
const sliderStatus = k => {
  let slideBarStatusActive = document.querySelector(
    '.' + SLIDE_BAR_STATUS_ACTIVE
  );
  slideBarStatus.forEach(function (item, i, slideBarStatus) {
    if (item == slideBarStatusActive) {
      item.classList.remove(SLIDE_BAR_STATUS_ACTIVE);
      slideBarStatus[i + k].classList.add(SLIDE_BAR_STATUS_ACTIVE);
    }
  });
};
//Рухаємо слайди
const SlideRun = myButtonClick => {
  let sliderItemWidth = sliderContainer.offsetWidth + 28;
  let sliderContainerWidth = sliderContainer.offsetWidth;
  let sliderTrackWidth = sliderTrack.offsetWidth - sliderContainerWidth - 28;
  if (myButtonClick == 'prev') {
    sliderPosition += sliderItemWidth;
    if (sliderPosition > 0) {
      sliderPosition = 0;
    }
  } else if (myButtonClick == 'next') {
    sliderPosition -= sliderItemWidth;
    if (sliderPosition < -sliderTrackWidth) {
      sliderPosition = -sliderTrackWidth;
    }
  }
  let style = 'transform: translateX(' + sliderPosition + 'px)';
  sliderTrack.setAttribute('style', style);
  sliderButtons(sliderTrackWidth);
};
//фіксимо проблеми зміни ширини екрана
window.addEventListener('resize', function () {
  sliderTrack.removeAttribute('style');
  let slideBarStatusActive = document.querySelector(
    '.' + SLIDE_BAR_STATUS_ACTIVE
  );
  slideBarStatusActive.classList.remove(SLIDE_BAR_STATUS_ACTIVE);
  slideBarStatus[0].classList.add(SLIDE_BAR_STATUS_ACTIVE);
  sliderButtonPrev.setAttribute('style', 'display:none');
  sliderButtonNext.removeAttribute('style');
  sliderPosition = 0;
});
