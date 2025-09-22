// Smooth scroll
document.querySelectorAll('nav a').forEach(link=>{
    link.addEventListener('click', e=>{
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});

// Simple slider
let slides = document.querySelectorAll('.slide');
let current = 0;
function showSlide(index){
    slides.forEach(s=>s.classList.remove('active'));
    slides[index].classList.add('active');
}
function nextSlide(){
    current = (current+1)%slides.length;
    showSlide(current);
}
showSlide(current);
setInterval(nextSlide, 3000);
