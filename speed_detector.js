speed = 80;
// Declaring the speed limit
const speedLimit = 70;

// Declaring the points for demerit
const pointsPerDemerit = 1;

// To detect speed
function speedDetector(speed){
    if (speed < speedLimit){
        return "OK";
    } else {
      return calculateDemerit(speed);
    }
}

// For calculating points due to demerit
function calculateDemerit(speed){
 if (speed > speedLimit){
   // For calculating points
    const points = Math.floor((speed - speedLimit) / 5) * pointsPerDemerit;
    return points;
 } 
}

function calculatePoints(calculateDemerit){
  if(calculateDemerit(speed) > 12){
    return "License Suspended"
  }
}