import Vehicle from "./vehicle.js";


export default class Bicycle extends Vehicle {
    constructor(color, noOfWheels = 2, horn = "honk honk") {
        super(color, noOfWheels, horn);
    }
}