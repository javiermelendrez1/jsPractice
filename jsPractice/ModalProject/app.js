// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
const overlay = document.querySelector('.modal-overlay');
const modalBtn = document.querySelector('.modal-btn').addEventListener('click', () => {
    overlay.classList.toggle('open-modal');
})
const closeBtn = document.querySelector('.close-btn').addEventListener('click', () =>{
    overlay.classList.toggle('open-modal');
})
