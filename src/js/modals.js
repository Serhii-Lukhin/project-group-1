document.addEventListener('click', function (event) {
  /*const widthBefor = document.documentElement.clientWidth;*/
  const myModal = event.target;
  const myModalId = myModal.dataset.modal;
  if (!(myModalId == null)) {
    const myBody = document.body;
    const myWindow = window.innerWidth;
    const myViewport = document.documentElement.clientWidth;
    const isScrollBar = myWindow - myViewport;
    const myModalForm = document.querySelector('#' + myModalId);
    if (isScrollBar > 0) {
      myBody.style.paddingRight = isScrollBar + 'px';
      myModalForm.style.paddingRight = isScrollBar + 'px';
    } else {
      myModalForm.removeAttribute('style');
      myBody.removeAttribute('style');
    }
    myBody.classList.toggle('scroll-stop');
    myModalForm.classList.toggle('is-hidden');
  }
});
