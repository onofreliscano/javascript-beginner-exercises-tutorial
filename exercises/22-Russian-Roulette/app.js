var bulletPosition = 4;

const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};

// Remove the // below and complete the commented lines
const fireGun = (spinnerPosition) => {
    var miCamara = spinChamber();
    console.log ("spinChamber: " + miCamara);
    console.log ("bulletPosition: " + bulletPosition);
    if (miCamara == bulletPosition){
        //console.log ("You're dead!");
        return true;
    }
    else {
        //console.log ("Keep playing!");
        return false;
    }
    //if (...) return ("You're dead!");
    //else return ("Keep playing!");
};


if (!fireGun()) {
    console.log ("Keep playing!")
}
else{
    console.log ("You're dead!")
}