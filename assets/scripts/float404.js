(function () {
    const SPEED = 0.012;
    const items = [];

    const vw = () => window.innerWidth;
    const vh = () => window.innerHeight;

    // Initialize

    document.querySelectorAll("#bg-404-layer .bg-404").forEach(el => {
        const rect = el.getBoundingClientRect();
        el.style.left = rect.left + "px";
        el.style.top = rect.top + "px";

        items.push({
            el,
            x: rect.left,
            y: rect.top,
            width: rect.width,
            height: rect.height,
            dx: (Math.random() - 0.5) * SPEED * 100,
            dy: (Math.random() - 0.5) * SPEED * 100
        });
    });



    function animate() {
        for (let i = 0; i < items.length; i++) {
            const item = items[i];

            // Move
            item.x += item.dx;
            item.y += item.dy;

            // Screen boundary collision
            if (item.x < 0 || item.x > vw() - item.width) item.dx *= -1;
            if (item.y < 0 || item.y > vh() - item.height) item.dy *= -1;

            // Simple collision check with other items
            for (let j = 0; j < items.length; j++) {
                if (i === j) continue;
                const other = items[j];

                if (
                    item.x < other.x + other.width &&
                    item.x + item.width > other.x &&
                    item.y < other.y + other.height &&
                    item.y + item.height > other.y
                ) {
                    // Reverse direction to avoid overlap
                    item.dx *= -1;
                    item.dy *= -1;

                    // Move it slightly away
                    item.x += item.dx * 2;
                    item.y += item.dy * 2;
                }
            }

            item.el.style.left = item.x + "px";
            item.el.style.top = item.y + "px";
        }

        requestAnimationFrame(animate);
    }

    if (items.length) {
        requestAnimationFrame(animate);
    }
})();