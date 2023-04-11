document.addEventListener('click', function (event) {
  const widthBefor = document.documentElement.clientWidth;
  const myModal = event.target;
  const myModalId = myModal.dataset.modal;
  if (!(myModalId == null)) {
    const myBody = document.body;
    myBody.classList.toggle('scroll-stop');
    const widthAfter = document.documentElement.clientWidth;
    const myModalForm = document.querySelector('#' + myModalId);
    if (widthAfter > widthBefor) {
      myBody.style.paddingRight = widthAfter - widthBefor + 'px';
    } else {
      myBody.removeAttribute('style');
    }
    myModalForm.classList.toggle('is-hidden');
  }
});
