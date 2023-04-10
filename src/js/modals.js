document.addEventListener('click', function (event) {
  console.log(event.target);
  let myModal = event.target;
  let myModalId = myModal.dataset.modal;
  let myModalForm = document.querySelector('#' + myModalId);
  myModalForm.classList.toggle('is-hidden');
});
