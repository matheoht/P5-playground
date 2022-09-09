const PARTICLE_NUMBER = 150;
const PARTICLE_SIZE = 50;
const PARTICLE_LIFETIME = 0.5; // Range between 0.1 and 1
const PARTICLE_BRIGHTNESS = 4.5; // Range between 1 and 10

let particlesArray = [];

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(0);

  // Create a limited amont of particles
  if (particlesArray.length < PARTICLE_NUMBER) {
    let particle = new Particle(PARTICLE_SIZE, PARTICLE_LIFETIME);
    particlesArray.push(particle);
  }

  // Loop through every particles and update them at every frame
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
  }
}
