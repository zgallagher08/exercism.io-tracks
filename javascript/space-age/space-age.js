class SpaceAge {
  constructor(ageInSeconds) {
    this.seconds = ageInSeconds;
  }

  onEarth(relative = false) {
    let earthYears = this.seconds/31557600;
    if (relative) {
      return earthYears;
    } else {
      return Number(earthYears.toFixed(2));
    }
  }

  onMercury() {
    return Number((this.onEarth(true)/0.2408467).toFixed(2));
  }

  onVenus() {
    return Number((this.onEarth(true)/0.61519726).toFixed(2));
  }

  onMars() {
    return Number((this.onEarth(true)/1.8808158).toFixed(2));
  }

  onJupiter() {
    return Number((this.onEarth(true)/11.862615).toFixed(2));
  }

  onSaturn() {
    return Number((this.onEarth(true)/29.447498).toFixed(2));
  }

  onUranus() {
    return Number((this.onEarth(true)/84.016846).toFixed(2));
  }

  onNeptune() {
    return Number((this.onEarth(true)/164.79132).toFixed(2));
  }
}
module.exports = SpaceAge;