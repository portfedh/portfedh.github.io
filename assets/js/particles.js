// Particle Animation System
class ParticleSystem {
  constructor(canvasId, options = {}) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.animationId = null;
    
    // Default options
    this.options = {
      particleCount: window.innerWidth < 768 ? 30 : 50,
      particleSize: { min: 1, max: 3 },
      speed: { min: 0.5, max: 1.5 },
      color: 'rgba(43, 121, 126, 0.6)',
      connectionDistance: 150,
      connectionOpacity: 0.3,
      ...options
    };
    
    this.init();
    this.animate();
    this.handleResize();
  }
  
  init() {
    this.resizeCanvas();
    this.createParticles();
  }
  
  resizeCanvas() {
    const section = this.canvas.parentElement;
    this.canvas.width = section.offsetWidth;
    this.canvas.height = section.offsetHeight;
  }
  
  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.options.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * this.options.speed.max,
        vy: (Math.random() - 0.5) * this.options.speed.max,
        size: Math.random() * (this.options.particleSize.max - this.options.particleSize.min) + this.options.particleSize.min
      });
    }
  }
  
  updateParticles() {
    this.particles.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Bounce off edges
      if (particle.x <= 0 || particle.x >= this.canvas.width) {
        particle.vx *= -1;
      }
      if (particle.y <= 0 || particle.y >= this.canvas.height) {
        particle.vy *= -1;
      }
      
      // Keep particles within bounds
      particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
      particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));
    });
  }
  
  drawParticles() {
    this.ctx.fillStyle = this.options.color;
    this.particles.forEach(particle => {
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fill();
    });
  }
  
  drawConnections() {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < this.options.connectionDistance) {
          const opacity = (1 - distance / this.options.connectionDistance) * this.options.connectionOpacity;
          this.ctx.strokeStyle = `rgba(43, 121, 126, ${opacity})`;
          this.ctx.lineWidth = 1;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }
  }
  
  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.updateParticles();
    this.drawConnections();
    this.drawParticles();
    
    this.animationId = requestAnimationFrame(() => this.animate());
  }
  
  handleResize() {
    window.addEventListener('resize', () => {
      this.resizeCanvas();
      this.options.particleCount = window.innerWidth < 768 ? 30 : 50;
      this.createParticles();
    });
  }
  
  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}

// Initialize particle systems when page loads
document.addEventListener('DOMContentLoaded', function() {
  // Initialize particles for GitHub section only
  new ParticleSystem('particles-canvas-github', {
    particleCount: window.innerWidth < 768 ? 20 : 35,
    color: 'rgba(43, 121, 126, 0.4)',
    connectionDistance: 100
  });
});