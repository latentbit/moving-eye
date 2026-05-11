const pupil = document.querySelector('.pupil');
const sclera = document.querySelector('.sclera');


sclera.addEventListener('mousemove', (e) => {
    const rect = sclera.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    pupil.style.left = (x - pupil.offsetWidth / 2) + 'px';
    pupil.style.top = (y - pupil.offsetHeight / 2) + 'px';
})