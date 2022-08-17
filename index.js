// Code your solution in this file!
function distanceFromHqInBlocks(n) {
    return Math.abs(n - 42);
}

function distanceFromHqInFeet(n) {
    const distanceFromHqInFeet = distanceFromHqInBlocks(n) * 264;
    return distanceFromHqInFeet;
}

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        const travel = (destination - start) * 264;
        return travel;
    }
    else
        return (start - destination) * 264;

}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start,destination);
    if (distance<= 400){
      return 0;
    }
    if (distance>=400 && distance<=2000){
      return (distance-400)* 0.02;
    }
    else if (distance > 2000 && distance < 2500) {
      return 25; 
    }
    else {
        return "cannot travel that far";
    }
}
