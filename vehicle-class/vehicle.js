
export default class Vehicle {
    constructor(color = "blue", noOfWheels = 4, horn = "beep beep") {
        this.color = color;
        this.noOfWheels = noOfWheels;
        this.horn = horn;
    }

    honkHorn() {
        console.log(this.horn);
    }
}
