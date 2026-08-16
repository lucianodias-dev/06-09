alert("Você tem certeza que quer continuar?");
alert("certeza mesmo?");
alert("Absoluta?");
alert("Eu te amo :S");
const noButton = document.querySelector('.btn-no');
const buttonsContainer = document.querySelector('.answer-buttons');
const yesBtn = document.getElementById('yesBtn');
const successCard = document.getElementById('successCard');
const closeCard = document.getElementById('closeCard');
const main = document.querySelector('main');
const photo = document.querySelector('.icon-casal');

const moveNoButton = () => {
    const maxX = Math.max(0, buttonsContainer.clientWidth - noButton.offsetWidth);
    const maxY = Math.max(0, buttonsContainer.clientHeight - noButton.offsetHeight);

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
};

const positionSuccessCardOnPhoto = () => {
    if (!photo || !main || successCard.classList.contains('hidden')) return;

    const photoRect = photo.getBoundingClientRect();
    const mainRect = main.getBoundingClientRect();
    const targetX = photoRect.left - mainRect.left + (photoRect.width / 2);
    const targetY = photoRect.top - mainRect.top + (photoRect.height * 0.45);

    successCard.style.left = `${targetX}px`;
    successCard.style.top = `${targetY}px`;
    successCard.style.transform = 'translate(-50%, -50%)';
};

noButton.addEventListener('pointerenter', moveNoButton);
noButton.addEventListener('mouseenter', moveNoButton);
noButton.addEventListener('touchstart', moveNoButton, { passive: true });
noButton.addEventListener('click', moveNoButton);

yesBtn.addEventListener('click', () => {
    successCard.classList.remove('hidden');
    positionSuccessCardOnPhoto();
});

closeCard.addEventListener('click', () => {
    successCard.classList.add('hidden');
});

window.addEventListener('resize', () => {
    if (!successCard.classList.contains('hidden')) {
        positionSuccessCardOnPhoto();
    }
});
