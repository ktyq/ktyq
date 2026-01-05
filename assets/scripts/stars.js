// https://www.nicholasragland.com/blog/star-background/

const STAR_COUNT = [
    { count: 200, size: 1, opacity: 0.5 },
    { count: 100, size: 2, opacity: 0.7 },
    { count: 50, size: 3, opacity: 0.9 }
];

const stars = [];

function createStars() {
    STAR_COUNT.forEach(layer => {
        for (let i = 0; i < layer.count; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.width = `${layer.size}px`;
            star.style.height = `${layer.size}px`;
            star.style.opacity = layer.opacity;
            star.style.left = `${Math.random() * window.innerWidth}px`;
            star.style.top = `${Math.random() * window.innerHeight}px`;
            document.body.appendChild(star);

            stars.push({
                el: star,
                dy: 0.2 + Math.random() * 0.2 // float upward speed
            });
        }
    });
}

function animateStars() {
    stars.forEach(s => {
        let y = parseFloat(s.el.style.top);
        y -= s.dy; // move up

        if (y < 0) {
            // reset to bottom with new random x
            y = window.innerHeight;
            s.el.style.left = `${Math.random() * window.innerWidth}px`;
        }

        s.el.style.top = y + 'px';
    });

    requestAnimationFrame(animateStars);
}

createStars();
animateStars();