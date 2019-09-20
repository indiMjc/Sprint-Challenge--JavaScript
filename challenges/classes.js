// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(measurements) {
//     this.length = measurements.length;
//     this.width = measurements.width;
//     this.height = measurements.height;
//   }
  
//   CuboidMaker.prototype.volume = function() {
//     return this.length * this.width * this.height;
//   }
  
//   CuboidMaker.prototype.surfaceArea = function() {
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
//   }

class CuboidMaker {
    constructor(measurements) {
        this.length = measurements.length;
        this.width = measurements.width;
        this.height = measurements.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

class CubeMaker extends CuboidMaker {
    constructor(meas) {
        super(meas);
    }
    volume() {
        return Math.pow(this.length, 3)
    }
    surfaceArea() {
        return 6 * (Math.pow(this.length, 2))
    }
}
  
  const cuboid2 = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  });

  const cube = new CubeMaker ({
      length: 4
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

console.log(cube.volume());
console.log(cube.surfaceArea());