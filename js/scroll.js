ScrollReveal({
    reset:false,
    duration: 1500,
})

ScrollReveal().reveal('.section-title', { 
    delay: 300,
    origin: 'bottom',
    distance: '10rem',
});

ScrollReveal().reveal('.image', {
    delay: 1000,
    origin: window.innerWidth > 768 ? "left" : "bottom",
    distance: '10rem',
})

ScrollReveal().reveal('.text', { 
    delay: 1200,
    origin: window.innerWidth > 768 ? "right" : "bottom",
    distance: '10rem',
});