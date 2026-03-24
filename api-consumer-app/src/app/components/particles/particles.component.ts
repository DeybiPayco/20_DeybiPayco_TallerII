import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-particles',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="particles-container">
      <div class="particle" 
           *ngFor="let particle of particles; trackBy: trackByIndex"
           [style.left.px]="particle.x"
           [style.top.px]="particle.y"
           [style.animation-delay.s]="particle.delay">
      </div>
    </div>
  `,
  styles: [`
    .particles-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
      overflow: hidden;
    }

    .particle {
      position: absolute;
      width: 2px;
      height: 2px;
      background: var(--primary-color);
      border-radius: 50%;
      animation: float 6s ease-in-out infinite;
      box-shadow: 0 0 6px var(--primary-color);
    }

    .particle:nth-child(2n) {
      background: var(--accent-color);
      box-shadow: 0 0 6px var(--accent-color);
      animation-duration: 8s;
    }

    .particle:nth-child(3n) {
      background: var(--secondary-color);
      box-shadow: 0 0 6px var(--secondary-color);
      animation-duration: 10s;
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      50% {
        transform: translateY(-100px) rotate(180deg);
      }
    }
  `]
})
export class ParticlesComponent implements OnInit, OnDestroy {
  particles: Array<{x: number, y: number, delay: number}> = [];
  private intervalId?: number;

  ngOnInit() {
    this.generateParticles();
    this.intervalId = window.setInterval(() => {
      this.generateParticles();
    }, 3000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  generateParticles() {
    this.particles = [];
    for (let i = 0; i < 50; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        delay: Math.random() * 5
      });
    }
  }

  trackByIndex(index: number): number {
    return index;
  }
}