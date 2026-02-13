document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const container = document.querySelector('.container');
    const mainContent = document.getElementById('mainContent');
    const successMessage = document.getElementById('successMessage');

    // Create background hearts
    createHearts();

    // Runaway "No" Button Logic
    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('click', moveButton); // Just in case they click fast

    function moveButton() {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

        noBtn.style.position = 'fixed';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;

        // Add a confused emoji or text change briefly (optional fun)
        const texts = ["No?", "Try again!", "Missed me!", "Oops!"];
        const originalText = noBtn.innerText;
        noBtn.innerText = texts[Math.floor(Math.random() * texts.length)];
        setTimeout(() => noBtn.innerText = originalText, 500);
    }

    // "Yes" Button Logic
    yesBtn.addEventListener('click', () => {
        mainContent.classList.add('hidden');
        successMessage.classList.remove('hidden');
        triggerConfetti();
    });

    function createHearts() {
        const bgHearts = document.querySelector('.bg-hearts');
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 2 + 3 + 's';
            heart.style.opacity = Math.random();
            heart.style.width = Math.random() * 20 + 10 + 'px';
            heart.style.height = heart.style.width;
            bgHearts.appendChild(heart);
        }
    }

    // Simple confetti using canvas or emojis (simplified for no dependencies)
    function triggerConfetti() {
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            // Generate confetti particles (simulated logic efficiently)
            // Ideally we'd use a library like canvas-confetti, but for vanilla JS:
            createConfettiParticle();
        }, 250);
    }

    function createConfettiParticle() {
        const colors = ['#ff4d6d', '#ff0a43', '#ffd166', '#06d6a0'];
        for (let i = 0; i < 10; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.zIndex = '9999';
            confetti.style.transition = 'top 3s ease-in, transform 3s ease-in';
            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.style.top = '110vh';
                confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            }, 100);

            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }
    }
});
