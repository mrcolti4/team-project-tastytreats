const refs = {
    openModalBtn: document.querySelector('.shopping-link'),
    openModalBtnHero: document.querySelector('.btn-hero'),
    closeModalBtn: document.querySelector('.order-modal-close-btn'),
    backdrop: document.querySelector('.backdrop-order'),
    modal: document.querySelector('.modal-order'),
    forma: document.querySelector('.modal-form-order'),
}

refs.openModalBtnHero.addEventListener('click', openModalOpen);
refs.openModalBtn.addEventListener('click', openModalOpen);
refs.closeModalBtn.addEventListener('click', closeModalClose);
refs.backdrop.addEventListener('click', clickBackdropClick);

refs.forma.addEventListener('submit', sendOrder);
function sendOrder(e) {
    e.preventDefault();
    const { name, tel, email, comment } = e.currentTarget
    const result = {
        name: name.value,
        tel: tel.value,
        email: email.value,
        comment: comment.value,
    }

    console.log(result);
    e.currentTarget.reset();
    closeModalClose();
}

function openModalOpen() {
    window.addEventListener('keydown', onEscPress);
    document.body.classList.add('overflowHidden');
    refs.backdrop.classList.add('active');
    refs.modal.classList.add('active');
}

function closeModalClose() {
    document.body.classList.remove('overflowHidden');
    window.removeEventListener('keydown', onEscPress);
    document.body.classList.remove('overflowHidden');
    refs.backdrop.classList.remove('active');
    refs.modal.classList.remove('active');
}

function clickBackdropClick(e) {
    if (e.currentTarget === e.target) {
        closeModalClose();
    }
}

function onEscPress(e) {
    if (e.code === 'Escape') {
        closeModalClose();
    }
}