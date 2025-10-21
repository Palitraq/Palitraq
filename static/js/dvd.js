class DVDButton {
    constructor(element, speed = 2) {
        this.element = element;
        this.speed = speed;
        this.x = Math.random() * (window.innerWidth - 120);
        this.y = Math.random() * (window.innerHeight - 40);
        this.dx = (Math.random() - 5.5) * speed;
        this.dy = (Math.random() - 5.5) * speed;
        this.element.style.animation = 'none';
        this.animate();
    }

    animate() {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x <= 0 || this.x >= window.innerWidth - 120) {
            this.dx = -this.dx;
        }
        if (this.y <= 0 || this.y >= window.innerHeight - 40) {
            this.dy = -this.dy;
        }

        this.x = Math.max(0, Math.min(this.x, window.innerWidth - 120));
        this.y = Math.max(0, Math.min(this.y, window.innerHeight - 40));

        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';

        requestAnimationFrame(() => this.animate());
    }
}

window.addEventListener('load', () => {
    const playBtn = document.getElementById('play-btn');
    const stopBtn = document.getElementById('stop-btn');
    
    new DVDButton(playBtn, 1.5);
    new DVDButton(stopBtn, 2);
});
