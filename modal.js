let modal = (function () {
    let modalContainer = document.querySelector('#modal-container');
    function showModal(title, text, imgSrc) {
        modalContainer.innerHTML = '';
        let modal = document.createElement('div');
        modal.classList.add('modal');
        let myImage = document.createElement('img');
        myImage.src = imgSrc;
        modal.appendChild(myImage);
        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);
        let titleElement = document.createElement('h1');
        titleElement.innerText = title;
        let contentElement = document.createElement('p');
        contentElement.innerText = text;
        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modalContainer.appendChild(modal);
        modalContainer.classList.add('is-visible');
    }

    function hideModal() {
        modalContainer.classList.remove('is-visible');
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });
    modalContainer.addEventListener('click', (e) => {
        let target = e.target;
        if (target === modalContainer) {
            hideModal();
        }
    });
   
    return {
        showModal: showModal,
        hideModal: hideModal,
    };

})();



// modal.showModal();
