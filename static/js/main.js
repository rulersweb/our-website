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

document.addEventListener('DOMContentLoaded', function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {
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
        loopAdditionalSlides: 3,
        centeredSlides: false,
        speed: 500,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: '.testimonials-pagination-container .swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            },
        },
        navigation: {
            nextEl: '.testimonials-navigation-container .swiper-button-next',
            prevEl: '.testimonials-navigation-container .swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
        on: {
            init: function() {
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