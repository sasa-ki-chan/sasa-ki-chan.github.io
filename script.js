const sasaki = document.querySelector('.sasaki');

sasaki.addEventListener('click', () => {
    sasaki.classList.toggle('scale');
    setTimeout(function () {
        sasaki.classList.remove('scale');
    }, 300);
});