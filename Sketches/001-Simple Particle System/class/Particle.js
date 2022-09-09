class Particle {
  constructor() {
    this.location = createVector(350, 550);
    this.velocity = createVector(random(-1.5, 1.5), random(-5, -1));
    this.size = PARTICLE_SIZE;
  }

  update() {
    //If the size of the particle is below 0 reset the particle otherwise update and display the particle
    if (this.size < 0) {
      this.location = createVector(350, 550);
      this.velocity = createVector(random(-1, 1), random(-5, -1));
      this.size = PARTICLE_SIZE;
    } else {
      this.size -= PARTICLE_LIFETIME;
      this.location.add(this.velocity);

      //Display particle
      stroke(255 - this.size * PARTICLE_BRIGHTNESS);
      fill(255, 0);
      ellipse(this.location.x, this.location.y, this.size);
    }
  }
}
