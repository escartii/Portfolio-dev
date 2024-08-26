const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
menuToggle.addEventListener('click', function () {
    navbar.classList.toggle('active');
});


const birthDate = new Date('2000-09-20');

// Fecha actual
const today = new Date();

// Cálculo de la diferencia en milisegundos
const differenceInTime = today.getTime() - birthDate.getTime();

// Cálculo de la diferencia en días
const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

// Mostrar el resultado en el span con id 'dias'
document.getElementById('dias').textContent = differenceInDays;

const likeButton = document.getElementById('like-button');
const likeCount = document.getElementById('like-count');
let liked = false;

likeButton.addEventListener('click', () => {
    liked = !liked;
    if (liked) {
        likeButton.classList.add('clicked');
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
    } else {
        likeButton.classList.remove('clicked');
        likeCount.textContent = parseInt(likeCount.textContent) - 1;
    }
});

