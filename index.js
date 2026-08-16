alert("Você tem certeza que quer continuar?");
alert("certeza mesmo?");
alert("Absoluta?");
alert("Eu te amo :S");
const noButton = document.querySelector('.btn-no');
const buttonsContainer = document.querySelector('.answer-buttons');
const yesBtn = document.getElementById('yesBtn');
const successCard = document.getElementById('successCard');
const closeCard = document.getElementById('closeCard');

const moveNoButton = () => {
    const maxX = Math.max(0, buttonsContainer.clientWidth - noButton.offsetWidth);
    const maxY = Math.max(0, buttonsContainer.clientHeight - noButton.offsetHeight);

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
};

noButton.addEventListener('pointerenter', moveNoButton);
noButton.addEventListener('mouseenter', moveNoButton);
noButton.addEventListener('touchstart', moveNoButton, { passive: true });
noButton.addEventListener('click', moveNoButton);

yesBtn.addEventListener('click', () => {
    successCard.classList.remove('hidden');
});

closeCard.addEventListener('click', () => {
    successCard.classList.add('hidden');
});
