  window.addEventListener('scroll', function() { scrollFunction() });
            function scrollFunction() {
            let scrollButton = document.querySelector('.scroll-icon');
            if (window.pageYOffset > 200) {
                scrollButton.style.display = "block";
            } else {
                scrollButton.style.display = "none";
            }
        }
        function scrollToTop() {
            var currentPosition = window.pageYOffset;
            if (currentPosition > 0) {
                window.requestAnimationFrame(scrollToTop);
                window.scrollTo(0, currentPosition - currentPosition / 10);
            }
        }
        let svgIcon = document.querySelector('.scroll-btn-icon');
        svgIcon.addEventListener('click', scrollToTop);