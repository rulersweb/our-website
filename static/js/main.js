function toggleTheme() {
    const body = document.body;
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeToggleMobileBtn = document.getElementById('themeToggleMobile');
    const isLightTheme = body.classList.contains('light-theme');

    if (isLightTheme) {
        body.classList.remove('light-theme');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        themeToggleMobileBtn.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.add('light-theme');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        themeToggleMobileBtn.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
}

document.addEventListener('DOMContentLoaded', function () {

    if (document.getElementById('hero-particles')) {
        particlesJS('hero-particles', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#6c5ce7"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.3,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#6c5ce7",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 0.5
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });

    AOS.init({
        duration: 1000,
        once: true
    });

    function equalizeTestimonialHeights() {
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        let maxHeight = 0;

        testimonialCards.forEach(card => {
            card.style.height = 'auto';
            const content = card.querySelector('.testimonial-content');
            if (content) {
                content.style.height = 'auto';
            }
        });

        testimonialCards.forEach(card => {
            const height = card.offsetHeight;
            if (height > maxHeight) {
                maxHeight = height;
            }
        });

        if (maxHeight > 0) {
            testimonialCards.forEach(card => {
                card.style.height = `${maxHeight}px`;
            });
        }
    }

    const testimonialsSlider = new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        loopAdditionalSlides: 5,
        centeredSlides: false,
        speed: 800,
        effect: 'slide',
        allowTouchMove: true,
        watchSlidesProgress: true,
        watchOverflow: true,
        observer: true,
        observeParents: true,
        preloadImages: true,
        updateOnImagesReady: true,
        grabCursor: true,
        simulateTouch: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: '.testimonials-navigation-container .swiper-button-next',
            prevEl: '.testimonials-navigation-container .swiper-button-prev',
        },
        pagination: {
            el: '.testimonials-pagination-container .swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            },
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },
        on: {
            init: function () {
                setTimeout(equalizeTestimonialHeights, 100);
            },
            resize: equalizeTestimonialHeights,
            slideChangeTransitionEnd: equalizeTestimonialHeights
        }
    });

    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.remove('light-theme');
        document.getElementById('themeToggle').innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        document.getElementById('themeToggleMobile').innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.add('light-theme');
        document.getElementById('themeToggle').innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        document.getElementById('themeToggleMobile').innerHTML = '<i class="fas fa-moon"></i>';
    }
});