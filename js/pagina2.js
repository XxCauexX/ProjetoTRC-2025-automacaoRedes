const buttons = document.querySelectorAll('.toggle-btn');

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const card = btn.parentElement;
                const moreText = card.querySelector('.read-more');

                const isVisible = moreText.style.display === "block";
                moreText.style.display = isVisible ? "none" : "block";
                btn.textContent = isVisible ? "Saiba mais" : "Ler menos";
            });
        });