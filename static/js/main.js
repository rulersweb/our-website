function toggleTheme() {
    const body = document.body;
    const themeToggleBtn = document.getElementById('themeToggle');
    const isLightTheme = body.classList.contains('light-theme');
    
    if (isLightTheme) {
        body.classList.remove('light-theme');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.add('light-theme');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
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

    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.remove('light-theme');
        document.getElementById('themeToggle').innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        document.body.classList.add('light-theme');
        document.getElementById('themeToggle').innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
});